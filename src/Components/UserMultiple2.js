import React, { useState, useEffect } from "react";
import { Formik, Form, Field, FieldArray, ErrorMessage } from "formik";
import axios from "axios";
import URL  from '../app.config';
import { Link, useParams } from "react-router-dom";
function UserMultiple(props) {
  let { catId } = useParams();
  const queryData = props.queryList.map((data) => {
    data.queryOptions =
      data.queryOptions !== "" ? data.queryOptions.split(",") : [];
    data.userValue = "";
    return data;
  });
  return (
    <div>
      <Formik>
        <Formik
          initialValues={{
            Name: "",
            Gender: "",
            Age: "",
            userQuery: queryData,
          }}
          onSubmit={(values) => {
            const userGivenAns = [];
            values.userQuery.forEach((values, index) => {
              userGivenAns.push({
                query: queryData[index].queryName,
                userAnswer: values.type ? values.type.toString() : "",
              });
            });
            // same shape as initial values
            const user = JSON.parse(sessionStorage.getItem("user"));
            const ratingData = {
              ratingType: "3",
              userId: user.id,
              name: values.Name,
              gender: values.Gender,
              age: values.Age,
              userFeedback: userGivenAns,
              categoryId:catId            
            };
            console.log(ratingData);
            debugger;
            axios({
              method: "post",
              url: URL+"/user_feedback/create",
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
                    <div className="card-header card-header1"
                      style={{ "background-color": "rgb(194 13 13 / 49%)" }}
                    >
                      <h6 className="card-title">
                        <p className="latest_img my-0 green">
                          <i className="fa fa-laptop"></i> Rating Type Multiple
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
                            <Field type="radio" value="Male" name="Gender" />{" "}
                            Male
                          </div>
                          <div>
                            <Field type="radio" value="Female" name="Gender" />{" "}
                            Female
                          </div>
                          <div>
                            <Field
                              type="radio"
                              value="Stand alone Organization"
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
                                  <label>
                                    <Field
                                      key={index}
                                      type="checkbox"
                                      name={`userQuery[${mainindex}].type`}
                                      value={queryans}
                                    />{" "}
                                    {queryans}
                                  </label>
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
      </Formik>
    </div>
  );
}
export default UserMultiple;
