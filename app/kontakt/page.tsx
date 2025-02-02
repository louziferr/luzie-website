"use client";

export default function Kontakt() {
  return (
    <>
      <div className="mt-[40px] h-screen md:mt-[90px] p-4 flex items-start justify-start flex-col">
        <div className="p-4 max-w-screen-xl">
          <div>
            <h1 className="text-left py-8 text-3xl md:text-6xl text-purple-900">
              Kontakt
            </h1>
            <div className="flex max-w-screen-xl">
              <div className="relative grid grid-cols-1 md:grid-cols-2">
                <p className="md:text-justify leading-relaxed order-2 md:order-1">
                  Luzie Ahrens
                  <br />
                  luzie.ahrens@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
