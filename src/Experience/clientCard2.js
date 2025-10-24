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
    "Involved designing in web pages using HTML 5, CSS3,React Js, Redux,Redux Toolkit,Redux Thunk,JavaScript, Bootstrap, SASS, LESS.",
    "Strong front-end UI development skills using scripting languages like  HTML5,CSS3,Javascript,JQuery, AJAX.",
    "Good Understanding of Document Object Model and DOM Functions.",
    "Designed front-end framework with React.js using functional component. Very familiar with the properties of component, states, props, and refs.",
    "Hands on using React Hooks and custom Hooks.",
    "Experience with front end workflow tool like GIT, Bitbucket.",
    "Developed middleware like Redux Thunk which can return functions to solve async problems like data updating and fetch from backend server.",
    "Worked with RESTful APIs to integrate backend services and ensure seamless data flow within the application."
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
            <Typography variant="h6" sx={{fontSize:'15px'}}>Bank of America(Via Infosys)</Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontSize:'10px'}}>
              Year: DEC,2022-JAN,2024
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
