import React,{useState} from 'react'

function Contact() {
  const [userData,setUserData] = useState({
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    message:"",
  });

  let name,value;
  const postUserData = (event)=>{
    name = event.target.name;
    value = event.target.value;
    setUserData({...userData,[name]:value})
  }

  const submitData = async (event)=>{
    event.preventDefault();
    const {firstName, lastName, phone, email, message} = userData;
    if(firstName && lastName && phone && email && message){
      const res = await fetch('https://xenocommerce-6dc64-default-rtdb.asia-southeast1.firebasedatabase.app/userDataRecord.json',{
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify({firstName, lastName, phone, email, message}),
      });
  
      if(res){
        setUserData({
          firstName:"",
          lastName:"",
          phone:"",
          email:"",
          message:"",
        })
        alert('Query sent, saved in database(Firebase)')
      }
      else{
        alert('Query not sent')
      }
    }
    else{
      alert('Please fill all details correctly');
    }

    

  }

  return (
    <form method="POST">
      <div className="md:space-y-12 md:mx-20 md:my-10 m-4 text-center">  
        <div className="border-b border-gray-900/10 md:pb-10 pb-6 text-left">
          <h2 className="text-xl font-semibold leading-7 text-gray-900">Connect with us.</h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">Share your valid details. We will reply you shortly.</p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="firstName"
                  id="first-name"
                  autoComplete="given-name"
                  placeholder="First name"
                  value={userData.firstName}
                  onChange={postUserData}
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="lastName"
                  id="last-name"
                  autoComplete="family-name"
                  placeholder="Last name"
                  value={userData.lastName}
                  onChange={postUserData}
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-3">
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Contact number
              </label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="Phone number"
                  placeholder="Phone number"
                  value={userData.phone}
                  onChange={postUserData}
                  className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Email"
                  value={userData.email}
                  onChange={postUserData}
                  className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
                Your Message
              </label>
              <div className="mt-2">
                <textarea
                  rows='4'
                  type="text"
                  name="message"
                  id="message"
                  autoComplete="message"
                  placeholder="Write your message"
                  value={userData.message}
                  onChange={postUserData}
                  className=" p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
        <button
          type="submit"
          onClick={submitData}
          className="w-1/2 rounded-md bg-indigo-600 px-3 pb-8 pt-2 md:py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default Contact