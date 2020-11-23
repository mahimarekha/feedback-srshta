import React, { useState, useEffect } from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";
import UserRating2 from "./UserRating2";
// import UserRating2 from "./Components/UserRating2";
function NumberList() {
  const [ffgfgfgfgf, setData] = useState([]);
  let { catId } = useParams();
  useEffect(() => {
   
       axios({
            method: "post",
            url: "http://localhost:3001/api/rating/getratinglist",
            data:   {"ratingType":"1", "userId":"5", "categoryId":catId},
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