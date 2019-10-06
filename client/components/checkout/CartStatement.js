import React from 'react'

const CartStatement = ({product}) => {
  // !! TODO will likely need to change  going forward
  return (
    <tr>
      <td>{product.name}</td>
      <td>{product.size}</td>
      <td>${product.price}</td>
      <td>{product.quantity}</td>
      <td>${product.price * product.quantity}</td>
    </tr>
  )
}

export default CartStatement
