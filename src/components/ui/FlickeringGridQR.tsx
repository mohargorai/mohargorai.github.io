import React, { useEffect, useRef, useMemo } from 'react';
import qrcode from 'qrcode-generator';

interface FlickeringGridQRProps {
  text: string;
  color?: string;
  size?: number;
}

export const FlickeringGridQR: React.FC<FlickeringGridQRProps> = ({ 
  text, 
  color = '#D7E2EA',
  size = 280 
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Generate QR code matrix
  const qrMatrix = useMemo(() => {
    // 0 = auto size, 'L' = low error correction for simpler/cleaner look
    const qr = qrcode(0, 'L');
    qr.addData(text);
    qr.make();
    
    const count = qr.getModuleCount();
    const matrix = [];
    for (let r = 0; r < count; r++) {
      const row = [];
      for (let c = 0; c < count; c++) {
        row.push(qr.isDark(r, c));
      }
      matrix.push(row);
    }
    return matrix;
  }, [text]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Handle high DPI displays for crisp rendering
    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    canvas.style.width = `${size}px`;
    canvas.style.height = `${size}px`;
    
    ctx.scale(dpr, dpr);

    // Add quiet zone (margin) around the QR code
    const paddingModules = 2; 
    const matrixSize = qrMatrix.length;
    const totalModules = matrixSize + paddingModules * 2;
    const moduleSize = size / totalModules;
    
    // Calculate a small gap to make it look like a "grid" of squares
    const gap = moduleSize * 0.15; 
    const rectSize = moduleSize - gap;

    const startTime = Date.now();
    let animationFrameId: number;

    const render = () => {
      ctx.clearRect(0, 0, size, size);
      const elapsed = Date.now() - startTime;
      
      // Scanner line logic: 3 second cycle, sweeping from top to bottom
      const scanCycle = 3000; 
      const progress = (elapsed % scanCycle) / scanCycle; 
      const laserY = progress * size * 1.5 - (size * 0.25); // Sweep from above top to below bottom

      for (let r = 0; r < totalModules; r++) {
        for (let c = 0; c < totalModules; c++) {
          let isDark = false;
          // Check if current coordinate is inside the actual QR data area
          if (
            r >= paddingModules && r < paddingModules + matrixSize &&
            c >= paddingModules && c < paddingModules + matrixSize
          ) {
            isDark = qrMatrix[r - paddingModules][c - paddingModules];
          }

          const x = c * moduleSize + gap / 2;
          const y = r * moduleSize + gap / 2;
          
          // Calculate distance from this square to the scanner laser
          const distToLaser = y - laserY;
          let flare = 0;
          
          // If laser just passed (trail effect fading up)
          if (distToLaser < 0 && distToLaser > -size * 0.3) {
            flare = 1.0 - (Math.abs(distToLaser) / (size * 0.3));
          } 
          // If laser is right on top of it (leading edge flare)
          else if (distToLaser >= 0 && distToLaser < size * 0.05) {
            flare = 1.0;
          }

          if (isDark) {
            // Data squares: normally 0.85 opacity. When scanned, flare to 1.0 and flash white.
            if (flare > 0.6) {
               ctx.fillStyle = '#FFFFFF';
               ctx.globalAlpha = 1.0;
            } else {
               ctx.fillStyle = color;
               ctx.globalAlpha = 0.85; 
            }
            ctx.fillRect(x, y, rectSize, rectSize);
          } else {
            // Empty squares: normally almost invisible. When scanned, flare up to 0.3 opacity.
            const baseAlpha = 0.02;
            ctx.fillStyle = color;
            ctx.globalAlpha = baseAlpha + (flare * 0.25);
            ctx.fillRect(x, y, rectSize, rectSize);
          }
        }
      }

      // Draw the glowing laser line
      if (laserY > 0 && laserY < size) {
        ctx.fillStyle = color;
        ctx.globalAlpha = 0.8;
        ctx.fillRect(0, laserY, size, 2);
        
        // Laser ambient glow
        ctx.globalAlpha = 0.2;
        ctx.fillRect(0, laserY - 10, size, 20);
      }
      
      // Reset alpha
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [qrMatrix, size, color]);

  return (
    <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 p-3 sm:p-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)] group w-fit transition-all duration-700 hover:bg-white/10 hover:border-white/20 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(215,226,234,0.1)]">
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-transparent to-[#D7E2EA]/10 pointer-events-none rounded-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
      <div className="bg-[#0c0c0c]/90 rounded-xl p-3 sm:p-4 relative z-10 w-fit mx-auto backdrop-blur-md border border-white/5 shadow-inner">
        <canvas ref={canvasRef} className="block mx-auto mix-blend-screen" />
      </div>
    </div>
  );
};
