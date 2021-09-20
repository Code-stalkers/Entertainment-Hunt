import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBBtn } from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter backgroundColor='light' className='text-center text-lg-left'>
      <MDBContainer className='p-4'>
        <MDBRow>
          <MDBCol lg='6' md='12' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Footer Content</h5>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste atque ea quis molestias. Fugiat
              pariatur maxime quis culpa corporis vitae repudiandae aliquam voluptatem veniam, est atque
              cumque eum delectus sint!
            </p>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
              <MDBBtn>Primary</MDBBtn>
              </li>
              <li>
              <br/>

              <MDBBtn>Primary</MDBBtn>
              </li>
              <li>
              <br/>

              <MDBBtn>Primary</MDBBtn>
              </li>
              <br/>
              <li>
              <MDBBtn>Primary</MDBBtn>
              </li>
            </ul>
          </MDBCol>

          <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
            <h5 className='text-uppercase'>Links</h5>

            <ul className='list-unstyled mb-0'>
              <li>
              <MDBBtn>Primary</MDBBtn>
              </li>
              <li>
              <br/>

              <MDBBtn>Primary</MDBBtn>
              </li>
              <li>
              <br/>

              <MDBBtn>Primary</MDBBtn>
              </li>
              <br/>
              <li>
              <MDBBtn>Primary</MDBBtn>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        &copy; {new Date().getFullYear()}{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
  );
}