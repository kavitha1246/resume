import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@mui/material";

function ClientCard() {
  const [flipped, setFlipped] = useState(false);

  const points = [
    "Developed and maintained web applications using React.js, ensuring high performance and responsiveness.",
    "Designed and developed responsive, scalable, and high-performance UIs using React.js, Material UI, and TypeScript.",
    "Customized Material UI themes and component styles using TypeScript interfaces for consistent design and type safety.",
    "Implemented state management using Redux to handle complex application states efficiently.",
    "Worked closely with UX/UI designers to translate designs and wireframes into high-quality code.",
    "Created reusable and generic components in TypeScript to streamline UI development and reduce duplication.",
    "Utilized Agile methodologies to manage project timelines and deliverables effectively.",
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
            <Typography variant="body2" sx={{fontSize:'10px'}}color="text.secondary">
              Year: Sep 2024 – Present
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Role: UI Developer
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Technologies: React JS, ReduxToolkit, JavaScript, Redux Thunk,HTML5, TypeScript, Material UI, RESTful APIs
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

export default ClientCard;
