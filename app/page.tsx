import "@fontsource/alfa-slab-one";
import "@fontsource/ultra";
import "@fontsource/roboto";
import "@fontsource/saira";
import "@fontsource/anta";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-darkBlue flex flex-col items-start justify-center p-8">
        <h1 className="text-white text-4xl">Luzie Ahrens</h1>
        <div className="w-full h-[10px] bg-white"></div>
      </div>

      <div className="grid w-full md:h-screen grid-cols-1 md:grid-cols-3 divide-x-4 divide-darkBlue">
        <div className="bg-black pb-8">
          <div className="mt-[100px] text-center flex flex-col items-center">
            <h1 className="text-white mb-8 text-2xl lg:text-4xl">
              Web-Entwicklung
            </h1>
            <img src="svg/imac.svg" alt="image" width="200" />
            <p className="text-xl mt-10 text-white font-alfa">Ihre Website</p>
            <p className="text-xl mt-8 text-white">Individuell.</p>
            <p className="text-xl mt-4 text-white">Stilvoll.</p>
            <p className="text-xl mt-4 text-white">Responsiv.</p>
            <button className="mt-8 px-4 py-2 rounded bg-darkBlue text-white text-xl">
              Mehr
            </button>
          </div>
        </div>
        <div className="bg-black">
          <div className="mt-[100px] flex flex-col items-center">
            <h1 className="text-white mb-8 text-2xl lg:text-4xl">Lehre</h1>
            <img src="svg/pencil.svg" alt="image" width="200" />
            <p className="text-xl mt-10 text-white font-alfa">Unterricht</p>
            <p className="text-xl mt-8 text-white">Informatik.</p>
            <p className="text-xl mt-4 text-white">Technik.</p>
            <p className="text-xl mt-4 text-white">Medien.</p>
            <button className="mt-8 px-4 py-2 rounded bg-darkBlue text-white text-xl">
              Mehr
            </button>
          </div>
        </div>
        <div className="bg-black pb-8 md:pb-0">
          <div className="mt-[100px] flex flex-col items-center">
            <h1 className="text-white mb-8 text-2xl lg:text-4xl">
              Programmierung
            </h1>
            <img src="svg/chart-pie.svg" alt="image" width="200" />
            <p className="text-xl mt-10 text-white font-alfa">
              Software-Lösungen
            </p>
            <p className="text-xl mt-8 text-white">Datenverarbeitung.</p>
            <p className="text-xl mt-4 text-white">Machine Learning.</p>
            <p className="text-xl mt-4 text-white">Grafiken.</p>
            <button className="mt-8 px-4 py-2 rounded bg-darkBlue text-white text-xl">
              Mehr
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
