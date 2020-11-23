import React from "react";
import "./Home.css";
import target from "../target.png";
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
const SignupSchema = Yup.object().shape({
  Businessname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
    Address: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
    Buildingname: Yup.string(),
    Areaorlocality: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
    City: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
    Pinno: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
    Entitytype: Yup.string().required("Required"),
    Primaryname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
    Primarymobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, {message: "Please enter valid number.", excludeEmptyString: false})
    .required("Mobile Number is required"),
    Primaryemail: Yup.string().email().required("Email is required"),
    Primarydesignation: Yup.string(),
    Secondaryname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
    Secondarymobile: Yup.string()
    .matches(/^[6-9]\d{9}$/, {message: "Please enter valid number.", excludeEmptyString: false})
    .required("Mobile Number is required"),
    Secondaryemail: Yup.string().email().required("Email is required"),
    Secondarydesignation: Yup.string(),
     password: Yup.string().required("password is required"),
});
const Home = () => (
  <div>
    <Formik
      initialValues={{
        Businessname: "",
        Address: "",
        Buildingname:"",
        Areaorlocality: "",
        City: "",
        Pinno: "",
        Entitytype:"",
        Primaryname: "",
        Primarymobile: "",
        Primaryemail: "",
        Primarydesignation:"",
        Secondaryname: "",
        Secondarymobile: "",
        Secondaryemail: "",
        Secondarydesignation:"",
        password:""
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        const inputReq ={
    "businessName": values.Businessname,
    "address": values.Address,
    "buildingName": values.Buildingname,
    "areaLocalaity": values.Areaorlocality,
    "city": values.City,
    "pinNo": values.Pinno,
    "entityType": values.Entitytype,
    "primaryName": values.Primaryname,
    "primaryMobile": values.Primarymobile,
    "primaryEmail": values.Primaryemail,
    "primaryDesignation": values.Primarydesignation,
    "secondaryName": values.Secondaryname,
    "secondaryMobile": values.Secondarymobile,
    "secondaryEmail": values.Secondaryemail,
    "secondaryDesignation": values.Secondarydesignation,
    "password":values.password
}
        axios({method:"post",
        url:"http://localhost:3001/api/register" ,
        data: inputReq,
        headers: {'Content-Type': 'application/json' }})
        .then(response => {
          
        });
      }}
    >
      {({ errors, touched, handleSubmit ,validateForm}) => (
        <Form onSubmit={handleSubmit} autoComplete="off">
          <div className="container">
            <div className="card card1">
              <div className="card-body card-body1 background" >
                <h3 className="card-title font-color">Registration Form</h3>
                <div className="card-header card-header1"  style={{'background-color': "rgb(194 13 13 / 49%)"}}>
                  <h6 className="card-title">
                    <p className="latest_img my-0 green">
                      <i className="fa fa-laptop"></i>
                      Company or Organization
                    </p>
                  </h6>
                </div>
                <div className="row">
                  <div className="col-lg-5">
                    <div className="form-group margin-top">
                      <div>
                        <label className="heading">Business Name</label>
                        <font color="red">*</font>
                        <div className="color">
                          <Field name="Businessname" className="width1" />
                          {errors.Businessname && touched.Businessname ? (
                            <div>{errors.Businessname}</div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="form-group ">
                      <div>
                        <label className="heading">Address</label>
                        <font color="red">*</font>
                        <div className="color">
                          <Field name="Address" className="width1" />
                          {errors.Address && touched.Address ? (
                            <div>{errors.Address}</div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="form-group ">
                      <div>
                        <label className="heading">Building Name</label>

                        <div className="color">
                          <Field name="Buildingname" className="width1" />
                        </div>
                      </div>
                    </div>

                    <div className="form-group ">
                      <div>
                        <label className="heading">Area/Localaity</label>
                        <font color="red">*</font>
                        <div className="color">
                          <Field name="Areaorlocality" className="width1" />
                          {errors.Areaorlocality && touched.Areaorlocality ? (
                            <div>{errors.Areaorlocality}</div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="form-group ">
                      <div>
                        <label className="heading">City</label>
                        <font color="red">*</font>
                        <div className="color">
                          <Field name="City" className="width1" />
                          {errors.City && touched.City ? (
                            <div>{errors.City}</div>
                          ) : null}
                        </div>
                      </div>
                    </div>

                    <div className="form-group ">
                      <div>
                        <label className="heading"> PIN no.</label>
                        <font color="red">*</font>
                        <div className="color">
                          {" "}
                          <Field name="Pinno" className="width1" />
                          {errors.Pinno && touched.Pinno ? (
                            <div>{errors.Pinno}</div>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-7">
                    <figure className="figure">
                      <div className="caption1">
                    <figcaption className="caption">Simplified Survey, Smart Analysis, Super Soultions.... </figcaption>
                    
                    </div>
                      <img src={target} alt="Signup" />
                      
                    </figure>
                  </div>
                </div>

                <div className="card-header card-header1"  style={{'background-color': "rgb(194 13 13 / 49%)"}}>
                  <div className="card-title">
                    <h6 className="latest_img my-0 green">
                      <i className="fa fa-laptop"></i>
                      Profile
                    </h6>
                  </div>
                </div>

                <p className=" heading entity">Select Entity Type:</p>
                <div className="radio">
                  <div>
                    <Field type="radio" value="Multiple brands" name="Entitytype" /> Multiple branches
                  </div>
                  <div>
                    <Field type="radio" value="Company with brands" name="Entitytype" /> Company with brands
                  </div>
                  <div>
                    <Field type="radio" value="Stand alone Organization" name="Entitytype" /> Stand alone Organization
                  </div>
                </div>

                <div className="card-header card-header1"  style={{'background-color': "rgb(194 13 13 / 49%)"}}>
                  <div className="card-title">
                    <h6 className="latest_img my-0 green">
                      <i className="fa fa-laptop"></i>
                      Contact Person
                    </h6>
                  </div>
                </div>
                <div className="row prim-sec">
                  <div className="col-lg-2"></div>
                  <div className="col-lg-4">
                    <h6>Primary Contact Detailes</h6>
                  </div>
                  <div className="col-lg-4">
                    <h6>Secondary Contact Detailes </h6>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-2 heading">
                    {/* {" "} 
                    <label className="heading" > Name</label>
                     <font color="red">*</font> */}
                  </div>

                  <div className="col-lg-4 ">
                  <label className="heading" > Name</label>
                     <font color="red">*</font>
                    <Field name="Primaryname" className="width1" placeholder="Enter Primnary Name"/>{" "}
                    {errors.Primaryname && touched.Primaryname ? (
                      <div className="color">{errors.Primaryname}</div>
                    ) : null}
                  </div>
                  <div className="col-lg-4 ">
                  <label className="heading" > Name</label>
                     <font color="red">*</font>
                    <Field name="Secondaryname" className="width1" placeholder="Enter Secondary Name"/>{" "}
                    {errors.Secondaryname && touched.Secondaryname ? (
                      <div className="color">{errors.Secondaryname}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-2 heading">
                    {/* {" "}
                    <label className="heading" > Mobile</label>
                     <font color="red">*</font> */}
                  </div>

                  <div className="col-lg-4 ">                
                    <label className="heading" > Mobile</label>
                     <font color="red">*</font>
                    <Field name="Primarymobile" className="width1" placeholder="Enter Primnary Mobile No." />{" "}
                    {errors.Primarymobile && touched.Primarymobile ? (
                      <div className="color">{errors.Primarymobile}</div>
                    ) : null}
                  </div>
                  <div className="col-lg-4 ">
                  <label className="heading" > Mobile</label>
                     <font color="red">*</font>
                    <Field name="Secondarymobile" className="width1"  placeholder="Enter Secondary Mobile No." />{" "}
                    {errors.Secondarymobile && touched.Secondarymobile ? (
                      <div className="color">{errors.Secondarymobile}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-2 heading">
                    {/* {" "}
                    <label className="heading" >  E-Mail</label>
                    <font color="red">*</font> */}
                  </div>

                  <div className="col-lg-4 ">
                  <label className="heading" >  E-Mail</label>
                    <font color="red">*</font> 
                    <Field name="Primaryemail" className="width1" placeholder="example1@gmail.com"  />{" "}
                    {errors.Primaryemail && touched.Primaryemail ? (
                      <div className="color">{errors.Primaryemail}</div>
                    ) : null}
                  </div>
                  <div className="col-lg-4 ">
                  <label className="heading" >  E-Mail</label>
                    <font color="red">*</font> 
                    <Field name="Secondaryemail" className="width1" placeholder="example2@gmail.com" />{" "}
                    {errors.Secondaryemail && touched.Secondaryemail ? (
                      <div className="color">{errors.Secondaryemail}</div>
                    ) : null}
                  </div>
                </div>
                <div className="row">
                <div className="col-lg-2 heading"></div>
                  {/* <label className="col-lg-2 heading"> Designation </label> */}
                  <div className="col-lg-4 ">
                  <label className=" heading"> Designation </label>
                    <Field name="Primarydesignation" className="width1" placeholder="Enter Primnary Designation" />{" "}                    
                  </div>
                  <div className="col-lg-4 ">
                  <label className=" heading"> Designation </label>
                    <Field name="Secondarydesignation" className="width1" placeholder="Enter Secondary Designation" />{" "}                   
                  </div>
                </div>


                      <div className="align-items-center save-btn-center">
                  <label className=" heading"> password </label>
                    <Field type="password" name="password" className="width1" placeholder="Enter password " />{" "}
                    {errors.password && touched.password ? (
                      <div className="color">{errors.password}</div>
                    ) : null}
                </div>

                <div className="align-items-center save-btn-center">
                  <button type="submit" className="submit btn btn-success">
                    Submit                    
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  </div>
);
export default Home;
