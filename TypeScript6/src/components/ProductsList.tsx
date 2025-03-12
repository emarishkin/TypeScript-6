import { FC } from "react";
import { IProduct } from "../ProductsType";


interface ProductsList{
    products:IProduct[]
}


const ProductsList:FC<ProductsList> = ({products})=>{
    return(
      <div>
        {products.map((product)=>
        <div key={product.id} style={{border:'2px solid black'}}>
          <h3>{product.id}.{product.title}</h3> 
          <img style={{width:20, height:20}} src={product.image} alt={product.title} />       
          <p>{product.description}</p>
          <p style={{fontWeight:'bold'}}>{product.price}$</p>
        </div>)}
      </div>
    )
}

export default ProductsList