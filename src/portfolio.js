/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section
import React from "react";
import emoji from "react-easy-emoji";
import Emoji from "react-emoji-render";

// svg's imports
import reactjs from "./assets/images/react.svg";
import mysql from "./assets/images/mysql.svg";
import sql from "./assets/images/sql.svg";
import javascript from "./assets/images/javascript.svg";
import typescript from "./assets/images/typescript.svg";
import next from "./assets/images/next.svg";
import redux from "./assets/images/redux.svg";
import node from "./assets/images/node.svg";
import express from "./assets/images/express.svg";
import nestjs from "./assets/images/nestjs.svg";
import mongodb from "./assets/images/mongodb.svg";
import graphql from "./assets/images/graphql.svg";
import firebase from "./assets/images/firebase.svg";
import postman from "./assets/images/postman.svg";
import materialui from "./assets/images/material-ui.svg";
import tailwind from "./assets/images/tailwind.svg";
import materializecss from "./assets/images/materializecss.svg";
import reactnative from "./assets/images/react-native.svg";
import bootstrap from "./assets/images/bootstrap.svg";
import git from "./assets/images/git.svg";
import docker from "./assets/images/docker.svg";
import aws from "./assets/images/aws.svg";
import heroku from "./assets/images/heroku.svg";
import figma from "./assets/images/figmaicon.svg";

import linux from "./assets/images/linux.svg";
import postgresql from "./assets/images/postgres.svg";
import hostinger from "./assets/images/hostinger.svg";
import gcp from "./assets/images/gcp.svg";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Muhammad Ismail",
  title: "Hi all, I'm Ismail",
  subTitle: (
    <Emoji text="As a passionate Full Stack Software Engineer 🚀 with over four years of experience in the MERN stack and Nextjs technology, I am dedicated to bringing my passion and expertise to every project I work on." />
  ),
  resumeLink:
    "https://drive.google.com/drive/folders/1xZ5FCYhLX81S8znQ8AouZWX42naGQsjc?usp=sharing",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Muhammad0302",
  linkedin: "https://www.linkedin.com/in/muhammad-ismail-72681b177",
  gmail: "mi47048@gmail.com",
  gitlab: "https://gitlab.com/mi477048",
  // facebook: "https://web.facebook.com/profile.php?id=100012248836824",
  // medium: "https://medium.com/@mi477048",
  // stackoverflow: "https://stackoverflow.com/users/14154844/lucky-boy",
  // Instagram and Twitter are also supported in the links!
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO IS WORKING IN DIFFERENT TECH",
  // subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE DIFFERENT TECH",
  skills: [
    <Emoji text="⚡ Develop highly interactive Front end / User Interfaces for your web app" />,
    <Emoji text="⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks" />,
    <Emoji text="⚡ Develop highly relible and effecient back end for your web and mobile apps" />,
    <Emoji text="⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean" />
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Javascript",
      src: javascript
    },
    {
      skillName: "Typescript",
      src: typescript
    },
    {
      skillName: "Reactjs",
      src: reactjs
    },
    {
      skillName: "Nextjs",
      src: next
    },
    {
      skillName: "Redux",
      src: redux
    },
    {
      skillName: "React Native",
      src: reactnative
    },
    {
      skillName: "Nodejs",
      src: node
    },
    {
      skillName: "Nestjs",
      src: nestjs
    },
    {
      skillName: "Expressjs",
      src: express
    },
    {
      skillName: "Sql",
      src: sql
    },
    {
      skillName: "Mongodb",
      src: mongodb
    },
    {
      skillName: "MySql",
      src: mysql
    },
    {
      skillName: "PostgreSql",
      src: postgresql
    },
    {
      skillName: "Graphql",
      src: graphql
    },
    {
      skillName: "Firebase",
      src: firebase
    },
    {
      skillName: "Postman",
      src: postman
    },
    {
      skillName: "Material ui",
      src: materialui
    },
    {
      skillName: "Tailwind",
      src: tailwind
    },
    {
      skillName: "Materializecss",
      src: materializecss
    },
    {
      skillName: "Bootstrap",
      src: bootstrap
    },

    {
      skillName: "Figma",
      src: figma
    },
    {
      skillName: "Git",
      src: git
    },
    {
      skillName: "Docker",
      src: docker
    },
    {
      skillName: "Aws",
      src: aws
    },
    {
      skillName: "GCP",
      src: gcp
    },
    {
      skillName: "Hostinger",
      src: hostinger
    },
    {
      skillName: "Heroku",
      src: heroku
    },
    {
      skillName: "Linux",
      src: linux
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Riphah International University Islamabad",
      logo: require("./assets/images/Riphah-Logo.jpg"),
      subHeader: "Master of Science in Computer Software engineering",
      duration: "June 2023 - Present",
      desc: "Pursuing advanced studies in Software Engineering with a focus on cutting-edge technologies and research.",
      descBullets: [
        "In-depth exploration of advanced topics such as Software Architecture, Cloud Computing, DevOps, Natural Language Processing",
        "Researching and applying innovative software development methodologies such as agile, DevOps",
        "Building a solid understanding of Blockchain, Docker, and Kubernetes, laying the groundwork for their practical application in upcoming projects"
      ]
    },
    {
      schoolName: "University of Engineering & Technology Mardan",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Science in Computer Software engineering",
      duration: "June 2017 - June 2021",
      desc: "Completed a comprehensive curriculum covering Software Engineering, Web Security, Operating Systems, Computer Communication Networks, and Database Management.",
      descBullets: [
        "Developed strong problem-solving and critical-thinking skills through hands-on projects and real-world applications.",
        "Acquired proficiency in programming languages such as  C++, sql, Javascript, Typescript and applied them in various software development projects.",
        "Demonstrated a deep understanding of Web Security principles, implementing secure coding practices in software projects."
      ]
    }
    // {
    //   schoolName: "Oxford College of science & technology Munda Dir",
    //   logo: require("./assets/images/stanfordLogo.png"),
    //   subHeader: " Intermediate in Computer Science",
    //   duration: "July 2015 - July 2017",
    //   desc: "Took courses about Computer fundamental, programming and other science subjects",
    //   descBullets: [
    //     "Built a solid understanding of computer fundamentals, including hardware, software, and basic networking concepts.",
    //     "Developed programming skills in c, c++ & javascript languages.",
    //     "Successfully completed coursework covering key science subjects, expanding my knowledge base."
    //   ]
    // }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "93%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior MERN Stack Developer",
      company: "Koncept solutions",
      companylogo: require("./assets/images/koncept_solutions_international_logo.jpeg"),
      date: "Jan 2024 – Present",
      desc: "Bringing innovation to existing projects and actively contributing to the expansion of Koncept Solutions' portfolio as a Senior MERN Stack Developer and Team Lead.",
      descBullets: [
        "Introducing new features to existing projects like KBD, BHM, and Swathy_Autos for continuous improvement",
        "Actively involved in the creation and development of new projects, contributing to Koncept Solutions' expanding portfolio",
        "Bringing innovation to web development projects, ensuring high-quality solutions and optimal user experiences"
      ]
    },
    {
      role: "MERN Stack Developer",
      company: "Codistan Ventures",
      companylogo: require("./assets/images/codistan.png"),
      date: "July 2022 – Jan 2024",
      desc: "Led successful development, expanded project portfolio, managed cross-functional teams, and spearheaded innovations for enhanced system performance",
      descBullets: [
        "Orchestrated successful delivery of Rancher Cafe, Dhartee.pk, Rezlist, and BodySlide projects, expanding Codistan Ventures' portfolio",
        "Led cross-functional teams in Agile development, ensuring timely and efficient delivery of software solutions",
        "Collaborated with diverse stakeholders, defining functionality for 10+ products, aligning solutions with industry standards"
      ]
    },
    {
      role: "Full Stack Software Engineer",
      company: "SpotTroop",
      companylogo: require("./assets/images/spottroop.jpeg"),
      date: "Dec 2022 – Nov 2023 ",
      desc: "Contributed to SpotTroop, spearheading the development of an advanced website and mobile application for enhanced car parking experiences in Kial, Germany.",
      descBullets: [
        "Led React.js frontend and Node.js backend API implementation, with contributions to React Native for mobile app",
        "Utilized GitHub flow, Docker for containerization, and maintained code quality through API testing with Jest",
        "Served as Software Team Lead, overseeing bug resolutions and introducing features"
      ]
    },
    {
      role: "Reactjs & Nodejs Developer",
      company: "Grey Software",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Dec 2020 – June 2022 ",
      desc: "Contributed as a developer,participated in designing and implementing innovative software solutions",
      descBullets: [
        "Directed the creation of scalable reusable Component Craft System for React.js",
        "Ensured efficient collaboration and version control through streamlined Git workflows",
        "Played a key role in resolving bugs and seamlessly integrating new features",
        "Contributed to fostering a culture of code quality by improving coding standards and documentation"
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big industry projects

const industryProjects = {
  title: "Industry Projects",
  subtitle: "Some of the industry projects that, I have worked so far",
  projects: [
    {
      image: require("./assets/images/rancher.png"),
      projectName: "Rancher Cafe",
      projectDesc:
        "Rancher Cafe connects customers with Rancher Cafe branches that offer food delivery in their vicinity. Customers can browse the menus of available branches, send in food orders, and make payment accordingly"
    },
    {
      image: require("./assets/images/dhartee.png"),
      projectName: "Dhartee.pk",
      projectDesc:
        "Dhartee PK is an innovative real estate portal enabling purchase and sale of property. You get matchless property viewing experience through 360 interactive panoramic photos and virtual tours"
    },
    {
      image: require("./assets/images/bodyslide.png"),
      projectName: "Bodyslide",
      projectDesc:
        "BodySlide is a premier spa and massage center in Canada offering top-quality masseuse services. Bodyslide offering exceptional service to the clients, delivering a range of customized massage therapies to meet their unique needs"
    },
    {
      image: require("./assets/images/resturent.png"),
      projectName: "Restaurant Management System",
      projectDesc:
        "Engineered a comprehensive system overseeing end-to-end restaurant operations, optimizing food inventory management, order processing, and seamless integration with billing and accounting modules for enhanced overall efficiency"
    },
    {
      image: require("./assets/images/parking.png"),
      projectName: "SpotTroop",
      projectDesc:
        "A parking reservation website in Germany, Spot Troop simplifies the process for drivers to discover and book parking spots in advance within their vicinity"
    },
    {
      image: require("./assets/images/propertySite.png"),
      projectName: "Property Management",
      projectDesc:
        "Streamline property management with a unified platform, empowering landlords and property managers to effortlessly track and manage properties, tenants, leases, and payments"
    },
    {
      image: require("./assets/images/rezzlist.jpg"),
      projectName: "Rezzlist",
      projectDesc:
        "With rezzlist, you can easily make a reservation for your next dining experience. With just a few clicks, you can browse resuturents, available tables, select your preferred time and date, and secure your booking in no time at a specfic city"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "Some of the personal projects that, I have worked so far",
  projects: [
    {
      image: require("./assets/images/socialNetwork.png"),
      projectName: "Social Media Website",
      projectDesc:
        "A Facebook-like social media app for seamless connection, content sharing, and interactive experiences. Enjoy a user-friendly interface, real-time updates, and personalized content feeds for an engaging social networking experience"
      // footerLink: [
      //   {
      //     name: "View Github repository",
      //     url: "https://github.com/Muhammad0302/Social-Network-Facebook"
      //   }
      // ]
    },

    {
      image: require("./assets/images/laundry.png"),
      projectName: "Laundry Provider",
      projectDesc:
        "Laundry Provider offers convenient cloth washing services at your doorstep. Simply visit the website to schedule pick-ups, choose services, and experience hassle-free laundry with easy online access"
      // footerLink: [
      //   {
      //     name: "View Github repository",
      //     url: "https://github.com/Muhammad0302/DhobiGaat-backend"
      //   }
      // ]
    },
    {
      image: require("./assets/images/ecommerece.png"),
      projectName: "Ecommerece Website",
      projectDesc:
        "Crafted and launched a dynamic ecommerce website, seamlessly connecting customers to a world of diverse products. With a user-friendly interface and secure transactions, the platform ensures a delightful and efficient shopping experience"
      // footerLink: [
      //   {
      //     name: "View Github repository",
      //     url: "https://github.com/Muhammad0302/ecommerce-project"
      //   }
      // ]
    },
    {
      image: require("./assets/images/burger-builder.png"),
      projectName: "Burger Builder",
      projectDesc:
        "Developed an online fast food ordering website. Create personalized burgers and enjoy efficient online ordering for a delightful culinary experience"
      // footerLink: [
      //   {
      //     name: "View Github repository",
      //     url: "https://github.com/Muhammad0302/Burger-builder"
      //   }
      //   //  you can add extra buttons here.
      // ]
    }
  ]
  // display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: <Emoji text="Achievements And Certifications 🏆 " />,
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Codistan venture experience certifcate ",
      subtitle:
        "At Codistan Venture, I served as a MERN stack developer, contributing actively for 1.5 years. This experience was pivotal in advancing my proficiency in web development, fostering my growth within the software industry",
      image: require("./assets/images/codistan.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1qNOZn9Xs3HNMi89t2Zze6_kTwi7yKisE/view?usp=sharing"
        }
      ]
    },
    {
      title: "Grey-software house certifcate ",
      subtitle:
        "I began my career as a ReactJS and Node.js developer at Grey Software House, where I gained foundational skills and hands-on experience in frontend and backend development. This role laid a strong foundation for my career in software engineering",
      image: require("./assets/images/facebookLogo.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1P1SjJVh_1Pas0acNSvq1fk_uY2YvL4cS/view?usp=sharing"
        }
      ]
    },
    {
      title: "AWS Certificates",
      subtitle:
        "Successfully earned four AWS certificates through Coursera courses, showcasing proficiency in cloud computing",
      image: require("./assets/images/aws-pic.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/drive/folders/18vRaOIGojA-b2TgPlIig4OPEk_uDaDDG?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: <Emoji text="Contact Me ☎️" />,
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3029463719",
  email_address: "m.ismail.swe@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  industryProjects,
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
