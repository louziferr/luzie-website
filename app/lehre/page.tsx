"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

export default function Lehre() {
  return (
    <>
      <div className="h-screen flex bg-rose flex-col flex-grow items-center justify-center p-8">
        <h1 className="pb-2 text-white text-3xl md:text-4xl animate-fade-down animate-delay-200">
          Informatik lernen.
        </h1>
        <div className="w-full h-[5px] bg-white  animate-jump-in animate-delay-200"></div>

        <h1 className="font-saira text-white md:text-3xl pt-4 animate-fade-up animate-delay-500">
          Auf jedem Niveau.
        </h1>
      </div>

      <div className="mb-0 m-8 md:p-8">
        <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
          <h1 className="py-8 font-alfa text-3xl md:text-6xl text-red">
            Unterricht und Kurse
          </h1>
        </ScrollAnimation>

        <section className="flex flex-col items-center">
          <div className="flex max-w-[1300px]">
            <div className="relative grid grid-cols-1 md:grid-cols-2 md:pt-8">
              <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                <p className="text-center md:text-justify leading-relaxed max-w-[400px]">
                  Ob die erste Zeile Code geschrieben oder komplexe
                  Softwarearchitekturen optimiert werden sollen: Ich biete
                  Informatik-Unterricht auf allen Niveaus an.
                  <br />
                  <br />
                  Meine Arbeit als Dozentin richtet sich hauptsächlich an
                  Schulen, Universitäten, Ausbildungsinstitute und Unternehmen,
                  die Interesse an einem maßgeschneiderten Kurs zu Informatik
                  haben. Ich unterrichte Kinder, Jugendliche und Erwachsene und
                  passe das Niveau sowie die Lehr- und Lernmethoden an die
                  jeweilige Zielgruppe an. Die Kurse können online oder vor Ort
                  stattfinden.
                  <br /> <br />
                  Eine Auflistung bereits erprobter Kurskonzepte zu
                  verschiedenen Themen der Informatik ist auf dieser Seite zu
                  sehen. Auf Wunsch entwickle ich neue, maßgeschneiderte Kurse,
                  die genau auf das Projekt und die Lernziele abgestimmt sind.
                  <br />
                  <br />
                </p>
              </ScrollAnimation>
              <div className="flex items-center justify-center md:justify-end py-[30px] md:pt-0">
                <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
                  <span className="relative flex">
                    <div className="bg-rose-700 rounded-full p-4 border-2">
                      <img
                        src="/svg/school.svg"
                        alt="school SVG"
                        className="w-[100px] md:w-[250px]"
                      />
                    </div>
                    <span className="absolute bg-rose-600 h-full w-full animate-custom-ping rounded-full" />
                  </span>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
          <div className="mt-[80px] mb-[40px] md:m-[80px] h-[5px] bg-rose-700 shadow-md shadow-red"></div>
        </ScrollAnimation>
        <h1 className="pt-8 font-alfa text-2xl md:text-5xl text-darkBlue underline underline-offset-4">
          Kursthemen
        </h1>
      </div>

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
        <div className="max-w-[1300px]">
          <div className="flex flex-col" id={"programmiersprachen"}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8">
                <div className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  01
                </div>

                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-left"
                >
                  <h1 className="text-rose-700 md:text-left mb-8 md:text-4xl">
                    Programmiersprachen
                  </h1>
                </ScrollAnimation>

                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Python, Javascript/Typescript, Java
                  <br />
                  <br />
                  Ich biete maßgeschneiderte Kurse zu unterschiedlichen
                  Programmiersprachen an. Der Inhalt wird auf eine
                  praxisorientierte und verständliche Weise vermittelt. Je nach
                  Bedarf kann der Fokus auf dem Erlernen von einfachen
                  Programmierkenntnissen oder auf dem Anwenden von
                  fortgeschrittenen Techniken liegen.
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
                  src="/svg/lehre/keyboard.svg"
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

                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-right"
                >
                  <h1 className="text-cyan-700 md:text-right mb-8 md:text-4xl">
                    Robotik
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  In meinen Kursen zur Robotik und Elektronik wird ein Einblick
                  in die Welt der Mikrocontroller und kleinen Computer gegeben.
                  Beispielsweise mit Arduino oder Raspberry Pi werden diverse
                  Projekte realisiert, von einfachen Schaltungen bis hin zu
                  komplexeren Steuerungen. Ich erkläre, wie man Komponenten
                  lötet, Schaltkreise baut und eigene Ideen durch Programmierung
                  zum Leben erweckt.
                </p>
              </div>
              <div className="m-8 mt-0 md:mt-8 flex flex-col items-center justify-center order-2 md:order-1">
                <img
                  className="h-[150px] md:h-[300px] w-full animate-wiggle object-scale-down"
                  src="/svg/lehre/robot.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col" id={"web-entwicklung"}>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4 md:mt-0 md:m-8">
              <div className="m-8">
                <p className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  03
                </p>
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-left"
                >
                  <h1 className="text-amber-500 md:text-left mb-8 md:text-4xl">
                    Web-Entwicklung
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  In meinen Kursen zur Webentwicklung vermittle ich - entweder
                  mit Flask oder mit React - Grundlagenwissen für dynamische
                  Webseiten und moderne Webanwendungen. Je nach Vorwissen wird
                  auf die Grundbegriffe des Internets und der Webentwicklung
                  eingegangen, sowie auf den allgemeinen Aufbau von dynamischen
                  und responsiven Webseiten. Ich führe durch alle wichtigen
                  Schritte, vom ersten Code bis zur vollständigen Anwendung, und
                  lege großen Wert auf praxisorientierte Übungen.
                </p>
              </div>

              <div className="mt-0 mb-4 md:m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[100px] md:h-[200px] w-full object-scale-down"
                  src="/svg/lehre/web-design.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col" id={"theoretische-informatik"}>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-0 md:m-8">
              <div className="m-8 order-1 md:order-2">
                <p className="text-gray-700 text-center text-4xl md:text-right md:text-6xl font-alfa mr-3">
                  04
                </p>
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-right"
                >
                  <h1 className="text-teal-600 md:text-right mb-8 md:text-4xl">
                    Theoretische Informatik
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Die theoretische Informatik beschäftigt sich mit den
                  essenziellen Konzepten, die hinter der Programmierung stehen.
                  Im Rahmen meines Unterrichtes werden Algorithmen und
                  Datenstrukturen behandelt und es wird die Grundlage für
                  effizientes Programmieren gelegt. Durch die Arbeit mit
                  Pseudocode werden komplexe Probleme analysiert und
                  Lösungsansätze entwickelt, bevor sie in Code umgesetzt werden.
                  Diese theoretischen Konzepte sind entscheidend, um die
                  Struktur und Effizienz von Programmen zu verstehen und zu
                  optimieren.
                </p>
              </div>
              <div className="md:m-8 flex flex-col items-center justify-center  order-2 md:order-1">
                <img
                  className="h-[100px] md:h-[250px] w-full object-scale-down animate-grow-little"
                  src="/svg/lehre/find-path.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col" id={"machine-learning"}>
            <div className="grid grid-cols-1 md:grid-cols-2  mt-8 md:mt-0 md:m-8">
              <div className="m-8">
                <div className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  05
                </div>
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-left"
                >
                  <h1 className="text-purple-800 md:text-left mb-8 md:text-4xl">
                    Machine Learning
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Inhalt des Kurses zu Machine Learning sind die theoretischen
                  und praktischen Grundlagen von künstlicher Intelligenz. Meine
                  Expertise liegt dabei in den Techniken der Sprachverarbeitung
                  und Linguistik. Das Trainieren von Modellen, um Muster in
                  sprachlichen Daten zu erkennen und Vorhersagen zu treffen, ist
                  ein aktuelles und zukunftsorientiertes Thema. Wir gehen
                  grundlegend auf die Theorie und Praxis der Algorithmen ein,
                  die für die Analyse von Textdaten relevant sind, und ich
                  vermittle, wie diese auf realen, linguistischen Datensätzen
                  angewendet werden können.
                </p>
              </div>
              <div className="md:m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[100px] md:h-[250px] w-full object-scale-down"
                  src="/svg/lehre/robot-ai.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
        <div className="mt-[80px] mb-[40px] md:m-[80px] h-[5px] bg-rose-700 shadow-md shadow-red"></div>
      </ScrollAnimation>

      <section className="flex items-center justify-center">
        <div className="max-w-[1500px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <div className="m-8">
                <h1 className="text-rose-700 mt-8 text-left mb-4 md:text-4xl">
                  Melde dich!
                </h1>
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
                  className="h-[60px] md:h-[100px] w-full animate-wiggle object-scale-down"
                  src="/svg/hand-shake.svg"
                  alt="iconImage"
                />
              </div>
            </div>

            <div className="m-8 flex flex-col items-center justify-center">
              <Link
                href="/preise"
                className="py-2 px-3 bg-rose-700 rounded md:text-xl text-white transition ease-in hover:scale-110"
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
