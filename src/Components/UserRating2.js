import React, { useState, useEffect } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import axios from "axios";
import { Link ,useParams} from 'react-router-dom';
import "./UserRating2.css";
function UserRating(props) {
  let { catId } = useParams();
  const queryData = props.queryList.map((data) => {
    data.queryOptions =
      data.queryOptions !== "" ? data.queryOptions.split(",") : [];
      data.value = ""
    return data;
  });
  return (
    <div>
      <Formik
        initialValues={{
          Name: "",
          Gender: "",
          Age: "",
          userQuery: queryData,
        }}
        onSubmit={(values) => {
        const userGivenAns = [];
          values.userQuery.forEach((values,index)=>{
            userGivenAns.push({query:queryData[index].queryName,userAnswer:values.value});
          })
          const user = JSON.parse(sessionStorage.getItem("user"));
          const ratingData = {
            ratingType: "1",
            userId: user.id,
            name:values.Name,
            gender:values.Gender,
            age:values.Age,   
            "userFeedback":userGivenAns
          };
          console.log(ratingData);
          debugger
          axios({
            method: "post",
            url: "http://localhost:3001/user_feedback/create",
            data: ratingData,
            headers: { "Content-Type": "application/json" },
          }).then((response) => {
            alert("record saved successfully");
          });
        }}
      >
        
        {({ errors, touched, handleSubmit, validateForm }) => (
          <Form onSubmit={handleSubmit} autoComplete="off">
            <div className="container">
              <div className="card card1">
                <div className="card-body card-body1 background">
                  <div
                    className="card-header card-header1"
                    style={{ "background-color": "rgb(194 13 13 / 49%)" }}
                  >
                    <h6 className="card-title">
                      <p className="latest_img my-0 green">
                        <i className="fa fa-laptop"></i> User Rating
                      </p>
                    </h6>
                  </div>
                  <div className="form-group ">
                    <div>
                      <label className="heading">Name:</label>
                      <div>
                        <Field name="Name" className="auto" />
                        {/* {errors.Businessname && touched.Businessname ? (
                            <div>{errors.Businessname}</div>
                          ) : null} */}
                      </div>
                    </div>
                    <div>
                      <p className=" heading entity">Select Gender Type:</p>
                      <div className="radio">
                        <div>
                          <Field
                            type="radio"
                            value="Male"
                            name="Gender"
                          />{" "}
                          Male
                        </div>
                        <div>
                          <Field
                            type="radio"
                            value="Female"
                            name="Gender"
                          />{" "}
                          Female
                        </div>
                        <div>
                          <Field
                            type="radio"
                            value="Other"
                            name="Gender"
                          />{" "}
                          Other
                        </div>
                      </div>
                    </div>
                    <div>
                      <label className="heading">Age:</label>
                      <div>
                        <Field name="Age" className="auto" />
                        {/* {errors.Businessname && touched.Businessname ? (
                            <div>{errors.Businessname}</div>
                          ) : null} */}
                      </div>
                    </div>
                  </div>
                  <div
                    className="card-header card-header1"
                    style={{ "background-color": "rgb(194 13 13 / 49%)" }}
                  >
                    <div className="card-title">
                      <h6 className="latest_img my-0 green">
                        <i className="fa fa-laptop"></i>
                        Profile
                      </h6>
                    </div>
                  </div>
                  <FieldArray name="userQuery">
                    <div className=" heading entity">
                      {queryData.map((post, mainindex) => (
                        <div>
                          {post.queryName}
                          <div className="radio">
                            {post.queryOptions.map((queryans, index) => (
                              <div key={index}>
                                <Field  key={index}
                                  type="radio"
                                  value={queryans}
                                  name={`userQuery[${mainindex}].value`}
                                />{" "}
                                {queryans}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </FieldArray>
                </div>
                <div className="align-items-center save-btn-center">
                  <button type="submit" className="submit btn btn-success">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
export default UserRating;
