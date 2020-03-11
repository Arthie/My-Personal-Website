//to do add: headwind

// solves order problem

type TwClassNameReducerArgs = string | TwSelectorObject;

export interface TwSelectorObject {
  //todo add other pseudo selectors
  hover?: string;
  focus?: string;
  active?: string;
  [key: string]: string | TwSelectorObject;
}

const twClassNameStringSplitter = (twClassName: string) =>
  twClassName.split(" ");

const twClassNameArrayPrefixer = (prefix: string, twClassName: string[]) =>
  twClassName.map(value => `${prefix}:${value}`);

const twClassNameObjectReducer = (twClassName: TwSelectorObject) => {
  const twPrefixClassName = Object.entries(twClassName);

  return twPrefixClassName.reduce((acc, [curKey, curValue]) => {
    const twClassName = twClassNameReducer(curValue);
    const twPrefixedClassName = twClassNameArrayPrefixer(curKey, twClassName);
    return acc.concat(twPrefixedClassName);
  }, []);
};

const twClassNameReducer = (...args: TwClassNameReducerArgs[]) =>
  //Reduce className object to array of classname strings
  args.reduce<string[]>((acc, cur) => {
    if (typeof cur === "string") {
      return acc.concat(twClassNameStringSplitter(cur));
    } else if (typeof cur === "object") {
      return acc.concat(twClassNameObjectReducer(cur));
    } else {
      console.log("error", acc, cur);
    }
  }, []);

type StylexObject = { [key: string]: string };

const stylex = {
  //convert css objects to classnames
  //todo use stylesheet: https://github.com/giuseppeg/style-sheet
  create: (stylexObject: StylexObject) => {
    return (...styleKeys: Array<string | undefined>) => {
      return styleKeys.reduce<string | undefined>((acc, key) => {
        const style = stylexObject[key];
        return style ? [acc, style].join(" ") : acc;
      }, "");
    };
  },
  //convert tailwind classnames object to css
  tw: (...items: TwClassNameReducerArgs[]) => {
    //combine items to string array
    const twClassNamesArray = twClassNameReducer(...items);

    //get css from classnames
    return twClassNamesArray.join(" ");
  }
};

export default stylex;
