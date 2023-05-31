import React, {useState, useEffect } from 'react'
import Link from 'next/link'
import {MdAttachMoney} from 'react-icons/md'
import {CgProfile} from 'react-icons/cg'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { auth } from '@/firebase'
import { useRouter } from 'next/router'

function Header() {
  const router = useRouter()
  const[username,setUsername] = useState("")
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user){
        setUsername(user.displayName);
      }
      else{
        setUsername("");
      }
    },[])
  })
  const handelit = ()=>{
    if(username){
      auth.signOut();
      setUsername("")
    } 
    else{
      router.push("/Login")
    }
  }

  return (
    <header className="text-white body-font bg-gray-800">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <Link href={'./'} className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <MdAttachMoney className='bg-blue-800 rounded-full text-2xl text-white p-1' />
      <span className="ml-3 text-xl text-white">Ecommerce</span>
    </Link>
    <nav className="md:m-auto flex flex-wrap items-center text-base justify-center">
      <Link href={'./About'} className="mr-5 hover:text-sky-200">About Us</Link>
      <Link href={'./Product'} className="mr-5 hover:text-sky-200">Products</Link>
      <Link href={'./Contact'} className="mr-5 hover:text-sky-200">Contact Us</Link>
    </nav>
    <div className='flex items-center  '>
      <span onClick={handelit} className='flex items-center mr-4' ><CgProfile className='mr-2'/> Hi,&nbsp;{username ? `${username}`:`Sign in`}</span>
        <AiOutlineShoppingCart className='mr-2'/>
    </div>
  </div>
</header>
  )
}

export default Header