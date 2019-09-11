import React from "react";
import { MDBCol, MDBMask, MDBIcon, MDBView} from "mdbreact";

const SectionItem = ({ data }) => {
  return (
   
      <MDBCol lg="4" md="12" className="mb-lg-0 mb-4">
        <MDBView hover className="rounded z-depth-2 mb-4" waves>
          <img
            className="img-fluid"
            src={data.img}
            alt=""
          />
          <MDBMask overlay="white-slight" />
        </MDBView>
        {/* <a href="#!" className="pink-text">
          <h6 className="font-weight-bold mb-3">
            <MDBIcon icon="map" className="pr-2" />
            {data.tag}
              </h6>
        </a> */}
        <h4 className="font-weight-bold mb-3">
          <strong>{data.title}</strong>
        </h4>
        <p className="dark-grey-text">
         {data.text}
            </p>
            <button type="button" class="btn btn-primary" onClick={data.buttonAction}>Read More</button>
      </MDBCol>
  );
}

export default SectionItem;