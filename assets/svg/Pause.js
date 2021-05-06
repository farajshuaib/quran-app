import React from 'react';
import {SvgXml} from 'react-native-svg';

export default ({color}) => {
  const Icon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="rgb(0, 176, 110)" viewBox="0 0 512 512"><path d="M191 112v288h-47V112h47m16-16h-79v320h79V96zM368 112v288h-47V112h47m16-16h-79v320h79V96z"/></svg>   
  `;

  const SvgImage = () => <SvgXml xml={Icon} />;

  return <SvgImage />;
};
