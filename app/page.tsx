"use client";

import SkillsCard from "@/components/skills_card";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

export default function Home() {
  return (
    <>
      <div className="h-screen flex bg-blue-comp flex-col flex-grow items-center justify-center p-8">
        <h1 className="text-white text-4xl pb-2 animate-fade-down animate-delay-200">
          Luzie Ahrens
        </h1>
        <div className="w-full h-[5px] justify-center bg-white animate-jump-in animate-delay-200"></div>
        <h1 className="font-saira text-white text-2xl pt-2 animate-fade-up animate-delay-500">
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

      <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
        <h1 className="m-8 pt-8 text-4xl md:text-6xl text-darkBlue">
          Leistungen
        </h1>
      </ScrollAnimation>

      <div className="flex items-center justify-center">
        <div className="max-w-screen-md p-4">
          <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
            <p className="text-center">
              Mit einem Hintergrund in der Computerlinguistik und Audiotechnik
              sowie langjähriger Erfahrung im Programmieren bin ich heute
              freiberuflich in verschiedenen Gebieten der Informatik tätig.
              <br />
              <br />
              Derzeit konzentriere ich mich insbesondere auf drei Schwerpunkte:
              Die <b>Lehre</b>, die <b>Webentwicklung</b> und die allgemeine{" "}
              <b>Programmierung</b>.
              <br />
              <br />
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-[15%_75%] gap-8">
            <div className="flex items-center justify-center w-full order-2 md:order-1">
              <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
                <div className="animate-grow-little flex items-center justify-center w-[80px] h-[80px] m-4 bg-red rounded p-4 shadow-lg shadow-red">
                  <img src="svg/pencil.svg" alt="pencil" />
                </div>
              </ScrollAnimation>
            </div>
            <div className="order-1 md:order-2">
              <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                <Link href="/lehre">
                  <h1 className="text-red text-left text-lg md:text-xl underline-offset-8 mb-2 underline underline-red">
                    Lehre
                  </h1>
                </Link>
                <p>
                  Durch meine bisherige Lehrtätigkeit an Universitäten, Schulen
                  und Ausbildungsinstituten habe ich gelernt, komplexe Themen
                  der Informatik verständlich zu vermitteln und zielgerichtete
                  Kurse zu entwickeln.
                </p>
              </ScrollAnimation>
            </div>

            <div className="flex items-center justify-center w-full order-4 md:order-3">
              <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
                <div className="animate-grow-little flex items-center justify-center w-[80px] h-[80px] m-4 bg-green rounded p-4 shadow-lg shadow-green">
                  <img src="svg/imac.svg" alt="pencil" />
                </div>
              </ScrollAnimation>
            </div>
            <div className="order-3 md:order-4  mt-4">
              <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                <Link href="/webentwicklung">
                  <h1 className="mb-2 text-green text-left text-lg md:text-xl  underline-offset-8 underline underline-green">
                    Webentwicklung
                  </h1>
                </Link>
                <p>
                  Meine Erfahrung in der Webentwicklung habe ich durch
                  verschiedene berufliche Tätigkeiten aufgebaut. Heute erstelle
                  ich moderne, maßgeschneiderte Websites und Webanwendungen.
                  Dabei setze ich auf aktuelle Technologien, um performante und
                  benutzerfreundliche Lösungen zu entwickeln.
                </p>
              </ScrollAnimation>
            </div>

            <div className="flex items-center justify-center w-full order-6 md:order-5">
              <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
                <div className="animate-grow-little flex items-center justify-center w-[80px] h-[80px] m-4 bg-blue rounded p-4  shadow-lg shadow-blue">
                  <img src="svg/chart-pie.svg" alt="pencil" />
                </div>
              </ScrollAnimation>
            </div>
            <div className="order-5 md:order-6 mt-4">
              <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                <Link href="/programmierung">
                  <h1 className="text-blue text-left text-lg mb-2 md:text-xl underline-offset-8 underline underline-blue">
                    Programmierung
                  </h1>
                </Link>
                <p>
                  Als Software-Entwicklerin wende ich theoretisches Wissen aus
                  der Informatik an und erstelle Lösungen für diverse
                  Anforderungen. Meine besonderen Stärken liegen in der
                  Datenverarbeitung, im maschinellen Lernen sowie in der
                  Entwicklung von Bibliotheken.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
        <div className="h-[5px] bg-blue shadow-md shadow-blue mt-[40px] mb-[40px] md:m-[80px]"></div>
      </ScrollAnimation>
      <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
        <h2 className="text-center font-anta pt-8 text-3xl md:text-5xl text-darkBlue">
          Mehr erfahren!
        </h2>
      </ScrollAnimation>
      <div className="flex items-center justify-center">
        <div className="max-w-screen-xl grid w-full grid-cols-1 md:grid-cols-3">
          <div className="order-2 md:order-1">
            <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
              <SkillsCard
                headline="Web-Entwicklung"
                subheadline="Deine Website"
                keywords={["Individuell.", "Elegant.", "Responsiv."]}
                color="#3B8986"
                image="svg/imac.svg"
                link="/webentwicklung"
              />
            </ScrollAnimation>
          </div>
          <div className="order-1 md:order-2">
            <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
              <SkillsCard
                headline="Lehre"
                subheadline="Dein Format"
                keywords={["Kurse.", "Workshops.", "Seminare."]}
                color="#C1666B"
                image="svg/pencil.svg"
                link="/lehre"
              />
            </ScrollAnimation>
          </div>

          <div className="order-3">
            <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
              <SkillsCard
                headline="Programmierung"
                subheadline="Deine Lösung"
                keywords={[
                  "Datenverarbeitung.",
                  "Machine Learning.",
                  "Visualisierung.",
                ]}
                color="#4281A4"
                image="svg/chart-pie.svg"
                link="/programmierung"
              />
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
        <div className="h-[5px] bg-blue shadow-md shadow-blue mt-[40px] mb-[40px] md:m-[80px]"></div>
      </ScrollAnimation>
      <section className="flex items-center justify-center">
        <div className="max-w-[1300px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                <div className="m-8 ">
                  <p className="text-blue mt-8 font-anta text-[20px] text-left mb-4 md:text-4xl">
                    Melde dich!
                  </p>
                  <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                  <p>
                    Wenn du meine Unterstützung in Anspruch nehmen möchtest oder
                    Fragen hast, melde dich gerne bei mir. Gemeinsam finden wir
                    die passende Lösung für dein Anliegen – sei es
                    Webentwicklung, Softwarelösungen oder Informatik-Unterricht.
                    Ich freue mich auf deine Nachricht!
                  </p>
                </div>
              </ScrollAnimation>
              <div className="m-8 flex flex-col items-center justify-center">
                <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                  <img
                    className="h-[80px] w-full animate-wiggle object-scale-down"
                    src="svg/hand-shake.svg"
                    alt="hand shake"
                  />
                </ScrollAnimation>
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
