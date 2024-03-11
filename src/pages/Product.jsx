import React, { useContext } from 'react'
import { ShopContext } from './ShopContext'
import { useParams } from 'react-router-dom';
// import Breadcrum from './Breadcrum';
import DisplayProduct from './DisplayProduct';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productId}=useParams();
  const product=all_product.find((e)=> e.id===Number(productId))
  console.log(all_product)
  return (
    <div>
      {/* <Breadcrum product={product}/> */}
      <DisplayProduct product={product}/>
    </div>
  )
}

export default Product
