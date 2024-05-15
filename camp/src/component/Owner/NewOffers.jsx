import React from 'react'
import { useState, useRef } from 'react';
import axios from 'axios';
import Navbar from './Navbar.jsx';
import './CSS/NewOffers.css';

export const NewOffers = () => {
    const [image, setImage] = useState([]);
    const [previewImage, setPreviewImage] = useState('');
    const fileInputRef = useRef(null);

    const addPicture = (e) => {
        const file = e.target.files?.[0];
    
        if (file && image.length < 5) {
          const formData = new FormData();
          formData.append('file', file);
          formData.append('upload_preset', 'pa4ezjqw');
    
          axios
            .post("http://api.cloudinary.com/v1_1/dfsyqvvim/image/upload", formData)
            .then((res) => {
              setImage(prevImages => [...prevImages, res.data.secure_url]);
              if (previewImage.length === 0) {
                setPreviewImage(res.data.secure_url);
              }
            })
            .catch((err) => {
              console.log(formData);
              console.log(err);
            });
        }
      };

      const handleButtonClick = () => {
        if (fileInputRef.current) {
          fileInputRef.current.click();
        }
      };
  return (
    <div className='relative' >
        <img className='w-screen h-screen' src='https://i.pinimg.com/originals/22/20/44/2220446ed258bb366fa90d900e4e373a.jpg' alt=''/>
        <div className='absolute  top-0 left-0 w-full'>
          <Navbar/>
          <div>
            <h1 className='absolute top-[100px] left-[400px] text-7xl font-cursive text-white'>Add Your New Offers</h1>
          </div>
          <div className='absolute top-[300px] left-[300px] flex flex-wrap gap-20'>
          <div class="inputBox">
            <input required="" type="text"/>
            <span>Type Of Tent</span>
            </div>
            <div class="inputBox">
            <input required="" type="number"/>
            <span>Number Of Guests</span>
            </div>
            <div class="inputBox">
            <input required="" type="number"/>
            <span>Price For Night</span>
            </div>
          </div>
          <div >
        <button className="ml-[640px] mt-[350px]  py-3.5 px-7 text-base font-medium text-orange  rounded-lg bg-black focus:z-10 focus:ring-4 focus:ring-indigo-200 "
        onClick={handleButtonClick}>
            Add Pictures</button>
         <input 
            ref={fileInputRef}
            type="file" 
            className="hidden"
            onChange={(e) =>{ addPicture(e) }} 
          /> 
        <div className="grid grid-cols-5 ml-[50px] mt-11">
        
        {image.slice(0, 5).map((image, index) => (
        <img 
        className=" rounded-md border object-cover w-[200px] h-[200px] p-1  "
                            key={index}
                            src={image}
                            alt={`previewImage ${index}`}/>
                            ))}
                            </div>
        </div>    
          <div className='absolute top-[720px] left-[660px]'>
          <button class="complex-animated-button">Add</button>
          </div>
        </div>
    </div>
  )
}
export default NewOffers;
