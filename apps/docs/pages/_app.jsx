import Head from "next/head";
import Navigation from "../common/Navigation";
import Heading from "../common/Heading";
import componentData from "../data/componentData";

import "./styles.css";
import "./normalize.css";

const AtlasDocsApp = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
        />
        <title>ProductPlan Atlas</title>
      </Head>

      <div>
        <Heading />
        <div className="Documentation">
          <Navigation
            components={componentData.map((component) => component.name)}
          />
          <Component {...pageProps} />
        </div>
      </div>
    </>
  );
};

export default AtlasDocsApp;
