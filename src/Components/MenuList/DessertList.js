import './List.css'

const DessertList = () => {
    const Dessert = [
        {
            id: 1,
            dishName: 'Talindo Brownies',
            desc: 'our famous decadent chocolate brownie served with vanilla ice cream & steaming chocolate sauce.',
            price: 5500,
        },
        {
            id: 2,
            dishName: 'Dropped the Banoffee',
            desc: 'an elevated banoffee with torched banana, dulce de leche, graham crumble, vanilla ice cream.',
            price: 5500,
        },
    ]

  return (
    <div className="menu-list">
        {
            Dessert.map((dish) => (
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

export default DessertList