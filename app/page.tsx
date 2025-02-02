"use client";

import SkillsCard from "@/components/skills_card";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <>
      <div className="h-screen flex bg-blue-comp flex-col flex-grow items-center justify-center p-8">
        <h1 className="text-white text-4xl animate-fade-down animate-delay-200">
          Luzie Ahrens
        </h1>
        <div className="w-full h-[10px] justify-center bg-white"></div>
        <h1 className="text-white text-2xl pt-2 animate-fade-up animate-delay-500">
          Informatikerin
        </h1>
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

      <h1 className="m-8 pt-8 text-3xl md:text-6xl text-darkBlue">
        Leistungen
      </h1>

      <div className="flex items-center justify-center">
        <div className="max-w-screen-md p-4">
          <p className="md:text-center">
            Ob moderne Webentwicklung, individuelle Softwarelösungen, oder
            praxisnahe IT-Kurse – ich biete maßgeschneiderte Lösungen für
            diverse Anforderungen im Bereich der Informatik.
            <br />
            <br />
            Meine Lösungen können an viele Settings angepasst und auf diverse
            Bedürfnisse zugeschnitten werden.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="max-w-screen-xl grid w-full grid-cols-1 md:grid-cols-3">
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
            headline="Programmierung"
            subheadline="Deine Lösung"
            keywords={["Datenverarbeitung.", "Machine Learning.", "Grafiken."]}
            color="#4281A4"
            image="svg/chart-pie.svg"
            link="/programmierung"
          />
        </div>
      </div>

      <div className="h-[5px] bg-blue shadow-md shadow-blue"></div>

      <h1 className="pt-8 text-2xl md:text-5xl text-blue">Anfragen</h1>
      <section className="flex items-center justify-center">
        <div className="max-w-[1500px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <div className="m-8">
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Wenn du meine Unterstützung in Anspruch nehmen möchtest oder
                  Fragen hast, melde dich gerne bei mir. Gemeinsam finden wir
                  die passende Lösung für dein Anliegen – sei es Webentwicklung,
                  Softwarelösungen oder Informatik-Unterricht. Ich freue mich
                  auf deine Nachricht!
                </p>
              </div>
              <div className="m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[100px] w-full animate-wiggle object-scale-down"
                  src="svg/hand-shake.svg"
                  alt="hand shake"
                />
              </div>
            </div>

            <div className="m-8 flex flex-col items-center justify-center">
              <Link
                href="/kontakt"
                className="py-2 px-3 bg-blue rounded md:text-xl text-white transition ease-in hover:scale-110"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
