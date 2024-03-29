import { Paper, Typography } from "@mui/material";
import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import '../styles/Heading.css';
import { updateCurrentStep,selectCurrentStep } from "../slices/formSlice";
import { useDispatch, useSelector } from "react-redux";

const Heading = () => {
    const dispatch = useDispatch();
    const currentStep = useSelector(selectCurrentStep);
    const handleCurrentStepChange = (num)=>{
        dispatch(updateCurrentStep(num));
    }
  return (
    <div style={{display:"flex",justifyContent:"center",flexDirection:"column",textAlign:"center",margin:"2%"}}>
      <div className="mainHeading" >
        <Typography variant="h4" gutterBottom style={{fontFamily:"Poppins"}}>
          Create Your Invoice in Less than 2 Minutes
        </Typography>
      </div>
      <div className="navtabs" style={{display:"flex", justifyContent:"center"}}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Paper
          className="numberPaper"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 30,
              height: 30,
              borderRadius: "50%",
              backgroundColor: currentStep === 1 ? "#00246B" : "white", 
              color: currentStep === 1 ? "white" : "black",
              marginRight:"7px",
              border:"1px solid black"
            }}
          >
            <Typography variant="subtitle1" align="center" >
              1
            </Typography>
          </Paper>
          <Typography variant="subtitle1" align="center">
            Invoice Details
          </Typography>
          <KeyboardArrowRightIcon style={{ fontSize: 40 }} />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Paper
          className="numberPaper"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 30,
              height: 30,
              borderRadius: "50%",
              backgroundColor: currentStep === 2 ? "#00246B" : "white", 
              color: currentStep === 2 ? "white" : "black",
              marginRight:"7px",
              border:"1px solid black"

            }}
          >
            <Typography variant="subtitle1" align="center">
              2
            </Typography>
          </Paper>
          <Typography variant="subtitle1" align="center">
          Your Bank Details
                    </Typography>
          <KeyboardArrowRightIcon style={{ fontSize: 40 }} />
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Paper
          className="numberPaper"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: 30,
              height: 30,
              borderRadius: "50%",
              backgroundColor: currentStep === 3 ? "#00246B" : "white", 
              color: currentStep === 3 ? "white" : "black",
              marginRight:"7px",
              border:"1px solid black"

            }}
          >
            <Typography variant="subtitle1" align="center">
              3
            </Typography>
          </Paper>
          <Typography variant="subtitle1" align="center">
            Download PDF
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Heading;
