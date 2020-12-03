import React, { useState, useEffect } from 'react';
import axios from 'axios';
import URL  from '../app.config';
import {  useParams } from "react-router-dom";
import UserMultiple2 from "./UserMultiple2"
// import UserRating2 from "./UserRating2";
function Usermultiple() {
  const [ffgfgfgfgf, setData] = useState([]);
  let { catId, userId } = useParams();
  const user = JSON.parse(sessionStorage.getItem("user"));
            const ratingData = {
              ratingType: "3",
              userId: userId,
              categoryId:catId
            };
            console.log(ratingData);
 
  useEffect(() => {
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
  <UserMultiple2  queryList={ffgfgfgfgf} />
  );

}

export default Usermultiple;;