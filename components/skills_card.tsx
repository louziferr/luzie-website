import Link from "next/link";

interface SkillsCardProps {
  headline: string;
  subheadline: string;
  keywords: string[];
  color: string;
  image: string;
  link: string;
}

export default function SkillsCard({
  headline,
  subheadline,
  keywords,
  color,
  image,
  link,
}: SkillsCardProps) {
  return (
    <>
      <div className="bg-white pb-8">
        <div className="md:mt-[50px] py-4 m-4 text-center flex flex-col items-center">
          <h1 className="mb-8 text-3xl" style={{ color: color }}>
            {headline}
          </h1>
          <div
            className="m-2 p-5 rounded-lg shadow-lg"
            style={{
              backgroundColor: color,
              boxShadow: `0px 10px 20px ${color}`,
            }}
          >
            <img src={image} alt="image" className="w-[120px]" />
          </div>
          <p className="text-2xl mt-10 font-zen" style={{ color: color }}>
            {subheadline}
          </p>
          <div
            className="mt-2 h-[5px] rounded animate-[grow_5s_ease-in-out_infinite]"
            style={{ backgroundColor: color }}
          ></div>
          {keywords.map((item, itemIndex) => (
            <p
              key={itemIndex}
              className="text-xl mt-4"
              style={{ color: color }}
            >
              {item}
            </p>
          ))}
          <Link href={link}>
            <button
              className="mt-8 px-4 py-2 rounded text-white text-xl transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              style={{ backgroundColor: color }}
            >
              Mehr
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
