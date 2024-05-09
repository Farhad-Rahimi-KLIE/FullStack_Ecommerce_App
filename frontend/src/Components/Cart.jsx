import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
const Cart = () => {
  const Cart = useSelector((state) => state.cart.cartItems)
  return (
    <>
     <div className="wrapper">
      <div className="header">
        <div className="logo arrange-left wid-25">
          <h1><span>E</span><span>Comm</span></h1>
        </div>
      </div>
    </div>
    <div className="full-banner-warapper">
      <div className="wrapper next-row">
        <div className="wid-75 arrange-left">
          <div className="cart-details">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                <div>
                  {
                    Cart && Cart.map((item)=>{
                      return (
                        <>
                        <tr>
                        <td className="text-with-img">
                        <img src={`http://localhost:3000/${item.image}`} />
                      </td>
                      <td><span>${item.price}</span></td>
                      <td>
                        <div className="quantity-input">
                          <input type="text" value={item.quantity} />
                        </div>
                      </td>
                      <td>${item.price * item.quantity}</td>
                      <td>
                        <i className="fa fa-remove icon custom-delete-button cursor-pointer">🥅</i>
                      </td>
                      </tr> 
                      </>
                           )
                          })
                        }         
                        </div>
              </tbody>
              <div>

                <span>Total Amount</span>
              </div>
            </table>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Cart
