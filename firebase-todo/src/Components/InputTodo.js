import { addDoc, collection } from 'firebase/firestore'
import React, { useState } from 'react'
import { db } from '../firebaseConfig'

const InputTodo = () => {

const[title,setTitle]=useState('')

const handleSubmit= async (e)=>{
    e.preventDefault()
    if(title!==""){
        await addDoc(collection(db,"todos"),{
            title,
            completed:false,
        })
        setTitle('')
    }
}

  return (
    <form onSubmit={handleSubmit}>
        <input type={'text'} placeholder="Enter Todo Task" value={title} onChange={(e)=>setTitle(e.target.value)} />
        <button >+</button>
    </form>
  )
}

export default InputTodo