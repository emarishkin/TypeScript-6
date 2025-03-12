import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import EventExample from './components/EventExample'
import ProductsList from './components/ProductsList'
import { products } from './products'

function App() {

  const [oneClick,setOneClick] = useState<boolean>(false)
  const [twoClick,setTwoClick] = useState<boolean>(false)

  return (
    <>
      <h1>HEllo</h1>

    <button onClick={()=>setOneClick(prev=>!prev)}>Кнопка с моим объектом</button>
    <button onClick={()=>setTwoClick(prev=>!prev)}>Кнопка с данными с сервера</button>

    {oneClick &&  <div>
        <Card width={700} height={300} backgroundColor='gray' border='5px solid yellow'>
          <h1>карточка</h1>
          <EventExample />
        </Card>
        
        <Card width={700} height={300} backgroundColor='gray' border='3px solid red'>
          <h1>карточка</h1>
          <EventExample />
        </Card>
        <div>
          <ProductsList products={products} />
        </div>
      </div>}
 
    {twoClick && <p>Пока тут пусто</p>}
    </>
  )
}

export default App
