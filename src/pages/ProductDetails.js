import React from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeItem,
  setItems,
  incrementItem,
  decrementItem,
} from "../Store/index";

const ProductDetails = () => {
  const itemDetail = useLocation().state;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartList = useSelector((state) => state?.items);

  // Find the corresponding item in the cart based on the current itemDetail.id
  const cartItem = cartList?.find((cartItem) => cartItem.id === itemDetail.id);

  const addCartHandler = (getData) => {
    dispatch(setItems([getData]));
  };

  const incrementHandler = () => {
    dispatch(incrementItem(itemDetail));
  };

  const decrementHandler = () => {
    if (cartItem) {
      if (cartItem.count > 1) {
        dispatch(decrementItem(itemDetail));
      } else {
        dispatch(removeItem(itemDetail));
      }
    }
  };

  const navigateProductDetailHandler = (getItem) => {
    navigate("/details", { state: getItem });
  };

  return (
    <div className=" mt-16 p-5 w-96">
      <div className="h-96 shadow-md p-3">
        <img src={itemDetail.images[0]} className="h-full w-full " />
      </div>
      <div className="flex justify-between items-end">
        <div>
          <h4 className="px-2 mt-2 font-bold">Pepe Jeans</h4>
          <h4 className="px-2 mt-2 font-bold">Price 599</h4>
        </div>

        <div>
          {cartItem ? (
            <div className="flex items-center  mt-6 justify-center">
              <button
                className="bg-green-500 px-4 py-1 rounded-l-lg font-semibold text-white"
                onClick={decrementHandler}
              >
                -
              </button>
              <span className="bg-green-500 px-4 py-1 font-semibold text-white">
                {cartItem.count}
              </span>
              <button
                className="bg-green-500 px-4 py-1 rounded-r-lg font-semibold text-white"
                onClick={incrementHandler}
              >
                +
              </button>
            </div>
          ) : (
            <button
              className="bg-green-500 px-4 py-1 rounded-lg font-semibold text-white"
              onClick={() => addCartHandler(itemDetail)}
            >
              Add to cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
