import SkillsCard from "@/components/skills_card";
export default function Home() {
  return (
    <>
      <div className="h-screen flex bg-darkBlue flex-col flex-grow items-center justify-center p-8">
        <h1 className="text-white text-4xl">Luzie Ahrens</h1>
        <div className="w-full h-[10px] justify-center animate-[grow_5s_ease-in-out_infinite] bg-white"></div>
        <h1 className="text-white text-4xl pt-2">Informatikerin</h1>
      </div>

      <div className="grid w-full md:h-screen grid-cols-1 md:grid-cols-3 divide-x-0 md:divide-x-8 divide-darkBlue">
        <SkillsCard
          headline="Web-Entwicklung"
          subheadline="Ihre Website"
          keywords={["Individuell.", "Stilvoll.", "Responsiv."]}
          color="green"
          image="svg/imac.svg"
          link="/webentwicklung"
        />
        <SkillsCard
          headline="Lehre"
          subheadline="Unterricht"
          keywords={["Informatik.", "Technik.", "Medien."]}
          color="red"
          image="svg/pencil.svg"
          link="/lehre"
        />
        <SkillsCard
          headline="Programmieren"
          subheadline="Software-Lösungen"
          keywords={["Datenverarbeitung.", "Machine Learning.", "Grafiken."]}
          color="blue"
          image="svg/chart-pie.svg"
          link="/programmieren"
        />
      </div>
    </>
  );
}
