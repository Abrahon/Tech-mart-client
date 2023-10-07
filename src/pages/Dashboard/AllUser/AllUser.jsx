import React from 'react';
import { useQuery } from '@tanstack/react-query'
import { FaUserShield, FaTrashAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet';
import { key } from 'localforage';

const AllUser = () => {

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/users')
            return res.json()
        },
    })

    const handleMakeAdmin = user => {
        fetch(`http://localhost:5000/users/admin/${user._id}`, {
            method: 'PATCH',
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    refetch();
                    Swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: `${user.name} user and admin now!`,
                        showConfirmButton: false,
                        timer: 1500
                    })

                }
            })
    }
    const handleDelete = user => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You would like to delete this user ",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/users/${user._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'User has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }




    return (
        <div className='w-full'>
            <Helmet>
                <title>Tech mart | My Cart</title>
            </Helmet>
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Users: {users.length}</h3>


            </div>
            <div className="overflow-x-auto w-full">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th></th>
                            <th>Name</th>
                            <th>email</th>
                            <th>Roll</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            users?.map((user, index) => <tr
                                key={user._id}
                                user={user}
                            >
                                <th>{index + 1}</th>

                                <div className="avatar">
                                    <div className="mask mask-squircle w-12 h-12">
                                        <img src={user.display} alt="Avatar Tailwind CSS Component" />
                                    </div>
                                </div>


                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.roll == 'admin' ? 'admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-green-800  text-white"><FaUserShield></FaUserShield></button>
                                }</td>
                                <td>
                                    <button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                            </tr>)

                        }

                    </tbody>



                </table>
            </div>
        </div>
    );
};

export default AllUser;

