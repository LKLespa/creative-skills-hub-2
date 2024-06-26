import { Divider, Stack, Typography, Button, IconButton, Box } from "@mui/material";
import CourseCard from "./course_card";
import { useRef } from "react";
import { ArrowCircleLeft, ArrowCircleRight, } from "@mui/icons-material";
import EnrolledCourseCard from "./enrolled_course_card";

const CourseGroup = ({ title = "", courses = [], enrolledList = false }) => {
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
          {courses.map((course, index) => (
            enrolledList ? <EnrolledCourseCard key={index} id={index} course={course} /> :
            <CourseCard key={index} id={index} course={course} />
          ))}
        </div>
      </Stack>
      <Box><IconButton onClick={() => handleScroll(100)}><ArrowCircleRight sx={{fontSize: 50}}/></IconButton></Box>
      </Stack>
    </Stack>
  );
};

export default CourseGroup;
