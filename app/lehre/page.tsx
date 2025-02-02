"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

export default function Lehre() {
  return (
    <div>
      <div className="h-screen flex bg-rose flex-col flex-grow flex-wrap items-center justify-center p-8">
        <h1 className="text-white text-3xl md:text-4xl animate-fade-down animate-delay-200">
          Informatik lernen.
        </h1>
        <div className="w-full h-[10px] bg-white"></div>

        <h1 className="font-saira text-white md:text-4xl pt-4 animate-fade-up animate-delay-500">
          Auf jedem Niveau.
        </h1>
      </div>

      <div className="mb-0 m-8 md:p-8">
        <h1 className="py-8 text-3xl md:text-6xl text-red">
          Unterricht und Kurse
        </h1>

        <section className="flex flex-col items-center">
          <div className="flex max-w-screen-xl">
            <div className="relative grid grid-cols-1 md:grid-cols-2">
              <p className="text-center md:text-justify leading-relaxed">
                Ob die erste Zeile Code geschrieben oder eine komplexe
                Softwarearchitekturen optimiert werden soll: ich biete
                Informatik-Unterricht auf allen Niveaus an.
                <br />
                <br />
                Meine Arbeit als Dozentin richtet sich hauptsächlich an Schulen,
                Universitäten, Ausbildungsinstitute und Unternehmen, die
                Interesse an einem maßgeschneiderten Kurs zu Informatik haben.
                Ich unterrichte Kinder, Jugendliche und Erwachsene und passe das
                Niveau sowie die Lehr- und Lernmethoden an die jeweilige
                Zielgruppe an. Die Kurse können online oder vor Ort stattfinden.
                <br /> <br />
                Eine Auflistung bereits erprobter Kurskonzepte zu verschiedenen
                Themen der Informatik sind auf dieser Seite aufgelistet. Auf
                Wunsch entwickle ich neue, maßgeschneiderte Kurse, die genau auf
                das Projekt und die Lernziele abgestimmt sind.
                <br />
                <br />
              </p>
              <div className="flex items-center justify-center py-[30px] md:pt-0">
                <span className="relative flex">
                  <div className="bg-rose-700 rounded-full p-4 border-2">
                    <img
                      src="svg/school.svg"
                      alt="school SVG"
                      className="w-[100px] md:w-[250px]"
                    />
                  </div>
                  <span className="absolute bg-rose-600 h-full w-full animate-custom-ping rounded-full" />
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <p className="mt-8 text-center leading-relaxed w-full max-w-[600px]">
              Schau dir gerne die Liste meiner bereits konzipierten Kurse an.
              <br />
              <br />
              <b>Dein Kurs ist nicht dabei?</b> Kein Problem!
              <br />
              Melde dich bei mir, und wir finden gemeinsam eine Lösung, die
              genau auf deine Wünsche und Lernziele zugeschnitten ist.
            </p>
          </div>
          <div className="mt-[70px] w-full h-[5px] bg-rose-700"></div>
        </section>
      </div>

      <h1 className="pt-8 text-2xl md:text-6xl text-darkBlue underline underline-offset-4">
        Kursthemen
      </h1>

      <div className="flex flex-row items-center justify-center">
        <div className="p-8 leading-relaxed max-w-[900px]">
          <ul className="font-saira">
            <li className="p-1 flex">
              <div className="text-rose-700 text-xl md:text-3xl font-alfa mr-3">
                01
              </div>
              <Link
                className="underline underline-offset-2 md:text-2xl hover:cursor-pointer"
                href="/lehre/#programmiersprachen"
              >
                Programmiersprachen
              </Link>
            </li>
            <li className="p-1 flex">
              <div className="text-cyan-700 text-xl font-alfa md:text-3xl mr-3">
                02
              </div>
              <Link
                className="underline underline-offset-2  md:text-2xl hover:cursor-pointer"
                href="/lehre/#robotik"
              >
                Robotik
              </Link>
            </li>
            <li className="p-1 flex">
              <div className="text-amber-500 text-xl md:text-3xl font-alfa mr-3">
                03
              </div>
              <Link
                className="underline underline-offset-2  md:text-2xl hover:cursor-pointer"
                href="/lehre/#web-entwicklung"
              >
                Web-Entwicklung
              </Link>
            </li>
            <li className="p-1 flex">
              <div className="text-teal-600 text-xl md:text-3xl font-alfa mr-3">
                04
              </div>
              <Link
                className="underline underline-offset-2  md:text-2xl hover:cursor-pointer"
                href="/lehre/#theoretische-informatik"
              >
                Theoretische Informatik
              </Link>
            </li>
            <li className="p-1 flex">
              <div className="text-purple-800 text-xl md:text-3xl font-alfa mr-3 hover:cursor-pointer">
                05
              </div>
              <Link
                className="underline underline-offset-2  md:text-2xl hover:cursor-pointer"
                href="/lehre/#machine-learning"
              >
                Machine Learning
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <section className="flex items-center justify-center">
        <div className="max-w-[1500px]">
          <div className="flex flex-col" id={"programmiersprachen"}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8">
                <div className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  01
                </div>
                <h1 className="text-rose-700 text-[20px] md:text-left mb-8 md:text-4xl">
                  Programmiersprachen
                </h1>

                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Ich biete maßgeschneiderte Kurse in einer Vielzahl von
                  Programmiersprachen an. Lerne Python, Java, JavaScript oder
                  TypeScript auf eine praxisorientierte und verständliche Weise.
                  Mit meinen Kursen erhältst du fundiertes Wissen, das du direkt
                  in der Praxis anwenden kannst, um deine Programmierfähigkeiten
                  auf das nächste Level zu bringen.
                </p>
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

          <div className="flex flex-col" id={"robotik"}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8 order-1 md:order-2">
                <p className="text-gray-700 text-center text-4xl md:text-right md:text-6xl font-alfa mr-3">
                  02
                </p>
                <h1 className="text-cyan-700 md:text-right mb-8 md:text-4xl">
                  Robotik
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  In meinen Kursen zur Robotik und Elektronik wird ein Einblick
                  in die spannende Welt der Mikrocontroller und kleinen Computer
                  gegeben. Beispielsweise mit Arduino oder Raspberry Pi werden
                  diverse Projekte realisiert, von einfachen Schaltungen bis hin
                  zu komplexeren Steuerungen. Ich zeige dir, wie du Komponenten
                  lötest, Schaltkreise baust und deine Ideen durch
                  Programmierung zum Leben erweckst.
                </p>
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

          <div className="flex flex-col" id={"web-entwicklung"}>
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <div className="m-8">
                <p className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  03
                </p>
                <h1 className="text-amber-500 md:text-left mb-8 md:text-4xl">
                  Web-Entwicklung
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Du möchtest dynamische Webseiten und moderne Webanwendungen
                  bauen? In meinen Kursen zur Webentwicklung vermittle ich –
                  entweder mit Flask oder mit React - Grundlagenwissen für
                  interaktive User Interfaces. Du wirst lernen, wie man
                  Backend-Logik aufbaut und moderne, skalierbare Frontends
                  entwickelt. Ich führe dich durch alle wichtigen Schritte, vom
                  ersten Code bis zur vollständigen Anwendung, und lege großen
                  Wert auf praxisorientierte Übungen.
                </p>
              </div>

              <div className="mt-0 mb-4 md:m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[100px] md:h-[200px] w-full object-scale-down"
                  src="svg/lehre/web-design.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col" id={"theoretische-informatik"}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8 order-1 md:order-2">
                <p className="text-gray-700 text-center text-4xl md:text-right md:text-6xl font-alfa mr-3">
                  04
                </p>
                <h1 className="text-teal-600 md:text-right mb-8 md:text-4xl">
                  Theoretische Informatik
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
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
                </p>
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

          <div className="flex flex-col" id={"machine-learning"}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8">
                <div className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  05
                </div>
                <h1 className="text-purple-800 text-[20px] md:text-left mb-8 md:text-4xl">
                  Machine Learning
                </h1>

                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
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
                </p>
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

      <div className="mt-[70px] h-[5px] bg-darkBlue"></div>

      <h1 className="pt-8 text-2xl md:text-4xl text-rose-700">Anfragen</h1>
      <section className="flex items-center justify-center">
        <div className="max-w-[1500px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <div className="m-8">
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Melde dich bei mir, wenn du Interesse an meinem Angebot oder
                  eine Nachfrage hast. Nach unserem Erstgespräch erstelle ich
                  ein individuelles Angebot, das genau auf die Anforderungen
                  zugeschnitten ist.
                </p>
              </div>
              <div className="m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[80px] md:h-[150px] w-full animate-wiggle object-scale-down"
                  src="svg/hand-shake.svg"
                  alt="iconImage"
                />
              </div>
            </div>

            <div className="m-8 flex flex-col items-center justify-center">
              <Link
                href="/preise"
                className="py-2 px-3 bg-rose-700 rounded text-xl md:text-2xl border-black text-white transition ease-in hover:scale-110"
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
