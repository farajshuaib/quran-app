import React from 'react';
import {SvgXml} from 'react-native-svg';

export default ({color}) => {
  const Icon = `
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill=${color} viewBox="0 0 40 40"><path d="M46 47h-4a1 1 0 010-2h2.977C44.453 33.883 35.245 25 24 25S3.547 33.883 3.023 45H38.2a1 1 0 010 2H2a1 1 0 01-1-1c0-12.682 10.318-23 23-23s23 10.318 23 23a1 1 0 01-1 1zM34 10H14a1 1 0 01-1-1V2a1 1 0 011-1h20a1 1 0 011 1v7a1 1 0 01-1 1zM15 8h18V3H15v5z"/><path d="M24 22c-6.065 0-11-4.935-11-11V9a1 1 0 011-1h20a1 1 0 011 1v2c0 6.065-4.935 11-11 11zm-9-12v1c0 4.962 4.038 9 9 9s9-4.038 9-9v-1H15z"/></svg>
    `;

  const SvgImage = () => <SvgXml xml={Icon} />;

  return <SvgImage />;
};
