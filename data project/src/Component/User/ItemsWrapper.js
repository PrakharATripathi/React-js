import React from 'react'
import { Formik } from 'formik'

function ItemsWrapper({ itemsFromApi }) {
  function handleClickOnItem(e) {
    console.log(e)
  }
  return (
    <div className='bg-blue-300 flex flex-wrap gap-4 p-5'>
      {
        itemsFromApi.map((item, index) => (
          <div key={index + 1} onClick={(e) => { handleClickOnItem(e) }} className="item-wraper transition-all shadow-md bg-white w-fit p-5 rounded-md cursor-pointer">
            <div className="img-of-item ">
              <img className='' src={item.src} />
            </div>
            <div className="item-content pt-3">
              <h1>Name :- {item.name}</h1>
              <h1>Prices :- {item.prices.join(' / ')} (Rs.)</h1>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default ItemsWrapper

// for add to cart btn================================

{/* <ul>
{
itemsFromApi.map((item,index)=>(
    <li key={index+1} className='m-2 rounded'>
        <div className="flex font-sans bg-white">
          <div className="flex-none w-48 relative">
            <img src={item.src} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="flex-auto p-6">
            <Formik
               initialValues={{ price: item.prices[0], quantity: 1 }}
               onSubmit={(values) => {handleAddToCart(values)}}
               >
               {({
                 values,
                 errors,
                 touched,
                 handleChange,
                 handleBlur,
                 handleSubmit
               }) => (
                   <form onSubmit={handleSubmit}>
                     <h1>{item.name}</h1>
                    <ul>
                    <label className='text-start'>Prices :</label>
                    <div className="flex">
                    {
                    item.prices.map((itm,ind)=>(
                        <li key={ind+1} className='m-1'>
                        <label htmlFor={`price${index}${itm}`} className='m-1'>{itm}</label>
                        <input
                          type="radio"
                          name="price"
                          id={`price${index}${itm}`}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          defaultChecked= {itm === values.price}
                          value={values.price}
                        />
                        </li>
                    ))
                   }
                    </div>
                    </ul>

                    <div className="row mb-2">
                        <label htmlFor="quantity">Quantity : </label>
                        <input  type="number" id='quantity' onChange={handleChange} onBlur={handleBlur} value={values.quantity}/>
                    </div>
                   {errors.password && touched.password && errors.password}
                   <button type="submit" className='btn bg-blue-400 p-3 rounded'>
                     Add to Cart
                   </button>
                 </form>
               )}
             </Formik>
          </div>
        </div>
    </li>

))
}
</ul> */}