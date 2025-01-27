interface HeroProps {
  text: string;
  image?: string;
  bgColor?: string;
  height?: string;
  subtext?: string;
  subbutton?: string;
}

export default function Hero({
  text,
  image = "",
  bgColor = "",
  height = "400px",
  subtext = "",
  subbutton = "",
}: HeroProps) {
  return (
    <div className="relative h-[400px]" style={{ height: height }}>
      {/* Background image with brightness adjustment */}
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50 shadow-gray-700 shadow-md"
        style={{
          backgroundImage: `url('/${image}')`,
          backgroundColor: bgColor,
        }}
      ></div>

      {/* Text content on top */}
      <div className="absolute inset-0 flex flex-col items-start justify-center">
        <h1 className="p-4 text-left text-[30px] md:text-[50px]">{text}</h1>
        <p className="p-4 max-w-[400px]">{subtext}</p>
        {subbutton != "" && (
          <button className="m-4 p-2 rounded bg-primary text-secondary">
            {subbutton}
          </button>
        )}
      </div>
    </div>
  );
}
