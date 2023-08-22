import './List.css'

const GrillList = () => {
    const Grills = [
        {
            id: 1,
            dishName: 'Mixed Grills',
            desc: 'grilled aged steak fillet, prawns, calamari, chicken & sauteed vegetables served with garlic mayo & chili sauce.',
            price: 38000,
        },
        {
            id: 2,
            dishName: 'Pork Chops',
            desc: 'char grilled pork chops served with your choice of sauce & a side.',
            price: 24000,
        },
        {
            id: 3,
            dishName: 'Grilled Rack of Lamb',
            desc: 'imported rack of lamb served with mustard-cognac sauce.',
            price: 44000,
        },
        {
            id: 4,
            dishName: 'Tiger Prawns',
            desc: 'grilled tiger prawns from the gulf of guinea with a delicate garlic butter sauce.',
            price: 27000,
        },
        {
            id: 5,
            dishName: 'Grilled Salmon',
            desc: 'salmon with rocket, cherry tomatoes & lemon sauce.',
            price: 28000,
        },
    ]

  return (
    <div className="menu-list">
        {
            Grills.map((dish) => (
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

export default GrillList