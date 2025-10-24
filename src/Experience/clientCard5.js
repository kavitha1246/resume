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
    "Responsible for developing the UI pages using Angular 5, HTML, CSS, and JavaScript.",
"Responsible for the style, look, and feel of the web page with SASS that extends CSS with dynamic behavior such as variables, operations, and functions.",
"Implemented HTTP requests using the RxJS Observable library to handle multiple values over time.",
"Used Angular CLI to create, build, and maintain Angular applications.",
"Worked with the JEST unit test framework to write unit tests for JavaScript code."

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
            <Typography variant="h6" sx={{fontSize:'15px'}}>JPMorgan Chase, Columbus,OH </Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontSize:'10px'}}>
              Year: Jan 2015 – May 2018
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Role: UI Developer
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Technologies:HTML, CSS,Bootstrap, JSON, REST, GitHub, NPM, JavaScript, angular5
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
