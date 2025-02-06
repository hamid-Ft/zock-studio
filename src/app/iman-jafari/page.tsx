"use client";
import React from "react";
import Image from "next/image";

import TextPressure from "./_components/TextPressure/TextPressure";
import ShinyText from "./_components/ShinyText/ShinyText";

export default function Home() {
  return (
    <main className="bg-zinc-950 p-6 h-screen">
      <div className="my-10 z-40 relative">
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

      <div className="">
        <Image
          alt="react-logo"
          width={600}
          height={400}
          src="/iman/react.png"
          className="w-[500px] fixed bottom-10 -right-36 blur-md"
        />
      </div>
      <div className="">
        <Image
          alt="next-logo"
          width={600}
          height={400}
          src="/iman/next.png"
          className="w-[500px] fixed -top-10 -left-32 blur-md "
        />
      </div>
      <div className="text-center">
        <ShinyText
          text="projects !"
          disabled={false}
          speed={2.5}
          className="custom-class "
        />
      </div>
    </main>
  );
}
