import React, { Fragment, useEffect, useState } from 'react'
import "./api.css"

const Api = () => {
    const [apiData, setapiData] = useState([]);

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
             <div className="user-container">
               {apiData && apiData.length > 0 ? 
               apiData.map((val, i) => 
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
