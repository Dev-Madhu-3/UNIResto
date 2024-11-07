import './App.css'
import {FaShoppingCart} from 'react-icons/fa'
import {useState, useEffect} from 'react'
import FoodItem from './component/FoodItem'

const App = () => {
  const [currentTab, setTab] = useState('')
  const [tabsList, setTabsList] = useState([])
  const [cart, setCartCount] = useState({})

  const onTabChange = event => {
    setTab(event.target.textContent)
  }

  useEffect(() => {
    const apiCall = async () => {
      try {
        const response = await fetch(
          'https://apis2.ccbp.in/restaurant-app/restaurant-menu-list-details',
        )
        if (response.ok) {
          const data = await response.json()
          setTabsList(data[0].table_menu_list || [])
          setTab(data[0].table_menu_list[0].menu_category || '')
        }
      } catch (e) {
        console.log(`Problem: ${e.message}`)
      }
    }

    apiCall()
  }, [])

  return (
    <div className="main-container">
      <header className="header">
        <h1 className="main-heading">UNI Resto Cafe</h1>
        <div>
          <p>My Orders</p>
          <div>
            <FaShoppingCart />
            <div className="cart-count-con">
              <p>{Object.values(cart).reduce((a, b) => a + b, 0)}</p>
            </div>
          </div>
        </div>
      </header>
      <div className="tabs-container">
        {tabsList.map(eachItem => (
          <button
            key={eachItem.menu_category_id}
            className={
              currentTab === eachItem.menu_category
                ? 'tab-btn red-btn'
                : 'tab-btn'
            }
            type="button"
            onClick={onTabChange}
          >
            {eachItem.menu_category}
          </button>
        ))}
      </div>
      <div className="items-list-container">
        {tabsList[0] &&
          tabsList
            .filter(e => e.menu_category === currentTab)
            .map(e =>
              e.category_dishes.map(dish => (
                <FoodItem
                  key={dish.menu_category_id}
                  {...dish}
                  cart={cart}
                  setCart={setCartCount}
                />
              )),
            )}
      </div>
    </div>
  )
}

export default App
