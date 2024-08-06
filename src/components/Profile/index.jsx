import React, { useState } from 'react';
import { LuLogOut } from "react-icons/lu";
import { useDispatch, useSelector } from 'react-redux';
import { logAdmin, logPass } from "../../redux/reducers/AdminSlice";

const Profile = () => {
    const [oldPass, setOldPass] = useState("");
    const [newPass, setNewPass] = useState("");

    const { user, pass } = useSelector((state) => state.admin);
    const dispatch = useDispatch();

    console.log(user);
    console.log(pass);

    const addPass = () => {
        if (oldPass === pass) {
            dispatch(logPass(newPass));
        } else {
            alert("Old password is incorrect.");
        }
    };

    return (
        <div className='container'>
            <div className='flex flex-col items-center gap-10 relative'>
                <h1 className='text-[40px] font-bold'>{user.name}</h1>
                <input 
                    className='bg-transparent outline-none border-2 border-solid border-black p-[15px] w-[500px]'  
                    onChange={(e) => setOldPass(e.target.value)} 
                    type="password" 
                    placeholder='Old password'
                />
                <input 
                    className='bg-transparent outline-none border-2 border-solid border-black p-[15px] w-[500px]' 
                    onChange={(e) => setNewPass(e.target.value)} 
                    type="password" 
                    placeholder='New password'
                />
                <button onClick={addPass} className='w-[120px] bg-white text-[25px] p-[7px] font-bold'>
                    Change
                </button>
                <span onClick={() => dispatch(logAdmin())} className='text-[40px] cursor-pointer absolute top-15 text-white right-0'>
                    <LuLogOut />
                </span>
            </div>
        </div>
    );
};

export default Profile;