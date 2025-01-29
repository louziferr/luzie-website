"use client";

import SkillsCard from "@/components/skills_card";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <div className="h-screen flex bg-darkBlue flex-col flex-grow items-center justify-center p-8">
        <h1 className="text-white text-4xl">Luzie Ahrens</h1>
        <div className="w-full h-[10px] justify-center bg-white"></div>
        <h1 className="text-white text-4xl pt-2">Informatikerin</h1>
        <TypeAnimation
          sequence={[
            1000,
            // Same substring at the start will only be typed out once, initially
            "Webentwicklung",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Lehre",
            1000,
            "Programmierung",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="font-saira text-white text-2xl pt-8"
          repeat={Infinity}
        />
      </div>
      <h1 className="m-8 p-8 text-5xl md:text-8xl text-darkBlue">Leistungen</h1>

      <div className="grid w-full md:h-screen grid-cols-1 md:grid-cols-3">
        <SkillsCard
          headline="Web-Entwicklung"
          subheadline="Deine Website"
          keywords={["Individuell.", "Elegant.", "Responsiv."]}
          color="#3B8986"
          image="svg/imac.svg"
          link="/webentwicklung"
        />
        <SkillsCard
          headline="Lehre"
          subheadline="Dein Format"
          keywords={["Kurse.", "Workshops.", "Seminare."]}
          color="#C1666B"
          image="svg/pencil.svg"
          link="/lehre"
        />
        <SkillsCard
          headline="Programmieren"
          subheadline="Deine Lösung"
          keywords={["Datenverarbeitung.", "Machine Learning.", "Grafiken."]}
          color="#4281A4"
          image="svg/chart-pie.svg"
          link="/programmieren"
        />
      </div>
    </>
  );
}
