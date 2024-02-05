import React, { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";
const INITIAL_STATE = {
  colorName: "",
  colorValue: '',
}
function AddColor({setColor}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(INITIAL_STATE);

    const handleAddColor = evt => {
    evt.preventDefault();
    setColor(formData);
    setFormData(INITIAL_STATE);
    navigate('/colors');
  } 
  const handleChange = evt => {
    const { name, value } = evt.target;
    setFormData(fData => ({
      ...fData,
      [name]: value
    }));
  }

  return (
    <div className="AddColor-container">
      <form onSubmit={handleAddColor}>
        <label htmlFor="colorName">Color name</label>
        <input 
          type="text"
          id="colorName"
          name="colorName"
          placeholder="Enter name for the color"
          value={formData.colorName}
          onChange={handleChange}
        />
        <label htmlFor="colorValue">Color value</label>
        <input 
          type="color"
          id="colorValue"
          name="colorValue"
          value={formData.colorValue}
          onChange={handleChange}
        />
        <button>Add this color</button>
      </form>

      <Link to="/">Go Back</Link>
    </div>
  )
}

export default AddColor;