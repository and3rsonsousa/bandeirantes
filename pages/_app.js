import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AnimatePresence exitBeforeEnter={true}>
      <Component {...pageProps} key={useRouter().route} />
    </AnimatePresence>
  );
}

export default MyApp;
