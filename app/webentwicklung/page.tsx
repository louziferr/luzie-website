"use client";

import { TypeAnimation } from "react-type-animation";

export default function Webentwicklung() {
  return (
    <>
      <div className="h-screen flex bg-green flex-col flex-grow items-center justify-center p-8">
        <h1 className="text-white text-4xl">Deine Website.</h1>
        <div className="w-full h-[10px] bg-white"></div>
        <TypeAnimation
          sequence={["Wie", 1000, "Was", 1000, "Wann", 1000]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
          className="font-saira text-white text-4xl pt-8"
        />

        <h1 className="font-saira text-white text-4xl">du willst.</h1>
      </div>

      <div className="m-8 p-8">
        <h1 className="m-8 p-8 text-5xl md:text-8xl text-green">
          Moderne Web-Entwicklung
        </h1>

        <section className="flex flex-col">
          <div className="flex">
            <div className="relative grid grid-cols-1 md:grid-cols-2">
              <p className=" text-3xl text-center md:text-justify leading-relaxed font-saira">
                Die digitale Welt entwickelt sich rasant – und ich bin vorne mit
                dabei.
              </p>
            </div>
          </div>
          <div className="flex items-end justify-end">
            <p className="text-3xl md:text-justify text-center leading-relaxed w-full md:w-1/2 font-saira pt-4">
              Als junge <b>Webentwicklerin</b> setze ich auf modernste
              Technologien, innovative <b>Frameworks</b> und skalierbare
              Lösungen, die nicht nur heute überzeugen, sondern auch morgen noch
              <b>State of the Art</b> sind.
            </p>
          </div>

          <div className="flex">
            <p className=" text-3xl md:text-justify text-center leading-relaxed font-saira  w-full md:w-1/2 pt-4">
              Ob Cutting-Edge Typescript-Frameworks, performante
              Headless-Systeme oder maßgeschneiderte UX/UI-Konzepte – ich
              kombiniere technisches Know-how mit einem Gespür für Trends.
            </p>
          </div>

          <div className="flex justify-end">
            <p className="text-3xl text-center md:text-justify leading-relaxed w-full md:w-1/2 font-saira pt-4">
              So entstehen Websites, die nicht nur funktionieren, sondern
              begeistern.
            </p>
          </div>

          <div className="mt-8 h-[5px] bg-green"></div>

          <div className="text-center mt-[150px]">
            <TypeAnimation
              sequence={[
                1000,
                // Same substring at the start will only be typed out once, initially
                "Schnell",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Responsiv",
                1000,
                "Zukunftssicher",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-3xl text-center leading-relaxed w-full font-saira"
              repeat={Infinity}
            />
          </div>

          <div className="flex items-center justify-center mt-[150px]">
            <p className="text-3xl text-center leading-relaxed w-full font-saira">
              Bereit für Webentwicklung auf höchstem Niveau? Lass uns deine
              Vision realisieren.
            </p>
          </div>
        </section>
      </div>

      <div className="mt-8 h-[5px] bg-green"></div>
      <h1 className="pt-8 text-5xl md:text-8xl text-green">Mein Angebot</h1>

      <div className="flex flex-col mt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 m-8">
          <div className="m-8">
            <h1 className="text-green text-left mb-8 text-3xl">
              Individuelle Lösungen
            </h1>
            <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
            <h2 className="text-center text-[20px] md:text-3xl">
              Jedes Projekt hat andere Anforderungen. Je nach Wunsch können das
              Aussehen und die Funktionsweise deiner Website angepasst werden.
            </h2>
          </div>
          <div className="h-[400px] animate-spin m-4 md:m-8">
            <img
              className="w-full h-full object-scale-down"
              src="svg/settings.svg"
              alt="iconImage"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 m-8">
          <div className="m-8 order-1 md:order-2">
            <h1 className="text-green text-right mb-8 text-3xl">
              Klare Kommunikation
            </h1>
            <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
            <h2 className="text-center text-[20px] md:text-3xl">
              Das Treffen von klaren Absprachen und regelmäßiger Austausch sind
              die wichtigsten Aspekte für eine erfolgreiche Zusammenarbeit.
            </h2>
          </div>
          <div className="h-[400px] animate-pulse m-4 md:m-8 order-2 md:order-1">
            <img
              className="w-full h-full object-scale-down"
              src="svg/bubble2.svg"
              alt="iconImage"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 m-8">
          <div className="m-8 pb-20 md:pb-0">
            <h1 className="text-green text-left mb-8 text-3xl">
              Fester Zeitplan
            </h1>
            <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
            <h2 className="text-center text-[20px] md:text-3xl">
              Es muss schnell gehen? Kein Problem - Wir können uns gerne auf ein
              festes Datum zur Veröffentlichung deiner Website einigen.
            </h2>
          </div>

          <div className="h-[400px]">
            <img
              className="w-full h-full object-scale-down animate-bounce"
              src="svg/calendar.svg"
              alt="iconImage"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 m-8">
          <div className="m-8 order-1 md:order-2">
            <h1 className="text-green text-right mb-8 text-3xl">
              Fixes Budget
            </h1>
            <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
            <h2 className="text-center text-[20px] md:text-3xl">
              Sobald abzusehen ist, welche Arbeitsschritte für die Umsetzung
              notwendig sind und wie komplex deine Website sein wird, kann ein
              maximales Budget festgelegt werden.
            </h2>
          </div>
          <div className="h-[400px] animate-wiggle m-4 md:m-8 order-2 md:order-1">
            <img
              className="w-full h-full object-scale-down"
              src="svg/pricetag2.svg"
              alt="iconImage"
            />
          </div>
        </div>
      </div>
    </>
  );
}
