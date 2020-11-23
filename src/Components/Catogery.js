import React, { Component } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import  "./Catogery.css"
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  categoryName: Yup.string(),
  description: Yup.string()
    
});
const Catogery = () => {
  const history = useHistory();
  return (
    <div>
      <div>
      <Formik
        initialValues={{
          categoryName: "",
          description: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
    const user= JSON.parse(sessionStorage.getItem("user"));
    alert();
const inputReq ={
  "categoryName":values.categoryName,
"userId":user.id,
"description":values.description
}
          axios({
            method: "post",
            url: "http://localhost:3001/category/create",
            data: inputReq,
            headers: { "Content-Type": "application/json" },
          }).then((response) => {            
            if (response.status === 200) {             
          
            // sessionStorage.setItem('user', JSON.stringify(arrayResult));
                history.push("/ratingtype/"+response.data.id);
            }
          });
        }}
      >
        {({ errors, touched, handleSubmit, validateForm }) => (
          <Form onSubmit={handleSubmit} autoComplete="off">
            
                  <div class="cate">
                    <div >
                      <label >categoryName</label>    
                                 
                          <Field name="categoryName" className="form-control catogery" placeholder="categoryName" />
                          {/* {errors.CategoryName && touched.CategoryName ? (
                            <div>{errors.CategoryName}</div>
                          ) : null} */}
                          
                     
                    </div>
                    <br />
                    <div >
                      <label>  description  </label>                  
                          <textarea  className="form-control catogery1" name="description"   placeholder="description" />
                          {/* {errors.Description && touched.Description ? (
                            <div>{errors.Description}</div>
                          ) : null} */}
                       
                      
                    </div>
                    <br />
                    <div class="form-group">
                      <label >
                        <input
                          type="submit"
                          class="  btn btn-primary"
                          value="Submit" 
                        />
                      </label>
                    </div>    
            </div>            
          </Form>
        )}
      </Formik>
      </div>
      <div>
      </div>
    </div>
  );
};
export default Catogery;
 