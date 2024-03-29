import React from 'react';
import {SvgXml} from 'react-native-svg';

export default ({color}) => {
  const Icon = `
  <?xml version="1.0" encoding="UTF-8"?><svg height="24" width="24" fill="rgb(109, 109, 109)" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 100 100" xml:space="preserve"><g id="_x37_7_Essential_Icons"><path id="Search" d="M87.4 77.7L68.5 58.8c3.2-5 4.7-10.8 4.7-16.5C73.2 25.4 59.7 12 42.8 12 25.2 12 11.9 25.9 12 42.6c.1 16.7 13.6 30.6 30.8 30.6 5.8 0 11.3-1.6 16.1-4.6l18.9 18.8c.8.8 2 .8 2.8 0l6.9-6.9c.7-.8.7-2-.1-2.8zm-44.6-8.5c-15 0-26.7-12.1-26.8-26.7-.1-14.4 11.4-26.6 26.8-26.6 15 0 26.3 11.7 26.4 26.3.1 15.6-12.2 27-26.4 27zm36.3 14l-17-17c.6-.5 3.4-3.3 4.1-4.1l17 17-4.1 4.1z"/></g><g id="Info"><path d="M244-370v1684h-1784V-370H244m8-8h-1800v1700H252V-378z" id="BORDER"/></g><metadata><rdf:RDF xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:rdfs="http://www.w3.org/2000/01/rdf-schema#" xmlns:dc="http://purl.org/dc/elements/1.1/"><rdf:Description about="https://iconscout.com/legal#licenses" dc:title="essential,s,search" dc:description="essential,s,search" dc:publisher="Iconscout" dc:date="2017-09-15" dc:format="image/svg+xml" dc:language="en"><dc:creator><rdf:Bag><rdf:li>Bryn Taylor</rdf:li></rdf:Bag></dc:creator></rdf:Description></rdf:RDF></metadata></svg>
    `;

  const SvgImage = () => <SvgXml xml={Icon} />;

  return <SvgImage />;
};
