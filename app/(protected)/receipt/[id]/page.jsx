import React from 'react'
import { db } from '../../../../lib/db'
import Button from '../../_components/button'

const page = async ({ params }) => {
    const post = await db.post.findUnique({
        where: {
            id: params.id,
        }
    });

    return (
        <div className='w-full min-h-screen flex items-center justify-center bg-gray-100 p-6'>
            <div className='bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl'>
                <h1 className='text-2xl font-bold mb-4'>Receipt</h1>
                <form className="flex flex-col gap-4" id='receipt'>
                    <div className='flex flex-col'>
                        <label htmlFor="name" className='font-medium'>Name</label>
                        <input type="text" name="name" placeholder="name" value={post.name} readOnly className="px-4 py-2 rounded-sm border border-gray-300" />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="id" className='font-medium'>Shipment ID</label>
                        <input type="text" name="id" placeholder="id" value={post.id} readOnly className="px-4 py-2 rounded-sm border border-gray-300" />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="pickupLocation" className='font-medium'>Pickup Location</label>
                        <input type="text" name="pickupLocation" readOnly placeholder="pickupLocation" value={post.pickupLocation} className="px-4 py-2 rounded-sm border border-gray-300" />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="dropoffLocation" className='font-medium'>Dropoff Location</label>
                        <input type="text" name="dropoffLocation" readOnly placeholder="dropoffLocation" value={post.dropoffLocation} className="px-4 py-2 rounded-sm border border-gray-300" />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="price" className='font-medium'>Price ($)</label>
                        <input type="text" name="price" placeholder="price" readOnly value={post.price} className="px-4 py-2 rounded-sm border border-gray-300" />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="date" className='font-medium'>Date</label>
                        <input type="text" name='date' placeholder='date' value={new Date(post.createdAt).toLocaleString()} readOnly className="px-4 py-2 rounded-sm border border-gray-300" />
                    </div>
                    <div className='flex flex-col'>
                        <label htmlFor="qrCode" className='font-medium'>QR Code</label>
                        <img 
                            src={`https://api.qrserver.com/v1/create-qr-code/?size=84x84&data=http://localhost:3000/receipt/${post.id}`}
                            alt='QR Code'
                            className='mt-2'
                        />
                    </div>
                </form>
                <Button selector={'#receipt'} className='mt-6' />
            </div>
        </div>
    )
}

export default page
