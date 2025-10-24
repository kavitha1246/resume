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
    "Developing the corporate website using ReactJS, HTML5, CSS3, Bootstrap",
    "Developed the responsive web design using the React Bootstrap to build the grids, layouts and components.",
    "Good Understanding of Document Object Model and DOM Functions.",
    "Applied optimization techniques to reduce page size and load times to enhance user experience using sprites.",,
    "Experience with front end workflow tool like GIT, Bitbucket.",
    "Proficient in building Responsive Web User Interfaces(UI) using HTML5,CSS3 Media Queries ,ReactJS and JavaScript that follows W3C Web Standards.",
    "Proficient in building Responsive Web User Interfaces(UI) using HTML5,CSS3 Media Queries ,ReactJS and JavaScript that follows W3C Web Standards."
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
            <Typography variant="h6" sx={{fontSize:'15px'}}>Vanguard, Wilmington, DE </Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontSize:'10px'}}>
              Year: June 2018 – Feb 2020
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Role: UI Developer
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Technologies: React,Redux,Redux Toolkit,Redux Thunk,HTML, CSS,Bootstrap, JSON, REST, GitHub, NPM, JavaScript, jQuery,Handlebars,FTL
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
