import React, { useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@mui/material";

function ClientCard3() {
  const [flipped, setFlipped] = useState(false);

  const points = [
    "Design, develop and test HTML5, CSS3, JavaScript and NextJS that meets accessibility and web browser standards for website.",
    "Developed single page applications and Micro services, using NodeJS and React libraries and Manage continuous integration and deployment for microservices in the AWS platform using (Kubernetes Cluster, Docker, Nginx Proxy, Nexus, Jenkins and GitLab).",
    "Involved in the CI/CD deployment using Jenkins and Dockers",
    "Experienced in Creating EC2 instances and Deploying in EKS Cluster.",
    "Used Object Oriented Programming concepts to develop UI components that could be reused across the Web Application.",
    "Used Middleware, Redux Saga application to retrieve data from Back-End and to also perform RESTFUL services.",
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
            <Typography variant="h6" sx={{fontSize:'15px'}}>Toyota Financial Services, TX</Typography>
            <Typography variant="body2" color="text.secondary" sx={{fontSize:'10px'}}>
              Year: March 2020 – Nov 2022
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Role: UI Developer
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Technologies: React,next js,Redux,Redux Toolkit,Redux Thunk,HTML, CSS,Bootstrap, JSON, REST, GitHub, NPM, JavaScript, jQuery,Handlebars,FTL
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

export default ClientCard3;
