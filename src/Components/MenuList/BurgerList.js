import './List.css'

const BurgerList = () => {
    const Burgers = [
        {
            id: 1,
            dishName: 'The Royale with cheese',
            desc: 'a classic cheeseburger inspired by Tarantino himself, South African beef, cheddar cheese, onions, pickles, ketchup & mustard.',
            price: 8500,
        },
        {
            id: 2,
            dishName: 'Sauce is Bo$$',
            desc: 'double beef patty, double cheddar cheese, chipotle aioli, grilled onion, tomato, lettuce, messy dressing.',
            price: 9500,
        },
        {
            id: 3,
            dishName: 'Peppercorn Princess',
            desc: 'peppered mayo,, double patty, parmesan, confit cherry tomatoes, peppercorn sauce, spring onion & crispy straw potatoes.',
            price: 10000,
        },
        {
            id: 4,
            dishName: 'Truffle Burger',
            desc: ' mozzarella, caramelized onions, sauteed mushrooms, rocket, crispy onions & truffle aioli.',
            price: 11000,
        },
        {
            id: 5,
            dishName: 'Soul Food Burger',
            desc: 'southern spicy fried chicken, bacon, shredded lettuce & blue cheese sauce.',
            price: 7500,
        },
    ]

  return (
    <div className="menu-list">
        {
            Burgers.map((dish) => (
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

export default BurgerList