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
        <div className="md:mt-[50px] py-4 m-4 text-center flex flex-col items-center shadow-md shadow-black rounded-lg bg-darkBlue">
          <h1 className="mb-8 text-4xl font-jockey text-white">{headline}</h1>
          <div
            className="m-2 p-5 rounded-lg shadow-lg shadow-black"
            style={{ backgroundColor: color }}
          >
            <img src={image} alt="image" width="200" />
          </div>
          <p className="text-3xl mt-10 font-jockey text-white">{subheadline}</p>
          <div className="bg-white mt-2 h-[5px] rounded animate-[grow_5s_ease-in-out_infinite]"></div>
          {keywords.map((item, itemIndex) => (
            <p key={itemIndex} className="text-xl mt-4 text-white">
              {item}
            </p>
          ))}
          <Link href={link}>
            <button
              className="mt-8 px-4 py-2 rounded text-white text-xl transition delay-50 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 border border-white"
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
