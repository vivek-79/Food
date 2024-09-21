

import React, { useEffect ,useState} from 'react'
import './Add.css'
import { assets } from '../../Asset/assets'
import { useForm } from 'react-hook-form'
import config from './../../Appwrite/Config'
import { useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'

function Add() {
    const [id,setId] =useState('')
    const location=useLocation()
    const post =location.state?.post;
    const user =useSelector((state)=>state.authState.userData.$id)
    console.log(post)
    const { register, handleSubmit ,setValue} = useForm({
        defaultValues:{
            itemImage: '',
            item:'',
            itemDescription:'',
            itemcategory:'',
            itemPrice:''
            
        }
    })
        
        useEffect(()=>{
            if(post){
            setValue('item',post.item)
            setValue('itemDescription',post.itemDescription)
            setValue('itemcategory',post.itemcategory)
            setValue('itemPrice',post.itemPrice)
            setValue('itemImage',post.imageId)
        }
        },[post,setValue])
    

    const UserId = useSelector((state) => state.authState.userData)
    const addItem = async(data) => {
        if (!post) {
            try {
                await config.createFile(data.itemImage[0])
                    .then(file => {
                        if (file) {
                            const fileId = file.$id
                            data.imageId = fileId
                            data.userId = UserId.$id
                            console.log(data)
                            config.createDocument(data)
                        }
                    })
            } catch (error) {

            }
        }
        else{
            if(data.itemImage[0] instanceof File){
                 await config.createFile(data.itemImage[0])
                .then(file=>{
                    if (file){
                        data.imageId=file.$id
                    }
                })
            }
            config.updateDoc(post.imageId,{
                ...data,
                userId:user,
            })
        }
    }

    return (
        <div className='add'>
            <form
                onSubmit={handleSubmit(addItem)}
                className='flex-col'>
                <div className="add-img-upload">
                    <p>Upload Image</p>
                    <label htmlFor="image">
                        <img src={assets.upload_area} alt="" />
                    </label>
                    <input type="file" id='image'
                        hidden
                        {...register('itemImage')}
                    />
                </div>
                <div className='add-product-name flex-col'>
                    <p>Product Name</p>
                    <input type="text"
                        name='name'
                        required
                        placeholder='Type here'
                        {...register('item', {
                            required: true
                        })}
                    />
                </div>
                <div className='add-product-description'>
                    <p>Product description</p>
                    <textarea name="description"
                        rows='6'
                        placeholder='Write content herw'
                        required
                        {...register('itemDescription')}
                    ></textarea>
                </div>
                <div className="add-caterory-price">
                    <div className='add-category flex-col'>
                        <p>Product category</p>
                        <select name="category"
                            required
                            {...register('itemcategory', {
                                required: true
                            })}
                        >
                            <option value='0'>salad</option>
                            <option value="1">Rolls</option>
                            <option value="2">Desert</option>
                            <option value="3">Sandwich</option>
                            <option value="4">Cake</option>
                            <option value="5">Pure Veg</option>
                            <option value="6">Pasta</option>
                            <option value="7">Noodles</option>
                        </select>
                    </div>
                    <div className='add-price flex-col'>
                        <p>Product price</p>
                        <input type="number"
                            name='price'
                            placeholder='$20'
                            {...register('itemPrice', {
                                required: true
                            })}
                        />
                    </div>
                </div>
                <button type='submit' className='add-btn'>ADD</button>
            </form>
        </div>
    )
}

export default Add