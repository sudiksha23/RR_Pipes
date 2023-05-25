
import {AiFillHome, AiOutlineMail} from "react-icons/ai"
import {FaFacebookF} from "react-icons/fa"
import {BiMap} from "react-icons/bi"
import {TbBuildingFactory2} from "react-icons/tb"
import {BsTwitter,BsInstagram, BsLinkedin,BsFillTelephoneFill,BsFillBalloonHeartFill} from "react-icons/bs"
import { MDBFooter, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';


const Footer= () => {
    return (
      <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center text-center'style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        <div className='me-5 d-none d-lg-block mt-4'>
          <h2> Contact Us</h2>
          <p>Drop by, give us a ring, send us an email or connect with us on secial networks.</p>
          <p>We had love to hear from you and happy to answer your queries</p>
        </div>
        </section>
        <section className="p-4 border-bottom justify-content-center d-flex">
        <div>
        <a href='' className='me-4 text-reset'>
              <FaFacebookF />
            </a>
            <a href='' className='me-4 text-reset'>
              <BsTwitter />
            </a>
          
            <a href='' className='me-4 text-reset'>
              <BsInstagram />
            </a>
            <a href='' className='me-4 text-reset'>
              <BsLinkedin />
            </a>
        </div>
      </section>
  
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-3 '>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
            <BsFillTelephoneFill className="mb-4" size={25}/>
              <h6 className='text-uppercase fw-bold mb-4 '>
                
                Mobile Number
              </h6>
              <p>
                8109184735
              </p>
              <p>
                9329412762
              </p>
            </MDBCol>
  
            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <BiMap className="mb-4 " size={30}/>
              <h6 className='text-uppercase fw-bold mb-4'>Address</h6>
              <p>
              <TbBuildingFactory2 className="me-2"/> Sector 3, Pithampur
              </p>
              <p>
               <AiFillHome className="me-2"/>Home : Kodariya
              </p>
            </MDBCol>
  
          
  
            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <AiOutlineMail className="mb-4 " size={30}/>
              <h6 className='text-uppercase fw-bold mb-4'>Email Address</h6>
              <p>
                naman9agrawal@gmail.com
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
  
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
       <p> © 2023 Copyright: Ridam Radiant</p>
       <p> Made with <BsFillBalloonHeartFill/> in India</p>
        
      </div>
    </MDBFooter>
    )
  }

  export default Footer