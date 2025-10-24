import React from "react";
import {
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
  Grid,
  Divider,
  Stack
} from "@mui/material";

const SkillSet = () => {
  const frontTechs = ["HTML","CSS","JavaScript",,"Angular 5","React","Redux","Redux Toolkit","Redux Thunk","Material UI","Bootstrap","LESS","GitHub","NPM","jQuery","SASS"];
  const backendTechs = ["Node.js","Express.js","MongoDB","MySQL","PostgreSQL","RESTful APIs","GraphQL","Firebase"];
  const databases = ["MongoDB","MySQL","PostgreSQL"];
  const stateTechs = ["Redux","Redux Toolkit","Redux Thunk","Redux Saga", "Context API"];
  const testingFrameworks = ["JEST","Mocha","Chai","Cypress"];
  const tools = ["Git","Docker","Jenkins","Webpack","Babel","ESLint","Prettier","Postman","AWS", "Kubernetes", "Jenkins", "Docker"];
  const methodologies = ["Agile","Scrum","Kanban"];
  const versionControl = ["Git","GitHub","Bitbucket"];
  const accessibility = ["WCAG","ARIA","ADA Compliance","Cross-Browser Support","Keyboard Navigation"];

  const categories = [
    { title: "Backend / Integration", items: backendTechs },
    { title: "Databases", items: databases },
    { title: "State Management", items: stateTechs },
    { title: "Testing Frameworks", items: testingFrameworks },
    { title: "Tools", items: tools }
  ];

    const categories1 = [
    { title: "Version Control Tools", items: versionControl },
    { title: "Accessibility", items: accessibility }]

  return (
    <>
          <Typography
        variant="h5"
        gutterBottom
        sx={{ fontWeight: 300, color: "#333" }}
      >
        Technical Skills
      </Typography>
    <div style={{  backgroundColor: "#f5f5f5", display: 'flex', flexDirection: 'row', gap: '5px' }}>
          <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
          backgroundColor: "#fff",
          overflow: "hidden"
        }}
      >
        <CardContent>
          <Typography
            variant="h6"    
            sx={{
              fontSize: "13px",
              fontWeight: "bold",
                color: "#222",
                whiteSpace: "nowrap",
                borderBottom: "1px solid #ccc",

            }}
            >
            Frontend Technologies
            </Typography>
            <List dense>
                {frontTechs.map((tech, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemText
                            primary={`• ${tech}`}
                            primaryTypographyProps={{
                                fontSize: 13,
                                color: "#444"
                            }}  
                        />
                    </ListItem>
                ))}
            </List>
        </CardContent>

      </Card>

      <Card
        sx={{
          borderRadius: 3,
          boxShadow: 3,
          backgroundColor: "#fff",
          overflow: "hidden",
          maxWidth: "100%",
          p: 2
        }}
      >
        <CardContent>
          <Grid
            container
            spacing={0}
            sx={{
              borderLeft: "1px solid #ddd",
              borderTop: "1px solid #ddd"
            }}
          >
            {categories.map((cat, idx) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={idx}
                sx={{
                  borderRight: "1px solid #ddd",
                  borderBottom: "1px solid #ddd",
                  p: 2,
                  "&:focus-within": { outline: "2px solid #1976d2" },
                  backgroundColor: "#fff"
                }}
              >
                <Typography
                  variant="h6"
                  sx={{
                    fontSize: "15px",
                    fontWeight: "bold",
                    color: "#222",
                    mb: 1,
                    borderBottom: "1px solid #ccc",
                    pb: 0.5
                  }}
                >
                  {cat.title}
                </Typography>
                <List dense>
                  {cat.items.map((point, index) => (
                    <ListItem key={index} disablePadding>
                      <ListItemText
                        primary={`• ${point}`}
                        primaryTypographyProps={{
                          fontSize: 13,
                          color: "#444"
                        }}
                      />
                    </ListItem>
                  ))}
                </List>
              </Grid>
            ))}
          </Grid>
        </CardContent>
      </Card>
      <Stack direction="column" spacing={0.5} sx={{width:'20%'}}>
      <Card>
        <CardContent>
          <Typography
            variant="body2"
            color="text.Primary"
            sx={{ fontSize: "12px", fontWeight: "bold",color: "#666" }}
          >
            Version Control Tools
          </Typography>
            <List dense>
                {versionControl.map((tech, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemText
                            primary={`• ${tech}`}
                            primaryTypographyProps={{
                                fontSize: 13,
                                color: "#444"
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </CardContent>
      </Card>

            <Card>
        <CardContent>
          <Typography
            variant="body2"
            color="text.Primary"
            sx={{ fontSize: "12px", fontWeight: "bold",color: "#666" }}
          >
            Accessibility
          </Typography>
            <List dense>
                {accessibility.map((tech, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemText
                            primary={`• ${tech}`}
                            primaryTypographyProps={{
                                fontSize: 13,
                                color: "#444"
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </CardContent>
      </Card>
                  <Card>
        <CardContent>
          <Typography
            variant="body2"
            color="text.Primary"
            sx={{ fontSize: "12px", fontWeight: "bold",color: "#666" }}
          >
            Methodologies
          </Typography>
            <List dense>
                {methodologies.map((tech, index) => (
                    <ListItem key={index} disablePadding>
                        <ListItemText
                            primary={`• ${tech}`}
                            primaryTypographyProps={{
                                fontSize: 13,
                                color: "#444"
                            }}
                        />
                    </ListItem>
                ))}
            </List>
        </CardContent>
      </Card>
      </Stack>
    </div>
    </>
  );
};

export default SkillSet;
