/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section
import React from "react";
import emoji from "react-easy-emoji";
import Emoji from "react-emoji-render";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Muhammad Ismail",
  title: "Hi all, I'm Ismail",
  subTitle: (
    <Emoji text="As a passionate Full Stack Software Engineer 🚀 with over a year of experience in the MERN stack and Nextjs technology, I am dedicated to bringing my passion and expertise to every project I work on." />
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
  facebook: "https://web.facebook.com/profile.php?id=100012248836824",
  medium: "https://medium.com/@mi477048",
  stackoverflow: "https://stackoverflow.com/users/14154844/lucky-boy",
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
    <Emoji text="⚡ Develop highly relible and effecient back end for your web and mobile applications" />,
    <Emoji text="⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean" />
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "Expressjs",
      fontAwesomeClassname: "fas fa-server"
    },
    {
      skillName: "Mongodb / Mysql",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Nextjs",
      fontAwesomeClassname: "fab fa-js-square"
    },

    {
      skillName: "Graphql",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Typescript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "ReactNative",
      fontAwesomeClassname: "fa-brands fa-android"
    },
    {
      skillName: "Jquery",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "Material ui",
      fontAwesomeClassname: "fab fa-css3"
    },
    {
      skillName: "Sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "Bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "Tailwind",
      fontAwesomeClassname: "fab fa-css3"
    },

    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of engineering and technology Mardan",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelor of Science in Computer Software engineering",
      duration: "September 2018 - October 2022",
      desc: "Took courses about Software Engineering, Web Security, Operating Systems, Computer communication network, Database ...",
      descBullets: [
        "It's a standerd university in pakistan for software engineering providing quality of education from past few decades",
        "It is register from PEC, HEC and connect with OBE Washington"
      ]
    },
    {
      schoolName: "Oxford College of science and technology(Munda Dir)",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: " Fsc / intermediate in Computer Science",
      duration: "july 2016 - july 2018",
      desc: "Took courses about computer science, computer fundamental, programming ...",
      descBullets: [
        "It's a standerd college in kpk pakistan, providing quality of education regarding technical subjects"
      ]
    }
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
      role: "Front-end developer",
      company: "Grey software",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "Janurary 2021 – july 2021 ",
      desc: "Grey Software is an organization on a mission mainly to empower people to create software for open source their communities and societies!.",
      descBullets: [
        "Grey Software Company develops web apps and tools aimed at enhancing the open source software ecosystem!",
        "Grey Software house has a successful track record of delivering high-quality software solutions to open source, as evidenced by their portfolio!"
      ]
    },
    {
      role: "MERN stack developer",
      company: "Codistan Ventures",
      companylogo: require("./assets/images/codistan.png"),
      date: "August 2022 – Present",
      desc: "Codistan Venture is a software development company that specializes in developing custom software solutions for clients worldwide. They offer services in web and mobile app development, e-commerce, UI/UX design, and digital marketing.",
      descBullets: [
        "Codistan Venture delivers high-quality software solutions to clients worldwide, with a track record demonstrated by their portfolio and client testimonials!",
        "Codistan Venture works closely with clients to understand their unique business needs to meets their expectations!"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

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
      image: require("./assets/images/dhartee.png"),
      projectName: "Dhartee.pk",
      projectDesc:
        "Dhartee PK is an innovative real estate portal enabling purchase and sale of property. You get matchless property viewing experience through 360 interactive panoramic photos and virtual tours."
      // footerLink: [
      //   {
      //     name: "View Github repository",
      //     url: "https://github.com/Muhammad0302/Burger-builder"
      //   }
      // ]
    },
    {
      image: require("./assets/images/bodyslide.png"),
      projectName: "Bodyslide",
      projectDesc:
        "BodySlide is a premier spa and massage center in Canada offering top-quality masseuse services. Bodyslide offering exceptional service to the clients, delivering a range of customized massage therapies to meet their unique needs."
      // footerLink: [
      //   {
      //     name: "View Github repository",
      //     url: "https://github.com/Muhammad0302/covid-19-tracker"
      //   }
      // ]
    },
    {
      image: require("./assets/images/rezzlist.jpg"),
      projectName: "Rezzlist",
      projectDesc:
        "With rezzlist, you can easily make a reservation for your next dining experience. With just a few clicks, you can browse resuturents, available tables, select your preferred time and date, and secure your booking in no time at a specfic city. "
      // footerLink: [
      //   {
      //     name: "View Github repository",
      //     url: "https://github.com/Muhammad0302/ecommerce-project"
      //   }
      // ]
    },
    {
      image: require("./assets/images/rancher.png"),
      projectName: "Rancher Cafe",
      projectDesc:
        "Rancher Cafe connects customers with Rancher Cafe branches that offer food delivery in their vicinity. Customers can browse the menus of available branches, send in food orders, and make payment after providing an address to deliver."
      // footerLink: [
      //   {
      //     name: "View Github repository",
      //     url: "https://github.com/Muhammad0302/M-Ismail-portfolio"
      //   }
      // ]
    },
    {
      image: require("./assets/images/parking.png"),
      projectName: "Spot Troop",
      projectDesc:
        "Spot Troop is a parking reservation website designed to help drivers easily find and book parking spots in advance."
      // footerLink: [
      //   {
      //     name: "View Github repository",
      //     url: "https://github.com/Muhammad0302/Real-time-Chat-application"
      //   }
      // ]
    },
    {
      image: require("./assets/images/propertySite.png"),
      projectName: "Property Management",
      projectDesc:
        "With this project, landlords and property managers can efficiently track and manage properties, tenants, leases, and payments from a single platform."
      // footerLink: [
      //   {
      //     name: "View Github repository",
      //     url: "https://github.com/Muhammad0302/myblogger"
      //   }
      // ]
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
        "A platform that allow users to connect, share, communicate, create profiles, share content such as photos and videos, follow other users, and engage in conversations etc.",
      footerLink: [
        {
          name: "View Github repository",
          url: "https://github.com/Muhammad0302/Social-Network-Facebook"
        }
      ]
    },

    {
      image: require("./assets/images/laundry.png"),
      projectName: "Laundry Provider",
      projectDesc:
        "An online platform that offers laundry services to customers. Customers can place orders for laundry pickup and delivery, schedule services, and make payment after delivery.",
      footerLink: [
        {
          name: "View Github repository",
          url: "https://github.com/Muhammad0302/DhobiGaat-backend"
        }
      ]
    },
    {
      image: require("./assets/images/ecommerece.png"),
      projectName: "Ecommerece website",
      projectDesc:
        "This is an ecommerce website, online platform that allows businesses to sell products or services directly to consumers over the internet.",
      footerLink: [
        {
          name: "View Github repository",
          url: "https://github.com/Muhammad0302/ecommerce-project"
        }
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.png"),
      projectName: "Burger-builder",
      projectDesc:
        "It is a platform where customers can order burgers and other food items online for delivery or pickup. These websites often feature menus with a variety of burger options, sides, and drinks.",
      footerLink: [
        {
          name: "View Github repository",
          url: "https://github.com/Muhammad0302/Burger-builder"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: <Emoji text="Achievements And Certifications 🏆 " />,
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: " Grey-software house certifcate ",
      subtitle:
        "While working as a developer at Grey-Software House, I completed the company's front-end developer program and was awarded a certificate for my proficiency in frontend development technologies.",
      image: require("./assets/images/facebookLogo.png"),
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/1P1SjJVh_1Pas0acNSvq1fk_uY2YvL4cS/view?usp=sharing"
        }
      ]
    },
    {
      title: " DigiSkills Certifcate ",
      subtitle:
        "I am a proud recipient of a certificate from DigiSkills, a distinguished training program in Pakistan that provides individuals with technical skills and empowers them to succeed in the digital landscape.",
      image: require("./assets/images/digiskills.png"),
      footerLink: [
        {
          name: "View Certification",
          url: ""
        }
      ]
    }
    //,
    // {
    //     title: "PWA Web App Developer",
    //     subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
    //     image: require("./assets/images/pwaLogo.webp"),
    //     footerLink: [
    //         { name: "Certification", url: "" },
    //         {
    //             name: "Final Project",
    //             url: "https://pakistan-olx-1.firebaseapp.com/"
    //         }
    //     ]
    // }
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
  email_address: "mi477048@gmail.com"
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
