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
  description: 'Fullstack developer with a passion for building scalable, high-performance web applications.',
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
  name: `Chris Miloyevic`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        Hi there! I've been a Full-Stack developer / eCommerce expert for over 15+ years now. Clients often
        return not just for the quality of the work, but for how smooth and collaborative the process is. I care deeply
        about getting things right, keeping communication clear, and always delivering on time.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I absolutely love what I do and if I can't do it, I will be honest about it. If you're looking for a dependable,
        easy-to-work-with developer, I'd love to hear more about your project.
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
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I am an expert with Shopify and WooCommerce e-commerce builds - from scratch, theme-based, or headless setups. I've worked on solutions for both B2B and B2C clients. Whether you need a conversion-optimized storefront, advanced API integrations, or help troubleshooting a stubborn checkout issue, I deliver fast, clean, and user-friendly solutions.`,
  aboutItems: [
    {label: 'Location', text: 'Bargara QL, Australia', Icon: MapIcon},
    {label: 'Age', text: '36', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Australian', Icon: FlagIcon},
    {label: 'Interests', text: 'Skydiving, Cooking', Icon: SparklesIcon},
    {label: 'Education', text: 'Griffith University', Icon: AcademicCapIcon},
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
        name: 'Shopify',
        level: 10,
      },
      {
        name: 'WooCommerce',
        level: 10,
      },
      {
        name: 'React',
        level: 10,
      },
      {
        name: 'Next.js',
        level: 9.6,
      },
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
        name: 'Sass/Scss',
        level: 10,
      },
      {
        name: 'Material UI',
        level: 9,
      },
    ],
  },
  {
    name: 'DevOps',
    skills: [
      {
        name: 'AWS',
        level: 9,
      },
      {
        name: 'Docker',
        level: 9,
      },
      {
        name: 'Kubernetes',
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
    title: 'Shopify Theme Customization & Cross-Device Optimization, Klaviyo Integration',
    description: '',
    url: 'https://unravelled.store/',
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
    title: 'Shopify Plus Custom BuyBox with Subscription & Third party app integration',
    description: '',
    url: 'https://nourishednaturalhealth.com/',
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
    content: (
      <p>
        Completed a comprehensive program in I.T. with focus on software development. Gained strong foundations in
        computer science fundamentals, data structures, and algorithms. Developed expertise in both frontend and backend
        technologies through practical projects. Key coursework included web development, database management, software
        engineering principles, and system architecture. Participated in team-based development projects that enhanced
        collaboration and project management skills.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'November 2024 - Present',
    location: 'Freelance at Upwork',
    title: 'eCommerce / Full-Stack Expert',
    content: (
      <ul className="list-disc list-inside">
        <li>
          Specializing in <strong>Shopify Plus and WooCommerce</strong> e-commerce builds, from scratch, theme-based, or
          headless setups.
        </li>
        <li>
          Expertise in building conversion-optimized storefronts, advanced API integrations, and troubleshooting
          checkout issues.
        </li>
        <li>
          Focus on delivering fast, clean, and user-friendly solutions with a strong emphasis on performance and
          scalability.
        </li>
      </ul>
    ),
  },
  {
    date: 'January 2022 - November 2024',
    location: 'BNBPot',
    title: 'Senior Fullstack Developer',
    content: <></>,
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Jocelyn',
      text: 'Chris played a pivotal role in elevating our Shopify store. His deep understanding of eCommerce and Shopify customization helped us launch new features quickly and seamlessly. Our sales and customer satisfaction both improved thanks to his expertise and proactive communication.',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg',
    },
    {
      name: 'Liam Patel',
      text: 'We partnered with Chris to overhaul our Shopify storefront, and the results were outstanding. His ability to implement custom features and optimize our site for conversions made a measurable impact on our business. Chris is a true Shopify expert and a pleasure to work with.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg',
    },
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
export const socialLinks: Social[] = [{label: 'Github', Icon: GithubIcon, href: 'https://github.com/chrismiloyevic'}];
