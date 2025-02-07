import { useEffect, useState } from "react";

export default function StyleLine() {
  const [height, setHeight] = useState(20);

  const [lastScrollY, setLastScrollY] = useState(0);
  const [atBottom, setAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Update the last scroll position
      setLastScrollY(currentScrollY);

      // Check if at the bottom
      setAtBottom(currentScrollY + windowHeight >= fullHeight);

      if (atBottom) {
        return;
      }

      if (currentScrollY > lastScrollY) {
        setHeight(height + 8);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <>
      <div className="relative flex items-center justify-between max-w-screen">
        <div className="absolute top-0 left-10 h-screen w-3 opacity-50 bg-blue"></div>
        <div
          className="absolute top-0 left-10 w-3 opacity-50 rounded-full bg-blue shadow-[0px_0px_20px_blue]"
          style={{ height: height }}
        ></div>
      </div>
    </>
  );
}
