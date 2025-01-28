import IconSection from "@/components/icon_section";

export default function Webentwicklung() {
  return (
    <>
      <div className="h-screen bg-green flex flex-col items-start justify-center p-8">
        <h1 className="text-white text-4xl">Deine Website.</h1>
        <h1 className="text-white text-4xl">Wie du willst.</h1>
        <div className="w-full h-[10px] bg-white"></div>
      </div>
      <IconSection />
    </>
  );
}
