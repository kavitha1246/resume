import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid
} from "@mui/material";

const skills = [
  {
    title: "Frontend Technologies",
    items: [
      "HTML", "CSS", "JavaScript", "Angular", "React",
      "Redux", "Redux Toolkit", "Material UI",
      "Bootstrap", "SASS"
    ]
  },
  {
    title: "Backend & APIs",
    items: [
      "Node.js", "Express.js", "REST APIs",
      "GraphQL", "Firebase"
    ]
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL"]
  },
  {
    title: "State Management",
    items: [
      "Redux", "Redux Toolkit",
      "Redux Thunk", "Context API"
    ]
  },
  {
    title: "Testing Frameworks",
    items: ["Jest", "Mocha", "Chai", "Cypress"]
  },
  {
    title: "Tools & DevOps",
    items: [
      "Git", "GitHub", "Docker",
      "Jenkins", "Webpack", "AWS"
    ]
  },
  {
    title: "Accessibility",
    items: [
      "WCAG", "ARIA", "ADA Compliance",
      "Keyboard Navigation"
    ]
  }
];

function SkillSet() {
  return (
    <>
      <Typography variant="h4" align="center" gutterBottom>
        Technical Skills
      </Typography>

      <Grid container spacing={2}>
        {skills.map((skill, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Card sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {skill.title}
                </Typography>

                <List dense>
                  {skill.items.map((item, i) => (
                    <ListItem key={i} disablePadding>
                      <ListItemText primary={`• ${item}`} />
                    </ListItem>
                  ))}
                </List>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
}

export default SkillSet;
