import React, { Component } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import { Field, FieldArray, FieldProps, Form, Formik, getIn } from "formik";
import * as Yup from "yup";
import URL  from '../app.config';
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./Rating.css";
import * as Icon from "react-bootstrap-icons";
import RatingTypeList from "./RatingTypeList";
const RatingSchema = Yup.object().shape({
  rating: Yup.string().required("Required"),
});
const Rating = () => {
  let { catId } = useParams();
  const ratingList = [
    {
      ratingType: "Agreement",
      ratingList: [
        { name: "Strongly Agree" },
        { name: "Agree" },
        { name: "Undecided" },
        { name: "Disagree" },
        { name: "Strongly Disagree" },
      ],
    },
    {
      ratingType: "Frequency",
      ratingList: [
        { name: "Always" },
        { name: "Often" },
        { name: "Sometimes" },
        { name: "Rarely" },
        { name: "Never" },
      ],
    },
    {
      ratingType: "Importance",
      ratingList: [
        { name: "Very Important" },
        { name: "Important" },
        { name: "Moderately Important" },
        { name: "Slightly Important" },
        { name: "Unimportant" },
      ],
    },
    {
      ratingType: "Quality",
      ratingList: [
        { name: "Excellent" },
        { name: "Good" },
        { name: "Fair" },
        { name: "Poor" },
        { name: "Very Poor" },
      ],
    },
    {
      ratingType: "Likelihood-1",
      ratingList: [
        { name: "Almost Always True" },
        { name: "Usually True" },
        { name: "Occasionally True" },
        { name: "Usually Not True" },
        { name: "Almost Never True" },
      ],
    },
    {
      ratingType: "Likelihood-2",
      ratingList: [
        { name: "Definitely" },
        { name: "Probably" },
        { name: "Possibly" },
        { name: "Probably Not" },
        { name: "Definitely Not" },
      ],
    },
  ];
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-md-8 col-lg-7">
            <Formik
              initialValues={{
                ratingType: "1",
                userQuery: [{ query: "", selectRating: "" }],
              }}
              onSubmit={(values) => {
                const user = JSON.parse(sessionStorage.getItem("user"));
                function getRatingList(ratingType) {
                  const ratingDetails = ratingList.find((values) => {
                    return values.ratingType === ratingType;
                  });
                  return ratingDetails.ratingList.map((items) => items.name);
                }
                const ratingData = {
                  ratingType: "1",
                  userId: user.id,
                  categoryId: catId,
                  queryList: values.userQuery.map((data) => {
                    console.log(getRatingList(data.selectRating));
                    return {
                      query: data.query,
                      optionsList: getRatingList(data.selectRating),
                    };
                  }),
                };
                axios({
                  method: "post",
                  url: URL+"/api/rating/create",
                  data: ratingData,
                  headers: { "Content-Type": "application/json" },
                }).then((response) => {
                  alert("record saved successfully");
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
                            <div>
                              <label className="heading">Rating Type</label>
                              <div>
                                <label>
                                  {" "}
                                  <Field
                                    type="radio"
                                    name={`userQuery[${index}].selectRating`}
                                    value="Agreement"
                                  />{" "}
                                  Agreement{" "}
                                </label>{" "}
                                <br></br>
                                <label>
                                  {" "}
                                  <Field
                                    type="radio"
                                    name={`userQuery[${index}].selectRating`}
                                    value="Frequency"
                                  />{" "}
                                  Frequency{" "}
                                </label>
                                <br></br>
                                <label>
                                  {" "}
                                  <Field
                                    type="radio"
                                    name={`userQuery[${index}].selectRating`}
                                    value="Importance"
                                  />{" "}
                                  Importance{" "}
                                </label>
                                <br></br>
                                <label>
                                  {" "}
                                  <Field
                                    type="radio"
                                    name={`userQuery[${index}].selectRating`}
                                    value="Quality"
                                  />{" "}
                                  Quality{" "}
                                </label>
                                <br></br>
                                <label>
                                  {" "}
                                  <Field
                                    type="radio"
                                    name={`userQuery[${index}].selectRating`}
                                    value="Likelihood-1"
                                  />{" "}
                                  Likelihood-1{" "}
                                </label>
                                <br></br>
                                <label>
                                  {" "}
                                  <Field
                                    type="radio"
                                    name={`userQuery[${index}].selectRating`}
                                    value="Likelihood-2"
                                  />{" "}
                                  Likelihood-2{" "}
                                </label>
                                <br></br>
                              </div>
                            </div>
                            <div></div>
                          </div>
                        ))}
                        <div>
                          <div>
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
                            {/* <button type="submit" className="btn btn-success">
                              Submit
                            </button> */}
                            <button type="submit" className="btn btn-primary">
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
          <div className="col-lg-5">
            <div>
              {ratingList.map((rating, index) => (
                <RatingTypeList
                  key={index}
                  ratingDetails={rating}
                  value={ratingList}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Rating;
