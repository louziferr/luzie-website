import Hero from "@/components/hero";
import "@fontsource/alfa-slab-one";
import "@fontsource/ultra";
import "@fontsource/roboto";
import "@fontsource/saira";
import IconSection from "@/components/icon_section";
import "@fontsource/anta";

export default function Home() {
  return (
    <>
      <div className="grid h-screen grid-cols-1 md:grid-cols-3 divide-x-2 divide-lightBlue">
        <div
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='391' height='46.9' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23110404' stroke-width='6.9' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          <div className="mt-[200px] text-center">
            <h1>Web-Entwicklung</h1>
            <img src="svg/imac.svg" alt="image" width="200" />
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='391' height='46.9' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23110404' stroke-width='6.9' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundColor: "#1F242D",
          }}
        >
          <div className="mt-[200px]">
            <h1>Programmierung</h1>
            <img
              src="svg/chart-pie.svg"
              alt="image"
              width="200"
              className="text-center"
            />
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='391' height='46.9' viewBox='0 0 1000 120'%3E%3Cg fill='none' stroke='%23110404' stroke-width='6.9' %3E%3Cpath d='M-500 75c0 0 125-30 250-30S0 75 0 75s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 45c0 0 125-30 250-30S0 45 0 45s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 105c0 0 125-30 250-30S0 105 0 105s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 15c0 0 125-30 250-30S0 15 0 15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500-15c0 0 125-30 250-30S0-15 0-15s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3Cpath d='M-500 135c0 0 125-30 250-30S0 135 0 135s125 30 250 30s250-30 250-30s125-30 250-30s250 30 250 30s125 30 250 30s250-30 250-30'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        >
          <div className="mt-[200px]">
            <h1>Lehre</h1>
            <img src="svg/pencil.svg" alt="image" width="200" />
          </div>
        </div>
      </div>
      <Hero text={"Deine Website.\nWie du willst."} height="100vh" />
      <img src="svg/arc-divider.svg" alt="intersecting wave" />
      <IconSection />
    </>
  );
}
