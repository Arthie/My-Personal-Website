import { NextPage } from "next";
import { motion } from "framer-motion";
import tw from "@tailwindcssinjs/css";

import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import SocialLinks from "../components/SocialLinks";
import fs from "fs";

import Details from "../components/Details";
import Shield from "../components/Shield";

const components = { Details, Shield };
export async function getStaticProps() {
  const source = fs.readFileSync("./src/content/index.mdx");
  const mdxSource = await renderToString(source, { components });
  return { props: { source: mdxSource } };
}

const fadeUpcontainer = {
  hidden: {},
  visible: {
    transition: {
      delay: 0,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const fadeUpItem = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const styles = {
  main: tw`border-gray-400 bg-gray-50 border-t-4`,
  header: tw`
    flex justify-center
    text-gray-100 bg-gray-900
    shadow-lg
  `,
  headerContainer: tw`container my-10`,
  logo: tw`
    w-20
    ml-10
    md:w-24
    lg:w-28
    xl:w-32
  `,
  textWrapper: tw`
    flex flex-col items-center justify-center
    my-20
  `,
  nameText: tw`
    font-sans text-5xl font-bold antialiased
    sm:text-6xl
    md:text-7xl
  `,
  roleText: tw`
    font-sans text-gray-400 text-2xl font-semibold italic antialiased
    sm:text-3xl
    md:text-4xl
  `,
  socialLinksWrapper: tw`flex justify-center`,
  article: tw`
    mx-auto py-10 px-3
    prose prose-sm
    sm:prose
    md:px-0 
    lg:prose-lg
    xl:prose-xl
  `,
};

const Index: NextPage<{ source: string }> = ({ source }) => {
  const content = hydrate(source, { components });

  return (
    <motion.main
      className={styles.main}
      variants={fadeUpcontainer}
      initial="hidden"
      animate="visible"
    >
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <motion.svg
            variants={fadeUpItem}
            className={styles.logo}
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 105"
          >
            <path d="M53.92 35.266v7.688s15.377 0 15.377 11.532c0 11.533-15.377 11.533-15.377 11.533h-7.688V35.266s-.77.384-4.229 3.844c-3.46 3.46-3.46 3.844-3.46 3.844v57.663s0 3.844 3.844 3.844c3.845 0 3.845-3.844 3.845-3.844V79.089l24.602 24.603s2.691 1.922 4.998-.384c2.306-2.307.384-4.998.384-4.998L51.613 73.707h2.307s23.065 0 23.065-19.22c0-19.221-23.065-19.221-23.065-19.221zM103.895 66.02h26.909V35.265h7.688v38.441h-34.597V66.02z" />
            <path d="M161.559 85.24V35.266h7.688l-.769 49.974s.769 19.221-18.452 19.221-19.221-19.221-19.221-19.221V69.863h7.689V85.24s0 11.533 11.532 11.533c11.533 0 11.533-11.533 11.533-11.533z" />
            <path d="M176.935 35.266v7.688s15.377 0 15.377 11.533c0 11.532-15.377 11.532-15.377 11.532h-11.533v9.226l28.447 28.447s2.691 1.922 4.998-.384c2.306-2.307.384-4.998.384-4.998l-24.603-24.603h2.307s23.065 0 23.065-19.22c0-19.221-23.065-19.221-23.065-19.221zM100.052 42.954v57.663s0 3.844 3.844 3.844 3.844-3.844 3.844-3.844V42.954h15.377v-7.688h-46.9s1.154.769 3.46 3.46c1.37 1.597 2.691 4.228 2.691 4.228h17.684zM3.844 104.444C0 104.444 0 100.6 0 100.6 1.93 32.358 53.89 5.165 83.758 0l1.618 7.467C60.423 12.26 9.956 34.785 7.688 100.6c0 0 0 3.844-3.844 3.844z" />
            <path d="M11.638 66.017h30.754v7.689H11.638v-7.689z" />
          </motion.svg>
          <div className={styles.textWrapper}>
            <motion.h1 className={styles.nameText} variants={fadeUpItem}>
              Arthur Petrie
            </motion.h1>
            <motion.h2 className={styles.roleText} variants={fadeUpItem}>
              developer.
            </motion.h2>
          </div>
          <motion.div
            className={styles.socialLinksWrapper}
            variants={fadeUpItem}
          >
            <SocialLinks />
          </motion.div>
        </div>
      </header>
      <motion.article variants={fadeUpItem} className={styles.article}>
        {content}
      </motion.article>
    </motion.main>
  );
};

export default Index;
