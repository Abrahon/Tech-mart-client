import React from 'react';

const FoodCards = ({item}) => {
    const {name, image, price, recipe} = item

    return (
        <div className="card shadow-xl">
            <figure><img src={image} alt="image" /></figure>
            <p className='absolute right-0 bg-black text-white p-3 m-2'>${price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{recipe}</p>
                <div className="card-actions justify-center mb-0">
                    <button className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4 border-orange-500">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCards;