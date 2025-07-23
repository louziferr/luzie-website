"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

export default function Webentwicklung() {
  return (
    <div>
      <div className="h-screen flex bg-green-comp flex-col flex-grow flex-wrap items-center justify-center p-8">
        <h1 className="text-white text-3xl md:text-4xl animate-fade-down animate-delay-200 pb-2">
          Your Website
        </h1>
        <div className="w-full h-[5px] bg-white animate-jump-in animate-delay-200"></div>

        <h1 className="font-saira text-white text-2xl m:d:text-3xl pt-4 animate-fade-up animate-delay-500">
          As you wish
        </h1>
      </div>

      <div className="m-8 md:p-8">
        <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
          <h1 className="py-8 font-alfa text-3xl md:text-6xl text-green">
            Modern Web-Development
          </h1>
        </ScrollAnimation>

        <section className="flex  items-center flex-col">
          <div className="flex max-w-screen-lg">
            <div className="relative grid grid-cols-1 md:grid-cols-2 md:pt-8">
              <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                <p className="text-center md:text-justify leading-relaxed max-w-[400px]">
                  My work as a web developer is aimed at freelancers, start-ups,
                  and small businesses that need a modern, functional, and
                  customized website - without complicated processes.
                  <br /> <br />
                  I rely on current technologies, appealing designs, and
                  scalable solutions. At the same time, I guarantee fast and
                  uncomplicated collaboration with clear communication.
                  <br />
                  <br />
                </p>
              </ScrollAnimation>
              <div className="flex items-center justify-center md:justify-end pt-[30px] md:pt-0">
                <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                  <div>
                    <TypeAnimation
                      sequence={[
                        1000,
                        // Same substring at the start will only be typed out once, initially
                        "dynamic",
                        1000, // wait 1s before replacing "Mice" with "Hamsters"
                        "responsiv",
                        1000,
                        "flexible",
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      className="text-xl md:text-3xl text-center leading-relaxed w-full font-saira"
                      repeat={Infinity}
                    />
                    <div className="w-[150px] md:w-[200px]">
                      <img src="/svg/programming.svg" alt="programming SVG" />
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
        <div className="mt-[70px] mb-[70px] w-full h-[5px] bg-green shadow-md shadow-green"></div>
      </ScrollAnimation>

      <h1 className="pt-0 font-alfa md:pt-8 text-2xl md:text-6xl text-darkBlue underline underline-offset-4">
        Way of Working
      </h1>

      <section className="flex items-center justify-center">
        <div className="max-w-[1300px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8">
                <div className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  01
                </div>

                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-left"
                >
                  <h1 className="text-green font-anta md:text-left mb-8 md:text-4xl">
                    Individual Solutions
                  </h1>
                </ScrollAnimation>

                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Every project has different requirements. Depending on your
                  needs, the look and functionality of the website can be
                  customized. From clean, minimalist designs to interactive,
                  complex web applications: everything is possible.
                </p>
              </div>
              <div className="m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[100px] md:h-[150px] w-full animate-spin object-scale-down"
                  src="/svg/settings.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8 order-1 md:order-2">
                <p className="text-gray-700 text-center text-4xl md:text-right md:text-6xl font-alfa mr-3">
                  02
                </p>
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-right"
                >
                  <h1 className="text-green md:text-right mb-8 md:text-4xl">
                    Handcrafted Code
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  I work without modular systems or generic templates. Every
                  pixel, every line of code is created with care and expertise,
                  tailored precisely to the needs. This not only creates a
                  distinctive identity, but also a technically clean,
                  maintainable solution.
                </p>
              </div>
              <div className="m-8 flex flex-col items-center justify-center order-2 md:order-1">
                <img
                  className="h-[100px] md:h-[150px] w-full animate-wiggle object-scale-down"
                  src="/svg/hand-shake.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <div className="m-8">
                <p className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  03
                </p>

                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-left"
                >
                  <h1 className="text-green md:text-left mb-8 md:text-4xl">
                    Fast Implementation
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Thanks to clear processes, lean structures, and a precise
                  working method, I can deliver fast results without sacrificing
                  quality. This results in short development times and direct
                  communication - without major detours.
                </p>
              </div>

              <div className="m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[100px] md:h-[150px] w-full object-scale-down"
                  src="/svg/calendar.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8 order-1 md:order-2">
                <p className="text-gray-700 text-center text-4xl md:text-right md:text-6xl font-alfa mr-3">
                  04
                </p>

                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-right"
                >
                  <h1 className="text-green md:text-right mb-8 md:text-4xl">
                    Modern Design
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Whether minimalist, creative, or striking - I develop a custom
                  design that perfectly matches the desired style and brand.
                  Contemporary, unique, and optimally displayed on every device.
                </p>
              </div>
              <div className="m-8 flex flex-col items-center justify-center  order-2 md:order-1">
                <img
                  className="h-[100px] md:h-[150px] w-full object-scale-down"
                  src="/svg/sketch.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
        <div className="mt-[40px] mb-[40px] md:m-[80px] h-[5px] bg-green shadow-md shadow-green"></div>
      </ScrollAnimation>
      <h1 className="pt-10 font-alfa text-3xl md:text-6xl text-darkBlue underline underline-offset-4">
        Tools
      </h1>

      <section className="flex items-center justify-center">
        <div className="max-w-[1300px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <div className="m-8">
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  I rely on proven and modern technologies to develop fast,
                  secure, and scalable websites.
                </p>
                <div className="text-left mt-2 md:text-left text-[18px] md:text-3xl">
                  <h1 className="text-left py-4 font-anta text-gray-600 text-3xl md:text-4xl">
                    React & Next.js
                  </h1>
                  <p>
                    Dynamic, high-performance web applications with
                    state-of-the-art front-end technology.
                  </p>

                  <h1 className="text-left py-4 font-anta text-gray-600 text-3xl md:text-4xl">
                    Tailwind CSS
                  </h1>
                  <p>
                    The foundation for clean, semantic code and individual
                    styling.
                  </p>
                  <h1 className="text-left py-4 font-anta text-gray-600 text-3xl md:text-4xl">
                    Prisma
                  </h1>
                  <p>
                    An efficient and flexible database management solution that
                    ensures scalability and security.
                  </p>
                  <p className="pt-8">
                    These technologies create high-performance websites that are
                    not only visually appealing but also technically at the
                    highest level.
                  </p>
                </div>
              </div>
              <div className="m-8 flex flex-row md:flex-col items-center justify-between">
                <img
                  className="h-[60px] md:h-[150px] w-full object-scale-down"
                  src="/svg/react.svg"
                  alt="iconImage"
                />

                <img
                  className="h-[60px] md:h-[150px] w-full object-scale-down"
                  src="/svg/tailwind.svg"
                  alt="iconImage"
                />
                <img
                  className="h-[60px] md:h-[150px] w-full object-scale-down"
                  src="/svg/prisma.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
        <div className="h-[5px] md:m-[80px] bg-green shadow-md shadow-green mt-[40px] mb-[40px] "></div>
      </ScrollAnimation>
      <section className="flex items-center justify-center">
        <div className="max-w-[1300px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <div className="m-8">
                <h1 className="text-green mt-8 text-left mb-4 md:text-4xl">
                  Get in touch!
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  After our initial consultation, I will create a customized
                  proposal tailored precisely to your needs. The time required
                  and the associated price for developing your website largely
                  depend on its technical and aesthetic complexity.
                </p>
              </div>
              <div className="m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[60px] md:h-[100px] w-full animate-wiggle object-scale-down"
                  src="/svg/pricetag2.svg"
                  alt="iconImage"
                />
              </div>
            </div>

            <div className="m-8 flex flex-col items-center justify-center">
              <Link
                href="/eng/contact"
                className="py-2 px-3 bg-green rounded md:text-xl border-black text-white transition ease-in hover:scale-110"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
