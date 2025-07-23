"use client";

import SkillsCard from "@/components/skills_card";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

export default function Home() {
  return (
    <>
      <div className="h-screen flex bg-blue-comp flex-col flex-grow items-center justify-center p-8">
        <h1 className="text-white text-4xl pb-2 animate-fade-down animate-delay-200">
          Luzie Ahrens
        </h1>
        <div className="w-full h-[5px] justify-center bg-white animate-jump-in animate-delay-200"></div>
        <h1 className="font-saira text-white text-2xl pt-2 animate-fade-up animate-delay-500">
          Computer Scientist
        </h1>
        <TypeAnimation
          sequence={[
            1000,
            // Same substring at the start will only be typed out once, initially
            "Web-Development",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "Teaching",
            1000,
            "Programming",
            1000,
          ]}
          wrapper="span"
          speed={50}
          className="font-saira text-white text-2xl pt-8"
          repeat={Infinity}
        />
      </div>

      <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
        <h1 className="m-8 pt-8 text-4xl md:text-6xl text-darkBlue">
          Services
        </h1>
      </ScrollAnimation>

      <div className="flex items-center justify-center">
        <div className="max-w-screen-md p-4">
          <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
            <p className="text-center">
              With a background in computational linguistics and audio
              engineering as well as many years of experience in programming, I
              now work as a freelancer in various fields of computer science.
              <br />
              <br />
              Currently, I'm focussing on three areas in particular:
              <br />
              <b>Teaching</b>, <b>Web-Development</b> and <b>Programming</b>.
              <br />
              <br />
            </p>
          </ScrollAnimation>
          <div className="grid grid-cols-1 md:grid-cols-[15%_75%] gap-8">
            <div className="flex items-center justify-center w-full order-2 md:order-1">
              <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
                <div className="animate-grow-little flex items-center justify-center w-[80px] h-[80px] m-4 bg-red rounded p-4 shadow-lg shadow-red">
                  <img src="/svg/pencil.svg" alt="pencil" />
                </div>
              </ScrollAnimation>
            </div>
            <div className="order-1 md:order-2">
              <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                <Link href="/eng/teaching">
                  <h1 className="text-red text-left text-lg md:text-xl underline-offset-8 mb-2 underline underline-red">
                    Teaching
                  </h1>
                </Link>
                <p>
                  Due to previous teaching activities at universities, schools
                  and training institutes, I have mastered teaching complex
                  computer science topics in an understandable way and have the
                  skills to develop courses for many different target groups.
                </p>
              </ScrollAnimation>
            </div>

            <div className="flex items-center justify-center w-full order-4 md:order-3">
              <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
                <div className="animate-grow-little flex items-center justify-center w-[80px] h-[80px] m-4 bg-green rounded p-4 shadow-lg shadow-green">
                  <img src="/svg/imac.svg" alt="pencil" />
                </div>
              </ScrollAnimation>
            </div>
            <div className="order-3 md:order-4  mt-4">
              <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                <Link href="/eng/web-development">
                  <h1 className="mb-2 text-green text-left text-lg md:text-xl  underline-offset-8 underline underline-green">
                    Web-Development
                  </h1>
                </Link>
                <p>
                  My experience in web development developed through various
                  professional activities. Today, I create modern, customized
                  websites and web applications, always using the latest
                  technologies to develop high-performance and user-friendly
                  solutions.
                </p>
              </ScrollAnimation>
            </div>

            <div className="flex items-center justify-center w-full order-6 md:order-5">
              <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
                <div className="animate-grow-little flex items-center justify-center w-[80px] h-[80px] m-4 bg-blue rounded p-4  shadow-lg shadow-blue">
                  <img src="/svg/chart-pie.svg" alt="pencil" />
                </div>
              </ScrollAnimation>
            </div>
            <div className="order-5 md:order-6 mt-4">
              <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                <Link href="/eng/programming">
                  <h1 className="text-blue text-left text-lg mb-2 md:text-xl underline-offset-8 underline underline-blue">
                    Programming
                  </h1>
                </Link>
                <p>
                  As a software developer, I apply theoretical knowledge from
                  computer science and create solutions for various
                  requirements. My particular strengths lie in data processing,
                  machine learning, and the development of libraries.
                </p>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>

      <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
        <div className="h-[5px] bg-blue shadow-md shadow-blue mt-[40px] mb-[40px] md:m-[80px]"></div>
      </ScrollAnimation>
      <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
        <h2 className="text-center font-anta pt-8 text-3xl md:text-5xl text-darkBlue">
          Learn more!
        </h2>
      </ScrollAnimation>
      <div className="flex items-center justify-center">
        <div className="max-w-screen-xl grid w-full grid-cols-1 md:grid-cols-3">
          <div className="order-2 md:order-1">
            <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
              <SkillsCard
                headline="Web-Development"
                subheadline="Your website"
                keywords={["unique", "modern", "responsiv"]}
                color="#3B8986"
                image="/svg/imac.svg"
                link="/eng/web-development"
              />
            </ScrollAnimation>
          </div>
          <div className="order-1 md:order-2">
            <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
              <SkillsCard
                headline="Teaching"
                subheadline="Your format"
                keywords={["comprehensible", "professional", "clear"]}
                color="#C1666B"
                image="/svg/pencil.svg"
                link="/eng/teaching"
              />
            </ScrollAnimation>
          </div>

          <div className="order-3">
            <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
              <SkillsCard
                headline="Programming"
                subheadline="Your solution"
                keywords={["efficient", "scalable", "flexible"]}
                color="#4281A4"
                image="/svg/chart-pie.svg"
                link="/eng/programming"
              />
            </ScrollAnimation>
          </div>
        </div>
      </div>

      <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
        <div className="h-[5px] bg-blue shadow-md shadow-blue mt-[40px] mb-[40px] md:m-[60px]"></div>
      </ScrollAnimation>
      <section className="flex items-center justify-center">
        <div className="max-w-[1300px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2  md:m-8">
              <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                <div className="m-8 ">
                  <p className="text-blue mt-8 font-anta text-[20px] text-left mb-4 md:text-4xl">
                    Get in touch!
                  </p>
                  <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                  <p>
                    If you would like my support or have a question, feel free
                    to contact me. Together we will find the right solution for
                    your needs - be it web development, software solutions, or
                    computer science lessons. I look forward to hearing from
                    you!
                  </p>
                </div>
              </ScrollAnimation>
              <div className="m-8 flex flex-col items-center justify-center">
                <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                  <img
                    className="h-[60px] md:h-[100px] w-full animate-wiggle object-scale-down"
                    src="/svg/hand-shake.svg"
                    alt="hand shake"
                  />
                </ScrollAnimation>
              </div>
            </div>

            <div className="m-8 flex flex-col items-center justify-center">
              <Link
                href="/eng/contact"
                className="py-2 px-3 bg-blue rounded md:text-xl text-white transition ease-in hover:scale-110"
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
