import React, { Fragment, useEffect, useState } from 'react'
import "./api.css"

const Api = () => {
    const [apiData, setapiData] = useState([]);
    const [searchTerm, setSearchTerm ] = useState("");

    useEffect(() => {
        let fetchData = fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => {
            return res.json();
        })
        .then((json) => {
            setapiData(json);
            // console.log(json);
        })
        .catch((err) => {
            console.log(err);
        })
    },[]);
    return (
        <Fragment>
        <div id="App">
             <header className="App-header">
               <h2 className="display-1">Fetching API</h2>
             </header>
             <hr className="hr" />
            <input
                type="search"
                className="form-control my-2 vw-55"
                placeholder="Search by Title"
                value={searchTerm}
                onChange={e => setSearchTerm(e.target.value)}
            />
             <div className="user-container">
               {apiData && apiData.length > 0 ? 
               apiData.filter(
                 search =>{
                   if (searchTerm === "") {
                     return search;
                   }
                   else if(search.title.toLowerCase().includes(searchTerm.toLowerCase())){
                     return search;
                   }
                 }
               )
               .map((val, i) => 
               <div key = {val.id} className="info-item">
                 <h2>User Id : {val.id}</h2> <br />
                 <h3>Title : {val.title.slice(0,12)}</h3> <br />
                 <h5>Description : {val.body.slice(0,50)}...</h5> 
                 <hr className="hr" />
               </div>
               ) : null
             }
             </div>
           </div>
    </Fragment>
    )
}

export default Api
