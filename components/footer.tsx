import Link from "next/link";

interface FooterProps {
  english: boolean;
}

export default function Footer({ english }: FooterProps) {
  return (
    <footer className="border-t-2 border-secondary">
      <div className="bg-secondary flex justify-between items-center px-5 py-2.5 max-h-[90px]">
        <div>
          <h2 className="text-white font-anta">LA</h2>
        </div>

        <nav className="flex items-center gap-1">
          <Link
            href={english ? "/eng/contact" : "/kontakt"}
            className="text-white no-underline text-base px-2.5 py-1.25 hover:cursor-pointer"
          >
            {english ? "Contact" : "Kontakt"}
          </Link>

          <Link
            className="text-white no-underline text-base px-2.5 py-1.25 hover:cursor-pointer"
            href={`/impressum`}
          >
            Impressum
          </Link>
        </nav>
      </div>
    </footer>
  );
}
