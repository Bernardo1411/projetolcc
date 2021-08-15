import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="pt">
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="backdropDestiny"></div>
        </body>
      </Html>
    );
  }
}

export default MyDocument;