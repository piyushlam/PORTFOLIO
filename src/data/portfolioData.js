const portfolio = {
  name: 'Siddhesh Lambade',
  headline: 'Software Engineer | Computer Science Engineering Student',
  email: 'lambadesiddhesh11@gmail.com',
  phone: '+91 7276065218',
  location: 'Nagpur, Maharashtra, India',
  roles: ['Software Engineer', 'Full Stack Developer', 'React Developer', 'Java Developer'],
  socialLinks: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/siddhesh-lambade-aabbb337a/', short: 'IN' },
    { label: 'Email', href: 'mailto:lambadesiddhesh11@gmail.com', short: '@' },
    { label: 'Call', href: 'tel:+917276065218', short: 'PH' },
  ],
  intro:
    'I am an enthusiastic software engineer who enjoys building modern web applications, desktop systems, and polished user interfaces with clean architecture and a strong focus on real-world problem solving.',
  about:
    'I am a Computer Science Engineering student with strong knowledge of C, C++, Java, HTML, CSS, JavaScript, React, MySQL, and modern software development practices. I enjoy turning ideas into useful products that are responsive, structured, and visually engaging.',
  internship:
    'My experience spans Data Science, Software Development, and Full Stack Development internships, where I worked with Python, machine learning basics, Core Java, Java Swing, Spring Boot, Angular, MySQL, JWT authentication, and real project deployment workflows.',
  passion:
    'I am especially passionate about futuristic interfaces, scalable full stack systems, performant React experiences, and learning technologies that help me build better products.',
  featuredProject: {
    title: 'Lead Nurturing CRM / Automated Lead Management System',
    stack: ['Spring Boot', 'Angular', 'MySQL', 'REST APIs', 'JWT', 'RBAC', 'Railway'],
    description:
      'A full stack enterprise-style CRM built to manage, track, and analyze leads with secure authentication, dashboard summaries, frontend-backend integration, and live deployment support.',
    github: 'https://github.com/piyushlam/lead-management-system.git',
    demo: 'https://helpful-creativity-production-7816.up.railway.app/login',
    image: '/crm_d.png',
    metrics: ['JWT authentication', 'Dashboard analytics', 'Railway deployment'],
  },
  otherProjects: [
    {
      title: 'YouTube Transcript Generator',
      tech: ['React', 'Node.js', 'JavaScript', 'PDF Export', 'TXT Export'],
      description:
        'A transcript workflow app that fetches, displays, summarizes, and exports video transcripts with dark mode, recent history, local caching, and AI-assisted usability features.',
      github: 'https://github.com/piyushlam/YouTube_Transcript.git',
    },
    {
      title: 'Canteen Management System',
      tech: ['React', 'PHP', 'JavaScript'],
      description:
        'A full stack canteen platform for menu browsing, ordering, billing, login and registration flows, plus an admin panel for stock and system management.',
      github: 'https://github.com/piyushlam/Canteen_Management_System1.git',
    },
    {
      title: 'AI-Powered Attendance System',
      tech: ['React', 'OpenCV', 'Python', 'Node.js'],
      description:
        'An AI-powered attendance system that uses OpenCV for real-time face detection and recognition to automatically mark student attendance. Built with a React frontend and Python-based backend, it captures live video, identifies students from trained datasets, and stores attendance efficiently to reduce manual effort and proxy issues while delivering a smart, seamless experience.',
      github: 'https://github.com/piyushlam/face-sheet-magic.git',
    },
  ],
  skillGroups: [
    { title: 'Frontend', orbit: 160, skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Angular'] },
    { title: 'Backend Basics', orbit: 220, skills: ['Node.js', 'Spring Boot', 'MySQL', 'REST APIs', 'JWT'] },
    { title: 'Programming Languages', orbit: 280, skills: ['C', 'C++', 'Java', 'Python', 'JSON'] },
  ],
  timeline: [
    {
      year: 'Jan 2026 - Mar 2026',
      title: 'Full Stack Development Intern',
      subtitle: 'TATA Technologies, Pune',
      description:
        'Worked on a Lead Nurturing CRM using Spring Boot, Angular, MySQL, JWT, RBAC, dashboard summaries, date filters, testing, debugging, and deployment on Railway.',
    },
    {
      year: 'Jan 2025 - Mar 2025',
      title: 'Software Development Intern',
      subtitle: 'Sayansh IT Solution, Nagpur',
      description:
        'Built Core Java and Java Swing applications, contributed to GUI and backend logic, and gained hands-on experience with OOP, event-driven programming, and debugging.',
    },
    {
      year: 'Jul 2022 - Aug 2022',
      title: 'Data Science Intern',
      subtitle: 'SimSoft Technologies, Nagpur',
      description:
        'Completed a focused internship on Data Science and Machine Learning with Python, data preprocessing, real-time datasets, visualization, and core AI concepts.',
    },
    {
      year: 'Graduating 2026',
      title: 'Computer Science Engineering',
      subtitle: 'B.Tech | Priyadarshini JL College of Engineering, Nagpur',
      description:
        'Pursuing B.Tech in Computer Science and Engineering with a CGPA of 8.08 / 10 while building strong foundations in software engineering and web development.',
    },
    {
      year: 'Completed 2023',
      title: 'Diploma Education',
      subtitle: 'Government Polytechnic, Nagpur',
      description:
        'Completed Diploma in Computer Science and Engineering with 80.75%, building strong fundamentals in programming and practical technical problem solving.',
    },
  ],
};

export default portfolio;
