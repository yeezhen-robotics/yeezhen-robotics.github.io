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
      company: "Bristol Robotics Lab",
      title: "2D Spatio-Temporal Occupancy Grid Mapping (Final Year Project)",
      dateRange: "September 2025 - Present",
      bullets: [
        "Examined assumptions of classical SLAM algorithms, focusing on the static world assumption",
        "Investigated resilience of particle-filter based localisation in highly dynamic environments",
        "Explored relationship between cell-state instability and probability of dynamic regions",
      ],
    },
    {
      company: "Bristol Robotics Lab",
      title: "Semantic SLAM Research Intern",
      dateRange: "July - September 2025",
      bullets: [
        "Designed and deployed a mobile Robotino-based data collection platform for semantic SLAM research",
        "Implemented Ubuntu service applications to auto-launch ROS2 network, reducing setup time and human error",
        "Conducted pilot data collection in Health Tech Hub validating system stability and data quality",
      ],
    },
    {
      company: "AI Society - Formula Student",
      title: "SLAM Team Project Manager",
      dateRange: "September 2024 - Present",
      bullets: [
        "Competed in IMECHE FS-AI Category, achieving 5th place in technical presentation",
        "Leading FastSLAM 1.0 particle filter development for autonomous Ackerman-steered vehicle",
        "Vectorised SLAM codebase improving system processing speeds by 5x",
      ],
    },
  ],
  education: [
    {
      school: "University of the West of England",
      degree: "BEng Robotics",
      dateRange: "2023 - 2026",
      achievements: [
        "First Class Honours (Expected)",
        "Year 2 average: 82.7% | Year 1 average: 90.4%",
        "Relevant modules: SLAM, Robot Control Systems, Advanced Vision, Localisation and Mapping",
      ],
    },
  ],
};
