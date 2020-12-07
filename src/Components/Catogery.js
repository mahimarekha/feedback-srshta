
import axios from "axios";
import React, {  useEffect } from "react";
import URL  from '../app.config';
import { useHistory } from "react-router-dom";
import "./Catogery.css";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  categoryName: Yup.string(),
  description: Yup.string(),
});
const Catogery = () => {
  const history = useHistory();
  const user = JSON.parse(sessionStorage.getItem("user"));
  useEffect(() => {
    if(!user){
      window.location.href ="/login";
     }
    }, []);
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
            const user = JSON.parse(sessionStorage.getItem("user"));
            alert();
            const inputReq = {
              categoryName: values.categoryName,
              userId: user.id,
              description: values.description,
            };
            
            
            axios({
              method: "post",
              url: URL+"/category/create",
              data: inputReq,
              headers: { "Content-Type": "application/json" },
            }).then((response) => {
              if (response.status === 200) {
                debugger;
                // sessionStorage.setItem('user', JSON.stringify(arrayResult));
                history.push("/ratingtype/" + response.data.id);
              }
            });
          }}
        >
          {({ errors, touched, handleSubmit, validateForm }) => (
            <Form onSubmit={handleSubmit} autoComplete="off">
              <div class="cate">
                <div>
                  <label>Category Name</label>

                  <Field
                    name="categoryName"
                    className="form-control catogery"
                    placeholder="Category Name"
                  />
                  {/* {errors.CategoryName && touched.CategoryName ? (
                            <div>{errors.CategoryName}</div>
                          ) : null} */}
                </div>
                <br />
                <div>
                  <label> Description </label>
                  <textarea
                    className="form-control catogery1"
                    name="description"
                    placeholder="Description"
                  />
                  {/* {errors.Description && touched.Description ? (
                            <div>{errors.Description}</div>
                          ) : null} */}
                </div>
                <br />
                <div class="form-group">
                  <label>
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
      <div></div>
    </div>
  );
};
export default Catogery;
