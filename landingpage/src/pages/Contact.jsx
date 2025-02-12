import React from 'react'
import './Contact.css'
const Order = () => {
  return (
    <div>
      <form>
        <label>Name:</label>
        <input type='text' placeholder='name' required/>
        <label>Contact number:</label>
        <input type='text' placeholder='number' required/>
        <label>Email:</label>
        <input type='email' placeholder='email' required/>
        <label>Query:</label>
        <textarea placeholder='Message here'/>
        <button>Send Email</button>
      </form>
    </div>
  )
}

export default Order
