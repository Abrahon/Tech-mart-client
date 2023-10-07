import React from 'react';
import { useForm } from 'react-hook-form';

const image_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
    const { register, handleSubmit, formState: {errors} } = useForm();
    const img_hosting_url =`https://api.imgbb.com/1/upload?key=${image_hosting_token}`

    const onSubmit = data =>{
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_hosting_url,{
            method:'POST',
            body: formData
        })
       
        .then(res=>res.json())
        .then(imgRes=>{
            if(imgRes.success){
                const imgURL = imgRes.data.display_url
                const{name,price,category,recipe} = data;
                const newItem = {name,price: parseFloat(price),category,recipe, img:imgURL,}
                console.log(newItem)
            }
          
        })



    } 
  
    // console.log(errors)

    return (
        <section className="container mx-auto">

            <div className="card flex-shrink-0 w-full shadow-2xl mx-10 ">
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Recipe Name</span>
                        </label>
                        <input type="name"  {...register("name", { required: true })}  placeholder="Item name" className="input input-bordered" required />
                    </div>

                    <div className='flex gap-2'>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Category*</span>
                            </label>
                            <select  {...register("category", { required: true })} className="select select-success w-full max-w-xs">
                                <option disabled selected>Add your favorite Item</option>
                                <option>One Piece</option>
                                <option>Naruto</option>
                                <option>Death Note</option>
                                <option>Attack on Titan</option>
                                <option>Bleach</option>
                                <option>Fullmetal Alchemist</option>
                                <option>Jojo's Bizarre Adventure</option>
                            </select>

                        </div>
                        <div className="form-control w-full">
                            <label className="label">
                                <span className="label-text">Price*</span>
                            </label>
                            <input type="price"  {...register("price", { required: true })}  placeholder="Price" className="input input-bordered" required />
                        </div>
                    </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Recipe Details</span>
                                <span className="label-text-alt">Alt label</span>
                            </label>
                            <textarea type="recipe" className="textarea textarea-bordered h-24"  {...register("recipe", { required: true })}  placeholder="Recipe details"></textarea>
                            
                        </div>
                    
                    <input type="file"  {...register("image", { required: true })}  className="file-input file-input-bordered file-input-success w-full max-w-xs" />
                    <div className="form-control mt-6">
                        <input className='btn btn-primary' type="submit" value="Add an Item" />
                    </div>
                </form>
            </div>
        </section>
    );
};

export default AddItem;