import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";




const Cart = () => {

  const {cart} = useSelector((state) => state);
  console.log("Printing Cart");
  console.log(cart);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])

  return (
    <div className="max-w-6xl mx-auto">
        {
          cart.length > 0  ? 
          (
            <div className="flex justify-center">


              <div className="flex flex-col max-w-[50%] mr-28">
                {
                  cart.map( (item,index) => {
                    return <CartItem key={item.id} item={item} itemIndex={index} />
                  } )
                }
              </div>

              <div className="flex py-20 flex-col justify-between max-h-[80vh]">

                <div>
                  <div className="text-green-600 font-bold text-xl">Your Cart</div>
                  <div className="text-green-600 font-bold text-4xl">Summary</div>
                  <p className="py-4 font-bold">
                    Total Items: <span>{cart.length}</span>
                  </p>
                </div>

                <div>
                  <p className="font-bold py-3">Total Amount: <span className="font-extrabold">${totalAmount}</span></p>
                  <button
                  className="bg-green-700 text-white w-full h-12 rounded-md font-bold">
                    Checkout Now
                  </button>
                </div>

              </div>


            </div>
          ) : 
          (<div>
            <h1>Cart Empty</h1>
            <Link to={"/"}>
              <button>
                Shop Now
              </button>
            </Link>
          </div>)
        }
    </div>
  );
};

export default Cart;
