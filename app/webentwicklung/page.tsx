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
              <p className="text-[18px] text-center md:text-3xl md:text-justify leading-relaxed font-saira">
                Die digitale Welt entwickelt sich rasant – und Websites werden
                stets gebraucht.
                <br />
                <br />
                Meine Webentwicklung richtet sich an Selbstständige, kreative
                Köpfe und kleine Unternehmen, die eine moderne, funktionale und
                individuelle Website brauchen – ohne komplizierte Prozesse.
                <br /> <br />
                Bei der Umsetzung setze ich auf aktuelle Technologien,
                ansprechende Designs und skalierbare Lösungen. Gleichzeitig
                garantiere ich eine schnelle und unkomplizierte Zusammenarbeit
                mit klarer Kommunikation.
                <br />
                <br />
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
            <p className="text-[18px] mt-8 md:text-3xl text-center leading-relaxed w-full font-saira">
              Bereit für <b>Webentwicklung</b> auf höchstem Niveau? Lass uns
              deine Vision realisieren.
            </p>
          </div>
          <div className="mt-[70px] h-[5px] bg-green"></div>
        </section>
      </div>

      <h1 className="pt-8 text-2xl md:text-8xl text-darkBlue underline underline-offset-4">
        Meine Standards
      </h1>
      <section className="flex items-center justify-center">
        <div className="max-w-[1500px]">
          <div className="flex flex-col md:mt-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8">
                <h1 className="text-green md:text-left mb-8 md:text-3xl">
                  Individuelle Lösung
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <h2 className="text-left text-[18px] md:text-3xl">
                  Jedes Projekt hat andere Anforderungen. Je nach Wunsch können
                  das Aussehen und die Funktionsweise deiner Website angepasst
                  werden. Von klaren, minimalistischen Designs bis hin zu
                  interaktiven, komplexen Webanwendungen: Alles ist möglich.
                </h2>
              </div>
              <div className="h-[100px] md:h-[250px] animate-spin m-8">
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
                  Echte Handarbeit
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <h2 className="text-left text-[18px] md:text-3xl">
                  Ich arbeite ohne Baukastensysteme oder generische Vorlagen.
                  Jedes Pixel, jede Codezeile entsteht mit Sorgfalt und
                  Fachwissen, genau auf die Bedürfnisse zugeschnitten. Das
                  schafft nicht nur eine unverwechselbare Identität, sondern
                  auch eine technisch saubere, wartungsfreundliche Lösung.
                </h2>
              </div>
              <div className="h-[100px] md:h-[250px] m-8 order-2 md:order-1">
                <img
                  className="w-full h-full animate-wiggle object-scale-down"
                  src="svg/hand-shake.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:mt-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <div className="m-8">
                <h1 className="text-green md:text-left mb-8 text-3xl">
                  Schnelle Umsetzung
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <h2 className="text-left text-[18px] md:text-3xl">
                  Dank klarer Prozesse, schlanker Strukturen und einer präzisen
                  Arbeitsweise kann ich schnelle Ergebnisse liefern, ohne an
                  Qualität einzubüßen. Du profitierst von kurzen
                  Entwicklungszeiten und direkter Kommunikation - ohne unnötige
                  Umwege.
                </h2>
              </div>

              <div className="h-[100px] md:h-[250px] m-8">
                <img
                  className="w-full h-full animate-spin object-scale-down"
                  src="svg/time-sand.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col md:mt-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8 order-1 md:order-2">
                <h1 className="text-green md:text-right mb-8 text-3xl">
                  Modernes Design
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <h2 className="text-left text-[18px] md:text-3xl">
                  Ob minimalistisch, kreativ oder markant – ich entwickle eine
                  individuelle Gestaltung, die perfekt zu deinem Stil und deiner
                  Marke passt. Zeitgemäß, einzigartig und auf jedem Gerät
                  optimal dargestellt.
                </h2>
              </div>
              <div className="h-[100px] md:h-[250px] animate-wiggle m-8 order-2 md:order-1">
                <img
                  className="w-full h-full object-scale-down"
                  src="svg/sketch.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <h1 className="pt-8 text-5xl md:text-8xl text-green">Preise</h1>
      <section className="flex items-center justify-center">
        <div className="max-w-[1500px]">
          <div className="flex flex-col md:mt-[100px]">
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <div className="m-8">
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <h2 className="text-left text-[18px] md:text-3xl">
                  Nach unserem Erstgespräch erstelle ich ein individuelles
                  Angebot, das genau auf deine Anforderungen zugeschnitten ist.
                  Der Zeitaufwand und der damit verbundene Preis für das
                  Entwickeln deiner Website sind größtenteils abhängig von der
                  technischen und ästhetischen Komplexität.
                </h2>
              </div>
              <div className="h-[100px] md:h-[250px] animate-wiggle m-8">
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
    </>
  );
}
