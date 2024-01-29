//import ReviewRating from './ReviewRating';
import React, { useContext } from 'react';

import Badge from '@mui/joy/Badge';

import { Link } from "react-router-dom";
//import { RootState } from '../../../../src/store/reducers';
import Avatar from '@mui/material/Avatar';


export default function ReviewComment({  result}) {
  //const { claims } = useSelector(state => state.auth)
  //const { profile } = useSelector(state => state.profile)
  
 


  //console.log(ownerId)
  

  
  return (
    <>
      <div className="d-flex">
      <Link to={``} className="avatar avatar-xl rounded-circle min-width-50 min-height-50">
        <Avatar
          variant={"circle"}
          alt="User"
          className=""
          src=""
          /> 
        </Link>
        <div className="ps-4">
          <h6 className="mb-0">username</h6>  
          AuctionBids.bidder  
          
          

          <p className="text-sm mb-2"> ago </p>
         
          <p className="text-sm mt-4">result?.message</p>
        </div>
      </div>
      <hr className="dark horizontal" />
    </>
  );
};