import React, { useState } from 'react';
import { Typography, Box, Tabs, Tab, Stack, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';

import ClientCard from './clientCard';
import ClientCard1 from './clientCard1';
import ClientCard2 from './clientCard2';
import ClientCard3 from './clientCard3';
import ClientCard4 from './clientCard4';
import ClientCard5 from './clientCard5';
import ClientCard6 from './clientCard6';

const cards = [
  <ClientCard />,
  <ClientCard1 />,
  <ClientCard2 />,
  <ClientCard3 />,
  <ClientCard4 />,
  <ClientCard5 />,
  <ClientCard6 />
];

function Experience() {
  const theme = useTheme();
  const isMobileOrTablet = useMediaQuery(theme.breakpoints.down('md'));
  const [tab, setTab] = useState(0);

  return (
    <>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ textAlign: 'center', mb: 2 }}
      >
        Professional Experience
      </Typography>

      {isMobileOrTablet && (
        <Box>
          <Tabs
            value={tab}
            onChange={(e, newValue) => setTab(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            centered
          >
            {cards.map((_, index) => (
              <Tab key={index} label={`Client ${index + 1}`} />
            ))}
          </Tabs>

          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
            {cards[tab]}
          </Box>
        </Box>
      )}

      {!isMobileOrTablet && (
        <>
          <Stack direction="row" spacing={2} justifyContent="center">
            <ClientCard />
            <ClientCard1 />
            <ClientCard2 />
            <ClientCard3 />
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            mt={2}
          >
            <ClientCard4 />
            <ClientCard5 />
            <ClientCard6 />
          </Stack>
        </>
      )}
    </>
  );
}

export default Experience;
