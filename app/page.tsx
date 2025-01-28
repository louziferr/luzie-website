import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="h-screen bg-darkBlue flex flex-col items-start justify-center p-8 border-b-8 border-white">
        <h1 className="text-white text-4xl">Luzie Ahrens</h1>
        <div className="w-full h-[10px] bg-white"></div>
      </div>

      <div className="grid w-full md:h-screen grid-cols-1 md:grid-cols-3 divide-x-0 md:divide-x-8 divide-white">
        <div className="bg-green pb-8">
          <div className="mt-[100px] text-center flex flex-col items-center">
            <h1 className="text-white mb-8 text-4xl font-jockey">
              Web-Entwicklung
            </h1>
            <img src="svg/imac.svg" alt="image" width="200" />
            <p className="text-3xl mt-10 text-white font-jockey">
              Ihre Website
            </p>
            <p className="text-xl mt-8 text-white">Individuell.</p>
            <p className="text-xl mt-4 text-white">Stilvoll.</p>
            <p className="text-xl mt-4 text-white">Responsiv.</p>
            <Link href="/webentwicklung">
              <button className="mt-8 px-4 py-2 rounded bg-darkBlue text-white text-xl">
                Mehr
              </button>
            </Link>
          </div>
        </div>
        <div className="bg-red pb-8 md:pb-0">
          <div className="mt-[100px] flex flex-col items-center">
            <h1 className="text-white mb-8 text-4xl font-jockey">Lehre</h1>
            <img src="svg/pencil.svg" alt="image" width="200" />
            <p className="text-3xl mt-10 text-white font-jockey">Unterricht</p>
            <p className="text-xl mt-8 text-white">Informatik.</p>
            <p className="text-xl mt-4 text-white">Technik.</p>
            <p className="text-xl mt-4 text-white">Medien.</p>
            <button className="mt-8 px-4 py-2 rounded bg-darkBlue text-white text-xl">
              Mehr
            </button>
          </div>
        </div>
        <div className="bg-blue pb-8 md:pb-0">
          <div className="mt-[100px] flex flex-col items-center">
            <h1 className="text-white mb-8 text-4xl font-jockey">
              Programmierung
            </h1>
            <img src="svg/chart-pie.svg" alt="image" width="200" />
            <p className="text-3xl mt-10 text-white font-jockey">
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
