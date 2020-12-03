import React, { Component } from "react";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, useParams } from "react-router-dom";
import { Field, FieldArray, FieldProps, Form, Formik, getIn } from "formik";
import * as Yup from "yup";
import URL  from '../app.config';
import "./Multiple.css";
import axios from "axios";
import * as Icon from "react-bootstrap-icons";
import RatingTypeList from "./RatingTypeList";
import "./Multiple.css";
const Multiple = () => {
  let { catId } = useParams();
  return (
    <div>
      <div className="container">
        <Formik
          initialValues={{
            ratingType: "3",
            userQuery: [
              { query: "", option1: "", option2: "", option3: "", option4: "" },
            ],
          }}
          onSubmit={async (values) => {
            function mapUserSeletedItems(data) {
              const selectedOptions = [];
              delete data.query;
              const deleteEmptyData = Object.values(data);
              deleteEmptyData.forEach((values) => {
                if (values !== "") {
                  selectedOptions.push(values);
                }
              });
              return selectedOptions;
            }
            const user = JSON.parse(sessionStorage.getItem("user"));
            const ratingData = {
              ratingType: "3",
              userId: user.id,
              categoryId: catId,
              queryList: values.userQuery.map((data) => {
                return {
                  query: data.query,
                  optionsList: mapUserSeletedItems(data),
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
          {({ values }) => (
            <Form>
              <FieldArray
                name="userQuery"
                render={(arrayHelpers) => (
                  <div>
                    {values.userQuery.map((friend, index) => (
                      <div key={index}>
                        <div>
                          <label className="heading">Enter your Query</label>
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
                          <div>
                            <br></br>
                            <div class="form-group row">
                              <label class="col-sm-2 col-form-label">
                                Option 1
                              </label>
                              <div class="col-sm-10">
                                <Field
                                  name={`userQuery[${index}].option1`}
                                  className="form-control-1"
                                />
                              </div>
                            </div>
                            <div class="form-group row">
                              <label class="col-sm-2 col-form-label">
                                Option 2
                              </label>
                              <div class="col-sm-10">
                                <Field
                                  name={`userQuery[${index}].option2`}
                                  className="form-control-1"
                                />
                              </div>
                            </div>
                            <div class="form-group row">
                              <label class="col-sm-2 col-form-label">
                                Option 3
                              </label>
                              <div class="col-sm-10">
                                <Field
                                  name={`userQuery[${index}].option3`}
                                  className="form-control-1"
                                />
                              </div>
                            </div>
                            <div class="form-group row">
                              <label class="col-sm-2 col-form-label">
                                Option 4
                              </label>
                              <div class="col-sm-10">
                                <Field
                                  name={`userQuery[${index}].option4`}
                                  className="form-control-1"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
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
                    <br></br>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
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
export default Multiple;
