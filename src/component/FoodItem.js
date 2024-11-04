import {useState} from 'react'

const FoodItem = props => {
  const {
    dish_currency: dishCurrency,
    dish_name: dishName,
    dish_price: dishPrice,
    dish_image: dishImage,
    dish_description: dishDescription,
    dish_calories: dishCalories,
    addonCat,
    dish_Type: dishType,
  } = props
  console.log(dishType)

  const [itemCount, setItemCount] = useState(0)

  const incrementCount = () => setItemCount(prevCount => prevCount + 1)
  const decrementCount = () =>
    setItemCount(prevCount => (prevCount > 0 ? prevCount - 1 : 0))

  return (
    <div className="item-card-container">
      <div className="first-con">
        <div className={dishType === 2 ? 'veg-box' : 'veg-box redCl'}>
          <div className={dishType === 2 ? 'veg-button' : 'veg-button redBg'} />
        </div>
        <div className="item-summery-container">
          <p className="food-name">{dishName}</p>
          <p className="rating">
            {dishCurrency} {dishPrice}
          </p>
          <p className="discription">{dishDescription}</p>
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
          <p className={addonCat[0] ? 'cutom-option' : 'cutom-option visible'}>
            Customization Available
          </p>
        </div>
      </div>
      <p className="calories">{dishCalories} calories</p>
      <img className="img" src={dishImage} alt={dishName} />
    </div>
  )
}

export default FoodItem
