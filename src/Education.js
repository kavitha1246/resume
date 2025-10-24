import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const Education = () => {
  const sentences = [
    "Bachelor of Engineering in Electrical and Electronics from Kakatiya Institute and Technology and Science, Kakatiya University, Warangal, India-2008.",
     "Master’s in engineering from Osmania University, Hyderabad, India-2011."    
  ];

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Educational Qualifications:
      </Typography>
      <List>
        {sentences.map((sentence, index) => (
          <ListItem key={index} sx={{ padding: "2px 0" }}>
            <ListItemText primary={`${index + 1}. ${sentence}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default Education;
