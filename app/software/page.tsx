"use client";

import Link from "next/link";
import { BarChart } from "@mui/x-charts/BarChart";

import Wave from "react-wavify";
import { TypeAnimation } from "react-type-animation";

export default function Software() {
  return (
    <div>
      <div className="h-screen flex bg-blue-comp flex-col flex-grow flex-wrap items-center justify-center p-8">
        <TypeAnimation
          sequence={[
            1000,
            // Same substring at the start will only be typed out once, initially
            "Software",
          ]}
          wrapper="span"
          speed={30}
          className="text-white font-anta text-3xl md:text-4xl animate-delay-200 mb-4"
          repeat={Infinity}
        />
        <div className="w-full h-[5px] bg-white"></div>
      </div>

      <div className="mb-0 m-8 md:p-8">
        <h1 className="font-alfa py-8 text-3xl md:text-6xl text-blue">
          Softwarelösungen
        </h1>

        <section className="flex flex-col items-center">
          <div className="flex max-w-screen-xl">
            <div className="relative grid grid-cols-1 md:grid-cols-2">
              <p className="md:text-justify leading-relaxed">
                Mit fundierten Programmierkenntnissen entwickle ich
                maßgeschneiderte Lösungen für Datenverarbeitung, -analyse und
                -visualisierung. Ob automatisierte Auswertungen, individuelle
                Skripte oder komplexe Programme – ich erstelle effiziente und
                passgenaue Software für unterschiedlichste Anforderungen. Durch
                den gezielten Einsatz moderner Technologien lassen sich Prozesse
                optimieren, Daten verständlich darstellen und individuelle
                Herausforderungen lösen.
                <br />
                <br />
                Hauptsächlich arbeite ich beim Programmieren mit Python, doch je
                nach Aufgabe können auch andere Sprachen und Tools zum Einsatz
                kommen.
                <br />
              </p>

              <div className="flex items-center justify-center py-[30px]">
                <img
                  src="svg/programmierung/code-opt.svg"
                  alt="code SVG"
                  className="w-[200px] md:w-[300px]"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="flex items-center justify-center">
        <div className="max-w-[1500px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8">
                <div className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  01
                </div>
                <h1 className="text-blue md:text-left mb-8 md:text-4xl">
                  Datenverarbeitung
                </h1>

                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Ich entwickle maßgeschneiderte Lösungen für die Verarbeitung
                  großer Datenmengen und die Erstellung von Analysen. Mit
                  fundiertem Wissen in Statistik, Datenstrukturen, Algorithmen
                  und Machine Learning optimiere ich Abläufe, extrahiere
                  relevante Informationen und sorge für eine effiziente
                  Verarbeitung. Mein Fokus liegt darauf, Daten sinnvoll nutzbar
                  zu machen – präzise, skalierbar und an diverse Anforderungen
                  angepasst.
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
              <div className="m-8 order-1 md:order-2">
                <p className="text-gray-700 text-center text-4xl md:text-right md:text-6xl font-alfa mr-3">
                  02
                </p>
                <h1 className="text-blue md:text-right mb-8 md:text-4xl">
                  Visualisierungen
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Komplexe Informationen werden erst durch die richtige
                  Darstellung wirklich greifbar. Ich erstelle maßgeschneiderte
                  Visualisierungen und Grafiken, die Daten anschaulich
                  präsentieren und Zusammenhänge klar machen. Ob interaktive
                  Diagramme, statistische Auswertungen oder individuell
                  gestaltete Infografiken – mit den passenden Tools und Methoden
                  sorge ich dafür, dass Zahlen und Daten verständlich und
                  aussagekräftig aufbereitet werden.
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
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8">
                <div className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  03
                </div>
                <h1 className="text-blue md:text-left mb-8 md:text-4xl">
                  Skripte
                </h1>

                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Wiederkehrende Aufgaben kosten Zeit – mit individuell
                  entwickelten Skripten lassen sie sich effizient
                  automatisieren. Ich erstelle maßgeschneiderte Lösungen, die
                  Abläufe optimieren, Daten verarbeiten oder Schnittstellen
                  miteinander verbinden. Egal, ob es um die Automatisierung von
                  Workflows oder die Vereinfachung alltäglicher Prozesse geht.
                </p>
              </div>
              <div className="flex flex-col items-center justify-center p-4 w-full">
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

      <div className="h-[5px] mt-8 md:mb-4 bg-blue shadow-md shadow-blue"></div>
      <section className="flex items-center justify-center">
        <div className="max-w-[1500px]">
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
