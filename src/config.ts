export const siteConfig = {
  name: "Yee Zhen",
  title: "Robotics Student 🇲🇾",
  description: "Portfolio website of Yee Zhen",
  accentColor: "#e0871a",
  social: {
    email: "khooyeezhen@gmail.com",
    linkedin: "https://www.linkedin.com/in/khoo-yee-zhen/",
    github: "https://github.com/yeezhen-robotics",
  },
  aboutMe:
    "Hi|Selamat Datang|你好! Welcome to my portfolio where I cover my journey in building robotics for all. My mission is to make robotics affordable, effective and accessible to everyone. I believe that when used correctly, robotics will revolutionise how people work, ease social burdens and provide opportunities to the needy. I have keen interests in control theory, soft robotics, assistive living robotics, SLAM and guitar. If you have anything cool to share (tech or otherwise), feel free to reach out!",
  skills: [ "ROS 2", "Python", "C++", "C", "MATLAB", "Electrical Engineering", "Control Systems",],
  projects: [
    {
      name: "The Hexapod",
      description:
        "Built a hexapod for the exploration of different terrain types. Allows for first person viewing whist having an operation range of 100m",
      link: "https://yeezhen-robotics.github.io/HexapodYZ/",
      image: "/public/images/projects/Hexapod.png",
      skills: ["CAD Design", "Electrical Engineering", "Embedded Programming"],
    },
    {
      name: "Nimbus Robotic Platform",
      description:
        "Built software to interface with the Nimbus V0, with GNSS integration and depth cloud perception. Includes a machine vision activated human stopping system, while also comes with a custom controller, allowing for three modes of steering and operation to navigate agricultural environments.",
      link: "https://www.nimbusagritech.com/",
      image: "/public/images/projects/nimbus.png",
      skills: ["ROS2", "Gazebo Simulator", "GNSS", "Machine Vision", "Kalman Filtering"],
    },
    {
      name: "AD-FastSLAM-FS",
      description:
        "Implemented FastSLAM 1.0 on a differential drive robot to simulate cone mapping for a racecar using probabilistic robotics.",
      link: "https://github.com/yeezhen-robotics/AD-FastSLAM-FS",
      image: "/public/images/projects/DV.png", 
      skills: ["Python", "SLAM", "Probabilistic Robotics"],
    },
    {
      name: "Robotino ROS Remote Workspace",
      description:
        "Remote workspace for the Robotino robot enabling development away from the physical device. Includes ROS nodes, configuration files, and PicoScan LiDAR integration over network.",
      link: "https://github.com/yeezhen-robotics/Robotino-ROS_WS-Remote",
      image: "/public/images/projects/Robotino.png",
      skills: ["ROS2", "Sensor Fusion", "VICON", "Software Engineering"],
    },
    {
      name: "GDIP Robot Arm",
      description:
        "Medical vial transportation robot arm with teach, autonomous and homing modes. Built for the GDIP third year module at UWE.",
      link: "https://github.com/yeezhen-robotics/GDIP-Arm-Code",
      image: "/images/projects/GDIPArm.png",
      skills: ["Arduino", "Embedded Programming", "Electronic Engineering"],
    },
    {
      name: "HRI Magic Emotion Mirror",
      description:
        "NAO robot teaches participants to express happy, sadness, surprise and anger. Designed to help autistic people practice emotions and improve social outcomes.",
      link: "https://github.com/yeezhen-robotics/HRI-Magic-Emotion-Mirror",
      image: "/public/images/projects/NAO.png",
      skills: ["Python", "NAO Robot", "Machine Learning", "Social Robotics"],
    },
  ],
  experience: [
    {
      company: "Nimbus Agri-Tech Ltd",
      title: "ROS2 Robotics Localisation and Integration Intern",
      dateRange: "Jun - Aug 2026",
      icon: "/public/images/experience/nimbus.png", 
      bullets: [
        "Integrated high precision GNSS hardware and robust human safety features into a mobile robot, producing validation tests and identifying antenna limitations.",
        "Developed a Gazebo simulator to emulate the onboard communication of the robot, antenna and machine vision architecture.",
        "Developed and configured ROS2 nodes, launch files and a consistent launch pipeline for the company.",
        "Implemented sensor fusion approaches to improve sensor accuracy, utilising Kalman filtering techniques and RTK corrections.",
      ],
    },
    {
      company: "UWE-AI",
      title: "SLAM Team Lead",
      dateRange: "Sep 2024 - May 2026",
      icon: "/public/images/experience/uweai.jpg", 
      bullets: [
        "Completed Implementation of EKF SLAM and FastSLAM 1.0 as foundation of society mapping stack.",
        "Competed in IMECHE FS-AI Category, achieving 5th place in technical presentation",
        "Vectorised SLAM codebase improving system processing speeds by 5x",
      ],
    },
    {
      company: "Bristol Robotics Lab",
      title: "2D Spatio-Temporal Occupancy Grid Mapping (Final Year Project)",
      dateRange: "Sep 2025 - May 2026",
      icon: "/public/images/experience/brl.jpg",
      bullets: [
        "Examined assumptions of classical SLAM algorithms, focusing on the static world assumption",
        "Investigated resilience of particle-filter based localisation in highly dynamic environments",
        "Explored relationship between cell-state instability and probability of dynamic regions",
      ],
    },
    {
      company: "Bristol Robotics Lab",
      title: "Semantic SLAM Research Intern",
      dateRange: "Jul - Sep 2025",
      icon: "/public/images/experience/brl.jpg",
      bullets: [
        "Designed and deployed a mobile Robotino-based data collection platform for semantic SLAM research",
        "Implemented Ubuntu service applications to auto-launch ROS2 network, reducing setup time and human error",
        "Conducted pilot data collection in Health Tech Hub validating system stability and data quality",
      ],
    },
  ],
  education: [
    {
      school: "University of the West of England",
      degree: "BEng Robotics",
      dateRange: "2023 - 2026",
      icon: "/public/images/education/uwe.png", 
      achievements: [
        "Grade: (1:1) 1st class with Hons (overall grade of 79%)",
        "Specialising in robotic architecture, control systems, and machine vision.",
      ],
    },
    {
      school: "Imperial College London",
      degree: "MSc Control and Optimisation",
      dateRange: "2026 - 2027",
      icon: "/public/images/education/imperial.png", 
      achievements: [
      ],
    },
  ],
};