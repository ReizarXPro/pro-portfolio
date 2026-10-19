"use client";

import { logo, instructables } from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "contact", title: "Contact" },
];

const services = [
  {
    title: "Full-Stack Development",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    title: "Robotics & IoT",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  },
  {
    title: "3D Web Experiences",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
  },
  {
    title: "Website Administration & Networking",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
  },
];

const technologies = [
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { name: "Three.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { name: "C/C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "OMINET S.A.R.L",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    iconBg: "#383E56",
    date: "October 2023 – September 2025",
    points: [
      "Shaped the website design plan with the Product Owner and created mock-ups and prototypes before implementation.",
      "Built responsive interfaces and web applications using JavaScript, TypeScript, Next.js, React, HTML, CSS, Bootstrap, PHP, Node, PostgreSQL, Docker, Web3 and DApps.",
      "Improved UX and engagement by refining structure, interactions, and site content across the full lifecycle.",
      "Worked in a deadline-driven startup environment, balancing product requirements, testing, deployment and maintenance.",
    ],
  },
  {
    title: "Full-Stack & 3D Web Developer",
    company_name: "Freelance / Startup Projects",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/threejs/threejs-original.svg",
    iconBg: "#E6DEDD",
    date: "2022 – Present",
    points: [
      "Built interactive 3D web experiences and dynamic interfaces using Three.js and modern frontend stacks.",
      "Designed solutions for IoT, robotics, interactive dashboards and product prototypes with a strong focus on usability.",
      "Created scalable frontend architectures and polished user experiences for early-stage products and prototypes.",
      "Collaborated across product, design and engineering to move MVPs quickly from idea to deployment.",
    ],
  },
  {
    title: "Robotics & Embedded Systems",
    company_name: "Personal Projects",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
    iconBg: "#383E56",
    date: "2019 – Present",
    points: [
      "Developed quadruped robot, PID line follower, and ROS2-controlled robot projects using ESP8266, ESP32, Raspberry Pi, Arduino and sensors.",
      "Built mobile and PC control interfaces for robotics and IoT systems, blending software and hardware expertise.",
      "Applied inverse kinematics, computer vision, and embedded control for smoother movement, navigation and system performance.",
      "Used Linux-based environments, ROS2, OpenCV and real-time control principles for practical robotic systems.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Rammeh combines technical depth, product thinking and speed. He can turn complex ideas into working, polished solutions and move quickly in startup environments.",
    name: "Product / Technical Collaboration",
    designation: "Startup & Product Team",
    company: "Product Delivery",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
];

const projects = [
  {
    name: "Spider Robot (Quadruped)",
    description:
      "Built a quadruped spider robot powered by ESP8266 with 8 servo motors, custom mobile app control, inverse kinematics and gyroscope-based stabilization.",
    tags: [
      { name: "robotics", color: "blue-text-gradient" },
      { name: "esp8266", color: "green-text-gradient" },
      { name: "mobile-app", color: "pink-text-gradient" },
    ],
    image: "https://content.instructables.com/FO2/50BY/MKHYPI2H/FO250BYMKHYPI2H.png?frame=true&width=1024&height=1024&fit=bounds&md=MjAyNi0wMS0xOCAxOTowNDozMS4w",
    source_code_link: "https://www.instructables.com/Spider-Robot-DIY-Quadruped/",
  },
  {
    name: "Smart PID Line Follower Robot",
    description:
      "Designed a PID-controlled line follower with 7 IR sensors, capable of following any line at speeds up to 2 m/s for national robotics competition work.",
    tags: [
      { name: "c++", color: "blue-text-gradient" },
      { name: "pid", color: "green-text-gradient" },
      { name: "embedded", color: "pink-text-gradient" },
    ],
    image: "https://content.instructables.com/FMT/0YMO/M09KYFWN/FMT0YMOM09KYFWN.png?auto=webp&width=1600&height=900&fit=bounds&md=MjAyNC0wOC0yNSAwODoxOTowMy4w",
    source_code_link: "https://www.instructables.com/Line-Follower-Robot-1/",
  },
  {
    name: "ROS2-Controlled Tank Robot",
    description:
      "Built a ROS2-powered tank robot with camera, OpenCV, remote PC/mobile control, and autonomous navigation-oriented behavior in a robotics workflow.",
    tags: [
      { name: "ros2", color: "blue-text-gradient" },
      { name: "opencv", color: "green-text-gradient" },
      { name: "computer-vision", color: "pink-text-gradient" },
    ],
    image: "https://content.instructables.com/FFU/OI9D/M09KYG8U/FFUOI9DM09KYG8U.jpg?auto=webp&width=1600&height=900&fit=bounds&md=MjAyNC0wOC0yNSAwODozOTowMi4w",
  },
];

export { services, technologies, experiences, testimonials, projects };
