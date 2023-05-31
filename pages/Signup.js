import React,{useState} from 'react'
import Link from 'next/link'
import {MdAttachMoney} from 'react-icons/md'
import { createUserWithEmailAndPassword,updateProfile } from 'firebase/auth'
import { auth } from '@/firebase'
import { useRouter } from "next/router";

function Signup() {
  const router = useRouter();
  const [details,setDetails] = useState({
    name:"",
    email:"",
    password: "",
  })

  const onSubmit = (event)=>{
    event.preventDefault();
    const {name , email , password} = details;
    if(name && email && password){

      createUserWithEmailAndPassword(auth,details.email,details.password).then(async (res)=>{
          const user = res.user;
          await updateProfile(user,{
            displayName: details.name,
          })
          router.push("./")
      }).catch((err)=> console.log(err))

    }
    else{
      alert("Please fill all the details")
    }
  }

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <MdAttachMoney
            className="mx-auto h-10 w-auto border rounded-full"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign up to an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Username
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="name"
                  autoComplete="name"
                  onChange={(event)=> setDetails((prev)=>({...prev,name:event.target.value}))}
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(event)=> setDetails((prev)=>({...prev,email:event.target.value}))}
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(event)=> setDetails((prev)=>({...prev,password:event.target.value}))}
                  required
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={onSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Already have a account{' '}
            <Link href={'./Login'} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Sign In
            </Link>
          </p>
        </div>
      </div>
  )
}

export default Signup