import { style } from "treat";
import tw from "@tailwindcssinjs/macro";

export const socialLinks = style(tw`
  flex justify-center
  list-none
  mb-10
  rounded-full
  transition-shadow duration-500 ease-in-out
  hover:shadow-neumorphism-blue
`);

export const socialLink = style(tw`
  flex items-center justify-center
  transition duration-300 ease-in-out
  text-blue-400
  w-12 h-12
  m-3
  hover:text-blue-100
  sm[w-12 h-12 m-4]
  md[w-16 h-16 m-6]
`);

export const link = style(tw`
  flex justify-center
  w-full h-full
`);

export const svg = style(tw`
  fill-current
  w-1/2
`);
