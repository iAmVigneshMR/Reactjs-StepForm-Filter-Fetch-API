import React, { Fragment, useState } from 'react'

const SearchFilter = () => {
    let [ Filter, setFilter ] = useState([]);
      const [ searchTerm, setSearchTerm ] = useState("");
    
      let handleChange = e => {
          let { name, value } = e.target;
          setFilter({ ...Filter, [name]: value });
        };

    let { price, discount, department, rating } = Filter;

    return (
    <Fragment>
        <section className="card container mx-auto col-md-5 my-4">
            <div className="card-body">
            <h2>Search for Product</h2>
                <input
                    type="search"
                    className="form-control"
                    placeholder="Product Name"
                    value={searchTerm}
                    onChange={e => setSearchTerm(e.target.value)}
                />
        <div>
            {/* {console.log(Filter.department)} */}
            {Filter && Filter.length > 0 ?
                Filter.filter(
                    search => {
                        console.log(search);
                        if (searchTerm === "") {
                            return search;
                        }
                        else if(search.department.toLowerCase().includes(searchTerm.toLowerCase())){
                           return search;
                       }
                    }
                ).map(() => {})
             : null }
            <br />
            <div className="form-group">
          <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Choose Department</label>
            </div>
            <select class="custom-select" size="14"
            type="radio"
            name="department"
            id="department"
            value={department}
            onChange={handleChange}
            className="form-control"
            required>
                <option value="Arts, Crafts & Sewing">Arts, Crafts & Sewing</option>
                <option value="Automotive & Motorcycle">Automotive & Motorcycle</option>
                <option value="Beauty">Beauty</option>
                <option value="Books">Books</option>
                <option value="Boys’ Fashion">Boys’ Fashion</option>
                <option value="Camera & Photo">Camera & Photo</option>
                <option value="Music">Music</option>
                <option value="Musical Instruments">Musical Instruments</option>
                <option value="Office Electronics & Supplies">Office Electronics & Supplies</option>
                <option value="Pet Supplies">Pet Supplies</option>
                <option value="Office Electronics & Supplies">Office Electronics & Supplies</option>
                <option value="Power & Hand Tools">Power & Hand Tools</option>
                <option value="Television & Video">Television & Video</option>
                <option value="Video Games">Video Games</option>
            </select>
            </div>
            
            </div>
            <div className="form-group">
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Choose Price</label>
            </div>
            <select class="custom-select" size="6"
            type="radio"
            name="price"
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
            required>
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
            <select class="custom-select" size="6"
            type="radio"
            name="discount"
            id="discount"
            value={discount}
            onChange={handleChange}
            className="form-control"
            required>
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
            <select class="custom-select" size="4"
            type="radio"
            name="rating"
            id="rating"
            value={rating}
            onChange={handleChange}
            className="form-control"
            required>
                <option value="1">4 & Above</option>
                <option value="2">3 & Above</option>
                <option value="3">2 & Above</option>
                <option value="4">1 & Above</option>
            </select>
            </div>
            <button className="btn btn-success btn-block">
               Search
            </button>
            </div>
        </section>
    </Fragment>
    )
}

export default SearchFilter
