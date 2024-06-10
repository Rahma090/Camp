import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";


const Register = () =>{

const [ownerName, setOwnerName] = useState("")
const [campingName, setCampingName] = useState("")
const [phoneNumber, setPhoneNumber] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [adress, setAddress] = useState("")

const newOwner = {
    campingName,
    ownerName,
    adress,
    phoneNumber,
    email,
    password
}

const account = () => {
    axios.post("http://localhost:3100/Owner/register", newOwner)
   .then(res => {"New Account has been registered successfully"})
   .catch(err=>{console.log (err)})
}
    return (
<div className="relative">
    <img className="h-screen w-screen" src="https://media02.stockfood.com/largepreviews/MjE3NDEwMTM5Mw==/70132303-PanSea-Ksar-Ghilane-Campment-Oasis-Sahara-Tunisia-Africa.jpg" alt=""/>
    <div className=" absolute top-[20px] left-[450px] bg-lime-200 bg-opacity-50 rounded-lg shadow-2xl p-8 w-[600px]">
        <h1 className="text-4xl font-bold text-center text-black mb-8">Registration</h1>
        <form className="space-y-6">
        <div>
                <label className="block text-black font-bold mb-2" >
                    Camping Site Name
                </label>
                <input
                onChange={(e)=>setCampingName(e.target.value)}
                 className="w-full px-4 py-2 rounded-lg border border-black" id="CampingName" name="CampingName"
                    type="text"/>
            </div>
            <div>
                <label className="block text-black font-bold mb-2" >
                    Owner Name
                </label>
                <input
                onChange={(e) =>setOwnerName(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-black" id="OwnerName" name="OwnerName"
                    type="text"/>
            </div>
            <div>
                <label className="block text-black font-bold mb-2" >
                    Adresse
                </label>
                <input
                onChange={(e) =>setAddress(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-black" id="Adress" name="Adress"
                    type="text"/>
            </div>
            <div>
                <label className="block text-black font-bold mb-2" >
                    Phone Number
                </label>
                <input
                onChange={(e) =>setPhoneNumber(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-black" id="phoneNumber" name="phoneNumber"
                    type="text"/>
            </div>
            <div>
                <label className="block text-black font-bold mb-2" >
                    Email
                </label>
                <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-black" id="email" name="email"
                    type="email"/>
            </div>
            <div>
                <label className="block text-black font-bold mb-2" >
                    Password
                </label>
                <input
                onChange={(e) =>setPassword(e.target.value)}
                className="w-full px-4 py-2 rounded-lg border border-black" id="password" name="password"
                    type="password"/>
            </div>
            <div>
                <button
                onClick={() =>account()}
                to='/Home' className=" bg-amber-700 bg-opacity-60 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded-lg">
                    Log In
                </button>
            </div>
            <div>
                <Link to='/SignIn' className=" text-black font-bold ml-[200px] ">
                    Already have an account?
                </Link>
            </div>
           
        </form>
    </div>
</div>
    )
}

export default Register;