import { NextPage } from "next";
import SocialLinks from "../components/SocialLinks";
import { FC, forwardRef } from "react";
import Nav from "../components/Nav";
import { useInView } from "../hooks/useInView";

const Intro: FC = () => (
  <header id="home" className="bg-teal-900 text-teal-100">
    <div className="m-auto flex flex-col items-center justify-center h-screen">
      <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold antialiased">
        Arthur Petrie
      </h1>
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-teal-400 font-semibold antialiased">
        Full-stack webdeveloper
      </h3>
      <SocialLinks />
    </div>
    <IntroSvg className="w-full text-teal-100 fill-current" />
  </header>
);

const FooterSvg = props => (
  <svg viewBox="0 0 556 33" {...props}>
    <path d="M0 0H461H556V23.75L461 0L373.5 27L249 17L162 33L0 9V0Z" />
  </svg>
);

const Portfolio = forwardRef<HTMLDivElement>((props, ref) => (
  <section
    ref={ref}
    id="portfolio"
    className={"flex flex-col items-center bg-teal-100"}
  >
    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-teal-400 font-semibold antialiased">
      Work
    </h3>

    {/* <div className="max-w-sm rounded overflow-hidden shadow-lg bg-teal-200">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
        <p className="text-gray-700 text-base">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus
          quia, nulla! Maiores et perferendis eaque, exercitationem praesentium
          nihil.
        </p>
      </div>
      <div className="px-6 py-4">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #photography
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #travel
        </span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
          #winter
        </span>
      </div>
    </div> */}
  </section>
));

const About = forwardRef<HTMLDivElement>((props, ref) => (
  <section
    ref={ref}
    id="about"
    className={"flex flex-col items-center bg-teal-100"}
  >
    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-teal-400 font-semibold antialiased">
      in
    </h3>
  </section>
));

const Contact = forwardRef<HTMLDivElement>((props, ref) => (
  <section
    ref={ref}
    id="contact"
    className={"flex flex-col items-center bg-teal-100"}
  >
    <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-teal-400 font-semibold antialiased">
      progress
    </h3>
  </section>
));

const IntroSvg = props => (
  <svg viewBox="0 0 556 34" {...props}>
    <path d="M0 34H556V24.25L461 0.5L373.5 27.5L249 17.5L162 33.5L0 9.5V34Z" />
  </svg>
);

const Footer: FC = () => (
  <footer className="bg-teal-900 text-teal-100 border-teal-400 border-b-2">
    <FooterSvg className="w-full text-teal-100 fill-current" />
    <div className="flex flex-col py-4 ">
      <div className="flex m-auto w-full max-w-lg">
        <section>
          <span className="block font-bold">Arthur Petrie</span>
          <a
            href="mailto:contact@arthurpetrie.com"
            className="flex transiton-ease items-center transiton-ease font-semibold text-teal-400 hover:text-teal-100"
          >
            <svg
              className="w-4 h-4 mr-2 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <title>Email icon</title>
              <path d="M2.4 2H21.6C22.2365 2 22.847 2.25286 23.2971 2.70294C23.7471 3.15303 24 3.76348 24 4.4V18.8C24 19.4365 23.7471 20.047 23.2971 20.4971C22.847 20.9471 22.2365 21.2 21.6 21.2H2.4C1.76348 21.2 1.15303 20.9471 0.702944 20.4971C0.252856 20.047 0 19.4365 0 18.8V4.4C0 3.08 1.08 2 2.4 2ZM21.6 6.056V4.4H2.4V6.056L12 10.856L21.6 6.056V6.056ZM21.6 8.744L12.54 13.268C12.3725 13.3524 12.1876 13.3964 12 13.3964C11.8124 13.3964 11.6275 13.3524 11.46 13.268L2.4 8.744V18.8H21.6V8.744V8.744Z" />
            </svg>
            <span>contact@arthurpetrie.com</span>
          </a>
          {/* <p className="mt-3">
            I’m a software developer. I can help you solve a problem, build a
            product or grow existing project.
          </p> */}
        </section>
        <section className="flex flex-col items-end justify-between w-full">
          <ul className="flex flex-col">
            <FooterLink
              title="twitter"
              href="https://twitter.com/arthurpetrie_"
              external
            >
              <svg
                className="w-4 h-4 mr-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>Twitter icon</title>
                <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
              </svg>
              Twitter
            </FooterLink>
            <FooterLink
              title="github"
              href="https://www.github.com/arthie"
              external
            >
              <svg
                className="w-4 h-4 mr-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>GitHub icon</title>
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              Github
            </FooterLink>
            <FooterLink
              title="linkedin"
              href="https://www.linkedin.com/in/arthurpetrie"
              external
            >
              <svg
                className="w-4 h-4 mr-2 fill-current"
                xmlns="http://www.w3.org/2000/svg"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>LinkedIn icon</title>
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </FooterLink>
          </ul>
          <span className="font-semibold">
            Copyright © 2019 Arthur Petrie. All rights reserved.
          </span>
        </section>
      </div>
    </div>
  </footer>
);

interface FooterLinkProps {
  title: string;
  href: string;
  external?: boolean;
}
const FooterLink: FC<FooterLinkProps> = ({
  title,
  href,
  external = false,
  children
}) => (
  <li>
    <a
      className="flex items-center uppercase text-teal-400 hover:text-teal-100 transiton-ease font-semibold"
      title={title}
      href={href}
      rel="noopener noreferrer"
      target={external ? "_blank" : ""}
    >
      {children}
    </a>
  </li>
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

const Index: NextPage = () => {
  const { refPortfolio, refAbout, refContact, inView } = useInViewIndex();
  return (
    <>
      <Nav inView={inView} />
      <main>
        <Intro />
        <Portfolio ref={refPortfolio} />
        <About ref={refAbout} />
        <Contact ref={refContact} />
      </main>
      <Footer />
    </>
  );
};

export default Index;
