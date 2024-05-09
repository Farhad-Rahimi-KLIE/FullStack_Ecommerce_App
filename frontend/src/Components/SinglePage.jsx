import React, { useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {SingleProduct} from '../Redux/Slices/ProductSlice'
import {addToCart} from '../Redux/Slices/AddToCartSlice'
import {useParams} from 'react-router-dom'
const SinglePage = () => {
  const disatch = useDispatch()
  const params = useParams()
  const product = useSelector((state) => state.product.product)
  console.log(product)
  useEffect(()=>{
    disatch(SingleProduct(params.id))
  },[])

  return (
    <div>
      <span><a href="/product" className='font-bold ml-8'>Home</a> / <span className='font-bold text-red-700'>{product[0].title}</span></span>
       <div>
        <img src={`http://localhost:3000/${product[0].image}`} className='w-[20rem] h-44 m-auto mt-5' alt="" />
        <span className='font-bold ml-[33rem] mt-[2rem]'>{product[0].title}</span>
        <span className='font-bold ml-[13rem] mt-36'>{product[0].price}</span>
    </div>
    <div>
      <h3 className='mt-1 ml-[33rem]'>Category : <span className='font-bold text-xl text-stone-600'>{product[0].category}</span></h3>
      <hr className='w-[25rem] ml-[32rem] mt-3'/>
      <button className='ml-[32rem] mt-5'>➖</button>  <span className='font-bold ml-10 text-xl text-green-600'>1</span> <button className='ml-9'>➕</button>
    </div>
    <button className="w-[11rem] h-[3.3rem] bg-violet-900 ml-[32rem] mt-10 font-bold text-white" onClick={()=> disatch(addToCart(product))}>ADD TO CART</button>
    </div>
  )
}

export default SinglePage