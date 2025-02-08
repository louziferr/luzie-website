"use client";

import Link from "next/link";
import { BarChart } from "@mui/x-charts/BarChart";

import Wave from "react-wavify";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

export default function Programmierung() {
  return (
    <div>
      <div className="h-screen flex bg-blue-comp flex-col flex-grow flex-wrap items-center justify-center p-8">
        <TypeAnimation
          sequence={[
            1000,
            // Same substring at the start will only be typed out once, initially
            "Programmierung",
          ]}
          wrapper="span"
          speed={30}
          className="text-white font-anta text-3xl md:text-4xl animate-delay-200 mb-4"
          repeat={Infinity}
        />
        <div className="w-full h-[5px] bg-white animate-jump-in animate-delay-200"></div>
      </div>

      <div className="mb-0 m-8 md:p-8">
        <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
          <h1 className="font-alfa py-8 text-3xl md:text-6xl text-blue">
            Softwarelösungen
          </h1>
        </ScrollAnimation>

        <section className="flex flex-col items-center">
          <div className="flex max-w-[1300px]">
            <div className="relative grid grid-cols-1 md:grid-cols-2">
              <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                <p className="text-center md:text-justify leading-relaxed md:mt-8 max-w-[400px]">
                  Als Software-Entwicklerin entwickle ich Lösungen in diversen
                  Bereichen der informationstechnischen Datenverarbeitung. Je
                  nach Anforderung können automatisierte Auswertungen
                  stattfinden, einfache Skripte oder komplexe Programme
                  geschrieben werden. Durch den gezielten Einsatz moderner
                  Technologien lassen sich Prozesse optimieren, Daten
                  verständlich darstellen und individuelle Herausforderungen
                  lösen.
                  <br />
                  <br />
                  Je nach Aufgabe können unterschiedliche Programmiersprachen
                  und Tools zum Einsatz kommen.
                  <br />
                </p>
              </ScrollAnimation>

              <div className="flex items-center justify-center md:justify-end py-[30px]">
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-left"
                >
                  <img
                    src="svg/programmierung/code-opt.svg"
                    alt="code SVG"
                    className="w-[200px] md:w-[300px]"
                  />
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
        <div className="h-[5px] mt-[40px] mb-[60px] md:mb-[80px] md:m-[80px] bg-blue shadow-md shadow-blue"></div>
      </ScrollAnimation>
      <h1 className="pt-0 font-alfa md:pt-8 text-3xl md:text-5xl text-blue underline underline-offset-4">
        Bereiche
      </h1>

      <section className="flex items-center justify-center">
        <div className="max-w-[1300px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="mt-[80px] m-8">
                <div className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  01
                </div>
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-left"
                >
                  <h1 className="text-blue md:text-left mb-8 md:text-4xl">
                    Datenverarbeitung
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Effiziente Datenverarbeitung ist entscheidend für die Analyse,
                  Transformation und Nutzung großer Datenmengen. Durch
                  optimierte Algorithmen und skalierbare Architekturen lassen
                  sich Daten extrahieren, bereinigen und strukturiert für
                  weiterführende Analysen oder automatisierte Prozesse
                  aufbereiten. Dies bildet die Grundlage für fundierte
                  Entscheidungen und leistungsfähige Softwarelösungen.
                </p>
              </div>
              <div className="flex flex-col items-center justify-end p-4 w-full">
                <div className="w-4/5">
                  <Wave
                    fill="#4281A4"
                    paused={false}
                    style={{ display: "flex" }}
                    options={{
                      height: 40,
                      amplitude: 80,
                      speed: 0.15,
                      points: 5,
                    }}
                  />
                  <div className="h-[100px] w-full bg-gradient-to-t from-darkBlue to-blue"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col" id={"robotik"}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="mt-[70px] m-8 order-1 md:order-2">
                <p className="text-gray-700 text-center text-4xl md:text-right md:text-6xl font-alfa mr-3">
                  02
                </p>
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-right"
                >
                  <h1 className="text-blue md:text-right mb-8 md:text-4xl">
                    Visualisierungen
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Die Visualisierung von Daten erleichtert die Interpretation
                  komplexer Zusammenhänge und unterstützt fundierte
                  Entscheidungsprozesse. Durch den Einsatz geeigneter Diagramme,
                  interaktiver Dashboards und spezialisierter
                  Visualisierungstechniken lassen sich Muster, Trends und
                  Korrelationen effizient erkennen. Eine gut gestaltete
                  Visualisierung steigert die Verständlichkeit und ermöglicht
                  eine intuitive Datenanalyse.
                </p>
              </div>

              <div className="flex flex-col items-center justify-end w-full order-2 md:order-1">
                <div className="w-4/5">
                  <BarChart
                    series={[
                      { data: [35, 44, 24, 34] },
                      { data: [51, 6, 49, 30] },
                      { data: [15, 25, 30, 50] },
                      { data: [60, 50, 15, 25] },
                    ]}
                    height={290}
                    xAxis={[
                      { data: ["Q1", "Q2", "Q3", "Q4"], scaleType: "band" },
                    ]}
                    margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mt-[50px] grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8">
                <div className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  03
                </div>
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-left"
                >
                  <h1 className="text-blue md:text-left mb-8 md:text-4xl">
                    Bibliotheken
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Die Entwicklung spezialisierter Softwarebibliotheken
                  ermöglicht die Wiederverwendung, Modularität und Effizienz in
                  der Programmierung. Durch gut strukturierte Schnittstellen und
                  optimierte Algorithmen lassen sich komplexe Funktionen
                  abstrahieren und flexibel in verschiedene Systeme integrieren.
                  Dies reduziert Redundanzen, verbessert die Wartbarkeit und
                  steigert die Performance von Softwareprojekten.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 w-full">
                <img
                  src="svg/programmierung/library-book.svg"
                  alt="workflow SVG"
                  className="w-[170px] md:w-[260px] p-4 shadow-md shadow-blue rounded-3xl bg-opacity-20"
                />
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "class MyLibrary:",
                    1000,
                    "def __init__(self):",
                    1000,
                    "self.destroy()",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="font-mono text-[15px] text-black pt-8"
                  repeat={Infinity}
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="mt-[40px] grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8 order-1 md:order-2">
                <div className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  04
                </div>
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-left"
                >
                  <h1 className="text-blue md:text-left mb-8 md:text-4xl">
                    Skripte
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Skripte automatisieren wiederkehrende Prozesse, optimieren
                  Workflows und erleichtern die Verarbeitung großer Datenmengen.
                  Durch maßgeschneiderte Skriptlösungen lassen sich Aufgaben wie
                  Datenextraktion, Formatkonvertierung oder Systemsteuerung
                  effizient und fehlerfrei ausführen. Die Entwicklung erfolgt
                  unter Berücksichtigung von Performance, Wartbarkeit und
                  Skalierbarkeit, um eine nachhaltige Automatisierung zu
                  gewährleisten.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 w-full order-2 md:order-1">
                <img
                  src="svg/programmierung/workflow.svg"
                  alt="workflow SVG"
                  className="w-[170px] md:w-[300px]"
                />
                <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed out once, initially
                    "f = open('data.csv', 'w')",
                    1000,
                    "f.write('done\\n')",
                    1000,
                    "f.close()",
                    1000,
                  ]}
                  wrapper="span"
                  speed={50}
                  className="font-mono text-[15px] text-black pt-8"
                  repeat={Infinity}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
        <div className="h-[5px] mt-[70px] mb-[40px] md:m-[80px] md:mb-4 bg-blue shadow-md shadow-blue"></div>
      </ScrollAnimation>
      <section className="flex items-center justify-center">
        <div className="max-w-[1300px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <div className="m-8">
                <h1 className="text-blue text-left md:text-4xl mt-8">
                  Melde dich!
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Wenn du denkst, ich kann dir helfen oder wenn du sonstige
                  Fragen hast, melde dich gerne bei mir. Gemeinsam finden wir
                  die passende Lösung für dein Anliegen. Ich freue mich auf
                  deine Nachricht!
                </p>
              </div>
              <div className="m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[80px] md:h-[150px] w-full animate-wiggle object-scale-down"
                  src="svg/hand-shake.svg"
                  alt="hand shake"
                />
              </div>
            </div>

            <div className="m-8 flex flex-col items-center justify-center">
              <Link
                href="/kontakt"
                className="py-2 px-3 bg-blue rounded md:text-2xl text-white transition ease-in hover:scale-110"
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
