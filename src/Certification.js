import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";
import imgSrc from './assets/certification.png'

const Certifications = () => {


  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px' }}>
      <Typography variant="h5" gutterBottom>
        Certifications        
      </Typography>
       <img src={imgSrc} />
       <Typography variant="h6" gutterBottom>AWS Certified Solutions Architect – Associate </Typography>
    </div>
  );
};

export default Certifications;
