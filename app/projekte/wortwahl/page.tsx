"use client";

import { BarChart } from "@mui/x-charts";
import { useEffect, useRef, useState } from "react";

interface Woerter {
  [key: string]: { [word: string]: number };
}

export default function Home() {
  const [afd, setAfd] = useState(50);
  const [linke, setLinke] = useState(50);
  const [cdu, setCdu] = useState(50);
  const [gruene, setGruene] = useState(50);
  const [spd, setSpd] = useState(50);
  const [fdp, setFdp] = useState(50);
  const [bsw, setBsw] = useState(50);

  const data = [
    { party: "CDU", count: cdu },
    { party: "Grüne", count: gruene },
    { party: "AFD", count: afd },
    { party: "SPD", count: spd },
    { party: "FDP", count: fdp },
    { party: "Linke", count: linke },
    { party: "BSW", count: bsw },
  ];

  const [word, setWord] = useState("");
  const [gesucht, setGesucht] = useState("");
  const [woerter, setWoerter] = useState<Woerter | null>(null);

  useEffect(() => {
    fetch("/woerter.json") // Pfad zur JSON-Datei im `public`-Ordner
      .then((response) => response.json())
      .then((jsonData) => {
        setWoerter(jsonData);
      })
      .catch((error) => console.error("Fehler beim Laden der JSON:", error));
  }, []);

  async function getWordCount() {
    if (!word) return;
    if (!woerter) return;
    if (word.includes(" ")) {
      setMessage("Bitte nur einen Begriff eingeben!");
      return;
    }
    setGesucht(word);
    setMessage("");
    const wordLow = word.toLowerCase();
    if (woerter["afd"].hasOwnProperty(wordLow)) {
      setAfd(woerter["afd"][wordLow]);
    } else {
      setAfd(0);
    }
    if (woerter["cdu"].hasOwnProperty(wordLow)) {
      setCdu(woerter["cdu"][wordLow]);
    } else {
      setCdu(0);
    }
    if (woerter["spd"].hasOwnProperty(wordLow)) {
      setSpd(woerter["spd"][wordLow]);
    } else {
      setSpd(0);
    }
    if (woerter["gruene"].hasOwnProperty(wordLow)) {
      setGruene(woerter["gruene"][wordLow]);
    } else {
      setGruene(0);
    }
    if (woerter["fdp"].hasOwnProperty(wordLow)) {
      setFdp(woerter["fdp"][wordLow]);
    } else {
      setFdp(0);
    }
    if (woerter["linke"].hasOwnProperty(wordLow)) {
      setLinke(woerter["linke"][wordLow]);
    } else {
      setLinke(0);
    }
    if (woerter["bsw"].hasOwnProperty(wordLow)) {
      setBsw(woerter["bsw"][wordLow]);
    } else {
      setBsw(0);
    }
    console.log(data);
  }

  const barChartRef = useRef<HTMLDivElement | null>(null); // Referenz auf das div-Element

  useEffect(() => {
    const handleResize = () => {
      if (barChartRef.current) {
        setBarWidth(barChartRef.current.offsetWidth);
      }
    };

    // ResizeObserver zur Überwachung der Größenänderung
    const resizeObserver = new ResizeObserver(handleResize);
    if (barChartRef.current) {
      resizeObserver.observe(barChartRef.current); // Div-Element beobachten
    }

    // Initiale Breite setzen
    handleResize();

    return () => {
      if (barChartRef.current) {
        resizeObserver.unobserve(barChartRef.current); // Beobachtung beenden
      }
    };
  }, []);

  const [barWidth, setBarWidth] = useState(0);
  const [message, setMessage] = useState("");

  function checkIfEnter(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      getWordCount();
    }
  }
  return (
    <>
      <div className="flex items-center justify-center flex-wrap pt-[80px] bg-darkBlue">
        <div className="min-h-screen bg-white md:p-4 md:w-2/3 border-x-2 border-gray-500 flex-wrap flex flex-col items-center justify-start">
          <h1 className="text-3xl pt-8 pb-4 text-darkBlue animate-fade-down">
            Wahlprogramme
          </h1>
          <h1 className="font-dmSerif pb-4 text-blue animate-fade-down">
            Bundestagswahl 2025
          </h1>
          <div className="flex items-center justify-center p-8 gap-x-4">
            <img
              className="animate-fade-right animate-delay-200"
              src="/election.svg"
              alt="Election"
              width="100"
            />
            <img
              className="animate-fade animate-delay-200"
              src="/checklist.svg"
              alt="Checklist"
              width="80"
            />
            <img
              className="animate-fade-left animate-delay-200"
              src="/brainstorm.svg"
              alt="Brainstorm"
              width="100"
            />
          </div>
          <div className="p-2 animate-fade">
            <p className="text-lg text-center p-2 text-red">
              Finde heraus, welche Parteien über deine Themen sprechen!
            </p>
            <div className="flex items-center justify-center">
              <p className="max-w-[500px] p-2 pb-8 text-center">
                Auf dieser Website kannst du die Wahlprogramme aller großen
                Parteien zur kommenden Bundestagswahl nach bestimmten Begriffen
                durchsuchen. Einfach ein Schlagwort eingeben - zum Beispiel
                Klimaschutz, Steuern oder Bildung - und sehen, welche Partei es
                wie oft in ihrem Programm erwähnt. Die Ergebnisse werden als
                Grafik präsentiert, sodass du auf einen Blick erkennen kannst,
                welche Themen für welche Partei besonders wichtig sind.
              </p>
            </div>
          </div>

          <p className="font-dmSerif text-lg animate-fade">
            Suche nach einem Begriff
          </p>
          <input
            className="font-sans rounded p-2 m-4 border-2 border-black animate-fade"
            placeholder="Begriff eingeben"
            onChange={(e) => setWord(e.target.value)}
            onKeyDown={checkIfEnter}
          ></input>
          <button
            className="bg-darkBlue text-white rounded p-2 mb-4"
            onClick={getWordCount}
          >
            Suchen
          </button>

          {message && (
            <p className="font-dmSerif text-lg text-rose-700">{message}</p>
          )}
          {gesucht && (
            <p className="font-sans text-lg pt-4">
              Begriff: <b>{gesucht}</b>
            </p>
          )}
          <div className="w-full max-w-[700px] p-2">
            <div
              className="w-full pb-4 mt-2 flex items-center justify-center flex-wrap"
              ref={barChartRef}
            >
              <BarChart
                dataset={data}
                yAxis={[
                  {
                    scaleType: "band",
                    dataKey: "party",
                    colorMap: {
                      type: "ordinal",
                      colors: [
                        "#111111" /* CDU */,
                        "#52BD54" /* Grüne */,
                        "#3794E1" /* AFD */,
                        "#E10F0F" /* SPD */,
                        "#F2CD27" /* FDP */,
                        "#E84040" /* Linke */,
                        "#9B69AF" /* BSW */,
                      ],
                    },
                  },
                ]}
                series={[{ dataKey: "count" }]}
                layout={"horizontal"}
                width={barWidth}
                margin={{ left: 50, right: 30, top: 20, bottom: 20 }}
                height={data.length * 50}
                grid={{ vertical: true }}
              />
            </div>
          </div>

          <div className="mt-8 w-full lg:w-2/3 h-[3px] border-b-2 border-dotted border-gray-500"></div>
          <p className="pt-8 font-dmSerif text-center text-black pb-8">
            Programmcode einsehbar auf:{" "}
            <a
              href="https://github.com/louziferr/wahlprogramme2025"
              className="text-blue"
            >
              Github
            </a>
          </p>
          <div className="w-full lg:w-2/3 mb-8 h-[3px] border-b-2 border-dotted border-gray-500"></div>
        </div>
      </div>
    </>
  );
}
