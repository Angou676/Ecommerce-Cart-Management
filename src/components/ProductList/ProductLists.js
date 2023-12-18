import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  removeItem,
  setItems,
  incrementItem,
  decrementItem,
} from "../../Store/index";
const ProductLists = ({ productData }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartList = useSelector((state) => state.items);

  const addCartHandler = (getData) => {
    dispatch(setItems([getData]));
  };

  const incrementHandler = (item) => {
    dispatch(incrementItem(item));
  };

  const decrementHandler = (item) => {
    const cartItem = cartList.find((cartItem) => cartItem.id === item.id);

    if (cartItem) {
      if (cartItem.count > 1) {
        dispatch(decrementItem(item));
      } else {
        dispatch(removeItem(item));
      }
    }
  };

  const navigateProductDetailHandler = (getItem) => {
    navigate("/details", {state:getItem});
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1">
      {productData.map((item) => {
        const cartItem = cartList.find((cartItem) => cartItem.id === item.id);
        return (
          <div key={item.id} className="h-80 p-2 ">
            <div
              className="w-full h-52 p-2 shadow"
              onClick={() => navigateProductDetailHandler(item)}
            >
              <img src={item.images[0]} className="w-full h-full  " />
            </div>
            <h4
              className="px-2 mt-2 font-bold"
              onClick={() => navigateProductDetailHandler(item)}
            >
              {item.title}
            </h4>
            <div className="px-2 flex justify-between items-end">
              <h4
                className="font-semibold"
                onClick={() => navigateProductDetailHandler(item)}
              >
                ₹ {item.price}{" "}
              </h4>
              {cartItem ? (
                <div className="flex items-center">
                  <button
                    className="bg-green-500 px-4 py-1 rounded-l-lg font-semibold text-white"
                    onClick={() => decrementHandler(item)}
                  >
                    -
                  </button>
                  <span className="bg-green-500 px-4 py-1 font-semibold text-white">
                    {cartItem.count}
                  </span>
                  <button
                    className="bg-green-500 px-4 py-1 rounded-r-lg font-semibold text-white"
                    onClick={() => incrementHandler(item)}
                  >
                    +
                  </button>
                </div>
              ) : (
                <button
                  className="bg-green-500 px-4 py-1 rounded-lg font-semibold text-white"
                  onClick={() => addCartHandler(item)}
                >
                  Add
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductLists;
