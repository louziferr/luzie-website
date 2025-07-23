"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

export default function Lehre() {
  return (
    <>
      <div className="h-screen flex bg-rose flex-col flex-grow items-center justify-center p-8">
        <h1 className="pb-2 text-white text-3xl md:text-4xl animate-fade-down animate-delay-200">
          Learn Computer Science
        </h1>
        <div className="w-full h-[5px] bg-white  animate-jump-in animate-delay-200"></div>

        <h1 className="font-saira text-white md:text-3xl pt-4 animate-fade-up animate-delay-500">
          At every level
        </h1>
      </div>

      <div className="mb-0 m-8 md:p-8">
        <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
          <h1 className="py-8 font-alfa text-3xl md:text-6xl text-red">
            Courses and Lessons
          </h1>
        </ScrollAnimation>

        <section className="flex flex-col items-center">
          <div className="flex max-w-[1300px]">
            <div className="relative grid grid-cols-1 md:grid-cols-2 md:pt-8">
              <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                <p className="text-center md:text-justify leading-relaxed max-w-[400px]">
                  Whether you need to write the first line of code or optimize
                  complex software architectures, I offer computer science
                  lessons at all levels.
                  <br />
                  <br />
                  My work as a lecturer is primarily aimed at schools,
                  universities, training institutes, and companies that are
                  interested in a customized computer science course. I teach
                  children, teenagers, and adults and adapt the level as well as
                  the teaching and learning methods to the respective target
                  group. The courses can be held online or in-person.
                  <br /> <br />
                  A list of tried-and-tested course concepts on various computer
                  science topics can be found on this page. Upon request, I can
                  develop new, customized courses that are precisely tailored to
                  the project and learning objectives.
                  <br />
                  <br />
                </p>
              </ScrollAnimation>
              <div className="flex items-center justify-center md:justify-end py-[30px] md:pt-0">
                <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
                  <span className="relative flex">
                    <div className="bg-rose-700 rounded-full p-4 border-2">
                      <img
                        src="/svg/school.svg"
                        alt="school SVG"
                        className="w-[100px] md:w-[250px]"
                      />
                    </div>
                    <span className="absolute bg-rose-600 h-full w-full animate-custom-ping rounded-full" />
                  </span>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </div>

      <div>
        <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
          <div className="mt-[80px] mb-[40px] md:m-[80px] h-[5px] bg-rose-700 shadow-md shadow-red"></div>
        </ScrollAnimation>
        <h1 className="pt-8 font-alfa text-2xl md:text-5xl text-darkBlue underline underline-offset-4">
          Topics
        </h1>
      </div>

      <div className="flex flex-row items-center justify-center">
        <div className="p-8 leading-relaxed max-w-[900px]">
          <ul className="font-saira">
            <li className="p-1 flex">
              <div className="text-rose-700 text-xl md:text-3xl font-alfa mr-3">
                01
              </div>
              <Link
                className="underline underline-offset-2 md:text-2xl hover:cursor-pointer"
                href="/eng/teaching/#programmiersprachen"
              >
                Programming Languages
              </Link>
            </li>
            <li className="p-1 flex">
              <div className="text-cyan-700 text-xl font-alfa md:text-3xl mr-3">
                02
              </div>
              <Link
                className="underline underline-offset-2  md:text-2xl hover:cursor-pointer"
                href="/eng/teaching/#robotik"
              >
                Robotics
              </Link>
            </li>
            <li className="p-1 flex">
              <div className="text-amber-500 text-xl md:text-3xl font-alfa mr-3">
                03
              </div>
              <Link
                className="underline underline-offset-2  md:text-2xl hover:cursor-pointer"
                href="/eng/teaching/#web-entwicklung"
              >
                Web-Development
              </Link>
            </li>
            <li className="p-1 flex">
              <div className="text-teal-600 text-xl md:text-3xl font-alfa mr-3">
                04
              </div>
              <Link
                className="underline underline-offset-2  md:text-2xl hover:cursor-pointer"
                href="/eng/teaching/#theoretische-informatik"
              >
                Theoretical Computer Science
              </Link>
            </li>
            <li className="p-1 flex">
              <div className="text-purple-800 text-xl md:text-3xl font-alfa mr-3 hover:cursor-pointer">
                05
              </div>
              <Link
                className="underline underline-offset-2  md:text-2xl hover:cursor-pointer"
                href="/eng/teaching/#machine-learning"
              >
                Machine Learning
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <section className="flex items-center justify-center">
        <div className="max-w-[1300px]">
          <div className="flex flex-col" id={"programmiersprachen"}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8">
                <div className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  01
                </div>

                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-left"
                >
                  <h1 className="text-rose-700 md:text-left mb-8 md:text-4xl">
                    Programming Languages
                  </h1>
                </ScrollAnimation>

                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Python, Javascript/Typescript, Java
                  <br />
                  <br />I offer customized courses on various programming
                  languages. The content is presented in a practical and
                  understandable way. Depending on your needs, the focus can be
                  on learning basic programming skills or on applying advanced
                  techniques.
                </p>
              </div>
              <div className="m-8 flex flex-col items-center justify-end">
                <div className="border-2 border-gray-700 bg-black p-2">
                  <TypeAnimation
                    sequence={[
                      // Same substring at the start will only be typed out once, initially
                      "print('Python')",
                      1000,
                      "console.log('JavaScript')",
                      1000,
                      "System.out.println('Java')",
                      1000,
                    ]}
                    wrapper="span"
                    speed={50}
                    className="font-mono text-[13px] text-white md:text-xl pt-8"
                    repeat={Infinity}
                  />
                </div>
                <img
                  src="/svg/lehre/keyboard.svg"
                  alt="keyboard SVG"
                  className="w-[150px] md:w-[300px]"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col" id={"robotik"}>
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8 order-1 md:order-2">
                <p className="text-gray-700 text-center text-4xl md:text-right md:text-6xl font-alfa mr-3">
                  02
                </p>

                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-right"
                >
                  <h1 className="text-cyan-700 md:text-right mb-8 md:text-4xl">
                    Robotics
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  My robotics and electronics courses provide an insight into
                  the world of microcontrollers and small computers. Using
                  Arduino or Raspberry Pi, for example, various projects are
                  realized, from simple circuits to more complex control
                  systems. I explain how to solder components, build circuits,
                  and bring your own ideas to life through programming.
                </p>
              </div>
              <div className="m-8 mt-0 md:mt-8 flex flex-col items-center justify-center order-2 md:order-1">
                <img
                  className="h-[150px] md:h-[300px] w-full animate-wiggle object-scale-down"
                  src="/svg/lehre/robot.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col" id={"web-entwicklung"}>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-4 md:mt-0 md:m-8">
              <div className="m-8">
                <p className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  03
                </p>
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-left"
                >
                  <h1 className="text-amber-500 md:text-left mb-8 md:text-4xl">
                    Web-Development
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  In my web development courses, I teach - either using Flask or
                  React - the fundamentals of dynamic websites and modern web
                  applications. Depending on your prior knowledge, I will cover
                  the basic concepts of the internet and web development, as
                  well as the general structure of dynamic and responsive
                  websites. I guide you through all the important steps, from
                  the initial code to the complete application, and place great
                  emphasis on practical exercises.
                </p>
              </div>

              <div className="mt-0 mb-4 md:m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[100px] md:h-[200px] w-full object-scale-down"
                  src="/svg/lehre/web-design.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col" id={"theoretische-informatik"}>
            <div className="grid grid-cols-1 md:grid-cols-2 mt-8 md:mt-0 md:m-8">
              <div className="m-8 order-1 md:order-2">
                <p className="text-gray-700 text-center text-4xl md:text-right md:text-6xl font-alfa mr-3">
                  04
                </p>
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-right"
                >
                  <h1 className="text-teal-600 md:text-right mb-8 md:text-4xl">
                    Theoretical Computer Science
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Theoretical computer science deals with the essential concepts
                  behind programming. My classes cover algorithms and data
                  structures, laying the foundation for efficient programming.
                  By working with pseudocode, complex problems are analyzed and
                  solutions are developed before they are implemented in code.
                  These theoretical concepts are crucial for understanding and
                  optimizing the structure and efficiency of programs.
                </p>
              </div>
              <div className="md:m-8 flex flex-col items-center justify-center  order-2 md:order-1">
                <img
                  className="h-[100px] md:h-[250px] w-full object-scale-down animate-grow-little"
                  src="/svg/lehre/find-path.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col" id={"machine-learning"}>
            <div className="grid grid-cols-1 md:grid-cols-2  mt-8 md:mt-0 md:m-8">
              <div className="m-8">
                <div className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  05
                </div>
                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-left"
                >
                  <h1 className="text-purple-800 md:text-left mb-8 md:text-4xl">
                    Machine Learning
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  The Machine Learning course covers the theoretical and
                  practical foundations of artificial intelligence. My expertise
                  lies in the techniques of natural language processing and
                  linguistics. Training models to recognize patterns in
                  linguistic data and make predictions is a current and
                  future-oriented topic. We will thoroughly explore the theory
                  and practice of algorithms relevant to analyzing text data,
                  and I will demonstrate how these can be applied to real,
                  linguistic datasets.
                </p>
              </div>
              <div className="md:m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[100px] md:h-[250px] w-full object-scale-down"
                  src="/svg/lehre/robot-ai.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
        <div className="mt-[80px] mb-[40px] md:m-[80px] h-[5px] bg-rose-700 shadow-md shadow-red"></div>
      </ScrollAnimation>

      <section className="flex items-center justify-center">
        <div className="max-w-[1500px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <div className="m-8">
                <h1 className="text-rose-700 mt-8 text-left mb-4 md:text-4xl">
                  Get in touch!
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Contact me if you're interested in my services or have any
                  questions. After our initial consultation, I'll create a
                  customized offer tailored precisely to your needs.
                </p>
              </div>
              <div className="m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[60px] md:h-[100px] w-full animate-wiggle object-scale-down"
                  src="/svg/hand-shake.svg"
                  alt="iconImage"
                />
              </div>
            </div>

            <div className="m-8 flex flex-col items-center justify-center">
              <Link
                href="/eng/contact"
                className="py-2 px-3 bg-rose-700 rounded md:text-xl text-white transition ease-in hover:scale-110"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
