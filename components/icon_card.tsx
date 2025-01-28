interface CardProps {
  image: string;
  headline: string;
  text: string;
}

export default function IconCard({ image, headline, text }: CardProps) {
  return (
    <>
      <div className="text-center p-4">
        <div className="w-[150px] h-[150px] mx-auto">
          <img
            className="w-full h-full object-scale-down"
            src={`${image}`}
            alt="iconImage"
          />
        </div>
        <h2 className="mt-4 text-3xl leading-relaxed text-green font-jockey">
          {headline}
        </h2>
        <div className="p-4">
          <p className="p-3 text-black font-saira">{text}</p>
        </div>
      </div>
    </>
  );
}
