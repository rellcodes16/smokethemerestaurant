import './List.css'

const PastaList = () => {
    const Pasta = [
        {
            id: 1,
            dishName: 'Penne Vodka',
            desc: 'penne is a classic creamy tomato sauce with a touch of vodka served with chicken, basil & parmesan.',
            price: 7500,
        },
        {
            id: 2,
            dishName: 'Spaghetti Rimini',
            desc: 'spaghetti with prawns, tomato, garlic, chili flakes, basil & olive oil.',
            price: 14000,
        },
        {
            id: 3,
            dishName: 'Lobster Linguine',
            desc: 'poached lobster, champagne sauce, lemon zest, paprika, basil & charred cherry tomatoes.',
            price: 7500,
        },
        {
            id: 4,
            dishName: 'Seafood Rose',
            desc: 'spaghetti served in a creamy tomato sauce with rose wine, garlic, chili, basil, calamari & shrimp.',
            price: 11000,
        },
    ]

  return (
    <div className="menu-list">
        {
            Pasta.map((dish) => (
                <div className="menu-items" key={dish.id}>
                    <div className="menu-desc">
                        <div className='bold-desc'>
                            <h4 className='dish-name'>{dish.dishName}</h4>
                            <h4 className='dish-price'>N{dish.price}</h4>
                        </div>
                        <p className='italics'>{dish.desc}</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default PastaList