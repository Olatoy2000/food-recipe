import {
  Html, Main, Head, NextScript,
} from 'next/document';

function MyDocument() {
  return (
    <Html lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Mirza:wght@700&family=Poppins:wght@400&display=swap" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>

  );
}

export default MyDocument;
