import './List.css'

const MainsList = () => {
    const Mains = [
        {
            id: 1,
            dishName: 'Hot Honey Salmon',
            desc: 'salmon glazed in hot honey and garlic sauce topped with spring onion.',
            price:29000,
        },
        {
            id: 2,
            dishName: 'Spicy Tomato Prawns',
            desc: 'prawns, pan tossed in a herby spicy tomato sauce with red & green peppers.',
            price:23000,
        },
        {
            id: 3,
            dishName: 'Braised Seafood',
            desc: 'fish, prawns & calamari on a hot plate in a sweet & sour sauce with onions & green chilis.',
            price:19000,
        },
        {
            id: 4,
            dishName: 'Fish & Chips',
            desc: 'delicate croaker chunks fried in beer batter & hand cut fries with salt & vinegar, a lemon wedge & tartar sauce.',
            price:19000,
        },
        {
            id: 5,
            dishName: 'Grilled Chicken',
            desc: 'perfectly grilled chicken served with your choice of sauce & a side.',
            price:8500,
        },
    ]

  return (
    <div className="menu-list">
        {
            Mains.map((dish) => (
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

export default MainsList