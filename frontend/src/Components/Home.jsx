import React, { useEffect } from 'react'
import hero from '../images/hero.jpg'
import Common from './Common'
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import {getFourProduct} from '../Redux/Slices/ProductSlice'
const Home = () => {
  const disatch = useDispatch()
  const product = useSelector((state) => state.product.product)

  useEffect(()=>{
    disatch(getFourProduct())
  },[])

  return (
    <div>
      <Common
      name="Farhad Rahimi KLIE"
      imgsrc={hero}
      btname="Shop Now"
      />
      <div className='flex'>
        {product && product.map((item)=>{
          return (
            <div key={item._id}>
           <Link to={`/singlePage/${item._id}`}><img src={`http://localhost:3000/${item.image}`} className='w-[17rem] -mt-[9rem] ml-[3.4rem] h-[12rem] cursor-pointer'/></Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
