import React,{useEffect} from 'react'
import './style.css'
import {useSelector, useDispatch} from 'react-redux'
import {getAllProduct, sortByName, sortByPrice, searchById} from '../Redux/Slices/ProductSlice'
import {addToCart} from '../Redux/Slices/AddToCartSlice'
const Products = () => {
  const disatch = useDispatch()
  const product = useSelector((state) => state.product.product)

  // const unique = [...new Set(product.map((curElem)=>{
  //   return curElem.category;
  // }))]

  useEffect(()=>{
    disatch(getAllProduct())
  },[])

  const HandleSearch = (e)=>{
    let key = e.target.value;
    disatch(searchById(key))
  }

  // const Handle = (index)=>{
  //   disatch(SingleCategory(index))
  // }

  return (
    <>
    <div className='flex justify-between'>
      <input type="text" name='text' className='rounded-sm ml-2 text-center bg-black text-white' placeholder='Enter for Search' onChange={HandleSearch}/>
              <button onClick={()=> disatch(sortByName())} className="w-[4rem] h-[1.8rem] bg-amber-700 mt-2 -ml-[11rem] font-bold text-white">Name</button>
              <button onClick={()=> disatch(sortByPrice())} className="w-[4rem] h-[1.8rem] bg-amber-700 mt-2 font-bold -ml-[20rem] text-white">Price</button>
      <span className='font-bold mt-2 '>{product.length} Products Listed</span>
        <div >
            </div>
    </div>

   <div className='w-[17rem] h-[537px] mt-2 bg-white'>

  {/* <h2 className='font-bold ml-5 mt-3'>Price</h2>
  <input type="range" className='w-[14rem] ml-5 mt-2'/> */}
  <button className="w-[11rem] h-[3.3rem] bg-amber-700 ml-5 mt-[29rem] font-bold text-white" onClick={()=> disatch(getAllProduct())}>Clear Filters</button>
     </div>

<div className='overflow-y-scroll overflow-x-hidden w-[80rem] h-[651px] -mt-[34rem]'>
<div className='container grid grid-cols-3 px-[15rem] pb-[10rem] -mt-11'>
  {
    product.length === 0 ? <h1 className='text-black ml-[24rem] mt-[15rem] w-[10rem] font-bold '>No Product Exist</h1> : product && product.map((item)=>{
      return (
        <div className='w-[15rem] ml-[8rem] h-[10rem] mt-[6rem] bg-white shadow-2xl' key={item._id}>
        <img src={`http://localhost:3000/${item.image}`} className='w-[16rem] h-[10rem] cursor-pointer'/>
        <span className='font-bold ml-[0rem]'>{item.title}</span>
        <span className='font-bold ml-[7rem]'>{item.price}</span>
        <button className='font-bold ml-[7rem] w-[4rem] h-[2rem] bg-amber-700 mt-4 font-bold text-white' onClick={()=> disatch(addToCart(item))}>Add</button>
        <span className='-ml-[9rem] mt-6 font-bold'>{item.category}</span>
        </div>     
      )
    })
  }

</div>
</div>
    </>
  )
}

export default Products
