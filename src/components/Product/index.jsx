import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { CreateProduct } from '../../redux/reducers/ProductSlice';
import { useEffect } from 'react';
import { CreateBasket } from '../../redux/reducers/BasketSlice';

const Product = () => {
  const { product} = useSelector((state) => state.product);
  console.log(product);
  const dispatch=useDispatch()
const addProduct=()=>{
  return async (dispatch)=>{
    const res = await axios(`https://fakestoreapi.com/products`)
    const {data}=res
    console.log(data);
    dispatch(CreateProduct(data))
  }

} 
 useEffect(()=>{
    dispatch(addProduct())
  },[])
  return (
    <div className="container">
      <div className='flex  flex-wrap    gap-28' >
        {product.map((el) => (
          <div className='w-[300px] h-[450px] p-[10px] flex flex-col  bg-white' key={el.id}>
            <img className='w-[300px] h-[300px]' src={el.image} alt="" />
            <div className='w-[280px] h-[2px] bg-black'></div>
              <h1>{el.title}</h1>
            <h1>{el.price} сом</h1>
          <div className='flex justify-between'>
          <h1>
              {el.category}
            </h1>
            <button onClick={()=>dispatch(CreateBasket(el))} className='bg-lime-500 py-[5px] px-[20px] rounded-[10px]'>Buy</button>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;