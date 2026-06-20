import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

// Configure the worker for PDF.js using a CDN to avoid build issues
pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface PDFViewerProps {
  file: string;
  pageNumber: number;
  width: number;
}

export default function PDFViewer({ file, pageNumber, width }: PDFViewerProps) {
  return (
    <Document 
      file={file} 
      className="flex items-center justify-center w-full h-full"
      loading={<div className="w-full h-full bg-[#121316] animate-pulse" />}
    >
      <Page 
        pageNumber={pageNumber} 
        renderTextLayer={false} 
        renderAnnotationLayer={false} 
        width={width} 
      />
    </Document>
  );
}
