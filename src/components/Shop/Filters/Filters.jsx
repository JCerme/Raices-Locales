import React from 'react'

const Filters = () => {
  return (
    <div className='filters'>
        <div className="order-by">
            <label htmlFor="orderBy">Order By:</label><br />
            <select name="orderBy" id="orderBy" >
                <option value="price-asc">Price ASC</option>
                <option value="price-desc">Price DESC</option>
                <option value="name-asc">Name ASC</option>
                <option value="name-desc">Name DESC</option>
                <option value="date-asc">Date ASC</option>
                <option value="date-desc">Date DESC</option>
            </select>
        </div>
        <div className="price-range">
            <label htmlFor="price">Price:</label><br />
            <input type="range" name="price" id="price" />
        </div>
        <div className="categories">
            <label>Categories:</label><br />
            <input type="checkbox" name="meal" id="meal" />
            <label htmlFor="meal">Meal</label><br />
            <input type="checkbox" name='wine' id='wine'/>
            <label htmlFor="wine">Wine</label><br />
            <input type="checkbox" name="sugar" id="sugar" />
            <label htmlFor="sugar">Sugar</label>
        </div>
    </div>
  )
}

export default Filters
