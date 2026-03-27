import React from "react";
import { Button, Stack } from "@mui/material";
import { OpenInNew, Download } from "@mui/icons-material";
import resume from "./assets/Kavitha_UI_Developer.docx"; // exactly source file

const ResumeActions = () => {
  const resumePath = resume;

  const handleOpen = () => {
    window.open(resumePath, "_blank", "noopener,noreferrer");
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Kavitha_UI_Developer.docx";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
      <Button variant="contained" startIcon={<OpenInNew />} onClick={handleOpen}>
        Open Resume
      </Button>
      <Button variant="contained" color="secondary" startIcon={<Download />} onClick={handleDownload}>
        Download Resume
      </Button>
    </Stack>
  );
};

export default ResumeActions;