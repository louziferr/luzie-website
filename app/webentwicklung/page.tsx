"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Webentwicklung() {
  return (
    <div>
      <div className="h-screen flex bg-gradient-to-b from-green via-teal-800 to-green flex-col flex-grow flex-wrap items-center justify-center p-8">
        <h1 className="text-white text-4xl animate-fade-down animate-delay-200">
          Deine Website.
        </h1>
        <div className="w-full h-[10px] bg-white"></div>

        <h1 className="font-saira text-white text-4xl pt-4 animate-fade-up animate-delay-500">
          Wie du willst.
        </h1>
      </div>

      <div className="m-8 md:p-8">
        <h1 className="py-8 text-3xl md:text-6xl text-green">
          Moderne Web-Entwicklung
        </h1>

        <section className="flex  items-center flex-col">
          <div className="flex max-w-screen-xl">
            <div className="relative grid grid-cols-1 md:grid-cols-2">
              <p className="text-[17px] text-center md:text-xl md:text-justify leading-relaxed font-saira">
                Die digitale Welt entwickelt sich rasant – und du brauchst eine
                Website?
                <br />
                <br />
                Meine Arbeit als Webentwicklerin richtet sich an Selbstständige,
                kreative Köpfe und kleine Unternehmen, die eine moderne,
                funktionale und individuelle Website brauchen – ohne
                komplizierte Prozesse.
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
                      "Flexibel",
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
                    width="300"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <p className="text-[17px] mt-8 md:text-xl text-center leading-relaxed w-full font-saira">
              Bereit für erstklassige <b>Webentwicklung</b>? Lass uns deine
              Vision realisieren.
            </p>
          </div>
          <div className="mt-[70px] h-[5px] bg-green"></div>
        </section>
      </div>

      <h1 className="pt-8 text-2xl md:text-6xl text-darkBlue underline underline-offset-4">
        Meine Arbeitsweise
      </h1>
      <section className="flex items-center justify-center">
        <div className="max-w-[1500px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8">
                <div className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  01
                </div>
                <h1 className="text-green md:text-left mb-8 md:text-4xl">
                  Individuelle Lösung
                </h1>

                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <h2 className="text-center md:text-left text-[17px] md:text-2xl">
                  Jedes Projekt hat andere Anforderungen. Je nach Wunsch können
                  das Aussehen und die Funktionsweise deiner Website angepasst
                  werden. Von klaren, minimalistischen Designs bis hin zu
                  interaktiven, komplexen Webanwendungen: Alles ist möglich.
                </h2>
              </div>
              <div className="m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[100px] md:h-[250px] w-full animate-spin object-scale-down"
                  src="svg/settings.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8 order-1 md:order-2">
                <p className="text-gray-700 text-center text-4xl md:text-right md:text-6xl font-alfa mr-3">
                  02
                </p>
                <h1 className="text-green md:text-right mb-8 md:text-4xl">
                  Echte Handarbeit
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <h2 className="text-center md:text-left text-[17px] md:text-2xl">
                  Ich arbeite ohne Baukastensysteme oder generische Vorlagen.
                  Jedes Pixel, jede Codezeile entsteht mit Sorgfalt und
                  Fachwissen, genau auf die Bedürfnisse zugeschnitten. Das
                  schafft nicht nur eine unverwechselbare Identität, sondern
                  auch eine technisch saubere, wartungsfreundliche Lösung.
                </h2>
              </div>
              <div className="m-8 flex flex-col items-center justify-center order-2 md:order-1">
                <img
                  className="h-[100px] md:h-[250px] w-full animate-wiggle object-scale-down"
                  src="svg/hand-shake.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <div className="m-8">
                <p className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  03
                </p>
                <h1 className="text-green md:text-left mb-8 md:text-4xl">
                  Schnelle Umsetzung
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <h2 className="text-center md:text-left text-[17px] md:text-2xl">
                  Dank klarer Prozesse, schlanker Strukturen und einer präzisen
                  Arbeitsweise kann ich schnelle Ergebnisse liefern, ohne an
                  Qualität einzubüßen. Du profitierst von kurzen
                  Entwicklungszeiten und direkter Kommunikation - ohne unnötige
                  Umwege.
                </h2>
              </div>

              <div className="m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[100px] md:h-[250px] w-full object-scale-down"
                  src="svg/calendar.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8 order-1 md:order-2">
                <p className="text-gray-700 text-center text-4xl md:text-right md:text-6xl font-alfa mr-3">
                  04
                </p>
                <h1 className="text-green md:text-right mb-8 md:text-4xl">
                  Modernes Design
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <h2 className="text-center md:text-left text-[17px] md:text-2xl">
                  Ob minimalistisch, kreativ oder markant – ich entwickle eine
                  individuelle Gestaltung, die perfekt zu deinem Stil und deiner
                  Marke passt. Zeitgemäß, einzigartig und auf jedem Gerät
                  optimal dargestellt.
                </h2>
              </div>
              <div className="m-8 flex flex-col items-center justify-center  order-2 md:order-1">
                <img
                  className="h-[100px] md:h-[250px] w-full object-scale-down"
                  src="svg/sketch.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="mt-[70px] h-[5px] bg-green"></div>
      <h1 className="pt-10 text-3xl md:text-6xl text-darkBlue underline underline-offset-4">
        Tools
      </h1>

      <section className="flex items-center justify-center">
        <div className="max-w-[1500px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <div className="m-8">
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p className="text-left text-[17px] md:text-2xl">
                  Ich setze auf bewährte und moderne Technologien, um schnelle,
                  sichere und skalierbare Websites zu entwickeln.
                </p>
                <div className="text-left mt-2 md:text-left text-[18px] md:text-3xl">
                  <h1 className="text-left py-4 font-anta text-gray-600 text-3xl md:text-5xl">
                    React & Next.js
                  </h1>
                  <p className="text-[17px] md:text-2xl text-left">
                    Dynamische, performante Webanwendungen mit modernster
                    Frontend-Technologie.
                  </p>

                  <h1 className="text-left py-4 font-anta text-gray-600 text-3xl md:text-5xl">
                    Tailwind CSS
                  </h1>
                  <p className="text-[17px] md:text-2xl text-left">
                    Die Grundlage für sauberen, semantischen Code und
                    individuelles Styling.
                  </p>
                  <h1 className="text-left py-4 font-anta text-gray-600 text-3xl md:text-5xl">
                    Prisma
                  </h1>
                  <p className="text-[17px] md:text-2xl text-left">
                    Eine effiziente und flexible Lösung für Datenbankverwaltung,
                    die Skalierbarkeit und Sicherheit gewährleistet.
                  </p>
                  <p className="pt-8 text-left text-[17px] md:text-2xl">
                    Durch diese Technologien entstehen leistungsstarke Websites,
                    die nicht nur optisch überzeugen, sondern auch technisch auf
                    höchstem Niveau sind.
                  </p>
                </div>
              </div>
              <div className="m-8 flex flex-row md:flex-col items-center justify-between">
                <img
                  className="h-[80px] md:h-[200px] w-full object-scale-down"
                  src="svg/react.svg"
                  alt="iconImage"
                />

                <img
                  className="h-[80px] md:h-[200px] w-full object-scale-down"
                  src="svg/tailwind.svg"
                  alt="iconImage"
                />
                <img
                  className="h-[80px] md:h-[200px] w-full object-scale-down"
                  src="svg/prisma.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <h1 className="pt-8 text-4xl md:text-6xl text-green">Preise</h1>
      <section className="flex items-center justify-center">
        <div className="max-w-[1500px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <div className="m-8">
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p className="text-center md:text-left text-[17px] md:text-2xl">
                  Nach unserem Erstgespräch erstelle ich ein individuelles
                  Angebot, das genau auf deine Anforderungen zugeschnitten ist.
                  Der Zeitaufwand und der damit verbundene Preis für das
                  Entwickeln deiner Website sind größtenteils abhängig von der
                  technischen und ästhetischen Komplexität.
                </p>
              </div>
              <div className="m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[100px] md:h-[250px] w-full animate-wiggle object-scale-down"
                  src="svg/pricetag2.svg"
                  alt="iconImage"
                />
              </div>
            </div>

            <div className="m-8 flex flex-col items-center justify-center">
              <Link
                href="/kontakt"
                className="py-3 px-5 bg-green rounded md:text-2xl border-black text-white transition ease-in hover:scale-110"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
