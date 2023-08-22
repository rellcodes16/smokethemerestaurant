import './List.css'

const ExtraSidesList = () => {
    const ExtraSides = [
        {
            id: 1,
            dishName: 'French Fries',
            price: 2500,
        },
        {
            id: 2,
            dishName: 'Mashed Potatoes',
            price: 2500,
        },
        {
            id: 3,
            dishName: 'White Rice',
            price: 2500,
        },
        {
            id: 4,
            dishName: 'Continental Rice',
            price: 2500,
        },
        {
            id: 5,
            dishName: 'Sauteed Vegetable',
            price: 2500,
        },
        {
            id: 6,
            dishName: 'Creamed Spinach',
            price: 2500,
        },
        {
            id: 7,
            dishName: 'Baked Potatoes',
            price: 2500,
        },
        {
            id: 1,
            dishName: 'House Salad',
            price: 2500,
        },
    ]

  return (
    <div className="menu-list">
        {
            ExtraSides.map((dish) => (
                <div className="menu-items" key={dish.id}>
                    <div className="menu-desc">
                        <div className='bold-desc'>
                            <h4 className='dish-name'>{dish.dishName}</h4>
                            <h4 className='dish-price'>N{dish.price}</h4>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default ExtraSidesList