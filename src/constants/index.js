import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    tnp,
    metaverse,
    hospital,
    carrent,
    tripguide,
    threejs,
  } from "../assets";
  
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
      title: "Software Developer",
      icon: web,
    },
    {
      title: "Frontend Web Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company_name: "Midlead Technovations",
      icon: web,
      iconBg: "#383E56",
      date: "November 2024 - ongoing",
      points: [
        "Developing and maintaining web applications using Web3, blockchain and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Integrating machine learning models in the applications",
        "Participating in code reviews, debugging and testing",
      ],
    },

    {
      title: "Web Developer Intern",
      company_name: "NullClass",
      icon: web,
      iconBg: "#383E56",
      date: "July 2024 - September 2024",
      points: [
        "Developing web applications using React.js and other related technologies.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
    {
      title: "Frontend Developer",
      company_name: "Oasis Infobyte",
      icon: web,
      iconBg: "#383E56",
      date: "March 2023 - May 2023",
      points: [
        "Developed websites using React.js, Next.js, Figma and Vue.js",
        "Implementing a responsive design",
        "Participating in code reviews",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website this beautiful, but Kartikay proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Kartikay does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Kartikay optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Hospital Booking",
      description:
        "A Full Stack hospital booking app with Firebase authentication framework, stripe payment gateway, and an automated review process into the real-time database.",
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
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: hospital,
      source_code_link: "https://github.com/Karti01kay/Hospital-Booking",
    },

    {
      name: "My Brainwave",
      description:
        "Modern UI/UX website, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard.",
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
      image: carrent,
      source_code_link: "https://github.com/Karti01kay/My-brainWave",
    },
    
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book trips and hotels, and offers curated recommendations for popular destinations.",
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
      source_code_link: "https://github.com/Karti01kay/Tour-Management",
    },

    {
      name: "T&P Cell Website",
      description:
        "The official website of Training and Placement Cell of MMMUT, that gives users a brief overview into the placement data, achievements and training activities.",
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
      image: tnp,
      source_code_link: "https://github.com/Karti01kay/Official-Website_T-P",
    },

    {
      name: "Metaverse Madness",
      description:
        "Transformed a Figma design into a fully functioning website using Next.js, Framer Motion, and Tailwind CSS, and built the Metaversus.",
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
      image: metaverse,
      source_code_link: "https://github.com/Karti01kay/meta-strange",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
