//@ts-check
import postcss from "postcss";
import tailwindcss from "tailwindcss";
import purgecss from "@fullhuman/postcss-purgecss";
import postcssJs from "postcss-js";

const postCssTwProcess = () => {
  const css = `
  @tailwind components;
  @tailwind utilities;
  `;
  return new Promise((resolve, reject) => {
    postcss()
      .use(tailwindcss())
      .process(css, {
        from: undefined
      })
      .then(resolve)
      .catch(reject);
  });
};

const postCssPurgeCssProcess = (css, selectors) => {
  const plugins = purgecss({
    content: [
      {
        raw: selectors
      }
    ],
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
  });

  return new Promise((resolve, reject) => {
    postcss()
      .use(plugins)
      .process(css, {
        from: undefined
      })
      .then(resolve, reject);
  });
};

const stripAtSelector = (selector, value) => {
  const result = postCssSelectorStrip(value);
  return { [selector]: result };
};

const stripClassSelector = (selector, value) => {
  const lastColonIndex = selector.lastIndexOf(":");
  const backSlash = selector.charCodeAt(lastColonIndex - 1) === 92;

  //check for pseudoSelector else return value
  if (lastColonIndex !== -1 && !backSlash) {
    const pseudoSelector = selector.slice(lastColonIndex);
    return { [`&${pseudoSelector}`]: value };
  } else {
    return value;
  }
};

const postCssSelectorStrip = cssObject => {
  const cssObjectEntries = Object.entries(cssObject);
  return cssObjectEntries.reduce((acc, currentValue) => {
    const [selector, value] = currentValue;
    const firstChar = selector.charAt(0);

    let strippedCss;
    if (firstChar === ".") {
      strippedCss = stripClassSelector(selector, value);
    } else if (firstChar === "@") {
      strippedCss = stripAtSelector(selector, value);
    } else {
      console.log("error unknown selector", selector, value);
    }

    return mergeDeep(acc, strippedCss);
  }, {});
};

function isObject(item) {
  return item && typeof item === "object" && !Array.isArray(item);
}

function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();

  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }

  return mergeDeep(target, ...sources);
}

function memoize(method) {
  let cache = {};

  return async function(...argum) {
    let args = JSON.stringify(argum);
    cache[args] = cache[args] || method.apply(this, argum);
    return cache[args];
  };
}

const memoizedPostCssTwProcess = memoize(async () => await postCssTwProcess());
const memoizedPostCssPurgeCssProcess = memoize(
  async (css, selector) => await postCssPurgeCssProcess(css, selector)
);

const twClassnameToCssObject = async selectors => {
  //todo get tailwind config
  const tailwindRoot = await memoizedPostCssTwProcess();

  //get all css from matching selectors
  const pcProcessed = await memoizedPostCssPurgeCssProcess(
    tailwindRoot.css,
    selectors
  );

  //transform post css rules to javascript object
  const objectified = postcssJs.objectify(pcProcessed.root);

  //strip selectors from css
  const selectorStripped = postCssSelectorStrip(objectified);
  console.log("#######################################################");
  console.log(selectorStripped);
  return selectorStripped;
};

console.time("first");
console.time("second");
twClassnameToCssObject(
  "sm:bg-black sm:hover:text-red-500 sm:text-red-400 md:bg-red-500 bg-white"
);
console.timeEnd("first");
twClassnameToCssObject("sm:bg-black md:bg-red-500 bg-white");
console.timeEnd("second");
