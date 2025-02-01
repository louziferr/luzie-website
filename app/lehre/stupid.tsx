"use client";

import { PageDropdown } from "@/components/page_dropdown";
import Link from "next/link";

export default function Lehre() {
  const kurse: string[][] = [
    ["Python: Grundkurs", "Cooler Kurs"],
    ["Python: Fortgeschritten", "Cooler Kurs"],
    ["JavaScript: Grundkurs", "Cooler Kurs"],
    ["Webentwicklung: Grundkurs", "Cooler Kurs"],
    ["Webentwicklung mit Flask", "Cooler Kurs"],
    ["Webentwicklung mit React", "Cooler Kurs"],
  ];
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
          Individueller Unterricht
        </h1>

        <section className="flex flex-col">
          <div className="flex">
            <div className="relative grid grid-cols-1 md:grid-cols-2">
              <p className="text-[15px] text-center md:text-xl md:text-justify leading-relaxed font-saira">
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
              <div className="flex items-center justify-center pt-[30px] md:pt-0">
                <div className="bg-red rounded-full p-4 border-2">
                  <img src="svg/school.svg" alt="programming SVG" width="300" />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <p className="text-[15px] mt-8 md:text-xl text-center leading-relaxed w-full font-saira max-w-[600px]">
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
        Kurse
      </h1>
      <section className="grid grid-cols-1 max-w-screen-xl m-8 mx-auto">
        {kurse.map((item, index) => (
          <div
            key={index}
            className="text-red font-anta text-3xl md:text-5xl p-4 rounded"
          >
            <PageDropdown
              buttonLabel={item[0]}
              items={[{ title: "Hey", description: item[1] }]}
            />
          </div>
        ))}
      </section>

      <h1 className="pt-10 text-3xl md:text-6xl text-darkBlue underline underline-offset-4">
        Tech Stack
      </h1>

      <section className="flex items-center justify-center">
        <div className="max-w-[1500px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <div className="m-8">
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p className="text-center text-[18px] md:text-3xl">
                  Ich setze auf bewährte und moderne Technologien, um schnelle,
                  sichere und skalierbare Websites zu entwickeln.
                </p>
                <div className="text-center mt-2 md:text-left text-[18px] md:text-3xl">
                  <h1 className="py-4 font-anta text-gray-600 text-3xl md:text-5xl">
                    React & Next.js
                  </h1>
                  <p className="text-center">
                    Dynamische, performante Webanwendungen mit modernster
                    Frontend-Technologie.
                  </p>

                  <h1 className="py-4 font-anta text-gray-600 text-3xl md:text-5xl">
                    Tailwind CSS
                  </h1>
                  <p className="text-center">
                    Die Grundlage für sauberen, semantischen Code und
                    individuelles Styling.
                  </p>
                  <h1 className="py-4 font-anta text-gray-600 text-3xl md:text-5xl">
                    Prisma
                  </h1>
                  <p className="text-center">
                    Eine effiziente und flexible Lösung für Datenbankverwaltung,
                    die Skalierbarkeit und Sicherheit gewährleistet.
                  </p>
                  <p className="pt-8 text-center text-[18px] md:text-3xl">
                    Durch diese Technologien entstehen leistungsstarke Websites,
                    die nicht nur optisch überzeugen, sondern auch technisch auf
                    höchstem Niveau sind.
                  </p>
                </div>
              </div>
              <div className="m-8 flex flex-row md:flex-col items-center justify-between">
                <img
                  className="h-[80px] md:h-[250px] w-full object-scale-down"
                  src="svg/react.svg"
                  alt="iconImage"
                />

                <img
                  className="h-[80px] md:h-[250px] w-full object-scale-down"
                  src="svg/tailwind.svg"
                  alt="iconImage"
                />
                <img
                  className="h-[80px] md:h-[250px] w-full object-scale-down"
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
                <p className="text-center md:text-left text-[18px] md:text-3xl">
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
                href="/preise"
                className="py-3 px-2 bg-green rounded text-3xl border-black text-white transition ease-in hover:scale-110"
              >
                Zu den Preisen
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
