import {useState} from 'react'

const FoodItem = props => {
  const {
    dish_currency,
    dish_name,
    dish_price,
    dish_image,
    dish_description,
    dish_calories,
    addonCat,
    dish_Type,
    dish_Availability,
    setCart,
  } = props

  const [itemCount, setItemCount] = useState(0)

  const incrementCount = () => {
    setItemCount(prevCount => prevCount + 1)
    setCart(prevCount => prevCount + 1)
  }
  const decrementCount = () => {
    setItemCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0))
    if (itemCount > 0) {
      setCart(prevCount => (prevCount > 0 ? prevCount - 1 : 0))
    }
  }

  // useEffect(() => {
  //   setCart(prevCount => prevCount + itemCount)
  // }, [itemCount])

  return (
    <div className="item-card-container">
      <div className="first-con">
        <div className={dish_Type === 2 ? 'veg-box' : 'veg-box redCl'}>
          <div
            className={dish_Type === 2 ? 'veg-button' : 'veg-button redBg'}
          />
        </div>
        <div className="item-summery-container">
          <h1 className="food-name">{dish_name}</h1>
          <p className="rating">
            {dish_currency} {dish_price}
          </p>
          <p className="discription">{dish_description}</p>
          {dish_Availability ? (
            <div className="increase-deacrease-con">
              <button
                className="item-count-btn"
                type="button"
                onClick={decrementCount}
              >
                -
              </button>
              {itemCount}
              <button
                className="item-count-btn"
                type="button"
                onClick={incrementCount}
              >
                +
              </button>
            </div>
          ) : (
            <p className="not-available">Not Available</p>
          )}
          <p className={addonCat[0] ? 'cutom-option' : 'cutom-option visible'}>
            Customization Available
          </p>
        </div>
      </div>
      <p className="calories">{dish_calories} calories</p>
      <img className="img" src={dish_image} alt={dish_name} />
    </div>
  )
}

export default FoodItem
