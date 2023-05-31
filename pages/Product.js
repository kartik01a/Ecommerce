import React,{useState} from 'react'
import Link from 'next/link'

function Product(props) {
  const [data,setData] = useState(props.jdata.products);
  return (
    <section className="text-gray-600 body-font">
      <h1 className='text-3xl flex justify-center md:my-4'>Our Products</h1>
      <hr className='mx-16'/>
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4 justify-evenly">
      {
        data.map((data1)=>{
          return <div key={data1.id} className="lg:w-1/5 md:w-1/2 p-4 w-full border-gray-100 border-1 border hover:border-gray-400 md:m-2">
            <Link href={`/product/${data1.id}`}>
            <span className="block relative h-48 rounded overflow-hidden">
              <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={data1.thumbnail}/>
            </span>
            <div className="mt-4">
              <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{data1.brand}</h3>
              <h2 className="text-gray-900 title-font text-lg font-medium">{data1.title}</h2>
              <p className="mt-1">₹{data1.price}</p>
            </div></Link>
          </div>
        })
      }
    </div>
  </div>
</section>
  )
}

export async function getServerSideProps(context){

  let data = await fetch('https://dummyjson.com/products');
  let jdata = await data.json();

  return{
    props: {jdata},
  }
}

export default Product