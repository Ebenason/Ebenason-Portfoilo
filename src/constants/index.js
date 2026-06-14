import {
  FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaNodeJs, FaPython,
  FaGitAlt, FaGithub,
} from 'react-icons/fa'
import {
  SiTailwindcss, SiMysql,
} from 'react-icons/si'

export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Experience', path: '/experience' },
  { label: 'Contact', path: '/contact' },
]

export const TECH_LOGOS = [
  { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E' },
  { name: 'React', icon: FaReact, color: '#61DAFB' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
  { name: 'Python', icon: FaPython, color: '#3776AB' },
  { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
  { name: 'Git', icon: FaGitAlt, color: '#F05032' },
  { name: 'GitHub', icon: FaGithub, color: '#fff' },
  { name: 'Vercel', icon: null, color: '#fff' },
]

export const SKILLS = [
  {
    id: 1,
    name: 'React.js',
    icon: FaReact,
    color: '#61DAFB',
    rating: 4,
    description: 'Build responsive SPAs, reusable components, routing, API integration, and state management.',
  },
  {
    id: 2,
    name: 'JavaScript',
    icon: FaJsSquare,
    color: '#F7DF1E',
    rating: 4,
    description: 'Develop dynamic web functionality, DOM manipulation, async programming, and API handling.',
  },
  {
    id: 3,
    name: 'HTML5',
    icon: FaHtml5,
    color: '#E34F26',
    rating: 5,
    description: 'Create semantic, accessible, and SEO-friendly webpage structures.',
  },
  {
    id: 4,
    name: 'CSS3',
    icon: FaCss3Alt,
    color: '#1572B6',
    rating: 4,
    description: 'Build responsive layouts, animations, Flexbox/Grid systems, and modern styling.',
  },
  {
    id: 5,
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#06B6D4',
    rating: 4,
    description: 'Develop fast and maintainable utility-first interfaces.',
  },
  {
    id: 6,
    name: 'Node.js',
    icon: FaNodeJs,
    color: '#339933',
    rating: 3,
    description: 'Create backend services, REST APIs, middleware, and server-side logic.',
  },
  {
    id: 7,
    name: 'Python',
    icon: FaPython,
    color: '#3776AB',
    rating: 4,
    description: 'Automation, scripting, data processing, and problem-solving.',
  },
  {
    id: 8,
    name: 'MySQL',
    icon: SiMysql,
    color: '#4479A1',
    rating: 3,
    description: 'Database design, CRUD operations, relationships, and query optimization.',
  },
  {
    id: 9,
    name: 'Git & GitHub',
    icon: FaGithub,
    color: '#fff',
    rating: 4,
    description: 'Version control, collaboration, branching, and deployment workflows.',
  },
]

export const PROJECTS = [
  {
    id: 1,
    name: 'EduSync',
    description: 'Centralized Communication App for Universities. Developed using React Native and Firebase to streamline communication between students, faculty, and administrators. Role-based authentication, admin approval workflows, class and subject management, task assignment and submission tracking, real-time notifications, timetable coordination, and Firestore-powered synchronization.',
    tech: ['React Native', 'JavaScript', 'Firebase', 'Git/GitHub'],
    github: null,
    demo: null,
    image: 'https://placehold.co/600x400/6366F1/ffffff?text=EduSync',
  },
  {
    id: 2,
    name: 'Agency Portfolio Website',
    description: 'Designed and developed a modern agency portfolio website to showcase services, projects, and brand identity. Focused on responsive design, performance, accessibility, SEO, and mobile-first user experiences.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    github: 'https://github.com/Ebenason/AgencyWebsite',
    demo: null,
    image: 'https://placehold.co/600x400/F59E0B/ffffff?text=Agency+Website',
  },
  {
    id: 3,
    name: 'Personal Portfolio Website',
    description: 'Designed and developed a modern personal portfolio website showcasing projects, skills, and professional experience with responsive layouts, smooth animations, and intuitive navigation.',
    tech: ['Framer'],
    github: null,
    demo: 'https://ebenason.framer.website/',
    image: 'https://placehold.co/600x400/8B5CF6/ffffff?text=Portfolio',
  },
  {
    id: 4,
    name: 'SGPA Calculator',
    description: 'Built a web-based SGPA calculator with a modern Glassmorphism UI, responsive design, and real-time GPA calculations for students.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    github: 'https://github.com/Ebenason/GPA-Calculator',
    demo: null,
    image: 'https://placehold.co/600x400/EC4899/ffffff?text=SGPA+Calc',
  },
]

export const EXPERIENCES = [
  {
    id: 1,
    position: 'Junior Media Cell Director',
    company: 'InferKNOW — SRM University Department Club',
    duration: 'Jun 2024 - May 2025',
    description: 'Assisted in managing the Media Cell of the department club, supporting event promotions, social media content creation, and visual communications. Collaborated with senior team members to produce promotional materials and helped maintain consistent coverage of departmental events.',
    image: 'https://placehold.co/600x400/7C3AED/ffffff?text=Junior+Media+Cell',
  },
  {
    id: 2,
    position: 'Head of Media Cell',
    company: 'InferKNOW — SRM University Department Club',
    duration: 'Sep 2025 - May 2026',
    description: 'Led the Media Cell of the department club, managing event promotions, social media content, and visual communications. Coordinated with student teams to create promotional materials, increase engagement, and ensure effective coverage of departmental events.',
    image: 'https://placehold.co/600x400/7C3AED/ffffff?text=Media+Cell',
  },
  {
    id: 3,
    position: 'Freelance Web Developer',
    company: 'Self Employed',
    duration: 'May 2026 - Present',
    description: 'Built custom websites and web applications for clients and personal projects. Delivered responsive, performance-optimized solutions using modern frameworks like React, Next.js, and Tailwind CSS. Managed end-to-end development from requirements gathering to deployment.',
    image: 'https://placehold.co/600x400/059669/ffffff?text=Freelance',
  },
]

export const CONTACT_INFO = {
  name: 'Ebenason',
  email: 'ebenasonyagopraj@gmail.com',
  linkedin: 'https://www.linkedin.com/in/ebenason/',
  github: 'https://github.com/Ebenason',
  instagram: 'https://www.instagram.com/ebii._08/',
  location: 'Chennai, Tamil Nadu, India',
}

export const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    url: CONTACT_INFO.linkedin,
    icon: null,
  },
  {
    label: 'GitHub',
    url: CONTACT_INFO.github,
    icon: null,
  },
  {
    label: 'Instagram',
    url: CONTACT_INFO.instagram,
    icon: null,
  },
]
