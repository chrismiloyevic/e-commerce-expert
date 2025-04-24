import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Chris Miloyevic',
  description: "Fullstack developer with a passion for building scalable, high-performance web applications.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Chris.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Australian based <strong className="text-stone-100">Fullstack developer</strong> focused on clean code and user experience. <br />
        I've worked with a range of clients from startups to large corporations. I am flexible on different timezones
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm always looking for new challenges and opportunities.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `As a seasoned Fullstack developer with over a decade of experience, I specialize in building scalable, high-performance web
applications using React, Angular, Next.js, and Node.js. Throughout my career, I've led and contributed to 25+ successful projects,
consistently delivering intuitive user experiences and optimized system performance.`,
  aboutItems: [
    { label: 'Location', text: 'Sydney, Australia', Icon: MapIcon },
    { label: 'Age', text: '36', Icon: CalendarIcon },
    { label: 'Nationality', text: 'Australian', Icon: FlagIcon },
    { label: 'Interests', text: 'Motorcycles, Muay Thai, Banjos', Icon: SparklesIcon },
    { label: 'Education', text: 'Griffith University', Icon: AcademicCapIcon },
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 10,
      },
      {
        name: 'Next.js',
        level: 9
      },
      {
        name: 'Angular',
        level: 9
      },
      {
        name: 'Vue',
        level: 7
      }
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 10,
      },
      {
        name: 'Python',
        level: 10,
      },
      {
        name: 'GraphQL',
        level: 10,
      },
      {
        name: 'Golang',
        level: 7,
      },
    ],
  },
  {
    name: 'CSS Frameworks',
    skills: [
      {
        name: 'Bootstrap',
        level: 10,
      },
      {
        name: 'Tailwind CSS',
        level: 10,
      },
      {
        name: 'Material UI',
        level: 10,
      },
      {
        name: 'Sass/Scss',
        level: 10,
      }
    ],
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'Docker',
        level: 10,
      },
      {
        name: 'Kubernetes',
        level: 9,
      },
      {
        name: 'AWS',
        level: 9,
      },
      {
        name: 'Azure',
        level: 8,
      },
    ],
  },
];
/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2007 - 2011',
    location: 'Griffith University',
    title: 'Bachelor of Information Technology',
    content: <p>Completed a comprehensive program in I.T. with focus on software development. Gained strong foundations in computer science fundamentals, data structures, and algorithms. Developed expertise in both frontend and backend technologies through practical projects. Key coursework included web development, database management, software engineering principles, and system architecture. Participated in team-based development projects that enhanced collaboration and project management skills.</p>,
  }
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2022 - Present',
    location: 'BNBPot',
    title: 'Senior Fullstack Developer',
    content: (
      <ul className="list-disc list-inside">
        <li>
          Developed high-performance retail applications using <strong>React, Angular, and Node.js</strong>, enhancing front-end responsiveness and
          backend efficiency.
        </li>
        <li>
          Led the modernization of legacy systems, integrating reusable components and UI frameworks such as <strong>Material UI, Bootstrap, and Tailwind CSS</strong>, significantly improving user engagement.
        </li>
        <li>
          Spearheaded microservices development, utilizing <strong>Node.js, Express.js, and TypeScript</strong>, ensuring modularity, enhanced
          scalability, and system resilience.
        </li>
        <li>
          Built and maintained automated testing frameworks using <strong>Storybook, Jest, Mocha, and Enzyme</strong>, increasing test coverage and minimizing
          production regressions.
        </li>
        <li>
          Optimized cloud infrastructure by deploying <strong>AWS-based solutions ( EC2, Lambda, Beanstalk, RDS, S3, Route 53, SNS/SQS, API
            Gateway, Step Functions)</strong>, reducing latency and improving database reliability.
        </li>
        <li>
          Orchestrated containerized deployments with <strong>Docker and Kubernetes</strong>, streamlining CI/CD workflows and automating
          deployments with <strong>Jenkins and Azure DevOps</strong>.
        </li>
        <li>
          Mentored junior developers, guiding them on <strong>React, Redux, JavaScript, TypeScript, and Microservices best practices</strong>,
          contributing to increased team efficiency and code quality.
        </li>
      </ul>
    ),
  },
  {
    date: 'June 2019 - January 2022',
    location: 'BCForward',
    title: 'Senior Fullstack Developer',
    content: (
      <ul className="list-disc list-inside">
        <li>
          Developed and maintained full-stack web applications using <strong>React, Java (Spring Boot), and Node.js</strong>, providing scalable and
          high-performance solutions.
        </li>
        <li>
          Designed and implemented RESTful APIs using <strong>Java Spring Boot</strong>, ensuring efficient communication between frontend and
          backend services.
        </li>
        <li>
          Architected and deployed cloud-based solutions on <strong>AWS</strong>, utilizing services such as <strong>Lambda, EC2, and S3</strong>.
        </li>
        <li>
          Optimized SQL database queries for <strong>PostgreSQL and MySQL</strong>, reducing query execution times by 40% and improving application
          responsiveness.
        </li>
        <li>
          Mentored junior developers, conducting code reviews, mentoring, and implementing best practices, leading to a 25% reduction in
          production bugs.
        </li>
        <li>
          Integrated third-party services such as Stripe for payments, Firebase for authentication, and Twilio for messaging, enhancing
          application functionality.
        </li>
        <li>
          Enhanced DevOps and CI/CD pipelines, automating deployments using <strong>Jenkins, GitHub Actions, and Docker</strong>, leading to faster
          and more reliable releases.

        </li>
      </ul>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'David Wilson',
      text: 'Chris led our frontend development team with remarkable expertise in React and Angular. His implementation of Material UI and Tailwind CSS created a stunning user interface that increased our user engagement by 60%. His focus on performance optimization and clean code architecture set new standards for our development team.',
      image: 'https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg',
    },
    {
      name: 'Sarah Chen',
      text: 'Chris is an exceptional fullstack developer who transformed our legacy system into a modern, scalable application. His expertise in React and Node.js helped us achieve a 40% performance improvement. His attention to clean code and best practices made our codebase maintainable and efficient.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
    },
    {
      name: 'Michael Rodriguez',
      text: 'Working with Chris on our cloud migration project was a game-changer. His deep knowledge of AWS services and containerization with Docker and Kubernetes helped us achieve zero downtime during the transition. His ability to mentor the team on modern DevOps practices was invaluable.',
      image: 'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg',
    },
  ],
};


/**
 * Social items
 */
export const socialLinks: Social[] = [
  { label: 'Github', Icon: GithubIcon, href: 'https://github.com/bluesky-ss' },
];
