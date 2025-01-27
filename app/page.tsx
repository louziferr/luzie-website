import Hero from "@/components/hero";
import "@fontsource/alfa-slab-one";
import "@fontsource/ultra";
import "@fontsource/roboto";
import IconSection from "@/components/icon_section";
import "@fontsource/anta";

export default function Home() {
  return (
    <>
      <Hero text={"Deine Website.\nWie du willst."} height="100vh" />
      <img src="svg/arc-divider.svg" alt="intersecting wave" />
      <IconSection />
    </>
  );
}
