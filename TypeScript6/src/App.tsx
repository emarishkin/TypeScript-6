import './App.css'
import Card from './components/Card'
import EventExample from './components/EventExample'
import ProductsList from './components/ProductsList'
import { products } from './products'

function App() {

  return (
    <>
      <h1>HEllo</h1>
      <div>
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
      </div>
    </>
  )
}

export default App
