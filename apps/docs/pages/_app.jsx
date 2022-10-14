import Head from "next/head";
import Heading from "../common/Heading";
import Navigation from "../common/Navigation";
import componentData from "../data/componentData";

import "./styles.css";
import "./normalize.css";

const AtlasDocsApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Heading />
      <div className="Documentation">
        <Navigation
          components={componentData.map((component) => component.name)}
        />
        <Component {...pageProps} />
      </div>
    </div>
  );
};

export default AtlasDocsApp;
