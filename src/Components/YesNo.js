import React, { Component } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import { Field, FieldArray, FieldProps, Form, Formik, getIn } from "formik";
import * as Yup from "yup";
import { Link ,useParams} from 'react-router-dom';
import "./YesNo.css";
import axios from "axios";
import * as Icon from "react-bootstrap-icons";
import RatingTypeList from "./RatingTypeList";

const YesNo = () => {
  let { catId } = useParams();
  return (
    <div>
      <div className="container">        
            <Formik
              initialValues={{
                ratingType: "2",
                userQuery: [{ query: "", selectRating: "" }],
              }}
              
              onSubmit={async (values) => {
                const user= JSON.parse(sessionStorage.getItem("user"));
                  const ratingData=
                            {
                            "ratingType":"2",
                            "userId":user.id,
                            "categoryId":catId,
                            "queryList":values.userQuery.map((data)=>{
                            
                              return {query:data.query};
                            })
                            }  
                              axios({
            method: "post",
            url: "http://localhost:3001/api/rating/create",
            data: ratingData,
            headers: { "Content-Type": "application/json" },
             }).then((response) => {
alert("record saved successfully")
                 });
                //await new Promise((r) => setTimeout(r, 500));
                alert(JSON.stringify(values, null, 2));
              }}   
            >
              {({ values, handleSubmit }) => (
                <Form onSubmit={handleSubmit} autoComplete="off">
                  <FieldArray
                    name="userQuery"
                    render={(arrayHelpers) => (
                      <div className="form-group">
                        {values.userQuery.map((friend, index) => (
                          <div key={index}>
                            <div>
                              <label className="heading">
                                Enter your Query
                              </label>
                             
                              <div className="color">
                                <Field
                                  name={`userQuery[${index}].query`}
                                  className="width"
                                />
                                <Icon.Trash
                                  type="button"
                                  className="del"
                                  size={26}
                                  onClick={() => arrayHelpers.remove(index)}
                                >
                                  {" "}
                                </Icon.Trash>
                              </div>
                            </div>
                          </div>
                        ))}
                        <div>
                          <div className="add">
                            <Icon.PlusCircleFill
                              type="button"
                              className=" add-another-query"
                              size={26}
                              onClick={() =>
                                arrayHelpers.push({
                                  query: "",
                                  selectRating: "",
                                })
                              }
                            >
                              {" "}
                            </Icon.PlusCircleFill>{" "}
                            Add another Query
                          </div>
                          <div>
                            <button type="submit" className="btn btn-success">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    )}
                  />
                </Form>
              )}
            </Formik>          
      </div>
    </div>
  );
};
export default YesNo;
