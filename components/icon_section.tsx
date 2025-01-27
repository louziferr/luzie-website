import IconCard from "./icon_card";

export default function IconSection() {
  const cards: string[][] = [
    [
      "svg/settings.svg",
      "Individuelle Lösungen",
      "Jedes Projekt hat andere Anforderungen. Je nach Wunsch kann das Aussehen und die Funktionsweise deiner Website angepasst werden.",
    ],
    [
      "svg/bubble2.svg",
      "Klare Kommunikation",
      "Das Treffen von klaren Absprachen und regelmäßiger Austausch sind die wichtigsten Aspekte für eine erfolgreiche Zusammenarbeit.",
    ],
    [
      "svg/calendar.svg",
      "Fester Zeitplan",
      "Es muss schnell gehen? Kein Problem - Wir können uns gerne auf ein festes Datum zur Veröffentlichung deiner Website einigen.",
    ],
    [
      "svg/pricetag2.svg",
      "Klares Budget",
      "Sobald abzusehen ist, welche Arbeitsschritte für die Umsetzung notwendig sind und wie komplex deine Website sein wird, kann ein maximales Budget festgelegt werden.",
    ],
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-auto gap-4 bg-white place-items-center">
      {cards.map((item, itemIndex) => (
        <IconCard
          key={itemIndex}
          image={item[0]}
          headline={item[1]}
          text={item[2]}
        />
      ))}
    </div>
  );
}
