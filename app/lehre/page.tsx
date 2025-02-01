"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Lehre() {
  return (
    <div>
      <div className="h-screen flex bg-red flex-col flex-grow flex-wrap items-center justify-center p-8">
        <h1 className="text-white text-4xl animate-fade-down animate-delay-200">
          Informatik lernen.
        </h1>
        <div className="w-full h-[10px] bg-white"></div>

        <h1 className="font-saira text-white text-4xl pt-4 animate-fade-up animate-delay-500">
          Professionell & Praxisnah.
        </h1>
      </div>

      <div className="m-8 md:p-8">
        <h1 className="py-8 text-3xl md:text-6xl text-red">
          Unterricht und Kurse
        </h1>

        <section className="flex flex-col items-center">
          <div className="flex max-w-screen-xl">
            <div className="relative grid grid-cols-1 md:grid-cols-2">
              <p className="text-[15px] text-center md:text-2xl md:text-justify leading-relaxed font-saira">
                Ob die erste Zeile Code geschrieben oder eine komplexe
                Softwarearchitekturen optimiert werden soll: ich biete
                Informatik-Unterricht auf allen Niveaus an.
                <br />
                <br />
                Meine Arbeit als Dozentin richtet sich hauptsächlich an Schulen,
                Universitäten, Ausbildungsinstitute und Unternehmen, die
                Interesse an einem maßgeschneiderten Kurs zu Informatik haben.
                <br /> <br />
                Ich biete bereits erprobte Kurskonzepte zu verschiedenen Themen
                der Informatik an, die strukturiert und praxisnah Wissen
                vermitteln. Gleichzeitig lege ich großen Wert auf individuelle
                Anpassung. Auf Wunsch entwickle ich maßgeschneiderte Kurse, die
                genau auf das Projekt und die Lernziele abgestimmt sind.
                <br />
                <br />
              </p>
              <div className="flex items-center justify-center py-[30px] md:pt-0">
                <span className="relative flex">
                  <div className="bg-red rounded-full p-4 border-2">
                    <img src="svg/school.svg" alt="school SVG" width="200" />
                  </div>
                  <span className="absolute bg-red h-full w-full animate-custom-ping rounded-full" />
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <p className="text-[15px] mt-8 md:text-2xl text-center leading-relaxed w-full font-saira max-w-[600px]">
              Schau dir gerne die Liste meiner bereits konzipierten Kurse an.
              <br />
              <br />
              <b>Dein Kurs ist nicht dabei?</b> Kein Problem!
              <br />
              Melde dich bei mir, und wir finden gemeinsam eine Lösung, die
              genau auf deine Wünsche und Lernziele zugeschnitten ist.
            </p>
          </div>
          <div className="mt-[70px] h-[5px] bg-red"></div>
        </section>
      </div>

      <h1 className="pt-8 text-2xl md:text-6xl text-darkBlue underline underline-offset-4">
        Kursthemen
      </h1>

      <section className="flex items-center justify-center">
        <div className="max-w-[1500px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8">
                <div className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  01
                </div>
                <h1 className="text-red text-[20px] md:text-left mb-8 md:text-4xl">
                  Programmiersprachen
                </h1>

                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <h2 className="text-center md:text-left text-[15px] md:text-2xl">
                  Ich biete maßgeschneiderte Kurse in einer Vielzahl von
                  Programmiersprachen an. Lerne Python, Java, JavaScript oder
                  TypeScript auf eine praxisorientierte und verständliche Weise.
                  Mit meinen Kursen erhältst du fundiertes Wissen, das du direkt
                  in der Praxis anwenden kannst, um deine Programmierfähigkeiten
                  auf das nächste Level zu bringen.
                </h2>
              </div>
              <div className="m-8 flex flex-col items-center justify-end">
                <div className="border-2 border-gray-700 bg-black p-2">
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "print('Python')",
                      1000,
                      "console.log('JavaScript')",
                      1000,
                      "System.out.println('Java')",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    className="font-mono text-[13px] text-white md:text-xl pt-8"
                    repeat={Infinity}
                  />
                </div>
                <img
                  src="svg/lehre/keyboard.svg"
                  alt="keyboard SVG"
                  className="w-[150px] md:w-[300px]"
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
                <h1 className="text-red md:text-right mb-8 md:text-4xl">
                  Robotik
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <h2 className="text-center md:text-left text-[15px] md:text-2xl">
                  In meinen Kursen zur Robotik und Elektronik wird ein Einblick
                  in die spannende Welt der Mikrocontroller und kleinen Computer
                  gegeben. Beispielsweise mit Arduino oder Raspberry Pi werden
                  diverse Projekte realisiert, von einfachen Schaltungen bis hin
                  zu komplexeren Steuerungen. Ich zeige dir, wie du Komponenten
                  lötest, Schaltkreise baust und deine Ideen durch
                  Programmierung zum Leben erweckst.
                </h2>
              </div>
              <div className="m-8 mt-0 md:mt-8 flex flex-col items-center justify-center order-2 md:order-1">
                <img
                  className="h-[150px] md:h-[300px] w-full animate-wiggle object-scale-down"
                  src="svg/lehre/robot.svg"
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
                <h1 className="text-red md:text-left mb-8 md:text-4xl">
                  Web-Entwicklung
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <h2 className="text-center md:text-left text-[15px] md:text-2xl">
                  Du möchtest dynamische Webseiten und moderne Webanwendungen
                  bauen? In meinen Kursen zur Webentwicklung vermittle ich –
                  entweder mit Flask oder mit React - Grundlagenwissen für
                  interaktive User Interfaces. Du wirst lernen, wie man
                  Backend-Logik aufbaut und moderne, skalierbare Frontends
                  entwickelt. Ich führe dich durch alle wichtigen Schritte, vom
                  ersten Code bis zur vollständigen Anwendung, und lege großen
                  Wert auf praxisorientierte Übungen.
                </h2>
              </div>

              <div className="mt-0 md:m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[100px] md:h-[250px] w-full object-scale-down"
                  src="svg/lehre/web-design.svg"
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
                <h1 className="text-red md:text-right mb-8 md:text-4xl">
                  Theoretische Informatik
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <h2 className="text-center md:text-left text-[15px] md:text-2xl">
                  Die theoretischen Informatik beschäftigt sich mit den
                  essenziellen Konzepten, die hinter der Programmierung stehen.
                  Im Rahmen meines Unterrichtes werden Algorithmen und
                  Datenstrukturen behandelt und es wird die Grundlage für
                  effizientes Programmieren gelegt. Durch die Arbeit mit
                  Pseudocode, werden komplexe Probleme analysiert und
                  Lösungsansätze entwickelt, bevor sie in Code umsetzt werden.
                  Diese theoretischen Konzepte sind entscheidend, um die
                  Struktur und Effizienz von Programmen zu verstehen und zu
                  optimieren.
                </h2>
              </div>
              <div className="md:m-8 flex flex-col items-center justify-center  order-2 md:order-1">
                <img
                  className="h-[100px] md:h-[250px] w-full object-scale-down animate-grow-little"
                  src="svg/lehre/find-path.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8">
                <div className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  05
                </div>
                <h1 className="text-red text-[20px] md:text-left mb-8 md:text-4xl">
                  Machine Learning
                </h1>

                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <h2 className="text-center md:text-left text-[15px] md:text-2xl">
                  Inhalt des Kurses zu Machine Learning sind die theoretischen
                  und praktischen Grundlagen von künstlicher Intelligenz. Meine
                  Expertise liegt dabei in den Techniken der Sprachverarbeitung
                  und Linguistik. Das Trainieren von Modellen, um Muster in
                  sprachlichen Daten zu erkennen und Vorhersagen zu treffen, ist
                  ein aktuelles und zukunftsorientiertes Thema. Wir gehen
                  grundlegend auf die Theorie und Praxis der Algorithmen ein,
                  die für die Analyse von Textdaten relevant sind, und ich zeige
                  dir, wie du diese auf realen, linguistischen Datensätzen
                  anwenden kannst.
                </h2>
              </div>
              <div className="md:m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[100px] md:h-[250px] w-full object-scale-down"
                  src="svg/lehre/robot-ai.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <h1 className="pt-8 text-4xl md:text-6xl text-red">Preise</h1>
      <section className="flex items-center justify-center">
        <div className="max-w-[1500px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <div className="m-8">
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p className="text-center md:text-left text-[15px] md:text-2xl">
                  Nach unserem Erstgespräch erstelle ich ein individuelles
                  Angebot, das genau auf deine Anforderungen zugeschnitten ist.
                  Der Zeitaufwand und der damit verbundene Preis für das
                  Entwickeln deiner Website sind größtenteils abhängig von der
                  technischen und ästhetischen Komplexität.
                </p>
              </div>
              <div className="m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[100px] md:h-[200px] w-full animate-wiggle object-scale-down"
                  src="svg/pricetag2.svg"
                  alt="iconImage"
                />
              </div>
            </div>

            <div className="m-8 flex flex-col items-center justify-center">
              <Link
                href="/preise"
                className="py-3 px-2 bg-red rounded text-3xl border-black text-white transition ease-in hover:scale-110"
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
