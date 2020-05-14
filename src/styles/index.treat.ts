import { style } from "treat";
import tw from "@tailwindcssinjs/macro";

export const header = style(tw`
  absolute
  grid
  h-full w-full
  text-blue-100
  bg-blue-900
  border-blue-400 border-t-4
`);

export const logoContainer = style(tw`
  absolute
  flex justify-center
  w-full
`);

export const logoWrapper = style(tw`
  container
  p-8
`);

export const logo = style(tw`
  w-24
  md:w-28
  lg:w-36
  xl:w-40
`);

export const textWrapper = style(tw`
  flex flex-col items-center justify-center
`);

export const nameText = style(tw`
  text-5xl font-sans font-bold antialiased
  sm:text-6xl
  md:text-7xl
`);

export const roleText = style(tw`
  font-sans text-blue-400 text-2xl font-semibold italic antialiased
  sm:text-3xl
  md:text-4xl
`);

export const socialLinksWrapper = style(tw`
  absolute bottom-0
  flex justify-center
  w-full
`);
