import React from 'react';
import ClientCard from './clientCard';
import ClientCard1 from './clientCard1';
import ClientCard2 from './clientCard2';
import ClientCard3 from './clientCard3';
import ClientCard4 from './clientCard4';
import ClientCard5 from './clientCard5';
import ClientCard6 from './clientCard6';
import { Typography } from '@mui/material';
import { Stack } from '@mui/material';

function Experience() {
  return (
    <>
        <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', marginBottom: 0}}>
      Professional Experience
    </Typography>
    <Stack direction="row" sx={{width:'100%',height:'50%'}}>
        <ClientCard />
        <ClientCard1 />
        <ClientCard2 />
        <ClientCard3 />
        </Stack>
        <Stack direction="row" sx={{width:'100%',height:'50%',marginTop:0}}>
        <ClientCard4 />
        <ClientCard5 />
        <ClientCard6 />
        
        </Stack>

    </>
  );
}
export default Experience;