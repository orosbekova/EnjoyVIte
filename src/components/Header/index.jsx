import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiUser, CiSearch } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.admin);
  const { basket } = useSelector((state) => state.basket);
  const navPro = () => {
    if (!user.name) {
      alert("User not found");
    } else {
      // navigate("/product");
    }
  };

  return (
    <div className="py-9">
      <div className="container">
        <div className="flex  top-0 items-center justify-between">
          <div className="logo">
            {/* Add your logo here if any */}
          </div>

          <div className="flex items-center gap-36 border-2 border-solid border-white rounded-2xl py-2 px-7">
            <div className="text-white font-thin text-2xl flex items-center gap-10">
              <Link to="/">Home</Link>
              <button onClick={()=>navigate("/product")} className="text-white text-2xl">Product</button>
              <Link to="/centre">Help Centre</Link>
            </div>
            <div className="flex items-center gap-4">
              <h1
                className="text-white text-xl cursor-pointer"
                onClick={() => navigate("/profile")}
              >
                {user.name || "Guest"}
              </h1>
              <button
                onClick={() => navigate("/admin")}
                className="text-white text-3xl"
              >
                <CiUser />
              </button>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button className="text-white text-3xl">
              <CiSearch />
            </button>
            
            <button onClick={()=>navigate("/basket")} className="text-white text-3xl flex items-center">
            <h1 className="text-[15px] bg-green-600 w-[20px] text-black h-[25px] rounded-[40px]">{basket.length}</h1>
              <PiShoppingCartThin />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
