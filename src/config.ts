export const siteConfig = {
  name: "Yee Zhen",
  title: "Robotics Student",
  description: "Portfolio website of Yee Zhen",
  accentColor: "#1d4ed8",
  social: {
    email: "khooyeezhen@gmail.com",
    linkedin: "https://www.linkedin.com/in/khoo-yee-zhen/",
    github: "https://github.com/yeezhen-robotics",
  },
  aboutMe:
    "Robotics student who likes all things robotics. ",
  skills: ["Python", "C++", "C", "MATLAB", "Electrical Engineering", "Control Systems", "ROS 2"],
  projects: [
      {
        name: "AD-FastSLAM-FS",
        description:
          "Implemented FastSLAM 1.0 on a differential drive robot to simulate cone mapping for a racecar using probabilistic robotics.",
        link: "https://github.com/yeezhen-robotics/AD-FastSLAM-FS",
        skills: ["Python", "SLAM", "Probabilistic Robotics"],
      },
      {
        name: "Robotino ROS Remote Workspace",
        description:
          "Remote workspace for the Robotino robot enabling development away from the physical device. Includes ROS nodes, configuration files, and PicoScan LiDAR integration over network.",
        link: "https://github.com/yeezhen-robotics/Robotino-ROS_WS-Remote",
        skills: ["ROS2", "Sensor Fusion", "VICON", "Software Engineering"],
      },
      {
        name: "GDIP Robot Arm",
        description:
          "Medical vial transportation robot arm with teach, autonomous and homing modes. Built for the GDIP third year module at UWE.",
        link: "https://github.com/yeezhen-robotics/GDIP-Arm-Code",
        skills: ["Arduino", "Embedded Programming", "Electronic Engineering"],
      },
      {
        name: "HRI Magic Emotion Mirror",
        description:
          "NAO robot teaches participants to express happy, sadness, surprise and anger. Designed to help autistic people practice emotions and improve social outcomes.",
        link: "https://github.com/yeezhen-robotics/HRI-Magic-Emotion-Mirror",
        skills: ["Python", "NAO Robot", "Machine Learning", "Social Robotics"],
      },
    ],
  experience: [
    {
      company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
      ],
    },
    {
      company: "Startup Inc",
      title: "Full Stack Developer",
      dateRange: "Jun 2020 - Dec 2021",
      bullets: [
        "Built and launched MVP product from scratch using React and Node.js",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
        "Collaborated with product team to define technical requirements",
      ],
    },
    {
      company: "Digital Agency",
      title: "Frontend Developer",
      dateRange: "Aug 2018 - May 2020",
      bullets: [
        "Developed responsive web applications for 20+ clients",
        "Improved site performance scores by 35% on average",
        "Introduced modern JavaScript frameworks to legacy codebases",
      ],
    },
  ],
  education: [
    {
      school: "University Name",
      degree: "Bachelor of Science in Computer Science",
      dateRange: "2014 - 2018",
      achievements: [
        "Graduated Magna Cum Laude with 3.8 GPA",
        "Dean's List all semesters",
        "President of Computer Science Club",
      ],
    },
    {
      school: "Online Platform",
      degree: "Full Stack Development Certificate",
      dateRange: "2019",
      achievements: [
        "Completed 500+ hours of coursework",
        "Built 10+ portfolio projects",
        "Specialized in React and Node.js",
      ],
    },
  ],
};
