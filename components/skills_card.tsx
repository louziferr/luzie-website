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
        <div className="mt-[100px] text-center flex flex-col items-center">
          <h1 className="mb-8 text-4xl font-jockey">{headline}</h1>
          <div
            className={`m-2 p-5 rounded-lg shadow-lg shadow-black bg-${color}`}
          >
            <img src={image} alt="image" width="200" />
          </div>
          <p className="text-3xl mt-10 font-jockey">{subheadline}</p>
          {keywords.map((item, itemIndex) => (
            <p key={itemIndex} className="text-xl mt-4">
              {item}
            </p>
          ))}
          <Link href={link}>
            <button className="mt-8 px-4 py-2 rounded bg-darkBlue text-white text-xl">
              Mehr
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
