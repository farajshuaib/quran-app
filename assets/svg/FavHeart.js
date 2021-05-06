import React from "react";
import { SvgXml } from "react-native-svg";

export default () => {
  const Icon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="45" width="45" viewBox="0 0 64 64"><g data-name="Layer 2"><path fill="none" stroke="rgb(0, 176, 110)" stroke-linejoin="round" stroke-width="2" d="M32,50,16.34,34.34C3.69,21.69,19.35,6,32,18.67,44.64,6,60.3,21.7,47.67,34.34Z"/><path fill="none" stroke="rgb(0, 176, 110)" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 24.33A7 7 0 0 1 23 18M19 30.74a7 7 0 0 1-2.06-2.25"/><rect width="64" height="64" fill="none"/></g></svg>  `;

  const SvgImage = () => <SvgXml xml={Icon} />;

  return <SvgImage />;
};
