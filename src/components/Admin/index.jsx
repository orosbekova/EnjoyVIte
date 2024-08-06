import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createUser } from "../../redux/reducers/AdminSlice";
import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";

const Admin= () => {
    const [userName,setUserName]=useState("")
    const [userPas,setUserPas]=useState("")

    const dispatch=useDispatch()
    const nav=useNavigate()
    const {user,pass}=useSelector((s)=>s.admin)
    
    console.log(pass);
    let count=4
    const UserProduct=()=>{
        if(userPas===pass){

            const newUser={
                id:user.length?user[user.length-1].id+1:1  , 
                name:userName,
                pass:userPas,
            }
          
            dispatch(createUser(newUser)) ;
       setUserName("")
       setUserPas("")
            }else if(pass!==userPas){
            count--
            if(count===3){
                alert("u vas ostalos 3popytki")
            } else  if(count===2){
                alert("u vas ostalos 2popytki")
            }
            else  if(count===1){
                alert("u vas ostalos 1popytki")
            }
        
        }else{
            alert(303)
            setUserName("")
            setUserPas("")
        }
    
     
    }
    return (
        <div className="container">
            <div className=" mx-auto w-[40%]  gap-10 flex items-center flex-col mt-[50px]">
            <span className="text-[200px] text-white">     <FaRegUserCircle /></span>
            <div className="relative z-0 w-full mb-5 group">
               
      <input onChange={(e)=>setUserName(e.target.value)} value={userName} style={{fontSize:"20px"}} type="email" name="floating_email" id="floating_email" className="block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User name</label>
  </div>
  <div  className=" relative z-0 w-full mb-5 group">
      <input onChange={(e)=>setUserPas(e.target.value)}  style={{fontSize:"20px"}} type="password" name="floating_email" id="floating_email" className="  block py-2.5 px-0 w-full text-sm text-gray-200 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0  focus:border-blue-600 peer" placeholder="" required />
      <label htmlFor="floating_email" className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">User password...</label>
  </div>
  <Link to="" onClick={()=>UserProduct()}
 
   className="text-[25px] py-[10px] px-[30px] bg-white rounded-[10px]">Login in</Link>
            </div>
        </div>
    );
};

export default Admin;