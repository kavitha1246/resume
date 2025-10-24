import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const TenSentencesList = () => {
  const sentences = [
    "Over 10+ years of IT experience as a UI Developer, specializing in building scalable and user-friendly web applications.",
    "Experienced in Banking, Insurance, and Finance domains, handling development, production support, and maintenance projects.",
    "Extensive expertise in React JS, JavaScript, HTML5, CSS3, SASS, LESS, Redux, jQuery, JSON, Node.js, Ajax, and Bootstrap.",
    "Strong knowledge in developing Single Page Applications (SPAs) with modern frameworks and libraries.",
    "Skilled in DOM analysis, JavaScript functions, and cross-browser styling using Developer Tools like Firebug and Chrome DevTools.",
    "Hands-on experience integrating RESTful APIs using Axios and Fetch API for seamless client-server communication.",
    "Proficient with version control tools like Git, GitHub, and Bitbucket, ensuring efficient code management and collaboration.",
    "Extensive work with React.js components, Forms, Events, Router, Redux, Animations, and Flux concepts.",
    "Strong experience with Agile Scrum methodology, bug tracking tools (JIRA), and build tools like Webpack, Babel, NPM, and Yarn.",
    "Adept at UI designing using Bootstrap, CSS3, JavaScript, jQuery, lazy loading techniques, and creating custom reusable React component libraries.",
    "Experience in using React JS components, Forms, Events, Keys, Router, plus Redux and Flux concept.",
    "Familiarity with Agile Scrum methodology, bug tracking tools like JIRA, and build tools such as Webpack, Babel, NPM, and Yarn.",
    "Experience in React JS framework to develop the SPA.",
    "Experienced in working with Redux architecture using complex Object-Oriented concepts in improving the performance of the websites.",
    "Expertise in using IDE tools such as Notepad ++, Visual Studio Code, Eclipse."
  ];

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        Professional Summary
      </Typography>
      <List>
        {sentences.map((sentence, index) => (
          <ListItem key={index} sx={{ padding: "2px 0" }}>
            <ListItemText primary={`${index + 1}. ${sentence}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default TenSentencesList;
