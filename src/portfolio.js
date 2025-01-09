/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Stefan Pham",
  title: "Hello! I'm Stefan",
  subTitle: emoji(
    "A passionate Software Developer having an experience of applications with Java / Python / C / C++ / React and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1_4uxl8x2538nKD7crEhaFre74qC6wJiS/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/StefanPham17",
  linkedin: "https://www.linkedin.com/in/stefan-pham-321b8a24a/",
  gmail: "stefanpham49@gmail.com",
  facebook: "https://www.facebook.com/stefan.pham.90/",
  instagram: "https://www.instagram.com/stefancpham/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "Develop machine learning models in multiple areas ranging from particle physics to financial models"
    ),
    emoji("Create simulations based on natural phenomena and artistic merit"),
    emoji(
      "Integration of third party services such as AWS"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fa-brands fa-java"
    },
    {
      skillName: "C/C++",
      fontAwesomeClassname: "fa-solid fa-c"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "React.js",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "Node.js",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "SQL-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "Docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of California, Berkeley",
      logo: require("./assets/images/Berkeley.png"),
      subHeader: "Bachelor of Arts in Computer Science and Mathematics, Minor in Physics",
      duration: "August 2021 - May 2025",
      desc: "EECS Honors Program - Team Leader of iGEM Computational Bioengineering Team - ATLAS LBNL Group",
      descBullets: [
        "GPA: 3.92",
        "Major GPA (Computer Science): 3.97",
        "Major GPA (Mathematics): 3.97",
        "Transcript: https://drive.google.com/file/d/1tzjwyY1ji_3YJrwEEMbr0IM_ImL2qyaB/view?usp=drive_link"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Development", // Leveraging experience with Kafka, SQL, AWS, Docker, and Kubernetes
      progressPercentage: "90%" // Extensive backend development experience
    },
    {
      Stack: "Machine Learning", // Experience with TensorFlow, NumPy, PyTorch, and ML models
      progressPercentage: "80%" // Strong ML proficiency from internships and projects
    },
    {
      Stack: "Software Development", // Proficiency in Java, Python, and C/C++ with various frameworks and tools
      progressPercentage: "85%" // Broad software development expertise across different domains
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Development Engineering Intern",
      company: "Expedia Group",
      companylogo: require("./assets/images/ExpediaGroup.png"),
      date: "May 2024 – July 2024",
      desc: "SDE Intern in the Identity-Rheo Team",
      descBullets: [
        "Collaborated with multiple teams to transmit data via domain events, enhancing data quality for analytics.",
        "Developed and maintained data pipelines using Kafka streams, SQL, and AWS, handling large-scale data processing and leveraging Docker and Kubernetes for containerization and orchestration.",
        "Implemented data quality checks and transformations in Scala, Java, and Spring framework, automating workflows with Jenkins and Bash scripting."
      ]
    },
    {
      role: "Machine Learning Intern",
      company: "Basis Point Global Solutions",
      companylogo: require("./assets/images/Basis.png"),
      date: "June 2023 – September 2023",
      desc: "Machine Learning Intern in a Start-up focusing on low-frequency trading.",
      descBullets: [
        "Developed an advanced Python application using TensorFlow and NumPy, merging disparate financial trade datasets.",
        "Led the design and implementation of predictive models and achieved a 15% increase in forecasting accuracy for next-day performance of companies.",
        "Integrated these models with the back-end infrastructure responsible for executing trades based on real-time predictive insights, utilizing the PostgreSQL database for efficient data retrieval and storage."
      ]
    },
    {
      role: "Teaching Assistant",
      company: "University of California, Berkeley - EECS Department",
      companylogo: require("./assets/images/EECS.png"),
      date: "August 2023 – Present",
      desc: "Taught for the course, Computer Science 170: Algorithms and Intractable Problems.",
      descBullets: [
        "Worked with the professors to create course content (homework and exams), grade, tutor, and maintain the course website."
      ]
    },
    {
      role: "Undergraduate Researcher",
      company: "Lawrence Berkeley National Laboratory",
      companylogo: require("./assets/images/Lab.png"),
      date: "January 2023 – December 2023",
      desc: "Undergraduate research conducted through the university with a focus on muon-muon collider particle physics research",
      descBullets: [
        "Collaborated with researchers to spearhead the development of machine learning applications in C++ and Python, contributing to a 20% increase in data analysis efficiency.",
        "Leveraged the Linux environment to execute simulations, enabling the collection of valuable data and utilized efficient techniques to optimize the process, while ensuring the generation of accurate results."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Some Projects",
  subtitle: "These are some projects I have worked on in the past!",
  projects: [
    {
      image: require("./assets/images/Fish.png"),
      projectName: "Aquatic Ecosystem Dynamics Simulation",
      projectDesc: "A Fish Simulator with Graphical Interface created with C++",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/StefanPham17/FishSimulator"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "PintOS",
      projectDesc: "Development of PintOS Operating System and adding new features such as system calls, floating-point operations, priority scheduling, and user threading (pthreads), a buffer cache, extensible file support, subdirectories, and efficient synchronization for I/O operations.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/StefanPham17/PintOS"
        }
      ]
    },
    {
      image: require("./assets/images/Git.png"),
      projectName: "Personal Version-Control System",
      projectDesc: "A personal version-control system inspired by Git in Java.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/StefanPham17/PersonalVersionControlSystem"
        }
      ]
    },
    {
      image: require("./assets/images/MER.png"),
      projectName: "Music Emotion Recognition",
      projectDesc: "A machine learning model that processes human emotion in music",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/StefanPham17/Music-Emotion-Recognition"
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
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
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
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (281) 802-1619",
  email_address: "stefanpham49@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable,
  resumeSection
};
