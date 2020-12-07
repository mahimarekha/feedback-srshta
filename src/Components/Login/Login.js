import React from "react";
import "./Login.css";
import URL from "../../app.config";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Card from "../Login/Card";
import { BrowserRouter as Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  Username: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Username Required"),
  password: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("password Required"),
});
const Login = () => {
  const history = useHistory();
  return (
    <div>
      <div>
        <Formik
          initialValues={{
            Username: "",
            password: "",
          }}
          validationSchema={SignupSchema}
          onSubmit={(values) => {
            const inputReq = {
              userName: values.Username,
              password: values.password,
            };
            axios({
              method: "post",
              url: URL + "/api/login",
              data: inputReq,
              headers: { "Content-Type": "application/json" },
            }).then((response) => {
              if (response.status === 200) {
                debugger;
                const arrayResult = response.data.result[0];
                sessionStorage.setItem("user", JSON.stringify(arrayResult));
                history.push("/catogery");
                window.location.reload();

              }
            });
          }}
        >
          {({ errors, touched, handleSubmit, validateForm }) => (
            <Form onSubmit={handleSubmit} autoComplete="off">
              <div class="container cont">
                <div class="card car">
                  <div class="card-body">
                    <div class="circle"></div>
                    <header class="myHed text-center">
                      <i class="far fa-user"></i>
                      <p>LOGIN</p>
                    </header>
                    <div class="main-form text-center">
                      <div class="form-group my-0">
                        <label class="my-0">
                          <div className="color">
                            <Field
                              name="Username"
                              className="width myInput"
                              placeholder="Username"
                            />
                            {errors.Username && touched.Username ? (
                              <div>{errors.Username}</div>
                            ) : null}
                          </div>
                        </label>
                      </div>
                      <div class="form-group my-0">
                        <label>
                          <div className="color">
                            <Field
                              type="password"
                              name="password"
                              className="width myInput"
                              placeholder="password "
                            />
                            {errors.password && touched.password ? (
                              <div>{errors.password}</div>
                            ) : null}
                          </div>
                        </label>
                      </div>
                      <div class="form-group">
                        <label>
                          <input
                            type="submit"
                            class="form-control button"
                            value="LOGIN"
                          />
                        </label>
                      </div>
                      <span class="check_1">Forgot password ?</span>
                      <div className="check_1 ">
                        <Link to="/register">Register Here?</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
};
export default Login;
