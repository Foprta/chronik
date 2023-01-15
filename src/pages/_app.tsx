import type {AppProps} from "next/app";

import "../style.css";


import React from "react";

// This default export is required in a new `pages/_app.js` file.
const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
  return <Component {...pageProps} />;
}

export default MyApp