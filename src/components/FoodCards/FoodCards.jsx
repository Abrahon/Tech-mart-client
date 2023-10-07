import React, { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2'
import { useLocation, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';

const FoodCards = ({ item }) => {

    const {name, image, price, recipe,_id} = item;

    const {user} = useContext(AuthContext);
    const [cart,refetch] = useCart()
    const navigate = useNavigate()
    const location = useLocation()
    
    const handleAddToCart = item => {
        console.log(item);
        if(user && user.email){
            const cartItem = {menuId:_id, name, image,price, email: user.email}
            fetch('http://localhost:5000/cart',{
                method: 'POST',
                headers:{
                    'content-type':'application/json'
                },
                body: JSON.stringify(cartItem)
            })
            .then(res => res.json())
            .then(data=>{
                if(data.insertedId){
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: 'Cart is added successfully',
                        showConfirmButton: false,
                        timer: 1500
                      })
                }
            })
        }
        else{
            Swal.fire({
                title: 'Please login to order the food',
                // text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login now'
              }).then((result) => {
                if (result.isConfirmed) {
                 navigate('/login',{state: {from: location}})
                }
              })
        }
       
    }
    
    

    return (
        <div className="card shadow-xl">
            <figure><img src={image} alt="image" /></figure>
            <p className='absolute right-0 bg-black text-white p-3 m-2'>$ {price}</p>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p> {recipe}</p>
                <div className="card-actions justify-center mb-0">
                
                    <button onClick={() => handleAddToCart(item)} className="btn btn-outline bg-slate-100 border-0 border-b-4 mt-4 border-orange-500">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default FoodCards;