import React, { useState } from 'react'
import './Signupsignin.css'

const request = () => {
    const [newItem, setNewItem] = useState('');
    const [item, setItem] = useState([]);

    const handleAddItem = (event) => {
        event.preventDefault();

    if (newItem.trim() == '') {
        alert("Enter an item");
        return;
      }
      const item = {
        id: Math.floor(Math.random() * 1000),
        value: newItem
      };
  
      setItems(oldList => [...oldList, item]);
      setNewItem("");
    }
  
    const deleteItem = (id) => {
      const newArray = items.filter(item => item.id !== id);
      setItems(newArray);
    }
  
  return (
    <div className='main-request'>
        <h1>Welcome user</h1>
        <h4>Your maintenace request</h4>
        <form onSubmit={handleAddItem}>
        <div className='requests'>
            <div className='request-container'>
                <div className="request-checkbox"></div>
                <div className='request-text'>New request</div>
                <div className='delete-request'>X</div>
            </div>
        </div>
     
        <button className='new-request'>Add Request</button>
      </form>

      <div className="requirement-popup">
          <div className="closePopup">X</div>
          <div className="popup-content">
            <h3>Add Request</h3>
            <input type="text" className="add-new-requirement"/>
            <div className="create-button">Create Request</div>
          </div>
        </div>
    </div>
  )
}

export default request
