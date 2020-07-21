import React from "react"

const PizzaForm = props => {
  const { 
    handleFormChange, 
    handlePizzaPatch, 
    pizza
  } = props;


  return(
      <div className="form-row">
        <div className="col-5">
            <input type="text" onChange={handleFormChange} className="form-control" placeholder="Pizza Topping" value={pizza.topping} name="topping"/>
        </div>
        <div className="col">
          <select value={pizza.size} className="form-control" onChange={handleFormChange} name="size">
            <option value="Small">Small</option> 
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Vegetarian" checked={pizza.vegetarian === 'Vegetarian'} onChange={handleFormChange} name="vegetarian"/>
            <label className="form-check-label">
              Vegetarian
            </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="radio" value="Not Vegetarian" checked={pizza.vegetarian === 'Not Vegetarian'} onChange={handleFormChange} name="vegetarian"/>
            <label className="form-check-label">
              Not Vegetarian
            </label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success" onClick={handlePizzaPatch}>{pizza.id ? 'Edit Pizza' : 'Create Pizza'}</button>
        </div>
      </div>

  )
}

export default PizzaForm
