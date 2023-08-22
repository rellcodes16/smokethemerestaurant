import './List.css'

const StartersList = () => {

    const Starters = [
        {
            id: 1,
            dishName: 'Sweet & Spicy Wings',
            desc: 'chicken wings in a sweet & spicy glaze topped with spring onions & sesame seeds.',
            price: 4500,
        },
        {
            id: 2,
            dishName: 'Truffle Fries',
            desc: 'thick cut double fried french fries served with truffle mayo & covered in parmesan.',
            price: 5000,
        },
        {
            id: 3,
            dishName: 'Fish Tacos',
            desc: 'beer battered fish, avocado, salsa, jalapeno, tabasco, pickled onion & tequila ime mayo.',
            price: 6000,
        },
        {
            id: 4,
            dishName: 'Lobster in Olive Oil',
            desc: 'poached lobster served in herb infused olive oil with basil, lemon & parmesan cheese.',
            price: 16000,
        },
        {
            id: 5,
            dishName: 'Hot Honey Prawns',
            desc: 'crispy prawns served with our hot honey sauce, chili & sesame.',
            price: 13000,
        },
        {
            id: 6,
            dishName: 'Suya Drumettes',
            desc: 'marinated in our house suya blend, sliced tomatoes, onions & served with a yogurt dip.',
            price: 4500,
        },
    ]
  return (
    <div className="menu-list">
        {
            Starters.map((dish) => (
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

export default StartersList