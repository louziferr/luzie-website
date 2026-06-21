"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

export default function AppEntwicklung() {
  return (
    <div>
      <div className="h-screen flex bg-blue-comp flex-col flex-grow flex-wrap items-center justify-center p-8">
        <h1 className="text-white text-3xl md:text-4xl animate-fade-down animate-delay-200 pb-2">
          Deine App.
        </h1>
        <div className="w-full h-[5px] bg-white animate-jump-in animate-delay-200"></div>

        <h1 className="font-saira text-white text-2xl md:text-3xl pt-4 animate-fade-up animate-delay-500">
        Wie du willst.
        </h1>
      </div>

      <div className="m-8 md:p-8">
        <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
          <h1 className="py-8 font-alfa text-3xl md:text-6xl text-blue">
            Moderne App-Entwicklung
          </h1>
        </ScrollAnimation>

        <section className="flex items-center flex-col">
          <div className="flex max-w-screen-lg">
            <div className="relative grid grid-cols-1 md:grid-cols-2 md:pt-8">
              <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                <p className="text-center md:text-justify leading-relaxed max-w-[400px]">
                  Ich entwickle individuelle Apps für iOS und Android – maßgeschneidert
                  für Selbstständige, Start-Ups und kleine Unternehmen, die ihre
                  Idee endlich in die Hände ihrer Nutzer bringen wollen.
                  <br /> <br />
                  Ob eine schlanke Utility-App oder eine komplexe plattformübergreifende
                  Lösung: Ich begleite dich vom ersten Konzept bis zur fertigen,
                  veröffentlichten Anwendung – mit klarer Kommunikation und ohne
                  unnötige Umwege.
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
                        "Nativ",
                        1000,
                        "Cross-Platform",
                        1000,
                        "Intuitiv",
                        1000,
                        "Performant",
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      className="text-xl md:text-3xl text-center leading-relaxed w-full font-saira"
                      repeat={Infinity}
                    />
                    <div className="w-[150px] md:w-[200px]">
                      <img src="/svg/code-file.svg" alt="app development SVG" />
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
        <div className="mt-[70px] mb-[70px] w-full h-[5px] bg-blue shadow-md shadow-blue"></div>
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
                  <h1 className="text-blue font-anta md:text-left mb-8 md:text-4xl">
                    Deine Idee im Mittelpunkt
                  </h1>
                </ScrollAnimation>

                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Jede App beginnt mit einer Idee. Gemeinsam analysieren wir deine
                  Anforderungen, deine Zielgruppe und deine Ziele – und entwickeln
                  daraus ein Konzept, das wirklich funktioniert. Keine generischen
                  Templates, keine Kompromisse.
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
                  <h1 className="text-blue md:text-right mb-8 md:text-4xl">
                    Durchdachtes UX-Design
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Eine gute App überzeugt durch Einfachheit. Ich gestalte
                  Benutzeroberflächen, die intuitiv zu bedienen sind und den
                  Nutzer in den Mittelpunkt stellen – ansprechend, klar und
                  konsistent auf allen Bildschirmgrößen.
                </p>
              </div>
              <div className="m-8 flex flex-col items-center justify-center order-2 md:order-1">
                <img
                  className="h-[100px] md:h-[150px] w-full animate-wiggle object-scale-down"
                  src="/svg/design-skills.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8">
                <p className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  03
                </p>

                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-left"
                >
                  <h1 className="text-blue md:text-left mb-8 md:text-4xl">
                    Sauberer Code
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Ich entwickle ohne Abkürzungen. Jede Zeile Code entsteht mit
                  Sorgfalt – strukturiert, wartbar und auf Wachstum ausgelegt.
                  Das Ergebnis: eine App, die heute läuft und morgen problemlos
                  erweitert werden kann.
                </p>
              </div>

              <div className="m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[100px] md:h-[150px] w-full object-scale-down"
                  src="/svg/programming.svg"
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
                  <h1 className="text-blue md:text-right mb-8 md:text-4xl">
                    Launch & Danach
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Die Veröffentlichung im App Store oder Google Play ist erst der
                  Anfang. Ich begleite dich auch nach dem Launch – mit Updates,
                  Bugfixes und Weiterentwicklungen, damit deine App langfristig
                  erfolgreich bleibt.
                </p>
              </div>
              <div className="m-8 flex flex-col items-center justify-center order-2 md:order-1">
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
        <div className="mt-[40px] mb-[40px] md:m-[80px] h-[5px] bg-blue shadow-md shadow-blue"></div>
      </ScrollAnimation>
      <h1 className="pt-10 font-alfa text-3xl md:text-6xl text-darkBlue underline underline-offset-4">
        Tools
      </h1>

      <section className="flex items-center justify-center">
        <div className="max-w-[1300px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8">
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Ich setze auf bewährte Technologien, die plattformübergreifende
                  Entwicklung effizient und zuverlässig machen.
                </p>
                <div className="text-left mt-2 md:text-left text-[18px] md:text-3xl">
                  <h1 className="text-left py-4 font-anta text-gray-600 text-3xl md:text-4xl">
                    React Native
                  </h1>
                  <p>
                    Eine Codebasis für iOS und Android – performant, nativ
                    wirkend und einfach wartbar.
                  </p>

                  <h1 className="text-left py-4 font-anta text-gray-600 text-3xl md:text-4xl">
                    Expo
                  </h1>
                  <p>
                    Schnelles Prototyping, einfaches Deployment und ein
                    reibungsloser Weg in die App Stores.
                  </p>
                  <h1 className="text-left py-4 font-anta text-gray-600 text-3xl md:text-4xl">
                    TypeScript
                  </h1>
                  <p>
                    Typsicherer, gut strukturierter Code als Grundlage für
                    langfristig wartbare und skalierbare Apps.
                  </p>
                  <p className="pt-8">
                    Mit diesen Technologien entstehen Apps, die auf beiden
                    Plattformen nativ wirken – und dabei einfach zu pflegen und
                    zu erweitern sind.
                  </p>
                </div>
              </div>
              <div className="m-8 flex flex-row md:flex-col items-center justify-between">
                <img
                  className="h-[60px] md:h-[150px] w-full object-scale-down"
                  src="/svg/react.svg"
                  alt="React Native"
                />
                <img
                  className="h-[60px] md:h-[150px] w-full object-scale-down"
                  src="/svg/programming.svg"
                  alt="Expo"
                />
                <img
                  className="h-[60px] md:h-[150px] w-full object-scale-down"
                  src="/svg/code-file.svg"
                  alt="TypeScript"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
        <div className="h-[5px] md:m-[80px] bg-blue shadow-md shadow-blue mt-[40px] mb-[40px]"></div>
      </ScrollAnimation>
      <section className="flex items-center justify-center">
        <div className="max-w-[1300px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8">
                <h1 className="text-blue mt-8 text-left mb-4 md:text-4xl">
                  Melde dich!
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Nach unserem Erstgespräch erstelle ich ein individuelles
                  Angebot, das genau auf deine App-Idee zugeschnitten ist.
                  Aufwand und Preis richten sich nach Umfang, Plattformen und
                  der gewünschten Funktionalität – transparent und ohne
                  versteckte Kosten.
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
                className="py-2 px-3 bg-blue rounded md:text-xl border-black text-white transition ease-in hover:scale-110"
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
