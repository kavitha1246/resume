import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@mui/material";

function ClientCard2() {
  const [flipped, setFlipped] = useState(false);

  const points = [
    "Built Rich Prototypes and Applications using HTML5, CSS3, JavaScript, Ajax, JSON and Bootstrap.",
    "Developed client-side validation code using JavaScript and jQuery.",
    "Good Understanding of Document Object Model and DOM Functions.",
    "Extensively used/modified jQuery to perform AJAX calls for creating interactive web pages on JSON response",,
    "Experience with front end workflow tool like GIT, Bitbucket.",
    "Worked closely with UX/UI designers to translate designs and wireframes into high-quality code.",
    "Coded pages with best Search Engine Optimization (SEO) techniques. Developed call back functions to parse and handle JSON data returned from the server."
  ];

  return (
    <div
      style={{
        perspective: "1000px",
        width: 400,
        margin: "20px"
      }}
      onClick={() => setFlipped(!flipped)} // flip on click
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "200px",
          transformStyle: "preserve-3d",
          transition: "transform 0.8s",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
        {/* Front Side */}
        <Card
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            borderRadius: 3,
            boxShadow: 3
          }}
        >
          <CardContent>
             <Typography variant="h6" sx={{fontSize:'15px'}}>Charles Schwab, Edison, NJ </Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontSize:'10px'}}>
              Year: Jan 2014 – Dec 2014
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Role: UI Developer
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Technologies:HTML, CSS,Bootstrap, JSON, REST, GitHub, NPM, JavaScript, jQuery
            </Typography>
            <Typography variant="caption" color="text.secondary">
              (Click to see highlights)
            </Typography>
          </CardContent>
        </Card>

        {/* Back Side */}
        <Card
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
            borderRadius: 3,
            boxShadow: 3,
            overflow: "auto"
          }}
        >
          <CardContent>
            <Typography variant="subtitle1" sx={{ fontWeight: "bold" }}>
              Highlights:
            </Typography>
            <List dense>
              {points.map((point, index) => (
                <ListItem key={index} disablePadding>
                  <ListItemText primary={`• ${point}`} />
                </ListItem>
              ))}
            </List>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default ClientCard2;
