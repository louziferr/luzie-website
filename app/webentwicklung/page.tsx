"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

export default function Webentwicklung() {
  return (
    <div>
      <div className="h-screen flex bg-green-comp flex-col flex-grow flex-wrap items-center justify-center p-8">
        <h1 className="text-white text-3xl md:text-4xl animate-fade-down animate-delay-200 pb-2">
          Deine Website.
        </h1>
        <div className="w-full h-[5px] bg-white animate-jump-in animate-delay-200"></div>

        <h1 className="font-saira text-white text-2xl m:d:text-3xl pt-4 animate-fade-up animate-delay-500">
          Wie du willst.
        </h1>
      </div>

      <div className="m-8 md:p-8">
        <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
          <h1 className="py-8 font-alfa text-3xl md:text-6xl text-green">
            Moderne Web-Entwicklung
          </h1>
        </ScrollAnimation>

        <section className="flex  items-center flex-col">
          <div className="flex max-w-screen-lg">
            <div className="relative grid grid-cols-1 md:grid-cols-2 md:pt-8">
              <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                <p className="text-center md:text-justify leading-relaxed max-w-[400px]">
                  Meine Arbeit als Webentwicklerin richtet sich an
                  Selbstständige, Start-Ups und kleine Unternehmen, die eine
                  moderne, funktionale und individuelle Website brauchen – ohne
                  komplizierte Prozesse.
                  <br /> <br />
                  Bei der Umsetzung setze ich auf aktuelle Technologien,
                  ansprechende Designs und skalierbare Lösungen. Gleichzeitig
                  garantiere ich eine schnelle und unkomplizierte Zusammenarbeit
                  mit klarer Kommunikation.
                  <br />
                  <br />
                </p>
              </ScrollAnimation>
              <div className="flex items-center justify-center md:justify-end pt-[30px] md:pt-0">
                <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                  <div>
                    <TypeAnimation
                      sequence={[
                        1000,
                        // Same substring at the start will only be typed out once, initially
                        "Dynamisch",
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        "Responsiv",
                        1000,
                        "Flexibel",
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      className="text-xl md:text-3xl text-center leading-relaxed w-full font-saira"
                      repeat={Infinity}
                    />
                    <div className="w-[150px] md:w-[200px]">
                      <img src="/svg/programming.svg" alt="programming SVG" />
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
        <div className="mt-[70px] mb-[70px] w-full h-[5px] bg-green shadow-md shadow-green"></div>
      </ScrollAnimation>

      <h1 className="pt-0 font-alfa md:pt-8 text-2xl md:text-6xl text-darkBlue underline underline-offset-4">
        Meine Arbeitsweise
      </h1>

      <section className="flex items-center justify-center">
        <div className="max-w-[1300px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8">
                <div className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  01
                </div>

                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-left"
                >
                  <h1 className="text-green font-anta md:text-left mb-8 md:text-4xl">
                    Individuelle Lösung
                  </h1>
                </ScrollAnimation>

                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Jedes Projekt hat andere Anforderungen. Je nach Wunsch können
                  das Aussehen und die Funktionsweise der Website angepasst
                  werden. Von klaren, minimalistischen Designs bis hin zu
                  interaktiven, komplexen Webanwendungen: Alles ist möglich.
                </p>
              </div>
              <div className="m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[100px] md:h-[150px] w-full animate-spin object-scale-down"
                  src="/svg/settings.svg"
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
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-right"
                >
                  <h1 className="text-green md:text-right mb-8 md:text-4xl">
                    Echte Handarbeit
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Ich arbeite ohne Baukastensysteme oder generische Vorlagen.
                  Jeder Pixel, jede Codezeile entsteht mit Sorgfalt und
                  Fachwissen, genau auf die Bedürfnisse zugeschnitten. Das
                  schafft nicht nur eine unverwechselbare Identität, sondern
                  auch eine technisch saubere, wartungsfreundliche Lösung.
                </p>
              </div>
              <div className="m-8 flex flex-col items-center justify-center order-2 md:order-1">
                <img
                  className="h-[100px] md:h-[150px] w-full animate-wiggle object-scale-down"
                  src="/svg/hand-shake.svg"
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

                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-left"
                >
                  <h1 className="text-green md:text-left mb-8 md:text-4xl">
                    Schnelle Umsetzung
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Dank klarer Prozesse, schlanker Strukturen und einer präzisen
                  Arbeitsweise kann ich schnelle Ergebnisse liefern, ohne an
                  Qualität einzubüßen. Es entstehen kurze Entwicklungszeiten und
                  eine direkte Kommunikation - ohne große Umwege.
                </p>
              </div>

              <div className="m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[100px] md:h-[150px] w-full object-scale-down"
                  src="/svg/calendar.svg"
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

                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-right"
                >
                  <h1 className="text-green md:text-right mb-8 md:text-4xl">
                    Modernes Design
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Ob minimalistisch, kreativ oder markant – ich entwickle eine
                  individuelle Gestaltung, die perfekt zum gewünschten Stil und
                  zur Marke passt. Zeitgemäß, einzigartig und auf jedem Gerät
                  optimal dargestellt.
                </p>
              </div>
              <div className="m-8 flex flex-col items-center justify-center  order-2 md:order-1">
                <img
                  className="h-[100px] md:h-[150px] w-full object-scale-down"
                  src="/svg/sketch.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
        <div className="mt-[40px] mb-[40px] md:m-[80px] h-[5px] bg-green shadow-md shadow-green"></div>
      </ScrollAnimation>
      <h1 className="pt-10 font-alfa text-3xl md:text-6xl text-darkBlue underline underline-offset-4">
        Tools
      </h1>

      <section className="flex items-center justify-center">
        <div className="max-w-[1300px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <div className="m-8">
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Ich setze auf bewährte und moderne Technologien, um schnelle,
                  sichere und skalierbare Websites zu entwickeln.
                </p>
                <div className="text-left mt-2 md:text-left text-[18px] md:text-3xl">
                  <h1 className="text-left py-4 font-anta text-gray-600 text-3xl md:text-4xl">
                    React & Next.js
                  </h1>
                  <p>
                    Dynamische, performante Webanwendungen mit modernster
                    Frontend-Technologie.
                  </p>

                  <h1 className="text-left py-4 font-anta text-gray-600 text-3xl md:text-4xl">
                    Tailwind CSS
                  </h1>
                  <p>
                    Die Grundlage für sauberen, semantischen Code und
                    individuelles Styling.
                  </p>
                  <h1 className="text-left py-4 font-anta text-gray-600 text-3xl md:text-4xl">
                    Prisma
                  </h1>
                  <p>
                    Eine effiziente und flexible Lösung für Datenbankverwaltung,
                    die Skalierbarkeit und Sicherheit gewährleistet.
                  </p>
                  <p className="pt-8">
                    Durch diese Technologien entstehen leistungsstarke Websites,
                    die nicht nur optisch überzeugen, sondern auch technisch auf
                    höchstem Niveau sind.
                  </p>
                </div>
              </div>
              <div className="m-8 flex flex-row md:flex-col items-center justify-between">
                <img
                  className="h-[60px] md:h-[150px] w-full object-scale-down"
                  src="/svg/react.svg"
                  alt="iconImage"
                />

                <img
                  className="h-[60px] md:h-[150px] w-full object-scale-down"
                  src="/svg/tailwind.svg"
                  alt="iconImage"
                />
                <img
                  className="h-[60px] md:h-[150px] w-full object-scale-down"
                  src="/svg/prisma.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
        <div className="h-[5px] md:m-[80px] bg-green shadow-md shadow-green mt-[40px] mb-[40px] "></div>
      </ScrollAnimation>
      <section className="flex items-center justify-center">
        <div className="max-w-[1300px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <div className="m-8">
                <h1 className="text-green mt-8 text-left mb-4 md:text-4xl">
                  Melde dich!
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Nach unserem Erstgespräch erstelle ich ein individuelles
                  Angebot, das genau auf deine Anforderungen zugeschnitten ist.
                  Der Zeitaufwand und der damit verbundene Preis für das
                  Entwickeln deiner Website sind größtenteils abhängig von der
                  technischen und ästhetischen Komplexität.
                </p>
              </div>
              <div className="m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[60px] md:h-[100px] w-full animate-wiggle object-scale-down"
                  src="/svg/pricetag2.svg"
                  alt="iconImage"
                />
              </div>
            </div>

            <div className="m-8 flex flex-col items-center justify-center">
              <Link
                href="/kontakt"
                className="py-2 px-3 bg-green rounded md:text-xl border-black text-white transition ease-in hover:scale-110"
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
