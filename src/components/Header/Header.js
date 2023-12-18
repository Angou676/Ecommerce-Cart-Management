import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const cartList = useSelector((state) => state.items);
  const itemCount = useSelector((state) => state.count);

  const navigateCheckoutHandler = () => {
    if (cartList.length > 0) {
      navigate("/checkout");
    } else {
      alert("Add some product into cart");
    }
  };
  return (
    <div className="h-h70 py-3 px-5 flex justify-between items-center bg-black bg-opacity-20 fixed top-0 z-999 w-full">
      <div
        className="text-blue-900  text-xl font-bold capitalize cursor-pointer"
        onClick={() => navigate(`/`)}
      >
        ECommerce
      </div>

      <div className=" w-40 flex justify-between items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          className="cursor-pointer"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M15.25 4C14.4216 4 13.75 4.67157 13.75 5.5L13.5699 6.76051C13.4087 7.88912 12.0971 8.43241 11.185 7.74837L10.1664 6.98439C9.58059 6.3986 8.63084 6.3986 8.04505 6.98439L6.98439 8.04505C6.3986 8.63084 6.3986 9.58059 6.98439 10.1664L7.74836 11.185C8.43241 12.0971 7.88912 13.4087 6.76049 13.5699L5.5 13.75C4.67157 13.75 4 14.4216 4 15.25V16.75C4 17.5784 4.67157 18.25 5.5 18.25L6.76051 18.4301C7.88913 18.5913 8.43243 19.9029 7.74837 20.8149L6.98439 21.8336C6.3986 22.4195 6.3986 23.3692 6.98439 23.9549L8.04505 25.0156C8.63084 25.6015 9.58059 25.6015 10.1664 25.0156L11.185 24.2516C12.0971 23.5676 13.4087 24.1109 13.5699 25.2395L13.75 26.5C13.75 27.3284 14.4216 28 15.25 28H16.75C17.5784 28 18.25 27.3284 18.25 26.5L18.4301 25.2395C18.5913 24.1109 19.9029 23.5676 20.8149 24.2516L21.8336 25.0156C22.4195 25.6015 23.3692 25.6015 23.9549 25.0156L25.0156 23.9549C25.6013 23.3692 25.6013 22.4195 25.0156 21.8336L24.2516 20.8149C23.5676 19.9029 24.1109 18.5913 25.2395 18.4301L26.5 18.25C27.3284 18.25 28 17.5784 28 16.75V15.25C28 14.4216 27.3284 13.75 26.5 13.75L25.2395 13.5699C24.1109 13.4087 23.5676 12.0971 24.2516 11.185L25.0156 10.1664C25.6013 9.58059 25.6013 8.63084 25.0156 8.04505L23.9549 6.98439C23.3692 6.3986 22.4195 6.3986 21.8336 6.98439L20.8149 7.74837C19.9029 8.43241 18.5913 7.88912 18.4301 6.76051L18.25 5.5C18.25 4.67157 17.5784 4 16.75 4H15.25ZM16 19C17.6568 19 19 17.6568 19 16C19 14.3432 17.6568 13 16 13C14.3432 13 13 14.3432 13 16C13 17.6568 14.3432 19 16 19Z"
            fill="#A098AE"
          />
        </svg>
        <div
          className="mt-2 relative flex cursor-pointer"
          onClick={navigateCheckoutHandler}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="#A098AE"
            className="fill-current"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              fill="#A098AE"
              d="M17,18C15.89,18 15,18.89 15,20A2,2 0 0,0 17,22A2,2 0 0,0 19,20C19,18.89 18.1,18 17,18M1,2V4H3L6.6,11.59L5.24,14.04C5.09,14.32 5,14.65 5,15A2,2 0 0,0 7,17H19V15H7.42A0.25,0.25 0 0,1 7.17,14.75C7.17,14.7 7.18,14.66 7.2,14.63L8.1,13H15.55C16.3,13 16.96,12.58 17.3,11.97L20.88,5.5C20.95,5.34 21,5.17 21,5A1,1 0 0,0 20,4H5.21L4.27,2M7,18C5.89,18 5,18.89 5,20A2,2 0 0,0 7,22A2,2 0 0,0 9,20C9,18.89 8.1,18 7,18Z"
            />
          </svg>
          {itemCount !== 0 && (
            <span className="absolute right-0 -top-1 rounded-full bg-green-600 w-4 h-4 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
              {itemCount}
            </span>
          )}
        </div>
        <div className="rounded-full overflow-hidden h-10 w-10 cursor-pointer">
          <img
            src="https://st2.depositphotos.com/1104517/11967/v/950/depositphotos_119675554-stock-illustration-male-avatar-profile-picture-vector.jpg"
            className="w-full h-full rounded-full object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
