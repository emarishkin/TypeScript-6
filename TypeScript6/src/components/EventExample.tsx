import { FC, useState } from "react"


const EventExample:FC = () => {

    const [value,setValue] = useState<string>('')
    const [click,setClick] = useState<boolean>(false)

const ChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    return setValue(e.target.value)
}

const HandleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    return setClick(prev=>!prev)

}
    return (
        <>
        <input value={value} onChange={ChangeHandler}  type="text" />
        <button onClick={HandleClick}>click</button>
        <p>{click ? value : <div style={{backgroundColor:'black'}}>ПОКА ЗДЕСЬ ПУСТО</div>}</p>
        </>
    )
}

export default EventExample