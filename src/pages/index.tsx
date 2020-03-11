// todo: add voice commands/assistent to website

import { NextPage } from "next";
import SocialLinks from "../components/SocialLinks";
import { FC, forwardRef, HTMLProps } from "react";
import Nav from "../components/Nav";
import { useInView } from "../hooks/useInView";
import { Footer } from "../components/Footer";
import clsx from "clsx";
import {
  ContainedButton,
  TextButton,
  OutlinedButton
} from "../components/Button/ButtonVariants";
import styles from "../components/Button/ButtonStyles";

const Header: FC = () => (
  <header id="home" className="text-teal-100 bg-teal-900">
    <div className="flex flex-col items-center justify-center h-screen m-auto">
      <h1 className="text-5xl antialiased font-bold sm:text-6xl md:text-7xl lg:text-8xl">
        Arthur Petrie
      </h1>
      <h3 className="text-xl antialiased font-semibold text-teal-400 sm:text-2xl md:text-3xl lg:text-4xl">
        Full-stack webdeveloper
      </h3>
      <SocialLinks />
    </div>
  </header>
);

const Portfolio = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  ({ className, ...otherProps }, ref) => (
    <section
      ref={ref}
      id="portfolio"
      className={clsx(className)}
      {...otherProps}
    >
      <div className="flex flex-col w-full m-auto max-w-bplg">
        <h3 className="text-xl antialiased font-semibold text-teal-600 sm:text-2xl md:text-3xl lg:text-4xl">
          Portfolio
        </h3>

        <div className="flex mt-12 overflow-hidden bg-white rounded shadow-lg">
          <div
            className="flex-none h-64 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-84 lg:rounded-t-none lg:rounded-l"
            style={{ backgroundImage: "url('/static/image2.png')" }}
            title="Woman holding a mug"
          />
          <div className="flex flex-col w-full">
            <div className="px-6 py-4">
              <div className="mb-4 mr-10 text-xl font-bold text-gray-900">
                CarPC
              </div>

              <p className="max-w-sm text-base text-gray-700">
                Car infotainment dashboard. Touchscreen raspberry pi music
                player connected to the car’s CAN-bus to monitor and display
                real-time engine data.
              </p>
            </div>

            <div className="flex justify-between px-6 py-4 bg-gray-100">
              <div className="text-gray-700">
                <span className="px-3 py-1 mr-2 text-xs font-bold tracking-wide uppercase bg-teal-200 rounded-full">
                  #react
                </span>
                <span className="px-3 py-1 mr-2 text-xs font-bold tracking-wide uppercase bg-teal-200 rounded-full">
                  #typescript
                </span>
                <span className="px-3 py-1 mr-2 text-xs font-bold tracking-wide uppercase bg-teal-200 rounded-full">
                  #graphql
                </span>
                <span className="px-3 py-1 mr-2 text-xs font-bold tracking-wide uppercase bg-teal-200 rounded-full">
                  #node
                </span>
                <span className="px-3 py-1 mr-2 text-xs font-bold tracking-wide uppercase bg-teal-200 rounded-full">
                  #sql
                </span>
              </div>

              <a href="https://github.com/Arthie/CarPC">
                <span className="inline-block px-3 py-1 text-sm font-semibold text-teal-100 uppercase bg-teal-900 rounded">
                  View project
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
);

const About = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  ({ className, ...otherProps }, ref) => (
    <section ref={ref} id="about" className={clsx(className)} {...otherProps}>
      <div className="flex flex-col w-full m-auto max-w-bplg">
        <h3 className="text-xl antialiased font-semibold text-teal-600 sm:text-2xl md:text-3xl lg:text-4xl">
          About
        </h3>
      </div>
    </section>
  )
);

const Contact = forwardRef<HTMLDivElement, HTMLProps<HTMLDivElement>>(
  ({ className, ...otherProps }, ref) => (
    <section ref={ref} id="contact" className={clsx(className)} {...otherProps}>
      <div className="flex flex-col w-full m-auto max-w-bplg">
        <h3 className="text-xl antialiased font-semibold text-teal-600 sm:text-2xl md:text-3xl lg:text-4xl">
          Contact
        </h3>
      </div>
    </section>
  )
);

const HeaderSvg = props => (
  <svg viewBox="0 0 556 34" {...props}>
    <path d="M0 34H556V24.25L461 0.5L373.5 27.5L249 17.5L162 33.5L0 9.5V34Z" />
  </svg>
);

const FooterSvg = props => (
  <svg viewBox="0 0 556 33" {...props}>
    <path d="M0 0H461H556V23.75L461 0L373.5 27L249 17L162 33L0 9V0Z" />
  </svg>
);

const useInViewIndex = () => {
  const [refPortfolio, inViewPortfolio] = useInView();
  const [refAbout, inViewAbout] = useInView();
  const [refContact, inViewContact] = useInView();

  let inView: "" | "portfolio" | "about" | "contact" = "";
  const activePortfolio = inViewPortfolio && !inViewAbout;
  const activeAbout = inViewAbout && !inViewContact;
  const activeContact = inViewContact;

  if (activePortfolio) inView = "portfolio";
  if (activeAbout) inView = "about";
  if (activeContact) inView = "contact";

  return {
    refPortfolio,
    refAbout,
    refContact,
    inView
  };
};

const GithubIcon: FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24">
    <title>GitHub icon</title>
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const dense = "false";

const Index: NextPage = () => {
  const { refPortfolio, refAbout, refContact, inView } = useInViewIndex();
  return (
    <div className="z-0 bg-teal-900">
      <Nav inView={inView} />
      <Header />
      <div className="z-10">
        <HeaderSvg className="w-full text-teal-100 fill-current" />
        <main className="py-20 bg-teal-100">
          <ContainedButton iconPosition="end" icon={<GithubIcon />}>
            yo ddd
          </ContainedButton>

          <ContainedButton>hello discord</ContainedButton>

          <TextButton>hello</TextButton>

          <OutlinedButton>test</OutlinedButton>

          <button
            className={styles(
              "contained",
              "base",
              dense ? "dense" : "baseDense"
            )}
          >
            hello discord
          </button>

          {/* <Button
            className="text-6xl"
            textColor="text-teal-900"
            bgColor="bg-teal-300"
            borderColor="border-teal-900"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>GitHub icon</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            }
          >
            hello
          </Button>
          <Button
            variant="outlined"
            textColor="text-teal-900"
            bgColor="bg-teal-300"
            borderColor="border-teal-900"
          >
            yo ddd
          </Button> */}
          <Portfolio ref={refPortfolio} />
          <About ref={refAbout} className="mt-20" />
          <Contact ref={refContact} className="mt-20" />
        </main>
        <FooterSvg className="w-full text-teal-100 fill-current" />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
