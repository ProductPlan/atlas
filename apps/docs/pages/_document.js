import { Html, Head, Main, NextScript } from "next/document";
import { addBasePath } from "next/dist/client/add-base-path";
import Navigation from "../common/Navigation";
import Heading from "../common/Heading";
import componentData from "../data/componentData";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap" rel="stylesheet" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
        />
        <link rel="stylesheet" href="https://kit.fontawesome.com/b3a8f86cad.css" crossorigin="anonymous"></link>
        <link rel="shortcut icon" href={addBasePath("/favicon.ico")} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
