import React, { useState } from 'react'

const Form = () => {
    function addData(e)
    {
        e.preventDefault()
        const Value = document.getElementById('text').value;
        if(Value !=''){
          setData(prevdata=>[...prevdata,Value]);
          // console.log(Value);
           document.getElementById('text').value = "";
        }

    }

    const[data,setData] = useState([])


  return (
    <div className='absolute p-1 w-full  top-[15%]  '>
        <div className='w-full bg-neutral-700 rounded-md p-3 flex justify-center '>
       <form action="" className='flex justify-center gap-3 w-[80%] '> 
           
            <input id='text' type="text" name='text' placeholder='Enter Ingredients'
            className='bg-zinc-300 outline-none p-2 w-[70%] '
            />
            <button onClick={addData} className='  truncate text-zinc-300 bg-black p-2 text-sm px-6 w-[40%]'>+ Add Ingredient</button>
         </form>

        </div>
       
       {data.length !=0 && <div className=' my-2 w-full bg-neutral-700 rounded-md p-3  '>
           <ol className='px-[10%] text-zinc-300 list-decimal p-8'>
        { data.map((item,index)=>(
            <li className='my-3 font-' key={index}>{item}</li>
        ))}
        </ol>
        
        </div>}
    </div>
  )
}

export default Form
