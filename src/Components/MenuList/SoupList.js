import './List.css'

const SoupList = () => {
    const Soups = [
        {
            id: 1,
            dishName:'Seafood Soup',
            desc:'prawns, calamari & fish in a spicy homemade broth with red chills.',
            price:8500,
        },
        {
            id: 2,
            dishName:'Lobster al Limone',
            desc:'creamy and rich lobster soup with herbs & a refreshing hint of lemon.',
            price:16000,
        },
    ]

  return (
    <div className="menu-list">
        {
            Soups.map((dish) => (
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

export default SoupList