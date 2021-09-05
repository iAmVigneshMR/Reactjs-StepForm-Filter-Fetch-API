import React, { Fragment, useState } from 'react'

const SearchFilter = () => {
    let [ filter, setfilter ] = useState({
        loading: false,
      });
    
      let handleChange = e => {
          let { name, value } = e.target;
          setfilter({ ...filter, [name]: value });
        };
    
    let { productName, price, discount, department, rating } = filter;
    return (
    <Fragment>
        <section className="card container mx-auto col-md-5 my-4">
            <div className="card-body">
            <h2>Search for Product</h2>
                <input
                    type="search"
                    className="form-control"
                    placeholder="Product Name"
                    value={productName}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
          <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Department</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01"
            type="radio"
            name="department"
            id="department"
            value={department}
            onChange={handleChange}
            className="form-control"
            required>
                <option selected>Choose...</option>
                <option value="1">Arts, Crafts & Sewing</option>
                <option value="2">Automotive & Motorcycle </option>
                <option value="3">Beauty</option>
                <option value="4">Books</option>
                <option value="5">Boys’ Fashion</option>
                <option value="6">Camera & Photo</option>
                <option value="7">Music</option>
                <option value="8">Musical Instruments</option>
                <option value="9">Office Electronics & Supplies</option>
                <option value="10">Pet Supplies</option>
                <option value="11">Power & Hand Tools</option>
                <option value="12">Television & Video</option>
                <option value="13">Video Games</option>
            </select>
            </div>
            <div className="form-group">
          <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Price</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01"
            type="radio"
            name="price"
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
            required>
                <option selected>Choose...</option>
                <option value="1">5000 & Above</option>
                <option value="2">4000 to 5000</option>
                <option value="3">3000 to 4000</option>
                <option value="4">2000 to 3000</option>
                <option value="5">1000 to 2000</option>
                <option value="6">under 1000</option>
            </select>
            </div>
            <div className="form-group">
          <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Discount</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01"
            type="radio"
            name="discount"
            id="discount"
            value={discount}
            onChange={handleChange}
            className="form-control"
            required>
                <option selected>Choose...</option>
                <option value="1">10% Off or More</option>
                <option value="2">20% Off or More</option>
                <option value="3">30% Off or More</option>
                <option value="4">40% Off or More</option>
                <option value="5">50% Off or More</option>
                <option value="6">60% Off or More</option>
            </select>
            </div>
            <div className="form-group">
          <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Avg. Customer Rating</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01"
            type="radio"
            name="rating"
            id="rating"
            value={rating}
            onChange={handleChange}
            className="form-control"
            required>
                <option selected>Choose...</option>
                <option value="1">4 & Above</option>
                <option value="2">3 & Above</option>
                <option value="3">2 & Above</option>
                <option value="4">1 & Above</option>
            </select>
            </div>
            <button className="btn btn-success btn-block">
               create
            </button>
        </section>
    </Fragment>
    )
}

export default SearchFilter
