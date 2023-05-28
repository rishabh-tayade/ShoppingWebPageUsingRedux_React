
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
    <div>

      <div className="flex py-10">

        <div className="mr-12 max-w-[300px] ">
          <img src={item.image} width={300} height={400} />
        </div>
        <div className="flex flex-col py-2">
          <h1 
          className="font-bold text-xl py-3">{item.title}</h1>
          <p className="py-1">{item.description.split(" ").slice(0,15).join(" ") + "..."}</p>
          <div className="py-2 flex justify-between items-center">
            <p 
            className="font-bold text-green-500">${item.price}</p>
            <div 
            className="rounded-full cursor-pointer text-2xl bg-pink-500" 
            onClick={removeFromCart}>
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>
  );
};

export default CartItem;
