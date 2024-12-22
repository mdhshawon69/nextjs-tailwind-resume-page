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
      "Currently pursuing a Bachelor of Science in Computer Science and Engineering, I find myself immersed in a captivating journey of learning and exploration. As I navigate through the second semester, the curriculum delves into more advanced topics, building upon the foundational knowledge acquired in the initial stages of the program.",
  },
  {
    icon: AcademicCapIcon,
    title: "Diploma in Engineering - Engineering and Survey Institute",
    date: "2018 - 2022",
    children:
      "Having successfully completed my Diploma in Engineering, I am proud to have acquired a comprehensive understanding of the fundamental principles that underpin various engineering disciplines. Over the course of two to three years, I delved into subjects such as mathematics, physics, and specialized areas like mechanical, electrical, or computer engineering, depending on my chosen field.",
  },
  {
    icon: AcademicCapIcon,
    title: "Secondary School Certificate - Galaxy School and College",
    date: "2017",
    children:
      "Having completed my secondary school certificate, I feel a sense of accomplishment and readiness for the next chapter of my academic journey. Throughout these years, I've not only gained essential knowledge in various subjects but also developed valuable skills in time management, critical thinking, and collaboration.",
  },
];

const EXPERIENCE = [
  {
    icon: BriefcaseIcon,
    title: "Software Development Engineer, YY Ventures",
    date: "Dec 2022 - PRESENT",
    children:
      "As a Software Development Engineer at YY Ventures, I play a crucial role in designing, implementing, and maintaining innovative software solutions. My responsibilities span the entire software development lifecycle, from conceptualization and coding to testing, deployment, and ongoing optimization. In collaboration with a dynamic team, I engage in problem-solving and contribute to the development of cutting-edge projects that align with YY Ventures' goals. This involves not only writing efficient and scalable code but also actively participating in brainstorming sessions, code reviews, and collaborative discussions to ensure the highest quality standards in our deliverables.",
  },
  {
    icon: BriefcaseIcon,
    title: "Junior Frontend Developer, Make Real",
    date: "Jul 2021 - Dec 2023",
    children:
      "As a Junior Frontend Developer at Make Real, I actively contributed to the creation of visually appealing and user-friendly web interfaces. My role involved translating design concepts into functional and responsive websites, utilizing a combination of HTML, CSS, and JavaScript. Working closely with the design and development teams, I participated in the entire frontend development process. This included collaborating on the initial design discussions, implementing responsive layouts to ensure optimal user experiences across devices, and incorporating interactive elements to enhance overall user engagement.",
  },
  {
    icon: BriefcaseIcon,
    title: "Junior Developer, Global Digital Solutions",
    date: "Feb 2021 - May 2022",
    children:
      "As a Junior Developer at Global Digital Solutions, I played a vital role in the development and maintenance of digital solutions that contributed to the company's technological landscape. My responsibilities included working on various aspects of the software development lifecycle, from initial coding to testing and deployment. Collaborating within a dynamic team of developers, I actively participated in coding tasks, ensuring the functionality and efficiency of the software products. My role involved writing clean and maintainable code, adhering to coding standards and best practices. Engaging in regular code reviews provided valuable feedback and insights that contributed to my professional growth.",
  },
];

const SKILLS = [
  {
    icon: FireIcon,
    title: "Front-End Frameworks",
    date: "Technical Skills",
    children:
      "Competent in working with front-end frameworks such as React, Angular, or Vue.js to develop dynamic and responsive web applications with a focus on user experience.",
  },
  {
    icon: FireIcon,
    title: "Attention to Detail",
    date: "Soft Skills",
    children:
      "Meticulous attention to detail in code quality, user interface design, and testing to ensure error-free and user-friendly web applications.",
  },
  {
    icon: FireIcon,
    title: "Responsive Web Design",
    date: "Technical Skills",
    children:
      "Skilled in creating responsive layouts using CSS Grid, Flexbox, and media queries. Ensures websites adapt seamlessly to various screen sizes and devices.",
  },
  {
    icon: FireIcon,
    title: "Time Management",
    date: "Soft Skills",
    children:
      "Excellent time management skills to meet project deadlines, prioritize tasks effectively, and handle multiple projects simultaneously.",
  },
  {
    icon: FireIcon,
    title: "Back-End Frameworks ",
    date: "Technical Skills",
    children:
      "Skilled in creating backend servers using Express.js and NestJS, built on top of Node.js, reflects a comprehensive skill set in developing robust and scalable server-side applications.",
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
      "The Impact Hub Dhaka website, a testament to my web development expertise, is skillfully built using Next.js, SCSS, and the powerful features of Next.js. This modern tech stack ensures a seamless and visually engaging user experience. Leveraging Next.js for server-side rendering, coupled with the flexibility of SCSS for styling, the website combines performance with aesthetics. The incorporation of Next.js features enhances the site's functionality and keeps it at the forefront of web development. The Impact Hub Dhaka website stands as a showcase of innovation and efficiency, reflecting the capabilities of this dynamic technology combination.",
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
    title: "Grameen Telecom Trust",
    link: "https://gtctrust.vercel.app",
    children:
      "The Grameen Telecom Trust (GTT) website highlights the organization's commitment to social business and sustainable development in Bangladesh. As an initiative of the Grameen family of enterprises, GTT focuses on creating income-generating opportunities and improving livelihoods for disadvantaged communities. The website typically provides insights into their various projects, social impact programs, and collaborations aimed at promoting entrepreneurship, reducing poverty, and fostering economic empowerment. GTT's emphasis is on creating a self-sustaining ecosystem that supports social welfare while maintaining financial sustainability.",
  },
  {
    icon: GlobeAltIcon,
    title: "Grameen Distribution Limited",
    link: "https://grameen-distribution-frontend.vercel.app",
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
              onPointerLeaveCapture={undefined}>
              Education & Certifications
            </Typography>
            <Typography
              variant="lead"
              className="!text-gray-500"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
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
              onPointerLeaveCapture={undefined}>
              Experience
            </Typography>
            <Typography
              variant="lead"
              className="!text-gray-500"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
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
              onPointerLeaveCapture={undefined}>
              Skills
            </Typography>
            <Typography
              variant="lead"
              className="!text-gray-500"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
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
              onPointerLeaveCapture={undefined}>
              Projects
            </Typography>
            <Typography
              variant="lead"
              className="!text-gray-500"
              placeholder={""}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
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
