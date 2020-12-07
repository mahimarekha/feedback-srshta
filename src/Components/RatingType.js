import React, {  useEffect } from "react";
import "./RatingType.css";
import { Link ,useParams} from 'react-router-dom';
function RatingType() {
    let { catId } = useParams();
    const user = JSON.parse(sessionStorage.getItem("user"));
    useEffect(() => {
      if(!user){
        window.location.href ="/login";
       }
      }, []);
    return (
      <div>
        <div className="container1"> 
        <div className="container">
        <div className="row">
  <div className="col-sm-4 " >
  <div className=" text-center">
    <div className="card">
    <div className="card-header thing"> <h5>Rating</h5></div>
      <div className="card-body">      
        <p className="card-text">With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.</p>       
      </div>
      <div className="card-footer text-muted">
      <Link to={`/Rating/${catId}`} ><button className="btn btn-primary">Create Feedback Form</button></Link>
        </div>
        </div>
    </div>
  </div>
  <div className="col-sm-4">
  <div className=" text-center">
    <div className="card">
    <div className="card-header thing"> <h5>Yes/No</h5></div>
      <div className="card-body">      
        <p className="card-text">With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.</p>       
      </div>
      <div className="card-footer text-muted">
      <Link to={`/YesNo/${catId}`}><button className="btn btn-primary">Create Feedback Form</button></Link>
        </div>
        </div>
  </div>
  </div>
  <div className="col-sm-4">
  <div className=" text-center">
    <div className="card">
    <div className="card-header thing"> <h5>Multiple</h5></div>
      <div className="card-body">      
        <p className="card-text">With supporting text below as a natural lead-in to additional content. With supporting text below as a natural lead-in to additional content.</p>       
      </div>
      <div className="card-footer text-muted">
      <Link to={`/Multiple/${catId}`}><button className="btn btn-primary">Create Feedback Form</button></Link>
        </div>
</div>
      </div>
      </div>
    </div>
    </div>
    </div> 
    </div>
    );

  }

export default RatingType;
