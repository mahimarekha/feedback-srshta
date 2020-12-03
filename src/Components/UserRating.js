import React, { useState, useEffect } from 'react';
import axios from 'axios';
import URL  from '../app.config';
import {  useParams } from "react-router-dom";
import UserRating2 from "./UserRating2";
// import UserRating2 from "./Components/UserRating2";
function NumberList() {
  const [ffgfgfgfgf, setData] = useState([]);
  let { catId ,userId} = useParams();
  // const user = JSON.parse(sessionStorage.getItem("user"));
            const ratingData = {
              ratingType: "1",
              userId: userId,
              categoryId:catId
            };
            console.log(ratingData);
  useEffect(() => {
   
       axios({
            method: "post",
            url: URL+"/api/rating/getratinglist",
            data:   ratingData,
            headers: { "Content-Type": "application/json" },
          }).then((response) => {
             setData(response.data);
          });
  }, []);
  return  (
  <UserRating2   queryList={ffgfgfgfgf} />
  );

}

export default NumberList;;