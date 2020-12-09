import React, { useState, useEffect } from "react";
import axios from "axios";
import URL  from '../app.config';
import "./Star.css";
function Star() {
  const [getdata, setData] = useState([]);
  const [getparam, setParam] = useState([]);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const ratingData = {
    userId: user.id,
  };
  console.log(ratingData);
  function dropDown() {
    axios({
      method: "post",
      url: URL+"/category/getrating",
      data: ratingData,
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      setParam(response.data);
      if (response.data.length) {
        table(response.data[0].id, true);
      }
    });
  }
  function table(e, type) {
    let ratingData = {
      userId: user.id,
    };
    if (type) {
      ratingData["categoryId"] = e;
    } else {
      const val = e.target.options[e.target.selectedIndex].value;
      ratingData["categoryId"] = val;
    }
    axios({
      method: "post",
      url: URL+"/user_feedback/retrive",
      data: ratingData,
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      setData(response.data);
    });
  }
  
  useEffect(() => {
    if(!user){
      window.location.href ="/login";
     }
    dropDown();
  }, []);
  return (
    <div>
      <div class="container">
      <label className="selection">Search By category:</label><br></br>
      <select class="mdb-select md-form" onChange={table}>
        <option value="" disabled selected>
          Choose your option
        </option>
        {getparam.map((result) => {
          return <option value={result.id}> {result.categoryName} </option>;
        })}
      </select>
        <div className="cen">
        
      </div>
        <div class="table-responsive">
          <table
            class="table table-bordered   table-striped"
            // style="margin-top:100px"
          >
            <thead class="table__head">
              <tr class="winner__table">
                <th>S/N0.</th>
                <th> Name </th>
                <th>Gender </th>
                <th> Age </th>
                <th> Rating Type </th>
                <th> Feedback </th>
                <th> Created Date </th>
              </tr>
            </thead>
            {getdata.map((result, index) => {
              function ratingType(rating) {
                let type;
                switch (rating) {
                  case "1":
                    type = "Rating";
                    break;
                  case "2":
                    type = "Yes or No";
                    break;
                  case "3":
                    type = "Multiple";
                    break;
                  default:
                    type = "";
                }
                return type;
              }
              return (
                <tbody>
                  <tr class="winner__table">
                    <td>{index + 1}</td>
                    <td>{result.name}</td>
                    <td>{result.gender}</td>
                    <td>{result.age}</td>
                    <td>{ratingType(result.ratingType)}</td>
                    
                    <td>
                      <tr>
                        <th> Query</th>
                        <th> Query Answers</th>
                      </tr>
                      {result.user_feedback_detailes.map((context, index) => (
                        <tr>
                          <td>{context.query}</td>
                          <td>{context.userAnswer}</td>
                          
                        </tr>
                      ))}
                      
                    </td>
                    <td>{result.createdAt}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
    
  );
}
export default Star;
