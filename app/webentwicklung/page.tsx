"use client";

import { TypeAnimation } from "react-type-animation";

export default function Webentwicklung() {
  return (
    <>
      <div className="h-screen flex bg-darkBlue flex-col flex-grow items-center justify-center p-8">
        <h1 className="text-white text-4xl">Deine Website.</h1>
        <div className="w-full h-[10px] bg-white"></div>
        <TypeAnimation
          sequence={["Wie", 1000, "Was", 1000, "Wann", 1000]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
          className="font-saira text-white text-4xl pt-8"
        />

        <h1 className="font-saira text-white text-4xl">du willst.</h1>
      </div>

      <div className="flex flex-col mt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 m-8">
          <div className="m-8">
            <h1 className="text-darkBlue text-left mb-8 text-3xl">
              Individuelle Lösungen
            </h1>
            <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
            <h2 className="text-center text-[20px] md:text-3xl">
              Jedes Projekt hat andere Anforderungen. Je nach Wunsch kann das
              Aussehen und die Funktionsweise deiner Website angepasst werden.
            </h2>
          </div>
          <div className="h-[400px] animate-spin m-4 md:m-8">
            <img
              className="w-full h-full object-scale-down"
              src="svg/settings.svg"
              alt="iconImage"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 m-8">
          <div className="m-8 order-1 md:order-2">
            <h1 className="text-darkBlue text-right mb-8 text-3xl">
              Klare Kommunikation
            </h1>
            <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
            <h2 className="text-center text-[20px] md:text-3xl">
              Das Treffen von klaren Absprachen und regelmäßiger Austausch sind
              die wichtigsten Aspekte für eine erfolgreiche Zusammenarbeit.
            </h2>
          </div>
          <div className="h-[400px] animate-pulse m-4 md:m-8 order-2 md:order-1">
            <img
              className="w-full h-full object-scale-down"
              src="svg/bubble2.svg"
              alt="iconImage"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 m-8">
          <div className="m-8 pb-20 md:pb-0">
            <h1 className="text-darkBlue text-left mb-8 text-3xl">
              Fester Zeitplan
            </h1>
            <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
            <h2 className="text-center text-[20px] md:text-3xl">
              Es muss schnell gehen? Kein Problem - Wir können uns gerne auf ein
              festes Datum zur Veröffentlichung deiner Website einigen.
            </h2>
          </div>

          <div className="h-[400px]">
            <img
              className="w-full h-full object-scale-down animate-bounce"
              src="svg/calendar.svg"
              alt="iconImage"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 m-8">
          <div className="m-8 order-1 md:order-2">
            <h1 className="text-darkBlue text-right mb-8 text-3xl">
              Fixes Budget
            </h1>
            <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
            <h2 className="text-center text-[20px] md:text-3xl">
              Sobald abzusehen ist, welche Arbeitsschritte für die Umsetzung
              notwendig sind und wie komplex deine Website sein wird, kann ein
              maximales Budget festgelegt werden.
            </h2>
          </div>
          <div className="h-[400px] animate-wiggle m-4 md:m-8 order-2 md:order-1">
            <img
              className="w-full h-full object-scale-down"
              src="svg/pricetag2.svg"
              alt="iconImage"
            />
          </div>
        </div>
      </div>
    </>
  );
}
