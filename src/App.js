import { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import data from "./data";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { products } = data;
  const [toggle, setToggle] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const shopCartHandle = () => {
    setToggle(!toggle);
  };

  const addToCart = (product) => {
    const existProduct = cartItems.find((x) => x.id === product.id);

    if (existProduct) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...existProduct, quantity: existProduct.quantity + 1 }
            : item
        )
      );

      toast(product.name + " ürünü sepetinizde güncellendi.", {
        style: {
          color: "#626ed4",
        },
      });
    } else {
      //mutable, immutable
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
      toast(product.name + " ürünü sepete eklenmiştir.", {
        style: {
          color: "#626ed4",
        },
      });
    }
  };

  const removeProduct = (product) => {
    const existProduct = cartItems.find((x) => x.id === product.id);

    if (existProduct.quantity === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
      toast(product.name + " ürünü başarıyla silinmiştir.", {
        style: {
          color: "#626ed4",
        },
      });
    }
    else{
      setCartItems(cartItems.map((x)=>
        x.id === product.id?{...existProduct, quantity:existProduct.quantity-1}:x
      ));
      toast(product.name + " ürünü güncellenmiştir.", {
        style: {
          color: "#626ed4",
        },
      });
    }
  };

  return (
    <div className="App">
      <Navbar
        toggle={toggle}
        shopCartHandle={shopCartHandle}
        cartItems={cartItems}
        addToCart={addToCart}
        removeProduct={removeProduct}
      />
      <ProductList addToCart={addToCart} products={products} />
      <ToastContainer
        hideProgressBar={true}
        position="bottom-right"
        autoClose={3000}
      />
    </div>
  );
}

export default App;
