import React from "react";
import { SvgXml } from "react-native-svg";

export default () => {
  const Icon = `
  <svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 24 24"><path fill="rgb(0, 176, 110)" d="M8.4 17.77a1 1 0 01-.47-.12 1 1 0 01-.53-.88V7.23A1 1 0 019 6.39l7.2 4.78a1 1 0 010 1.66L9 17.61a1 1 0 01-.6.16zm1-8.68v5.82L13.79 12z"/></svg>  
  `;

  const SvgImage = () => <SvgXml xml={Icon} />;

  return <SvgImage />;
};
