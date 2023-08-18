import React from 'react';
import College from '../images/college.jpg';
import Highschool from '../images/highschool.jpg';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage
} from 'mdb-react-ui-kit';

const Education = () => {
  return (
    <>
    <h1 className='educationHeading'>My <b>Education</b></h1>
      <MDBCard className='card'>
        <MDBCardImage position='top' src={Highschool} alt="" />
        <MDBCardBody>
          <MDBCardText>
            <b><strong>Joyland School Inc.</strong></b><br />
            Highschool — 2019<br /><br />
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Graduated with High Honors<br />Best in Computer</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className='card'>
        <MDBCardImage position='top' src={Highschool} alt="" />
        <MDBCardBody>
          <MDBCardText>
            <b><strong>Joyland School Inc.</strong></b><br />
            Senior Highschool — 2021<br /><br />
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Graduated with High Honors<br />Loyalty Awarde</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className='card'>
        <MDBCardImage position='top' src={College} alt="" />
        <MDBCardBody>
          <MDBCardText>
            <b><strong>Phinma University of Pangasinan</strong></b><br />
            Present<br /><br />
          </MDBCardText>
          <MDBCardText>
            <small className='text-muted'>Currently studying at UPANG as a third-year BSIT student majoring in web development</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  );
}

export default Education