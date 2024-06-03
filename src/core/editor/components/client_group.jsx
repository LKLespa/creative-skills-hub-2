import { Divider, Stack, Typography, Button, IconButton, Box } from "@mui/material";
import { useRef } from "react";
import { ArrowCircleLeft, ArrowCircleRight, } from "@mui/icons-material";
import ClientCard from "./client_card";

const ClientGroup = ({ title = "", clients = [] }) => {
  const scrollContainerRef = useRef();

  // TODO: Fix scrolling
  const handleScroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft += scrollOffset;
      console.log("Ref", scrollContainerRef.current);
    }
  };
  return (
    <Stack spacing={2}>
      <Typography variant="h5" sx={{ fontWeight: 600 }}>
        {title}
      </Typography>
      <Stack direction='row' alignItems='center'>
      <Box><IconButton onClick={() => handleScroll(-100)}><ArrowCircleLeft  sx={{fontSize: 50}}/></IconButton></Box>
      <Stack direction="row" spacing={2} sx={{ overflowY: 'visible', overflowX: "auto", height: 'fit-content', paddingY: 2, position: 'relative' }}>
        <div ref={scrollContainerRef} style={{ display: 'flex' }}>
          {clients.map((client, index) => (
            <ClientCard key={index} id={index} client={client} />
          ))}
        </div>
      </Stack>
      <Box><IconButton onClick={() => handleScroll(100)}><ArrowCircleRight sx={{fontSize: 50}}/></IconButton></Box>
      </Stack>
    </Stack>
  );
};

export default ClientGroup;
