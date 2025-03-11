import { FC } from "react";

interface CardProops{
    backgroundColor:string
    width:number
    height:number
    children:React.ReactNode
    border:string
}

const Card:FC<CardProops> = ({backgroundColor,width,height,children,border}) => {
    return(
       <div style={{backgroundColor,width,height,border}}>
          {children}
       </div>
    )
}

export default Card