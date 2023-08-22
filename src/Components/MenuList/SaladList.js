const SaladList = () => {
    const Salad = [
        {
            id: 1,
            dishName:'Talindo Ceaser',
            desc:'romaine lettuce, parmesan, herb oil crutons & tomatoes with house-made caeser dressing.',
            price:6500,
        },
        {
            id: 2,
            dishName:'Avocado Prawns',
            desc:'with shredded lettuce & tomatoes in a cocktail sauce vinaigrette.',
            price:8000,
        },
        {
            id: 3,
            dishName:'Guacamole Del Mar',
            desc:'prawns, avocado, cilantro, chili, tomatoes, red onion, sour cream & fermented chili sauce.',
            price:13000,
        },
    ]
  return (
    <div className="menu-list">
        {
            Salad.map((dish) => (
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

export default SaladList