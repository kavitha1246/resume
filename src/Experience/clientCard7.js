import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@mui/material";

function ClientCard7() {
  const [flipped, setFlipped] = useState(false);

  const points = [
    "Architected scalable React.js applications using functional components, Hooks, and TypeScript to support high‑volume financial transactions.",
    "Implemented advanced state management using Redux Toolkit with normalized store design for maintainability and scalability.",
    "Developed reusable component libraries using Material UI and Storybook aligned with enterprise design systems.",
    "Integrated REST APIs and microservices to enable seamless communication between React frontend and backend systems.",
    "Improved application performance through lazy loading, memorization, and bundle optimization using Webpack.",
    "Collaborated with UX designers and backend engineers to deliver accessible, WCAG‑compliant enterprise user interfaces.",
    "Designed and developed scalable REST APIs using Spring Boot, following layered architecture (Controller, Service, Repository) to support microservices-based applications.",
    "Implemented asynchronous API integration using Redux Thunk, enabling efficient handling of side effects, API calls, and state updates in React applications.",
    "Designed and managed centralized state using Redux Toolkit with Thunk middleware, improving data flow, reducing boilerplate code, and ensuring scalable API interaction patterns across the application.",
    "Components for the UX-Library consisted of Button, Checkbox, Input, Icons, Toggle Button, Dropdown, Multi-Level Dropdown, and many more."
  ];

  return (
    <div
      style={{
        perspective: "1000px",
        width: 400,
        margin: "20px"
      }}
      onClick={() => setFlipped(!flipped)}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "240px",
          transformStyle: "preserve-3d",
          transition: "transform 0.8s",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)"
        }}
      >
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
            <Typography variant="h6" sx={{ fontSize: "15px" }}>
              Infosys – Client: Bank of New York Mellon, NY
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ fontSize: "10px" }}>
              Nov 2025 – Present
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Role: Technology Lead (Senior UI Developer)
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Technologies: React, TypeScript, Redux Toolkit, Material UI, Storybook, Webpack, Spring Boot
            </Typography>
            <Typography variant="caption" color="text.secondary">
              (Click to see highlights)
            </Typography>
          </CardContent>
        </Card>

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

export default ClientCard7;
