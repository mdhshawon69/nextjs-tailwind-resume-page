/* eslint-disable react/no-unescaped-entities */
"use client";

import { IconButton, Typography } from "@material-tailwind/react";
import Script from "next/script";

function Hero() {
  return (
    <div className="relative w-full">
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-628HDSXSND"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-628HDSXSND');
        `}
      </Script>
      <div className="grid place-items-center min-h-[92vh] px-8">
        <div className="container mx-auto grid place-items-center h-max text-center">
          <Typography
            variant="h1"
            color="blue-gray"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}>
            Mahmudul Haque
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="mt-4 mb-12 w-full md:max-w-full lg:max-w-4xl"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}>
            Welcome to my digital space! Here, you'll discover a showcase of my
            passion and proficiency in the world of technology and design.
            Explore the projects that reflect my journey, skills, and commitment
            to creating innovative solutions. From code to creativity, I invite
            you to explore the intersection of my skills and aspirations. Enjoy
            the journey through my portfolio!
          </Typography>
          <Typography
            className="mt-12 mb-4 text-blue-gray-900 font-medium uppercase"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}>
            Connect me on:
          </Typography>
          <div className="gap-2 lg:flex">
            <IconButton
              variant="text"
              color="gray"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              <a
                href="https://www.facebook.com/profile.php?id=100004614645933"
                target="_blank">
                <i className="fa-brands fa-facebook text-lg" />
              </a>
            </IconButton>
            <IconButton
              variant="text"
              color="gray"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              <a
                href="https://www.linkedin.com/in/mahmudul-haque-b1486a252/"
                target="_blank">
                <i className="fa-brands fa-linkedin text-lg" />
              </a>
            </IconButton>
            <IconButton
              variant="text"
              color="gray"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}>
              <a href="https://github.com/mdhshawon69" target="_blank">
                <i className="fa-brands fa-github text-lg" />
              </a>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
