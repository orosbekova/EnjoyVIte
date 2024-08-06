import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import HelpCentre from "../HelpCentre";
import Product from "../Product";
import Admin from "../Admin";
import Basket from "../Basket";
import Profile from "../Profile";

const RootContext = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/product" element={<Product/>}/>
                <Route path="/centre" element={<HelpCentre/>}/>
                <Route path="/admin" element={<Admin/>}/>
                <Route path="/basket" element={<Basket/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </div>
    );
};

export default RootContext;