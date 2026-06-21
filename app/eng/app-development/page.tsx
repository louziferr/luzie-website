"use client";

import Link from "next/link";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

export default function AppDevelopment() {
  return (
    <div>
      <div className="h-screen flex bg-blue-comp flex-col flex-grow flex-wrap items-center justify-center p-8">
        <h1 className="text-white text-3xl md:text-4xl animate-fade-down animate-delay-200 pb-2">
          Your App.
        </h1>
        <div className="w-full h-[5px] bg-white animate-jump-in animate-delay-200"></div>

        <h1 className="font-saira text-white text-2xl md:text-3xl pt-4 animate-fade-up animate-delay-500">
          As you wish.
        </h1>
      </div>

      <div className="m-8 md:p-8">
        <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
          <h1 className="py-8 font-alfa text-3xl md:text-6xl text-blue">
            Modern App Development
          </h1>
        </ScrollAnimation>

        <section className="flex items-center flex-col">
          <div className="flex max-w-screen-lg">
            <div className="relative grid grid-cols-1 md:grid-cols-2 md:pt-8">
              <ScrollAnimation animateOnce={true} animateIn="animate-fade-up">
                <p className="text-center md:text-justify leading-relaxed max-w-[400px]">
                  I build custom apps for iOS and Android – tailored for
                  freelancers, start-ups, and small businesses who are ready to
                  put their idea into the hands of their users.
                  <br /> <br />
                  Whether a lean utility app or a complex cross-platform
                  solution: I guide you from the first concept to a finished,
                  published application – with clear communication and no
                  unnecessary detours.
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
                        "Native",
                        1000,
                        "Cross-Platform",
                        1000,
                        "Intuitive",
                        1000,
                        "Performant",
                        1000,
                      ]}
                      wrapper="span"
                      speed={50}
                      className="text-xl md:text-3xl text-center leading-relaxed w-full font-saira"
                      repeat={Infinity}
                    />
                    <div className="w-[150px] md:w-[200px]">
                      <img src="/svg/code-file.svg" alt="app development SVG" />
                    </div>
                  </div>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </section>
      </div>

      <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
        <div className="mt-[70px] mb-[70px] w-full h-[5px] bg-blue shadow-md shadow-blue"></div>
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
                  <h1 className="text-blue font-anta md:text-left mb-8 md:text-4xl">
                    Your Idea at the Center
                  </h1>
                </ScrollAnimation>

                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Every app starts with an idea. Together we analyze your
                  requirements, your target audience, and your goals – and turn
                  them into a concept that actually works. No generic templates,
                  no compromises.
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
                  <h1 className="text-blue md:text-right mb-8 md:text-4xl">
                    Thoughtful UX Design
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  A great app wins through simplicity. I design interfaces that
                  are intuitive to use and put the user first – appealing, clear,
                  and consistent across all screen sizes.
                </p>
              </div>
              <div className="m-8 flex flex-col items-center justify-center order-2 md:order-1">
                <img
                  className="h-[100px] md:h-[150px] w-full animate-wiggle object-scale-down"
                  src="/svg/design-skills.svg"
                  alt="iconImage"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8">
                <p className="text-gray-700 text-center text-4xl md:text-left md:text-6xl font-alfa mr-3">
                  03
                </p>

                <ScrollAnimation
                  animateOnce={true}
                  animateIn="animate-fade-left"
                >
                  <h1 className="text-blue md:text-left mb-8 md:text-4xl">
                    Clean Code
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  I develop without shortcuts. Every line of code is written with
                  care – structured, maintainable, and built to grow. The result:
                  an app that runs today and can be extended without friction
                  tomorrow.
                </p>
              </div>

              <div className="m-8 flex flex-col items-center justify-center">
                <img
                  className="h-[100px] md:h-[150px] w-full object-scale-down"
                  src="/svg/programming.svg"
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
                  <h1 className="text-blue md:text-right mb-8 md:text-4xl">
                    Launch & Beyond
                  </h1>
                </ScrollAnimation>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  Publishing to the App Store or Google Play is just the
                  beginning. I stay with you after launch – with updates, bug
                  fixes, and further development, so your app stays successful
                  long-term.
                </p>
              </div>
              <div className="m-8 flex flex-col items-center justify-center order-2 md:order-1">
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
        <div className="mt-[40px] mb-[40px] md:m-[80px] h-[5px] bg-blue shadow-md shadow-blue"></div>
      </ScrollAnimation>
      <h1 className="pt-10 font-alfa text-3xl md:text-6xl text-darkBlue underline underline-offset-4">
        Tools
      </h1>

      <section className="flex items-center justify-center">
        <div className="max-w-[1300px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8">
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  I rely on proven technologies that make cross-platform
                  development efficient and reliable.
                </p>
                <div className="text-left mt-2 md:text-left text-[18px] md:text-3xl">
                  <h1 className="text-left py-4 font-anta text-gray-600 text-3xl md:text-4xl">
                    React Native
                  </h1>
                  <p>
                    One codebase for iOS and Android – performant, native-feeling,
                    and easy to maintain.
                  </p>

                  <h1 className="text-left py-4 font-anta text-gray-600 text-3xl md:text-4xl">
                    Expo
                  </h1>
                  <p>
                    Fast prototyping, simple deployment, and a smooth path into
                    the app stores.
                  </p>
                  <h1 className="text-left py-4 font-anta text-gray-600 text-3xl md:text-4xl">
                    TypeScript
                  </h1>
                  <p>
                    Type-safe, well-structured code as the foundation for
                    long-term maintainable and scalable apps.
                  </p>
                  <p className="pt-8">
                    With these technologies, apps feel native on both platforms –
                    and remain easy to maintain and extend.
                  </p>
                </div>
              </div>
              <div className="m-8 flex flex-row md:flex-col items-center justify-between">
                <img
                  className="h-[60px] md:h-[150px] w-full object-scale-down"
                  src="/svg/react.svg"
                  alt="React Native"
                />
                <img
                  className="h-[60px] md:h-[150px] w-full object-scale-down"
                  src="/svg/programming.svg"
                  alt="Expo"
                />
                <img
                  className="h-[60px] md:h-[150px] w-full object-scale-down"
                  src="/svg/code-file.svg"
                  alt="TypeScript"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ScrollAnimation animateOnce={true} animateIn="animate-jump-in">
        <div className="h-[5px] md:m-[80px] bg-blue shadow-md shadow-blue mt-[40px] mb-[40px]"></div>
      </ScrollAnimation>
      <section className="flex items-center justify-center">
        <div className="max-w-[1300px]">
          <div className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 md:m-8">
              <div className="m-8">
                <h1 className="text-blue mt-8 text-left mb-4 md:text-4xl">
                  Get in touch!
                </h1>
                <div className="w-full h-[5px] bg-gray-500 mb-4"></div>
                <p>
                  After our initial consultation, I will create a customized
                  proposal tailored precisely to your app idea. The scope and
                  price depend on the platforms, features, and complexity –
                  transparent and without hidden costs.
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
                className="py-2 px-3 bg-blue rounded md:text-xl border-black text-white transition ease-in hover:scale-110"
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
