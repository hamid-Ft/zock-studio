"use client";
import React, { useEffect, useRef } from "react";
import Image from "next/image";
import ShinyText from "./_components/ShinyText/ShinyText";
import FallingText from "./_components/FallingText/FallingText";

import { useScroll } from "framer-motion";
import Lenis from "lenis";

import Card from "./_components/Card";
import Contact from "./_components/Contact";

import { projects } from "../../../constance";
import dynamic from "next/dynamic";

const TextPressure = dynamic(
  () => import("./_components/TextPressure/TextPressure"),
  {
    ssr: false,
  }
);

export default function Home() {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: any) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  });

  return (
    <main className=" bg-zinc-950 p-6 h-screen">
      <section className="w-[80%] mx-auto">
        <div className="my-5 z-40 relative">
          <TextPressure
            text="front-end-developer"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            minFontSize={36}
          />
        </div>

        <div>
          <Image
            alt="react-logo"
            width={600}
            height={400}
            src="/iman/react.png"
            className="w-[500px] fixed bottom-10 -right-36 blur-md"
          />
        </div>
        <div>
          <Image
            alt="next-logo"
            width={600}
            height={400}
            src="/iman/next.png"
            className="w-[500px] fixed -top-10 -left-32 blur-md "
          />
        </div>

        <div>
          <FallingText
            text={`Html Css Sass Tailwind Mui Shadcn Javascript Typescript Git Github React Next Redux Zustand Leaflet react-query react-table Docker Drizzle`}
            highlightWords={[
              "Css",
              "Tailwind",
              "Shadcn",
              "Typescript",
              "Github",
              "Zustand",
              "React",
              "Drizzle",
              "react-query",
            ]}
            highlightClass="highlighted"
            trigger="click"
            backgroundColor="transparent"
            wireframes={false}
            gravity={0.2}
            fontSize="1.5rem"
            mouseConstraintStiffness={0.1}
          />
        </div>

        <div className="text-center absolute bottom-20 left-1/2 transform -translate-x-1/2">
          <ShinyText text="projects !" disabled={false} speed={1.7} />
        </div>

        <Contact />
        <div className="mt-[50vh]" ref={container}>
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={project.id}
                {...project}
                i={i}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
