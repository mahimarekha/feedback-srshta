import React, { useState, useEffect } from "react";
import URL  from '../app.config';
import axios from "axios";
import "./CategoryList.css";
function CategoryByQA() {
  const [getparam, setParam] = useState([]);
  const user = JSON.parse(sessionStorage.getItem("user"));
  const UI_Link ="https://feedback-srshta-app-o16wyy579.vercel.app/";

  useEffect(() => {
    if(!user){
      window.location.href ="/login";
     }
     function dropDown() {
      const ratingData = {
        userId: user.id,
      };
      
      axios({
        method: "post",
        url: URL+"/category/getrating",
        data: ratingData,
        headers: { "Content-Type": "application/json" },
      }).then((response) => {
        setParam(response.data);
      });
    }
    dropDown();
  }, []);
  
  return (
    <div>
     
      <div class="container">
          <div>
      <a type="button" class="btn btn-info float" href = '/CategoryByQa' >Query List</a>
      <a type="button" class="btn btn-info float" href = '/Catogery' >Create Category</a>
      </div>
        <div class="table-responsive">            
          <table
            class="table table-bordered   table-striped"
            // style="margin-top:100px"
          >
            <thead class="table__head">
              <tr class="winner__table">
                <th>S/N0.</th>
                <th> CategoryName </th>
                <th> Rating </th>
                <th> Yes or No </th>
                <th> Multiple</th>
              </tr>
            </thead>
            {getparam.map((result, index) => {
              return (
                <tbody>
                  <tr class="winner__table">
                    <td>{index + 1}</td>
                    {/* <td>{ratingType(result.ratingTypeId)}</td> */}
                    <td>{result.categoryName}</td>
                    <td>
                      <a href={`/Rating/${result.id}`}>Add</a>
                      <div>
                      <span>
                          {`${UI_Link}/userMultiple/${result.id}/${user.id}`}
                      </span>
                      </div>
                     
                    </td>
                    <td>
                      <a href={`/YesNo/${result.id}`}>Add</a>
                      <div>
                      <span>
                          {`${UI_Link}/userYesorNo/${result.id}/${user.id}`}
                      </span>
                      </div>
                     
                    </td>
                    <td>
                      <a href={`/Multiple/${result.id}`}>Add</a>
                      <div>
                      <span>
                          {`${UI_Link}/userMultiple/${result.id}/${user.id}`}
                      </span>
                      </div>
                  
                    </td>
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
export default CategoryByQA;
