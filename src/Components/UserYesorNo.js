import React, { useState, useEffect } from 'react';
import axios from 'axios';
import URL  from '../app.config';
import {  useParams } from "react-router-dom";
import UserYesorNo2 from "./UserYesorNo2"
// import history from './../history';
// import UserRating2 from "./UserRating2";
function UseryesorNo() {
  const [ffgfgfgfgf, setData] = useState([]);
  let { catId, userId } = useParams();
  const user = JSON.parse(sessionStorage.getItem("user"));
            const ratingData = {
              ratingType: "2",
              userId: userId,
              categoryId:catId
            };
            console.log(ratingData);
  useEffect(() => {
    
      // if(!user){
      //  window.location.href ="/login";
      // }
       axios({
            method: "post",
             url: URL+"/api/rating/getratinglist",
            data: ratingData,
            headers: { "Content-Type": "application/json" },
          }).then((response) => {
             setData(response.data);
          });
   
  }, []);
 
  return  (
  <UserYesorNo2  queryList={ffgfgfgfgf} />
  );

}

export default UseryesorNo;