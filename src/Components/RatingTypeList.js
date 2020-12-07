import React from "react";
function RatingTypeList(props){
const ratingDetails=props.ratingDetails;
const ratingList=props.ratingDetails.ratingList;
   
        return(           
            <div>
     <div className="col" >
    <ul className="list-group list-group1">
 
  <li className="list-group-item active">{ratingDetails.ratingType}</li>
 
        { ratingList.map((rating,index)=>(
            <li className="list-group-item" key={index}>
                {rating.name}
                </li>
        )
        )}

  


</ul>
</div>
            </div>
        )
    
}
export default RatingTypeList;
