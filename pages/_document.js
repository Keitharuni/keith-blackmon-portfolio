import Document, { Html, Head, Main, NextScript } from "next/document";
import sizes from "../styles/sizes";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          <link
            href='https://fonts.googleapis.com/css?family=Oswald|Exo|Lato|Notable&display=swap'
            rel='stylesheet'
          />
          <style>{`#__next { height: 100vh; display: flex; overflow-x: hidden
          }`}</style>
        </Head>
        <body
          style={{
            margin: 0,
            height: "100vh",
            display: "flex"
          }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
