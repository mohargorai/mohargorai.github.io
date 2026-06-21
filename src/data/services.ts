import type { Service } from '../types';

export const services: Service[] = [
  {
    num: "01",
    title: "Full-Stack Development",
    skills: [
      { name: "ReactJS", url: "https://react.dev/" },
      { name: "Node.js", url: "https://nodejs.org/" },
      { name: "ExpressJS", url: "https://expressjs.com/" },
      { name: "AngularJS", url: "https://angular.io/" },
      { name: "AJAX", url: "https://developer.mozilla.org/en-US/docs/Web/Guide/AJAX" }
    ]
  },
  {
    num: "02",
    title: "Backend Systems",
    skills: [
      { name: "Python", url: "https://www.python.org/" },
      { name: "Java", url: "https://www.java.com/" },
      { name: "HTTP", url: "https://developer.mozilla.org/en-US/docs/Web/HTTP" },
      { name: "JSON", url: "https://www.json.org/" }
    ]
  },
  {
    num: "03",
    title: "Frontend UI/UX",
    skills: [
      { name: "JavaScript (JS / ES6)", url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
      { name: "TypeScript", url: "https://www.typescriptlang.org/" },
      { name: "HTML / HTML5", url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
      { name: "CSS / CSS3", url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
      { name: "Tailwind CSS", url: "https://tailwindcss.com/" },
      { name: "Bootstrap", url: "https://getbootstrap.com/" },
      { name: "Vite", url: "https://vitejs.dev/" },
      { name: "jQuery", url: "https://jquery.com/" }
    ]
  },
  {
    num: "04",
    title: "Database Management",
    skills: [
      { name: "MongoDB (NoSQL)", url: "https://www.mongodb.com/" },
      { name: "PLSQL", url: "https://www.oracle.com/database/technologies/appdev/plsql.html" },
      { name: "SQL", url: "https://en.wikipedia.org/wiki/SQL" }
    ]
  },
  {
    num: "05",
    title: "Algorithms & Logic",
    skills: [
      { name: "C/ C++", url: "https://en.cppreference.com/" },
      { name: "DSA", url: "https://en.wikipedia.org/wiki/Data_structure" }
    ]
  }
];
