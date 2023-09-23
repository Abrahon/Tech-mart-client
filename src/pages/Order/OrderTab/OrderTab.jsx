import React from 'react';
import FoodCards from '../../../components/FoodCards/FoodCards';

const OrderTab = ({items}) => {

    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 my-10'>
            {
                 items.map(item => <FoodCards
                 key={item._id}
                 item={item}
                 >

                 </FoodCards>)

            }
        </div>
    );
};

export default OrderTab;