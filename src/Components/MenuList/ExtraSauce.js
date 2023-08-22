import './List.css'

const ExtraSauce = () => {
    const Sauce = [
        {
            id: 1,
            dishName: 'Gravy',
            price: 2000,
        },
        {
            id: 2,
            dishName: 'Black Pepper Sauce',
            price: 2000,
        },
        {
            id: 3,
            dishName: 'Blue Cheese Sauce',
            price: 2000,
        },
        {
            id: 4,
            dishName: 'Mushroom Sauce',
            price: 2000,
        },
        {
            id: 5,
            dishName: 'Peppercorn Sauce',
            price: 2000,
        },
        {
            id: 6,
            dishName: 'Kamikaze Sauce',
            price: 2000,
        },
        {
            id: 7,
            dishName: 'Hot Honey',
            price: 2000,
        },
        {
            id: 8,
            dishName: 'Truffle Sauce',
            price: 2000,
        },
    ]

  return (
    <div className="menu-list">
        {
            Sauce.map((dish) => (
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

export default ExtraSauce