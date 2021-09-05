import React, { Fragment, useState } from 'react'

const StepForms = () => {
    const [page, setPage] = useState(1);

    const nextPage = () => {
        if(page === 3) return;
        setPage((page) => page + 1)
    }
    const thankYou = () => {
        alert("Thank You for Submitting")
        setPage(1)
    }

    return (
        <Fragment>
        <section className="card container mx-auto col-md-5 my-4">
        <div className="card-body">
            <div>
                <progress max="3" value={page} />
            </div>
        </div>
        </section>
            {page === 1 && <PersonalInfo />}
            {page === 2 && <AddressInfo />}
            {page === 3 && <PaymentInfo />}
            <section className="card container mx-auto col-md-5 my-4">
                <div className="card-body">
                { page === 3 ?
                <button className="btn btn-success btn-block" type="submit" onClick={thankYou}>Exit</button> :
                <button className="btn btn-success btn-block" onClick={nextPage}>Go Next</button>}
                </div>
            </section>
        </Fragment>
    )
}

// personalInfo
const PersonalInfo = () => {
    let [ PersonInfo, setPersonInfo ] = useState({
        loading: false,
      });
    
      let handleChange = e => {
          let { name, value } = e.target;
          setPersonInfo({ ...PersonInfo, [name]: value });
        };
    
    let { firstName, email, lastName, DateOfBirth, Number,gender } = PersonInfo;
    return(
    <section className="card container mx-auto col-md-5 my-4">
      <div className="card-body">
        <h2>Personal Information</h2>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">FirstName</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="enter FirstName"
              value={firstName}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">LastName</label>
            <input
              type="text"
              name="lastName"
              required
              id="lastName" 
              placeholder="enter LastName"
              value={lastName}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="enter Email"
              value={email}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
          <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputGroupSelect01">Gender</label>
            </div>
            <select class="custom-select" id="inputGroupSelect01"
            type="radio"
            name="gender"
            id="gender"
            value={gender}
            onChange={handleChange}
            className="form-control"
            required>
                <option selected>Choose...</option>
                <option value="1">Male</option>
                <option value="2">Female</option>
            </select>
            </div>
          <div className="form-group">
            <label htmlFor="firstName">DateOfBirth</label>
            <input
              type="date"
              name="DateOfBirth"
              id="DateOfBirth" 
              required
              value={DateOfBirth}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">Contact Number</label>
            <input
              type="Number"
              name="Number"
              id="Number" 
              required
              value={Number}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </form>
      </div>
</section>
    )
}

const AddressInfo = () => {
    let [ addressInfo, setAddressInfo ] = useState({
        loading: false,
      });
      let handleChange = e => {
        let { name, value } = e.target;
        setAddressInfo({ ...addressInfo, [name]: value });
      };
  
  let { Country, State, address, pincode } = addressInfo;

    return(
<section className="card container mx-auto col-md-5 my-4">
      <div className="card-body">
        <h2>Address</h2>
        <form>
          <div className="form-group">
            <label htmlFor="firstName">Country Name</label>
            <input
              type="text"
              name="Country"
              id="Country"
              placeholder="enter Country Name"
              value={Country}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="State">State</label>
            <input
              type="text"
              name="State"
              required
              id="State" 
              placeholder="enter State Name"
              value={State}
              onChange={handleChange}
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">Address</label>
            <textarea
              name="address"
              id="address"
              cols="30"
              rows="5"
              placeholder="enter address"
              value={address}
              onChange={handleChange}
              required
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Pincode</label>
            <input
              type="number"
              name="pincode"
              id="pincode" 
              required
              value={pincode}
              onChange={handleChange}
              className="form-control"
            />
          </div>
        </form>
      </div>
</section>
    )
}

const PaymentInfo = () => {
    let [ paymentInfo, setPaymentInfo ] = useState({
        loading: false,
      });
      let handleChange = e => {
        let { name, value } = e.target;
        setPaymentInfo({ ...paymentInfo, [name]: value });
      };
  
  let { card, holderName, expiry, cvv, amount } = paymentInfo;
    return(
    <section className="card container mx-auto col-md-5 my-4">
        <div className="card-body">
          <h2>Payment Details</h2>
          <form>
            <div className="form-group">
              <label htmlFor="firstName">Credit/Debit Card Number</label>
              <input
                type="number"
                name="card"
                id="card"
                placeholder="enter Credit/Debit Card Number"
                value={card}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Card holder Name</label>
              <input
                type="text"
                name="holderName"
                required
                id="holderName" 
                placeholder="enter Card HolderName"
                value={holderName}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">Expiry Date</label>
              <input
                type="date"
                name="expiry"
                id="expiry" 
                required
                value={expiry}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">CVV</label>
              <input
                type="number"
                name="cvv"
                id="cvv"
                placeholder="enter cvv number"
                value={cvv}
                onChange={handleChange}
                required
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label htmlFor="firstName">Amount</label>
              <input
                type="Number"
                name="amount"
                id="amount" 
                placeholder="enter Amount"
                required
                value={amount}
                onChange={handleChange}
                className="form-control"
              />
            </div>
          </form>
        </div>
  </section>
    )
}

export default StepForms
