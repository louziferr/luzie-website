"use client";

export default function Kontakt() {
  return (
    <>
      <div className="mt-[40px] h-screen md:mt-[90px] md:p-4 flex items-start justify-start flex-col">
        <div className="p-4 max-w-[600px]">
          <div>
            <h1 className="text-left py-8 text-3xl md:text-6xl text-purple-900">
              Kontakt
            </h1>
            <p>
              Ob du bereits eine konkrete Idee hast oder noch nach der richtigen
              Lösung suchst – schreib&#39; mir gerne eine Mail.
              <br />
              <br />
              <br />
              Luzie Ahrens
            </p>

            <div className="p-1 flex items-center">
              <div className="relative flex">
                <div className="bg-purple-600 text-xl md:text-3xl font-alfa mr-3 rounded-full w-[7px] h-[7px]"></div>
                <span className="absolute inline-flex w-[7px] h-[7px] animate-ping rounded-full bg-purple-600 opacity-75"></span>
              </div>
              <p className="text-[12px] md:text-lg">luzie.ahrens@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
