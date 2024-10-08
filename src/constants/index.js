"use client";
import TypeScript from "@/components/components/icons/TypSscript";

import {

  jobit,
  tripguide,
  
} from "../assets";
import  {IconLanguageC,IconNextjs,IconReact,IconThreedotjs,IconTypescript} from "@/svgIcon";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1Djwd2D1m6zlt-hhLPXOim-vgq-Q_C3XE1g&s",
  },
  {
    title: "React Native Developer Soon!",
    icon: "data:image/png;base64,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",
  },
  {
    title: "Backend Developer",
    icon: "https://c8.alamy.com/comp/2DB193X/back-end-icon-simple-element-from-website-development-collection-filled-back-end-icon-for-templates-infographics-and-more-2DB193X.jpg",
  },
  {
    title: "Robotics Programmer",
    icon: "https://cdn-icons-png.flaticon.com/512/6784/6784391.png",
  },
];

const technologies = [
  {
    name: "React",
icon:"https://img.icons8.com/?size=100&id=SB6eApJMkq1S&format=png&color=000000"  

},
  {
    name: "c/c++",
    icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpJ92PkgdYze3IbQqvqC9UqQJ4jI9B23-s4A&s",      
  },
  {
    name: "TS",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968381.png",
  },
  {
    name: "ThreeJs",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTReZGzoPfgvtLMyn4x9YrJshHHMETW57Iew&s",
  },{
  name: "NextJs",
  
    icon: "https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png",
  
},
];


const experiences = [
  {
    title: "React.js Developer",
    company_name: "react",
    icon: "https://cdn.iconscout.com/icon/free/png-256/free-react-logo-icon-download-in-svg-png-gif-file-formats--company-brand-world-logos-vol-4-pack-icons-282599.png?f=webp&w=256",
    iconBg: "#383E56",
    date: "",
    points: [

      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",


    ],
  },
  {
    title: "ThreeJs Developer",
    company_name: "ThreeJs",
    icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTReZGzoPfgvtLMyn4x9YrJshHHMETW57Iew&s",
    iconBg: "#E6DEDD",
    date: "",
    points: [

      "Developing and maintaining 3D web applications and experiences using Three.js and other related WebGL technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and developers to create immersive and interactive 3D content.",
      "Implementing responsive 3D designs and ensuring performance optimization across different devices and browsers.",
      "Participating in code reviews, providing constructive feedback, and ensuring the quality and maintainability of 3D applications.",
    ],
  },
  {
    title: "NextJs Developer",
    company_name: "NextJs",
    icon: "https://static-00.iconduck.com/assets.00/next-js-icon-2048x2048-5dqjgeku.png",
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining web applications using Next.js and other modern web technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and developers to deliver performant and scalable applications.",
      "Implementing server-side rendering (SSR) and static site generation (SSG) to optimize performance and SEO.",
      "Ensuring cross-browser compatibility and responsiveness across devices.",
      "Ensuring cross-browser compatibility and responsiveness across devices."
    ],
  },
  {
    title: "Robotic Programming with c",
    company_name: "C/C++",
    icon:"https://www.freeiconspng.com/uploads/c--logo-icon-1.png",      
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Developing and maintaining embedded systems and robotic applications using C programming language and related technologies.",
      "Collaborating with cross-functional teams including hardware engineers, product managers, and other developers to design and implement robotic solutions.",
      "Implementing real-time control algorithms and ensuring efficient use of system resources.",
      "Participating in code reviews, providing feedback, and optimizing the performance and reliability of robotic systems.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rammeh proved me wrong.",
    name: "Sara Wang",
    designation: "CFO",
    company: "me C",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "carrent",
    source_code_link: "https://github.com/ReizarXPro",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/ReizarXPro",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/ReizarXPro",
  },
];

export { services, technologies, experiences, testimonials, projects };
