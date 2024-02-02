import React from 'react'

function CartComponent({setCartCom}) {
  return (
    <div className='p-4 bg-white border rounded shadow-md fixed top-20 right-10 w-44 h-52' onMouseLeave={()=>setCartCom(false)}>
        <h1 className='text-black'>No Current Items</h1>
    </div>
  )
}

export default CartComponent