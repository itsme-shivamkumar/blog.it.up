import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }


  render() {

    return (
      <Html>
        <Head>
          <link rel='icon' href='logo.jpg'/>
        </Head>
        <body>
        <video
        src="/bg.mp4"
        muted
        autoPlay
        loop='true'
      />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
