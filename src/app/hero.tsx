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
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}>
            Mahmudul Haque
          </Typography>
          <Typography
            variant="h4"
            color="gray"
            className="mt-2"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}>
            JavaScript Developer
          </Typography>
          <Typography
            variant="lead"
            color="gray"
            className="mt-4 mb-12 w-full md:max-w-full lg:max-w-4xl"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}>
            JavaScript Developer with 5+ years of expertise building scalable
            web and mobile applications. Specialized in React Native mobile
            development for logistics ecosystems, with strong full-stack
            capabilities in React.js, Next.js, NestJS, and Node.js. Proven
            track record delivering high-performance applications with
            optimized user experiences.
          </Typography>
          <Typography
            className="mt-12 mb-4 text-blue-gray-900 font-medium uppercase"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
            onResize={undefined}
            onResizeCapture={undefined}>
            Connect me on:
          </Typography>
          <div className="gap-2 lg:flex">
            <IconButton
              variant="text"
              color="gray"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}>
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
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}>
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
              onPointerLeaveCapture={undefined}
              onResize={undefined}
              onResizeCapture={undefined}>
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
