import React from 'react';
import {SvgXml} from 'react-native-svg';

export default ({color}) => {
  const Icon = `
  <svg xmlns="http://www.w3.org/2000/svg" fill=${color} height="30" width="30" viewBox="0 0 32 32"><path d="M26 15a1 1 0 00-1 1 9 9 0 01-18 0 1 1 0 00-2 0 11 11 0 0010 11v3a1 1 0 002 0v-3a11 11 0 0010-11 1 1 0 00-1-1z"/><path d="M16 21a6 6 0 006-6V7a6 6 0 00-12 0v8a6 6 0 006 6z"/></svg>  `;

  const SvgImage = () => <SvgXml xml={Icon} />;

  return <SvgImage />;
};
