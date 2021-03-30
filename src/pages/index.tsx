import { NextPage } from "next";
import { motion } from "framer-motion";
import xw from "xwind";

import renderToString from "next-mdx-remote/render-to-string";
import hydrate from "next-mdx-remote/hydrate";
import SocialLinks from "../components/SocialLinks";
import fs from "fs";

import Details from "../components/Details";
import Shield from "../components/Shield";
import { MdxRemote } from "next-mdx-remote/types";

const components = { Details, Shield };
export async function getStaticProps() {
  const source = fs.readFileSync("./src/content/index.mdx", {
    encoding: "utf8",
  });
  const mdxSource = await renderToString(source, { components });
  return { props: { source: mdxSource } };
}

const motions = {
  fadeUpcontainer: {
    hidden: {},
    visible: {
      transition: {
        delay: 0,
        when: "beforeChildren",
        staggerChildren: 0.1,
      },
    },
  },

  fadeUpItem: {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  },
};

const styles = {
  main: xw`border-gray-400 bg-gray-50 border-t-4`,
  header: xw`
    flex justify-center
    text-gray-100 bg-gray-900
    shadow-lg
  `,
  headerContainer: xw`container my-10`,
  logo: xw`
    w-20
    ml-10
    md:w-24
    lg:w-28
    xl:w-32
  `,
  textWrapper: xw`
    flex flex-col items-center justify-center
    my-20
  `,
  nameText: xw`
    text-5xl font-bold antialiased
    sm:text-6xl
    md:text-7xl
  `,
  roleText: xw`
    text-gray-400 text-2xl font-semibold italic antialiased
    sm:text-3xl
    md:text-4xl
  `,
  socialLinksWrapper: xw`flex justify-center`,
  article: xw`
    mx-auto py-10 px-3
    max-w-prose
    prose prose-sm
    md[px-0 prose-lg]
    xl:prose-xl
    2xl:prose-2xl
  `,
};

const Index: NextPage<{ source: MdxRemote.Source }> = ({ source }) => {
  const content = hydrate(source, { components });

  return (
    <motion.main
      className={styles.main}
      variants={motions.fadeUpcontainer}
      initial="hidden"
      animate="visible"
    >
      <header className={styles.header}>
        <div className={styles.headerContainer}>
          <motion.svg
            variants={motions.fadeUpItem}
            className={styles.logo}
            fill="currentColor"
            viewBox="0 0 300 150"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M150 150C153.314 150 156 147.314 156 144V102H192V120C192 120 192 150 222 150C252 150 252 120 252 120V110.5L289.757 148.242C292.101 150.585 295.9 150.585 298.243 148.242C300.586 145.899 300.586 142.1 298.243 139.757L260.5 102H264C264 102 300 102 300 72C300 42 264 42 264 42V54C264 54 288 54 288 72C288 90 264 90 264 90H252V42H240V120C240 120 240 138 222 138C204 138 204 120 204 120V42H192V90H156V54H180V42H119.038C122.733 45.1191 125.982 49.0488 128.303 54H144V144C144 147.314 146.686 150 150 150Z" />
            <path d="M84 54V42C84 42 120 42 120 72C120 102 84 102 84 102H80.5L118.243 139.757C120.586 142.1 120.586 145.899 118.243 148.242C115.9 150.586 112.101 150.586 109.757 148.242L72 110.5V144C72 147.314 69.3137 150 66 150C62.6863 150 60 147.314 60 144V102H20.5769C15.6054 115.4 12.5582 129.007 12 144C12 147.314 9.31372 150 6.00002 150C2.68631 150 0 147.314 0 144C3.09163 63.8858 69.1286 0 150 0V12C95.29 12 48.01 43.84 25.691 90H60V61.8183C63.7644 57.9768 67.7728 54.3753 72 51.0388V90H84C84 90 108 90 108 72C108 54 84 54 84 54Z" />
          </motion.svg>
          <div className={styles.textWrapper}>
            <motion.h1
              className={styles.nameText}
              variants={motions.fadeUpItem}
            >
              Arthur Petrie
            </motion.h1>
            <motion.h2
              className={styles.roleText}
              variants={motions.fadeUpItem}
            >
              developer.
            </motion.h2>
          </div>
          <motion.div
            className={styles.socialLinksWrapper}
            variants={motions.fadeUpItem}
          >
            <SocialLinks />
          </motion.div>
        </div>
      </header>
      <motion.article variants={motions.fadeUpItem} className={styles.article}>
        {content}
      </motion.article>
    </motion.main>
  );
};

export default Index;
