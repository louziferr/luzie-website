"use client";

export default function Impressum() {
  return (
    <>
      <div className="mt-[40px] h-screen bg-computer md:pt-[50px] md:p-4 flex items-start justify-start flex-col">
        <div className="max-w-[600px] p-8">
          <div>
            <h1 className="text-left py-8 text-3xl md:text-6xl text-white">
              Impressum
            </h1>
            <p className="text-white">
              Luzie Ahrens
              <br />
              c/o IP-Management #4429
              <br />
              Ludwig-Erhard-Str. 18
              <br />
              20459 Hamburg
              <br />
              <br />
              Kontakt:
              <br />
              E-Mail: kontakt@luzie-ahrens.de
              <br />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
