"use client";

import SkillsCard from "@/components/skills_card";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

export default function Home() {
  return (
    <>
      <div className="h-screen flex bg-blue-comp flex-col flex-grow items-center justify-center p-8 border-b-2 border-dotted border-white">
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

      <div className="bg-black pt-10">
        <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
          <div className="relative flex justify-center items-center mb-10">
            <div className="hidden md:block absolute top-[39%] md:top-[25%] rotate-2 w-[52%] h-[70px] bg-darkBlue bg-opacity-50"></div>
            <div className="absolute top-[43%] md:top-[29%] -rotate-2 w-[50%] h-[80px] bg-darkBlue bg-opacity-50"></div>
            <div className="hidden md:block absolute top-[35%] md:top-[47%] -rotate-3 w-[50%] h-[80px] bg-darkBlue bg-opacity-50"></div>
            <div className="absolute top-[47%] rotate-4 pl-2 w-[53%] h-[80px] bg-darkBlue bg-opacity-50"></div>
            <h1 className="text-white z-30 text-[40px] lg:text-[70px] text-center pt-14 md:pt-8 m-8">
              Leistungen
            </h1>
          </div>
        </ScrollAnimation>

        <div className="flex items-center justify-center">
          <div className="max-w-screen-md p-4">
            <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
              <p className="text-center text-white">
                Mit einem Hintergrund in der Computerlinguistik und Audiotechnik
                sowie langjähriger Erfahrung im Programmieren bin ich heute
                freiberuflich in verschiedenen Gebieten der Informatik tätig.
                <br />
                <br />
                Derzeit konzentriere ich mich insbesondere auf drei
                Schwerpunkte: die <b>Lehre</b>, die <b>Webentwicklung</b> und
                die allgemeine <b>Programmierung</b>.
                <br />
                <br />
              </p>
            </ScrollAnimation>
            <div className="grid grid-cols-1 md:grid-cols-[15%_75%] gap-8">
              <div className="flex items-center justify-center w-full order-2 md:order-1">
                <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
                  <div className="animate-grow-little flex items-center justify-center w-[80px] h-[80px] m-4 bg-red rounded p-4 shadow-lg shadow-red">
                    <img src="/svg/pencil.svg" alt="pencil" />
                  </div>
                </ScrollAnimation>
              </div>
              <div className="order-1 md:order-2">
                <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                  <Link href="/lehre">
                    <h1 className="max-w-[200px] text-white bg-red text-left text-lg md:text-xl underline-offset-8 mb-2 underline underline-red rounded-md p-2">
                      Lehre
                    </h1>
                  </Link>
                  <p className="text-white">
                    Durch meine bisherige Lehrtätigkeit an Universitäten,
                    Schulen und Ausbildungsinstituten habe ich gelernt, komplexe
                    Themen der Informatik verständlich zu vermitteln und
                    zielgerichtete Kurse zu entwickeln.
                  </p>
                </ScrollAnimation>
              </div>

              <div className="flex items-center justify-center w-full order-4 md:order-3">
                <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
                  <div className="animate-grow-little flex items-center justify-center w-[80px] h-[80px] m-4 bg-green rounded p-4 shadow-lg shadow-green">
                    <img src="/svg/imac.svg" alt="pencil" />
                  </div>
                </ScrollAnimation>
              </div>
              <div className="order-3 md:order-4  mt-4">
                <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                  <Link href="/webentwicklung">
                    <h1 className="max-w-[200px] mb-2 bg-green text-white text-left text-lg md:text-xl underline-offset-8 underline underline-green rounded-md p-2">
                      Webentwicklung
                    </h1>
                  </Link>
                  <p className="text-white">
                    Meine Erfahrung in der Webentwicklung habe ich durch
                    verschiedene berufliche Tätigkeiten aufgebaut. Heute
                    erstelle ich moderne, maßgeschneiderte Websites und
                    Webanwendungen. Dabei setze ich auf aktuelle Technologien,
                    um performante und benutzerfreundliche Lösungen zu
                    entwickeln.
                  </p>
                </ScrollAnimation>
              </div>

              <div className="flex items-center justify-center w-full order-6 md:order-5">
                <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
                  <div className="animate-grow-little flex items-center justify-center w-[80px] h-[80px] m-4 bg-blue rounded p-4 shadow-lg shadow-blue">
                    <img src="/svg/chart-pie.svg" alt="pencil" />
                  </div>
                </ScrollAnimation>
              </div>
              <div className="order-5 md:order-6 mt-4">
                <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                  <Link href="/programmierung">
                    <h1 className="max-w-[200px] bg-blue text-white text-left text-lg mb-2 md:text-xl underline-offset-8 underline underline-blue rounded-md p-2">
                      Programmierung
                    </h1>
                  </Link>
                  <p className="text-white">
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
          <div className="relative flex justify-center items-center mb-10">
            <div className="hidden md:block absolute top-[39%] md:top-[25%] rotate-2 w-[52%] h-[70px] bg-darkBlue bg-opacity-50"></div>
            <div className="absolute top-[43%] md:top-[29%] -rotate-2 w-[50%] h-[80px] bg-darkBlue bg-opacity-50"></div>
            <div className="hidden md:block absolute top-[35%] md:top-[47%] -rotate-3 w-[50%] h-[80px] bg-darkBlue bg-opacity-50"></div>
            <div className="absolute top-[47%] rotate-4 pl-2 w-[53%] h-[80px] bg-darkBlue bg-opacity-50"></div>
            <h1 className="text-white z-30 text-center pt-14 md:pt-8 m-8 font-anta text-3xl md:text-5xl">
              Mehr erfahren!
            </h1>
          </div>
        </ScrollAnimation>
        <div className="flex items-center justify-center">
          <div className="max-w-screen-xl grid w-full grid-cols-1 md:grid-cols-3">
            <div className="order-2 md:order-1">
              <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                <SkillsCard
                  headline="Web-Entwicklung"
                  subheadline="Deine Website"
                  keywords={["Individuell", "Modern", "Responsiv"]}
                  color="#3B8986"
                  image="/svg/imac.svg"
                  link="/webentwicklung"
                />
              </ScrollAnimation>
            </div>
            <div className="order-1 md:order-2">
              <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                <SkillsCard
                  headline="Lehre"
                  subheadline="Dein Format"
                  keywords={["Praxisnah", "Professionell", "Verständlich"]}
                  color="#C1666B"
                  image="/svg/pencil.svg"
                  link="/lehre"
                />
              </ScrollAnimation>
            </div>

            <div className="order-3">
              <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                <SkillsCard
                  headline="Programmierung"
                  subheadline="Deine Lösung"
                  keywords={["Effizient", "Skalierbar", "Flexibel"]}
                  color="#4281A4"
                  image="/svg/chart-pie.svg"
                  link="/programmierung"
                />
              </ScrollAnimation>
            </div>
          </div>
        </div>

        <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
          <div className="h-[5px] bg-blue shadow-md shadow-blue mt-[40px] mb-[40px] md:m-[60px]"></div>
        </ScrollAnimation>

        <section className="flex items-center justify-center">
          <div className="max-w-[1300px]">
            <div className="flex flex-col">
              <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
                <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                  <div className="m-8">
                    <p className="text-blue mt-8 font-anta text-[20px] text-left mb-4 md:text-4xl">
                      Melde dich!
                    </p>
                    <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                    <p className="text-white">
                      Wenn du meine Unterstützung in Anspruch nehmen möchtest
                      oder Fragen hast, melde dich gerne bei mir. Gemeinsam
                      finden wir die passende Lösung für dein Anliegen - sei es
                      Webentwicklung, Softwarelösungen oder
                      Informatik-Unterricht. Ich freue mich auf deine Nachricht!
                    </p>
                  </div>
                </ScrollAnimation>
                <div className="m-8 flex flex-col items-center justify-center">
                  <ScrollAnimation
                    animateOnce={true}
                    animateIn="animate-fade-up"
                  >
                    <img
                      className="h-[60px] md:h-[100px] w-full animate-wiggle object-scale-down"
                      src="/svg/hand-shake.svg"
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
      </div>
    </>
  );
}
