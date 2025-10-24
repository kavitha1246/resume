import React from "react";
import { Card, CardContent, Typography, List, ListItem, ListItemIcon, ListItemText, Link } from "@mui/material";
import { Email, Phone, LinkedIn, GitHub } from "@mui/icons-material";

const Contact = () => {
  const contacts = [
    { type: "Email", value: "kavithapasula1246@gmail.com", icon: <Email />, link: "mailto:kavithapasula1246@gmail.com" },
    { type: "Phone", value: "+1 848 209 7488", icon: <Phone />, link: "tel:+18482097488" },
    { type: "LinkedIn", value: "linkedin.com/in/kavithapasula", icon: <LinkedIn />, link: "https://linkedin.com/in/kavithapasula" },
    { type: "GitHub", value: "github.com/yourusername", icon: <GitHub />, link: "https://github.com/yourusername" },
  ];

  return (
    <Card sx={{ borderRadius: 3, boxShadow: 3, p: 2, mb: 3 }}>
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>
          Contact
        </Typography>
        <List dense>
          {contacts.map((contact, idx) => (
            <ListItem key={idx} disablePadding>
              <ListItemIcon>{contact.icon}</ListItemIcon>
              <ListItemText
                primary={
                  <Link href={contact.link} target="_blank" rel="noopener" underline="hover">
                    {contact.value}
                  </Link>
                }
              />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default Contact;
