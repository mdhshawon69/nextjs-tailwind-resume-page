"use client";
import { Typography } from "@material-tailwind/react";
import {
  AcademicCapIcon,
  BriefcaseIcon,
  FireIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";

import InfoCard from "@/components/info-card";

const EDUCATION = [
  {
    icon: AcademicCapIcon,
    title: "Bachelor of Science in Computer Science - BUBT",
    date: "2023 - PRESENT",
    children:
      "Currently pursuing a Bachelor of Science in Computer Science and Engineering, immersed in a journey of learning and exploration. The curriculum delves into advanced topics, building upon the foundational knowledge acquired in the initial stages of the program.",
  },
  {
    icon: AcademicCapIcon,
    title: "Diploma in Engineering - Engineering and Survey Institute, Rajshahi",
    date: "Jan 2022",
    children:
      "Completed Diploma in Engineering with a GPA of 3.54/4.00. Acquired a comprehensive understanding of fundamental engineering principles including mathematics, physics, and specialized areas in computer engineering, building a strong technical foundation for a career in software development.",
  },
];

const EXPERIENCE = [
  {
    icon: BriefcaseIcon,
    title: "Senior Software Engineer, Al Aqsa Express",
    date: "Nov 2025 - PRESENT",
    children:
      "Lead React Native mobile app development for logistics ecosystem serving thousands of users across iOS and Android. Architect real-time tracking, delivery workflows, and route optimization with Redux Toolkit and native modules. Optimize performance achieving 60 FPS animations, 40% reduced bundle size, and 35% faster cold start times. Enhanced software functionality by identifying and resolving complex technical issues. Mentored junior developers, fostering professional growth and enhancing team productivity.",
  },
  {
    icon: BriefcaseIcon,
    title: "Software Development Engineer, YY Ventures - Dhaka",
    date: "Dec 2022 - Dec 2024",
    children:
      "Architected full-stack applications with Next.js and NestJS handling 100,000+ monthly active users. Built responsive UIs with advanced search, filtering, and data visualization using Redux Toolkit and React Hook Form. Achieved 90+ Lighthouse scores through code splitting, lazy loading, and optimization techniques. Optimized software performance by implementing efficient algorithms and code optimizations. Designed scalable architecture for applications to easily accommodate future growth in user base or functionality expansion.",
  },
  {
    icon: BriefcaseIcon,
    title: "Frontend Developer, Make Real - Rajshahi",
    date: "Aug 2022 - Nov 2022",
    children:
      "Developed React applications with Redux Toolkit, React Hook Form, and Zod schema validation. Optimized performance using memoization techniques reducing re-renders by 70%. Utilized HTML, CSS, and JavaScript to create visually appealing and responsive web pages that met client requirements. Coded using HTML, CSS, and JavaScript to develop features for both mobile and desktop platforms.",
  },
  {
    icon: BriefcaseIcon,
    title: "Junior Frontend Developer, Global Digital Solutions - Dhaka",
    date: "Feb 2020 - Jun 2022",
    children:
      "Converted design mockups into responsive React components with modern JavaScript ES6+ and semantic HTML/CSS. Integrated RESTful APIs with comprehensive error handling and implemented WCAG accessibility guidelines. Worked closely alongside UX/UI designers to create seamless and visually appealing user interfaces by translating wireframes into functional HTML, CSS, and JavaScript code. Collaborated with the design team to convert mockups into fully functional web pages, ensuring seamless user interfaces.",
  },
];

const SKILLS = [
  {
    icon: FireIcon,
    title: "Mobile Development",
    date: "Technical Skills",
    children:
      "React Native, Expo, and Native Modules for building high-performance cross-platform mobile applications with native-level performance and seamless user experiences across iOS and Android.",
  },
  {
    icon: FireIcon,
    title: "Frontend Development",
    date: "Technical Skills",
    children:
      "React.js, Next.js, TypeScript, and JavaScript for building dynamic, responsive, and scalable web applications with modern UI/UX patterns and server-side rendering capabilities.",
  },
  {
    icon: FireIcon,
    title: "Backend Development",
    date: "Technical Skills",
    children:
      "Node.js, NestJS, Express.js, RESTful APIs, and Redis for building robust, scalable server-side applications with efficient data handling and caching strategies.",
  },
  {
    icon: FireIcon,
    title: "State Management & Validation",
    date: "Technical Skills",
    children:
      "Redux Toolkit, React Hook Form, and Zod for managing complex application state, building performant forms, and implementing type-safe schema validation.",
  },
  {
    icon: FireIcon,
    title: "Styling & UI",
    date: "Technical Skills",
    children:
      "Tailwind CSS and Styled Components for creating beautiful, responsive, and maintainable user interfaces with utility-first and component-scoped styling approaches.",
  },
  {
    icon: FireIcon,
    title: "Developer Tools",
    date: "Technical Skills",
    children:
      "Git, VS Code, Webpack, and Vite for version control, efficient development workflows, and optimized build processes with modern bundling and hot module replacement.",
  },
];

const PROJECTS = [
  {
    icon: GlobeAltIcon,
    title: "YY Ventures",
    link: "https://yy.ventures",
    children:
      "The YY Ventures website, a testament to my expertise in web development, was crafted with precision using Next.js, SCSS, and the cutting-edge features of Next.js 13. This modern tech stack allowed me to create a highly responsive and visually appealing site. Leveraging the power of Next.js for server-side rendering and seamless navigation, coupled with the expressive capabilities of SCSS for styling, the website boasts a smooth and engaging user experience.",
  },
  {
    icon: GlobeAltIcon,
    title: "Grameen Trust",
    link: "https://grameentrust.org",
    children:
      "The Grameen Trust website, meticulously crafted by me, is a testament to the power of Next.js, SCSS, and the cutting-edge features of Next.js 13. The seamless integration of Next.js ensures a fast, dynamic, and user-friendly experience. SCSS brings a touch of elegance with its flexible styling, enhancing the visual appeal of the website. Harnessing the latest capabilities of Next.js 12 ensures that the Grameen Trust website remains on the forefront of web development, offering both optimal performance and innovative features. This technological synergy results in a sleek and modern online presence for Grameen Trust.",
  },
  {
    icon: GlobeAltIcon,
    title: "Grameen Kalyan",
    link: "https://grameenkalyan.com",
    children:
      "The Grameen Kalyan website, a product of my expertise, stands as a dynamic and user-centric platform built with Next.js, SCSS, and the cutting-edge features of Next.js 13. The synergy of Next.js provides a seamless and performant user experience, while SCSS adds a touch of style and responsiveness to the site's design. Leveraging the advancements of Next.js 13 ensures that the website stays ahead in terms of technology and features. The Grameen Kalyan website, with its modern design and functionality, is a testament to the innovative possibilities of this tech stack.",
  },
  {
    icon: GlobeAltIcon,
    title: "Imapact Hub Dhaka",
    link: "https://dhaka.impacthub.net",
    children:
      "The Impact Hub Dhaka website, a testament to my web development expertise, is skillfully built using Next.js, TailwindCSS, and the powerful features of Next.js 15. This modern tech stack ensures a seamless and visually engaging user experience. Leveraging Next.js for server-side rendering, coupled with the flexibility of TailwindCSS for styling, the website combines performance with aesthetics. The incorporation of Next.js features enhances the site's functionality and keeps it at the forefront of web development. The Impact Hub Dhaka website stands as a showcase of innovation and efficiency, reflecting the capabilities of this dynamic technology combination.",
  },
  {
    icon: GlobeAltIcon,
    title: "3Zero Club",
    link: "https://3zero.club",
    children:
      "As the steward of the 3Zero Club website, meticulously crafted with Angular, my role involves ensuring its continued excellence and functionality. Angular's robust framework provides a solid foundation for a seamless user experience, and my ongoing maintenance involves optimizing performance, updating content, and implementing any necessary enhancements. With a commitment to keeping the website current and responsive, I strive to uphold the 3Zero Club's online presence, ensuring it remains a dynamic platform for its audience.",
  },
  {
    icon: GlobeAltIcon,
    title: "Grameen Telecom",
    link: "https://grameentelecom.net.bd",
    children:
      "The Grameen Telecom website provides information about the company, which is a social enterprise based in Bangladesh. It focuses on leveraging telecommunications technology to empower rural communities and promote socio-economic development. Grameen Telecom is known for its innovative initiatives aimed at expanding mobile phone access to underserved populations, supporting micro-entrepreneurs, and contributing to poverty alleviation. The website typically features details on the organization's projects, achievements, and its role in facilitating digital inclusion and community support in line with its social business model.",
  },
  {
    icon: GlobeAltIcon,
    title: "Grameen Distribution Limited E-commerce",
    link: "https://grameendistribution.com/shop",
    children:
      "The Grameen Distribution Limited E-commerce platform represents a significant digital transformation initiative, built using Next.js and modern web technologies. This comprehensive online marketplace serves as a digital bridge, connecting rural communities with essential products and services. The platform features an intuitive user interface, secure payment gateways, and a robust inventory management system. It enables customers to browse and purchase a wide range of products including health supplies, energy solutions, and consumer goods. The e-commerce solution incorporates advanced features such as real-time inventory tracking, order management, and delivery status updates, all while maintaining the organization's commitment to social impact and sustainable business practices.",
  },
  {
    icon: GlobeAltIcon,
    title: "Grameen Distribution Limited",
    link: "https://grameendistribution.com",
    children:
      "The Grameen Distribution Limited website showcases the company's mission to enhance access to essential products and services in rural and underserved areas of Bangladesh. As part of the Grameen family, this enterprise distributes a range of goods, including health, energy, and consumer products, aimed at improving the quality of life for low-income communities. The website typically features information about their distribution network, partnerships, and initiatives that promote socio-economic development and sustainability. Grameen Distribution Limited is committed to bridging gaps in the supply chain and fostering a positive social impact through responsible business practices.",
  },
  {
    icon: GlobeAltIcon,
    title: "Ooroh",
    link: "https://ooroh.com",
    children:
      "The Ooroh website, developed with the latest Next.js framework, boasts a sleek and interactive user interface enhanced by advanced animations and seamless navigation. Its design focuses on delivering an engaging and visually captivating experience, combining cutting-edge web technologies for fast performance, smooth transitions, and responsive layouts that elevate user interaction.",
  },
  {
    icon: GlobeAltIcon,
    title: "Grameen Telecom Trust",
    link: "https://gtctrust.com",
    children:
      "Built a dynamic and user-friendly website for Grameen Telecom Trust (GTT) using the MERN stack. The platform effectively showcases GTT’s mission of implementing and facilitating Social Business ideas to drive societal transformation. Designed for scalability and seamless user experience, the website integrates key features to support GTT’s initiatives and engagement.",
  },
  {
    icon: GlobeAltIcon,
    title: "Social Business Youth Summit",
    link: "https://summit.yy.ventures",
    children:
      "The Social Business Youth Summit (SBYS) is an annual gathering of young changemakers, entrepreneurs, and social innovators dedicated to driving positive social impact through business. This event serves as a platform to inspire, connect, and empower youth to address pressing global challenges using the principles of social business. The summit features interactive workshops, keynote speeches by renowned social entrepreneurs, networking opportunities, and panel discussions on diverse topics such as sustainability, innovation, and community development. Participants gain valuable insights into building impactful enterprises, leveraging creative solutions for social good, and collaborating across sectors to create a more inclusive and equitable world.",
  },
];

export function InformationSection() {
  return (
    <section className="pb-28 px-8">
      <div className="grid xl:grid-cols-2 md:grid-cols-1 container gap-20 mx-auto items-start">
        <div>
          <div className="mb-10">
            <Typography
              color="blue-gray"
              className="mb-2 text-3xl font-bold"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Education & Certifications
            </Typography>
            <Typography
              variant="lead"
              className="!text-gray-500"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              See my education history.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {EDUCATION.map((props, idx) => (
              <InfoCard link={""} key={idx} {...props} />
            ))}
          </div>
        </div>
        <div>
          <div className="mb-10">
            <Typography
              color="blue-gray"
              className="mb-2 text-3xl font-bold"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Experience
            </Typography>
            <Typography
              variant="lead"
              className="!text-gray-500"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              See my experience as a developer.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12">
            {EXPERIENCE.map((props, idx) => (
              <InfoCard link={""} key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
      <div className="container gap-20 mt-36 mx-auto items-center">
        <div>
          <div className="mb-10">
            <Typography
              color="blue-gray"
              className="mb-2 text-3xl font-bold"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Skills
            </Typography>
            <Typography
              variant="lead"
              className="!text-gray-500"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Check out my technical and soft skills.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
            {SKILLS.map((props, idx) => (
              <InfoCard link={""} key={idx} {...props} />
            ))}
          </div>
        </div>
        <div>
          <div className="mt-20">
            <Typography
              color="blue-gray"
              className="mb-2 text-3xl font-bold"
              placeholder={""}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Projects
            </Typography>
            <Typography
              variant="lead"
              className="!text-gray-500"
              placeholder={""}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >
              Check out some of my projects.
            </Typography>
          </div>
          <div className="container mx-auto grid grid-cols-1 gap-16 gap-y-12 lg:grid-cols-2">
            {PROJECTS.map((props, idx) => (
              <InfoCard date={""} key={idx} {...props} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default InformationSection;
