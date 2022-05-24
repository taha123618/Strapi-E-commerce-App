import "../styles/globals.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function MyApp({ Component, pageProps }) {
  return;
  <>
    <Component {...pageProps} />
    <Navbar />
    <Footer />
  </>;
}

export default MyApp;
