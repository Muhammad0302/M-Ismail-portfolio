/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

// Summary And Greeting Section

import emoji from "react-easy-emoji";

const illustration = {
    animated: true // set to false to use static SVG
};

const greeting = {
    username: "Muhammad Ismail",
    title: "Hi all, I'm Ismail",
    subTitle: emoji(
        "A passionate Full Stack Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / MERN stack / MEVN stack / React Native / Nextjs / Nuxtjs and some other cool libraries and frameworks."
    ),
    resumeLink: "https://drive.google.com/file/d/1lJXAG9OlQj9p81XSg8p2cUlV30EmW_tf/view?usp=sharing",
    displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
    github: "https://github.com/Muhammad0302",
    linkedin: "www.linkedin.com/in/muhammad-ismail-72681b177",
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
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji(
            "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
        ),
        emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
        emoji(
            "⚡ Develop highly relible and effecient back end for your web and mobile applications"
        ),
        emoji(
            "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
        )
    ],

    /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

    softwareSkills: [{
            skillName: "Html-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "Css3",
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
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "Reactjs",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            skillName: "React native",
            fontAwesomeClassname: "fab fa-react"
        }, {
            skillName: "Vuejs",
            fontAwesomeClassname: "fab fa-vuejs"
        }, {
            skillName: "Nextjs  /  Nuxtjs",
            fontAwesomeClassname: "fab fa-js-square"
        }, {
            skillName: "Nodejs",
            fontAwesomeClassname: "fab fa-node"
        },
        {
            skillName: "Mongodb / Sql / Mysql",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            skillName: "Expressjs",
            fontAwesomeClassname: "fas fa-server"
        },
        {
            skillName: "Firebase",
            fontAwesomeClassname: "fas fa-fire"
        },

        {
            skillName: "Jquery / Ajax / Json",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            skillName: "php",
            fontAwesomeClassname: "fab fa-php"
        },
        {
            skillName: "Laravel",
            fontAwesomeClassname: "fab fa-laravel"
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
    display: true, // Set false to hide this section, defaults to true
    schools: [{
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
            descBullets: ["It's a standerd college in kpk pakistan, providing quality of education regarding technical subjects"]
        }
    ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
    viewSkillBars: true, //Set it to true to show Proficiency Section
    experience: [{
            Stack: "Frontend/Design", //Insert stack or technology you have experience in
            progressPercentage: "93%" //Insert relative proficiency in percentage
        },
        {
            Stack: "Backend",
            progressPercentage: "80%"
        },
        {
            Stack: "Programming",
            progressPercentage: "70%"
        }
    ],
    displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
    display: true, //Set it to true to show workExperiences Section
    experience: [{
            role: "Front-end developer",
            company: "Open Sourcce Grey software",
            companylogo: require("./assets/images/facebookLogo.png"),
            date: "Janurary 2021 – july 2021 ",
            desc: "Grey Software is an organization on a mission to empower people to create open-source software for their communities and societies!.",
            descBullets: [
                "It create free apps and tools to improve the open source software ecosystem!",
                "It research software development education strategies!"
            ]
        },
        {
            role: "Web developer",
            company: "Modern Institute of Science and Technology",
            companylogo: require("./assets/images/quoraLogo.png"),
            date: "October 2020 – December 2020",
            desc: "It's an instituation in kpk lower dir samarbagh, it offer different web development / designing oppurnity to people on local and national level to boost of their skills."
        },
        {
            role: "Back-end developer Intern",
            company: "Aptech Learning",
            companylogo: require("./assets/images/airbnbLogo.png"),
            date: "Decemer 2020 – Janurary 2021",
            desc: "One branch of Aptech has in timergara kpk, It gave exposure to Pakistani youth towards global learning in IT education. Within a short span of time, it became the leading IT training provider of the country with its presence across Pakistan. Since the past decades, all of our franchises are providing Quality Education with International Standard and Certifications which are acceptable and transferable worldwide."
        }
    ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
    showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
    display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
    title: "Projects",
    subtitle: "Some of the projects that, I have worked so far",
    projects: [{
            image: require("./assets/images/saayaHealthLogo.png"),
            projectName: "Burger-builder",
            projectDesc: "It is a web application build on React.js serve burger service to the client online. People just need to make account after this, they can place order for the burger",
            footerLink: [{
                    name: "View Github repository",
                    url: "https://github.com/Muhammad0302/Burger-builder"
                }
                //  you can add extra buttons here.
            ]
        },
        {
            image: require("./assets/images/nextuLogo.png"),
            projectName: "Covid-19 tracker",
            projectDesc: "It's a web application base on React.js, API, it provide every country covid-19 record (How much is died,how much is infected and how much is cured from covid-19)",
            footerLink: [{
                name: "View Github repository",
                url: "https://github.com/Muhammad0302/covid-19-tracker"
            }]
        },
        {
            image: require("./assets/images/ecommerece.png"),
            projectName: "Ecommerece website",
            projectDesc: "It is an Ecommerce website base on MERN stack, it offer selling different product service on his site like phone,camara etc ",
            footerLink: [{
                name: "View Github repository",
                url: "https://github.com/Muhammad0302/ecommerce-project"
            }]
        },
        {
            image: require("./assets/images/portfolio.png"),
            projectName: "Portfolio website",
            projectDesc: "This is my personal portfolio website build on React.js presenatation component",
            footerLink: [{
                name: "View Github repository",
                url: "https://github.com/Muhammad0302/ecommerce-project"
            }]
        },
        {
            image: require("./assets/images/chatapp.png"),
            projectName: "Chat-app",
            projectDesc: "It's a simple chat application base on React.js and firebase where two people can communicate and share their feeling with each other ",
            footerLink: [{
                name: "View Github repository",
                url: "https://github.com/Muhammad0302/Real-time-Chat-application"
            }]
        },
        {
            image: require("./assets/images/blogger.png"),
            projectName: "Php / Laravel Blogger",
            projectDesc: "It is a blogger base on php / laravel which publish different blogs on internet ",
            footerLink: [{
                name: "View Github repository",
                url: "https://github.com/Muhammad0302/myblogger"
            }]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
    title: emoji("Achievements And Certifications 🏆 "),
    subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [{
            title: " Grey-software house certifcate ",
            subtitle: "Gotton front-end developer certifcate as a apprentice from open source grey-software house.",
            image: require("./assets/images/facebookLogo.png"),
            footerLink: [{
                name: "View Certification",
                url: "https://drive.google.com/file/d/1P1SjJVh_1Pas0acNSvq1fk_uY2YvL4cS/view?usp=sharing"
            }]
        },
        {
            title: " DigiSkills Certifcate ",
            subtitle: "DigiSkills is a training program in pakistan which provide technical skills to people, to empower them in digital culture",
            image: require("./assets/images/digiskills.png"),
            footerLink: [{
                name: "View Certification",
                url: ""
            }]
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
    subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

    blogs: [{
            url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
            title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
            description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
        },
        {
            url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
            title: "Why REACT is The Best?",
            description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
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

    talks: [{
        title: "Build Actions For Google Assistant",
        subtitle: "Codelab at GDG DevFest Karachi 2019",
        slides_url: "https://bit.ly/saadpasta-slides",
        event_url: "https://www.facebook.com/events/2339906106275053/"
    }],
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
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "+92-3029463719",
    email_address: "mi477048@gmail.com"
};

// Twitter Section

const twitterDetails = {
    userName: "twitter", //Replace "twitter" with your twitter username without @
    display: true // Set true to display this section, defaults to false
};

export {
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