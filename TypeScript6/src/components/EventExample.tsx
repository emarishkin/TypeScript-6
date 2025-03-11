import { FC, useState } from "react"


const EventExample:FC = () => {

    const [value,setValue] = useState<string>('')

const ChangeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    return setValue(e.target.value)
}

const HandleClick = (e:React.MouseEvent<HTMLButtonElement>) => {
    return console.log(value)
}

    
    return (
        <>
        <input value={value} onChange={ChangeHandler}  type="text" />
        <button onClick={HandleClick}>click</button>
        </>
    )
}

export default EventExample