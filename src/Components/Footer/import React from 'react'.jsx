import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

, width: "100%", position: "absolute", bottom: "0"

const Footer = () => {
  return (
    <div className='' style={{ backgroundColor: "black", color: "white"}}>
        <div className='row justify-content-center'>
            <div className='col'>
                <div>
                    <h1>Bouffe</h1>
                </div>
                <div style={{width: '15vw'}}>
                    <p>Donec pede justo, fringilla vel, aliquet nec, vulputate eget arcu. In enim justo rhoncus ut imperdiet a venenatis.</p>
                </div>
            </div>
            <div className='col'>
                <div className='d-flex flex-row justify-content-evenly'>
                    <p className='px-2'><TwitterIcon /></p>
                    <p className='px-2'><YouTubeIcon /></p>
                    <p className='px-2'><FacebookIcon /></p>
                    <p className='px-2'><InstagramIcon /></p>
                </div>
            </div>
        </div>
    </div>
  ) 
}

export default Footer
