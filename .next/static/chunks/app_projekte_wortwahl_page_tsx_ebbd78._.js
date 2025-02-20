(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/app_projekte_wortwahl_page_tsx_ebbd78._.js", {

"[project]/app/projekte/wortwahl/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$charts$2f$BarChart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@mui/x-charts/BarChart/BarChart.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
function Home() {
    _s();
    const [afd, setAfd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [linke, setLinke] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [cdu, setCdu] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [gruene, setGruene] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [spd, setSpd] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [fdp, setFdp] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const [bsw, setBsw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(50);
    const data = [
        {
            party: "CDU",
            count: cdu
        },
        {
            party: "Grüne",
            count: gruene
        },
        {
            party: "AFD",
            count: afd
        },
        {
            party: "SPD",
            count: spd
        },
        {
            party: "FDP",
            count: fdp
        },
        {
            party: "Linke",
            count: linke
        },
        {
            party: "BSW",
            count: bsw
        }
    ];
    const [word, setWord] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [gesucht, setGesucht] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [woerter, setWoerter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            fetch("/woerter.json") // Pfad zur JSON-Datei im `public`-Ordner
            .then({
                "Home.useEffect": (response)=>response.json()
            }["Home.useEffect"]).then({
                "Home.useEffect": (jsonData)=>{
                    setWoerter(jsonData);
                }
            }["Home.useEffect"]).catch({
                "Home.useEffect": (error)=>console.error("Fehler beim Laden der JSON:", error)
            }["Home.useEffect"]);
        }
    }["Home.useEffect"], []);
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
    const barChartRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // Referenz auf das div-Element
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Home.useEffect": ()=>{
            const handleResize = {
                "Home.useEffect.handleResize": ()=>{
                    if (barChartRef.current) {
                        setBarWidth(barChartRef.current.offsetWidth);
                    }
                }
            }["Home.useEffect.handleResize"];
            // ResizeObserver zur Überwachung der Größenänderung
            const resizeObserver = new ResizeObserver(handleResize);
            if (barChartRef.current) {
                resizeObserver.observe(barChartRef.current); // Div-Element beobachten
            }
            // Initiale Breite setzen
            handleResize();
            return ({
                "Home.useEffect": ()=>{
                    if (barChartRef.current) {
                        resizeObserver.unobserve(barChartRef.current); // Beobachtung beenden
                    }
                }
            })["Home.useEffect"];
        }
    }["Home.useEffect"], []);
    const [barWidth, setBarWidth] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    function checkIfEnter(e) {
        if (e.key === "Enter") {
            getWordCount();
        }
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center flex-wrap pt-[80px] bg-darkBlue",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-white md:p-4 md:w-2/3 border-x-2 border-gray-500 flex-wrap flex flex-col items-center justify-start",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-3xl pt-8 pb-4 text-darkBlue animate-fade-down",
                        children: "Wahlprogramme"
                    }, void 0, false, {
                        fileName: "[project]/app/projekte/wortwahl/page.tsx",
                        lineNumber: 127,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "font-dmSerif pb-4 text-blue animate-fade-down",
                        children: "Bundestagswahl 2025"
                    }, void 0, false, {
                        fileName: "[project]/app/projekte/wortwahl/page.tsx",
                        lineNumber: 130,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-center p-8 gap-x-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "animate-fade-right animate-delay-200",
                                src: "/election.svg",
                                alt: "Election",
                                width: "100"
                            }, void 0, false, {
                                fileName: "[project]/app/projekte/wortwahl/page.tsx",
                                lineNumber: 134,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "animate-fade animate-delay-200",
                                src: "/checklist.svg",
                                alt: "Checklist",
                                width: "80"
                            }, void 0, false, {
                                fileName: "[project]/app/projekte/wortwahl/page.tsx",
                                lineNumber: 140,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "animate-fade-left animate-delay-200",
                                src: "/brainstorm.svg",
                                alt: "Brainstorm",
                                width: "100"
                            }, void 0, false, {
                                fileName: "[project]/app/projekte/wortwahl/page.tsx",
                                lineNumber: 146,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/projekte/wortwahl/page.tsx",
                        lineNumber: 133,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 animate-fade",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-lg text-center p-2 text-red",
                                children: "Finde heraus, welche Parteien über deine Themen sprechen!"
                            }, void 0, false, {
                                fileName: "[project]/app/projekte/wortwahl/page.tsx",
                                lineNumber: 154,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-center",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "max-w-[500px] p-2 pb-8 text-center",
                                    children: "Auf dieser Website kannst du die Wahlprogramme aller großen Parteien zur kommenden Bundestagswahl nach bestimmten Begriffen durchsuchen. Einfach ein Schlagwort eingeben - zum Beispiel Klimaschutz, Steuern oder Bildung - und sehen, welche Partei es wie oft in ihrem Programm erwähnt. Die Ergebnisse werden als Grafik präsentiert, sodass du auf einen Blick erkennen kannst, welche Themen für welche Partei besonders wichtig sind."
                                }, void 0, false, {
                                    fileName: "[project]/app/projekte/wortwahl/page.tsx",
                                    lineNumber: 158,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/projekte/wortwahl/page.tsx",
                                lineNumber: 157,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/projekte/wortwahl/page.tsx",
                        lineNumber: 153,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-dmSerif text-lg animate-fade",
                        children: "Suche nach einem Begriff"
                    }, void 0, false, {
                        fileName: "[project]/app/projekte/wortwahl/page.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        className: "font-sans rounded p-2 m-4 border-2 border-black animate-fade",
                        placeholder: "Begriff eingeben",
                        onChange: (e)=>setWord(e.target.value),
                        onKeyDown: checkIfEnter
                    }, void 0, false, {
                        fileName: "[project]/app/projekte/wortwahl/page.tsx",
                        lineNumber: 173,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        className: "bg-darkBlue text-white rounded p-2 mb-4",
                        onClick: getWordCount,
                        children: "Suchen"
                    }, void 0, false, {
                        fileName: "[project]/app/projekte/wortwahl/page.tsx",
                        lineNumber: 179,
                        columnNumber: 11
                    }, this),
                    message && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-dmSerif text-lg text-rose-700",
                        children: message
                    }, void 0, false, {
                        fileName: "[project]/app/projekte/wortwahl/page.tsx",
                        lineNumber: 187,
                        columnNumber: 13
                    }, this),
                    gesucht && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-sans text-lg pt-4",
                        children: [
                            "Begriff: ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                children: gesucht
                            }, void 0, false, {
                                fileName: "[project]/app/projekte/wortwahl/page.tsx",
                                lineNumber: 191,
                                columnNumber: 24
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/projekte/wortwahl/page.tsx",
                        lineNumber: 190,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-[700px] p-2",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-full pb-4 mt-2 flex items-center justify-center flex-wrap",
                            ref: barChartRef,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$mui$2f$x$2d$charts$2f$BarChart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                                dataset: data,
                                yAxis: [
                                    {
                                        scaleType: "band",
                                        dataKey: "party",
                                        colorMap: {
                                            type: "ordinal",
                                            colors: [
                                                "#111111" /* CDU */ ,
                                                "#52BD54" /* Grüne */ ,
                                                "#3794E1" /* AFD */ ,
                                                "#E10F0F" /* SPD */ ,
                                                "#F2CD27" /* FDP */ ,
                                                "#E84040" /* Linke */ ,
                                                "#9B69AF" /* BSW */ 
                                            ]
                                        }
                                    }
                                ],
                                series: [
                                    {
                                        dataKey: "count"
                                    }
                                ],
                                layout: "horizontal",
                                width: barWidth,
                                margin: {
                                    left: 50,
                                    right: 30,
                                    top: 20,
                                    bottom: 20
                                },
                                height: data.length * 50,
                                grid: {
                                    vertical: true
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/projekte/wortwahl/page.tsx",
                                lineNumber: 199,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/projekte/wortwahl/page.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/projekte/wortwahl/page.tsx",
                        lineNumber: 194,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "mt-8 w-full lg:w-2/3 h-[3px] border-b-2 border-dotted border-gray-500"
                    }, void 0, false, {
                        fileName: "[project]/app/projekte/wortwahl/page.tsx",
                        lineNumber: 229,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "pt-8 font-dmSerif text-center text-black pb-8",
                        children: [
                            "Programmcode einsehbar auf:",
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://github.com/louziferr/wahlprogramme2025",
                                className: "text-blue",
                                children: "Github"
                            }, void 0, false, {
                                fileName: "[project]/app/projekte/wortwahl/page.tsx",
                                lineNumber: 232,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/projekte/wortwahl/page.tsx",
                        lineNumber: 230,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full lg:w-2/3 mb-8 h-[3px] border-b-2 border-dotted border-gray-500"
                    }, void 0, false, {
                        fileName: "[project]/app/projekte/wortwahl/page.tsx",
                        lineNumber: 239,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/projekte/wortwahl/page.tsx",
                lineNumber: 126,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/projekte/wortwahl/page.tsx",
            lineNumber: 125,
            columnNumber: 7
        }, this)
    }, void 0, false);
}
_s(Home, "VjkKYns8BZ54HIznnl5p89VGVLs=");
_c = Home;
var _c;
__turbopack_refresh__.register(_c, "Home");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/app/projekte/wortwahl/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=app_projekte_wortwahl_page_tsx_ebbd78._.js.map