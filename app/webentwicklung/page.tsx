"use client";

import { TypeAnimation } from "react-type-animation";

export default function Webentwicklung() {
  return (
    <>
      <div className="h-screen flex bg-green flex-col flex-grow items-center justify-center p-8">
        <h1 className="text-white text-4xl">Deine Website.</h1>
        <div className="w-full h-[10px] bg-white"></div>

        <h1 className="font-saira text-white text-4xl pt-4">Wie du willst.</h1>
      </div>

      <div className="m-8 md:p-8">
        <h1 className="py-8 text-3xl md:text-8xl text-green">
          Moderne Web-Entwicklung
        </h1>

        <section className="flex flex-col">
          <div className="flex">
            <div className="relative grid grid-cols-1 md:grid-cols-2">
              <p className="text-[15px] text-justify md:text-3xl md:text-center md:text-justify leading-relaxed font-saira">
                Die digitale Welt entwickelt sich rasant – und ich bin vorne mit
                dabei. Als <b>Webentwicklerin</b> setze ich auf modernste
                Technologien, innovative <b>Frameworks</b> und skalierbare
                Lösungen, die nicht nur heute überzeugen, sondern auch morgen
                noch <b>State of the Art</b> sind.
                <br />
                <br />
                Ob Cutting-Edge Typescript-Frameworks, performante
                Headless-Systeme oder maßgeschneiderte UX/UI-Konzepte – ich
                kombiniere technisches Know-how mit einem Gespür für Trends.
                <br />
                <br />
                So entstehen Websites, die nicht nur funktionieren, sondern auch
                begeistern.
              </p>
              <div className="flex items-center justify-center pt-[30px] md:pt-0">
                <div>
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
                  <img
                    src="svg/programming.svg"
                    alt="programming SVG"
                    width="400"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <p className="text-[20px] mt-8 md:text-3xl text-center leading-relaxed w-full font-saira">
              Bereit für Webentwicklung auf höchstem Niveau? Lass uns deine
              Vision realisieren.
            </p>
          </div>
          <div className="mt-[70px] h-[5px] bg-green"></div>
        </section>
      </div>

      <h1 className="pt-8 text-3xl md:text-8xl text-darkBlue">Mein Angebot</h1>
      <section className="flex items-center justify-center">
        <div className="max-w-[2200px]">
          <div className="flex flex-col md:mt-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8">
                <h1 className="text-green md:text-left mb-8 md:text-3xl">
                  Individuelle Lösung
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <h2 className="text-center text-[18px] md:text-3xl">
                  Jedes Projekt hat andere Anforderungen. Je nach Wunsch können
                  das Aussehen und die Funktionsweise deiner Website angepasst
                  werden.
                </h2>
              </div>
              <div className="md:h-[400px] animate-spin m-8">
                <img
                  className="w-full h-full object-scale-down"
                  src="svg/settings.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:mt-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8 order-1 md:order-2">
                <h1 className="text-green md:text-right mb-8 md:text-3xl">
                  Klare Kommunikation
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <h2 className="text-center text-[18px] md:text-3xl">
                  Das Treffen von klaren Absprachen und regelmäßiger Austausch
                  sind die wichtigsten Aspekte für eine erfolgreiche
                  Zusammenarbeit.
                </h2>
              </div>
              <div className="relative md:h-[400px] m-8 order-2 md:order-1">
                <img
                  className="w-full h-full object-scale-down"
                  src="svg/bubble.svg"
                  alt="iconImage"
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[150%]">
                  <TypeAnimation
                    sequence={[1000, "Nein", 1000, "Doch", 1000, "Oh"]}
                    wrapper="span"
                    speed={5}
                    className="font-noto text-[50px]"
                    repeat={Infinity}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:mt-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <div className="m-8">
                <h1 className="text-green md:text-left mb-8 text-3xl">
                  Fester Zeitplan
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <h2 className="text-center text-[18px] md:text-3xl">
                  Es muss schnell gehen? Kein Problem - Wir können uns gerne auf
                  ein festes Datum zur Veröffentlichung deiner Website einigen.
                </h2>
              </div>

              <div className="md:h-[400px] m-8">
                <img
                  className="w-full h-full object-scale-down"
                  src="svg/calendar.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:mt-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <div className="m-8 order-1 md:order-2">
                <h1 className="text-green md:text-right mb-8 text-3xl">
                  Fixes Budget
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <h2 className="text-center text-[18px] md:text-3xl">
                  Sobald abzusehen ist, welche Arbeitsschritte für die Umsetzung
                  notwendig sind und wie komplex deine Website sein wird, kann
                  ein maximales Budget festgelegt werden.
                </h2>
              </div>
              <div className="md:h-[400px] animate-wiggle m-8 order-2 md:order-1">
                <img
                  className="w-full h-full object-scale-down"
                  src="svg/pricetag2.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <h1 className="pt-8 text-5xl md:text-8xl text-green">Deine Website</h1>
    </>
  );
}
