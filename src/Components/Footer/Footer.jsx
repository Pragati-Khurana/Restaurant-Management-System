import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './Footer.css';

const Footer = () => {
  return (
    <div className='p-5' style={{ backgroundColor: "black", color: "white"}}>
        <Container>
            <Row className='pb-5'>
                <Col sm={6} md={3}>
                    <div className='footer-heading'>
                        Bouffe
                    </div>
                    <div className='footer-content'>
                        <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget arcu. In enim justo rhoncus ut imperdiet a venenatis.</p>
                    </div>
                </Col>
                <Col sm={6} md={3}>
                    <div className='footer-heading'>
                        ADDRESS
                    </div>
                    <div className='footer-content'>
                        <p>
                            Via Stella Street, 22 Loria<br />
                            Modena MO, Italy<br />
                            +390 59 223 912<br />
                            info@bouffepub.com
                        </p>
                    </div>
                </Col>
                <Col sm={6} md={3}>
                    <div className='footer-heading'>
                        CONTACT US
                    </div>
                    <div className='footer-content'>
                        <p>P: +1 530 347 4607<br />
                            M: +1 693 269 9812<br />
                            F: +198 546 7498<br />
                            info@bouffepub.com
                        </p>
                    </div>
                </Col>
                <Col sm={6} md={3}>
                    <div className='footer-heading'>
                         WORKING HOURS
                    </div>
                    <div className='footer-content'>
                        <p>
                        Monday – Friday:	09:00 – 23:30<br />
                        Saturday:	09:00 – 00:30<br />
                        Sunday:	11:00 – 23:00
                        </p>
                    </div>
                </Col>
            </Row>
            <Row className="justify-content-between">
                <Col sm={6} md={4} lg={4} xl={3}>
                    <div className='footer-content'>
                        <p>2023 © Bouffe Bar & Restaurant. All rights reserved.</p>
                    </div>
                </Col>
                <Col sm={6} md={5} lg={4} xl={3}>
                    <span className='px-3 footer-icon'><TwitterIcon /></span>
                    <span className='px-3 footer-icon'><YouTubeIcon /></span>
                    <span className='px-3 footer-icon'><FacebookIcon /></span>
                    <span className='px-3 footer-icon'><InstagramIcon /></span>
                </Col>
            </Row>
        </Container>
    </div>
  ) 
}

export default Footer
