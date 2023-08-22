import './List.css'

const SteakList = () => {
    const Steaks = [
        {
            id: 1,
            dishName:'Fillet Mignon',
            desc: 'South African steak, grilled to your preference and served with a choice of sauce.',
            price: 23000,
        },
        {
            id: 2,
            dishName:'Rib-Eye',
            desc: 'South African steak, grilled to your preference and served with a choice of sauce.',
            price: 32000,
        },
        {
            id: 4,
            dishName:'Sirloin',
            desc: 'South African steak, grilled to your preference and served with a choice of sauce.',
            price: 21000,
        },
        {
            id: 5,
            dishName:'Jack Daniels Steak',
            desc: 'Aged fillet steak served with our Jack Daniels infused BBQ sauce, made with a tomato base, bacon bits and mushroom served on hot plate & flambeed.',
            price: 25000,
        },
        {
            id: 6,
            dishName:'Steak & Prawns',
            desc: 'Grilled aged steak fillet and grilled prawns in a delicate garlic butter sauce finished with a drizzle of our aromatic garlic and herb infused olive oil.',
            price: 32000,
        },
        {
            id: 7,
            dishName:'Bacon Wrapped Steak',
            desc: 'juicy & tendet fillet, wrapped in strips of bacon and served with confit garlic & herb butter.',
            price: 24000,
        },
    ]

  return (
    <div className="menu-list">
        {
            Steaks.map((dish) => (
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

export default SteakList