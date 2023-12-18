import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItem, incrementItem, decrementItem, emptyCart } from "../Store/index";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartList = useSelector((state) => state?.items);

  const incrementHandler = (item) => {
    dispatch(incrementItem(item));
  };

  const decrementHandler = (item) => {
    if (item.count > 1) {
      dispatch(decrementItem(item));
    } else {
      dispatch(removeItem(item));
      if (cartList.length === 1) {
        // If the last item is removed, navigate to the home screen
        navigate("/");
      }
    }
  };

  const calculateTotalAmount = () => {
    return cartList.reduce((total, item) => total + item.price * item.count, 0);
  };

  const placeOrderHandler = () => {
    navigate(`/confirm-order`);
    dispatch(emptyCart());
  };
  return (
    <div className="mt-16 p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
        <section>
          {cartList.map((item) => (
            <div
              key={item.id}
              className="flex items-center shadow-md gap-10 mb-10 p-3"
            >
              <div className="h-40 w-52 sm:h-32 md:h-40 p-4 ">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="h-full w-full"
                />
              </div>
              <div className="w-full">
                <div>
                  <h4 className="px-2 mt-2 font-bold">{item.title}</h4>
                  <h4 className="px-2 mt-2 ">₹ {item.price}</h4>
                  <h4 className="px-2 mt-2 font-bold">
                    X {item.price * item.count}
                  </h4>
                </div>

                <div className="flex items-center mt-6 justify-end  w-full ">
                  <button
                    className="bg-green-500 px-4 py-1 rounded-l-lg font-semibold text-white"
                    onClick={() => decrementHandler(item)}
                  >
                    -
                  </button>
                  <span className="bg-green-500 px-4 py-1 font-semibold text-white">
                    {item.count}
                  </span>
                  <button
                    className="bg-green-500 px-4 py-1 rounded-r-lg font-semibold text-white mr-5"
                    onClick={() => incrementHandler(item)}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        <section className="shadow-md p-6 flex flex-col justify-between items-end h400px">
          <div className="w-full">
            <h1 className="font-semibold">Price details</h1>
            <hr className="mt-4" />

            <div className="flex justify-between mt-6">
              <div>Price</div>
              <div>₹ {calculateTotalAmount()}</div>
            </div>
            <div className="flex justify-between mt-6">
              <div>Delivery Charge</div>
              <div>₹ 0</div>
            </div>
            <hr className="mt-4" />
            <div className="flex justify-between mt-6">
              <h1 className="font-semibold">Total Amount</h1>
              <div className="font-semibold">₹ {calculateTotalAmount()}</div>
            </div>
          </div>

          <button
            className="bg-orange-500 px-8 py-2 rounded-lg font-semibold text-white mt-8"
            onClick={placeOrderHandler}
          >
            Place order
          </button>
        </section>
      </div>
    </div>
  );
};

export default CheckoutPage;
