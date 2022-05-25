import { useState, useEffect } from "react";
import "../styles/globals.css";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    console.log("I am useeffect from _app.js");
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
