import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@mui/material";

function ClientCard1() {
  const [flipped, setFlipped] = useState(false);

  const points = [
    "Develop various screens for the front end using React Js and used various predefined components from NPM(Node Package Manager) and Redux library.",
    "Developed user interface by using the Ract JS,Redux for SPA development..",
    "Working with React Router for developing Single Page Applications SPAs.",
    "Good experience of debugging.",
    "Worked closely with UX/UI designers to translate designs and wireframes into high-quality code.",
    "Created reusable and generic components in TypeScript to streamline UI development and reduce duplication.",
    "Used Object Oriented Programming concepts to develop UI components that could be reused across the Web Application.",
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
            <Typography variant="h6" sx={{fontSize:'15px'}}>Verizon(Via Infosys)</Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontSize:'10px'}}>
              Year: JAN,2024 - Sep,2024
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Role: UI Developer
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Technologies: React JS,  JavaScript, HTML5, CSS3, Redux Toolkit, Reduc Thunk, Bit Bucket, RESTful APIs
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

export default ClientCard1;
