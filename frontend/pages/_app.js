import { useState, useEffect } from "react";
import "../styles/globals.css";
import Navbar from "../Components/NavbarItems/Navbar";
import Footer from "../Components/Footer";
import Head from "next/head";
// import Nav1 from "../Components/NavbarItems/Nav1";

function MyApp({ Component, pageProps }) {
  <Head>
    {/* payment js checkout meta tag  */}
    <meta
      name="viewport"
      content="width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0"
    />
  </Head>;
  useEffect(() => {
    console.log("I am useEffect from _app.js");
  }, []);
  const [cart, setCart] = useState([]);
  const [reloadKey, setReloadKey] = useState(1);
  // card state
  const addCart = (item, qty, price) => {
    let newCart = cart;
    for (let index = 0; index < qty; index++) {
      newCart.push([item, price]);
    }
    setCart(newCart);
    setReloadKey(Math.random());
  };
  const removeFromCart = (item, qty) => {
    let newCart = cart;
    let index = newCart.indexOf(item);
    newCart.splice(index);
    setCart(newCart);
  };
  const clearCart = (item) => {
    setCart([]);
  };

  return (
    <>
      <Navbar key={reloadKey} cart={cart} />
      <Component
        cart={cart}
        addCart={addCart}
        removeFromCart={removeFromCart}
        clearCart={clearCart}
        {...pageProps}
      />
      <Footer />
    </>
  );
}

export default MyApp;
