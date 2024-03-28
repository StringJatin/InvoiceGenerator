import { Button, Typography } from "@mui/material";
import React from "react";
import StartIcon from '@mui/icons-material/Start';
import HeroImage from '../assets/HeroImage.jpg';
import '../styles/Hero.css';
const Hero = () => {
  return (
    <div className="mainDiv" style={{backgroundColor:"#00246B",borderBottomLeftRadius:"10%",borderBottomRightRadius:"10%"}}>
    <div className="HeroRoot">
      <div className="left">
        <div className="leftone">
          <Typography
            variant="h3"
            component="h2"
            style={{ fontFamily: "Poppins", fontWeight: "700" }}
          >
            Invoice Generator - Your Free Invoice Maker
          </Typography>
          <Typography className="subtitle"
            variant="subtitle1"
            style={{ fontFamily: "Poppins", fontWeight: "300",width:"50%" }}
          >
            Use Invoice Templates to Create Invoices Online Download, Print,
            Email Invoice with Invoice Generator
          </Typography>
        </div>
        <div className="lefttwo">
          <Button variant="contained" style={{backgroundColor:"#CADCFC", color:"#00246B"}} endIcon={<StartIcon />}>
            Create Invoice
          </Button>
        </div>
      </div>
      <div className="right">
      <div className="image-container">
        <img src={HeroImage} alt="Hero" className="image" />
        <div className="overlay"></div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Hero;
