import React from "react";
import "./Resume.css";
import { Grid, Typography } from "@mui/material";
import resumeData from "../../utils/resumeData";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import WorkIcon from "@mui/icons-material/Work";
import SchoolIcon from "@mui/icons-material/School";
import {
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";

function Resume() {
  return (
    <>
      {/** About Me  */}
      <Grid container className="section pb_45">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">About Me</h6>
        </Grid>
        <Grid item xs={12}>
          <span></span>
          <Typography variant="body2" className="aboutme_text">
            {resumeData.about}
          </Typography>
        </Grid>
      </Grid>
      {/** Education and Experiences */}
      <Grid container className="section pb_45 ">
        <Grid item className="section_title mb_30">
          <span></span>
          <h6 className="section_title_text">Resume</h6>
        </Grid>
        <Grid item xs={12}>
          <Grid container className="resumeTimeline">
            {/** Experiences  */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title={"Work Experience"} icon={<SchoolIcon />}>
                {resumeData.experiences.map((experience) => {
                  return (
                    <TimelineItem>
                      <CustomTimelineSeparator />
                      <TimelineContent className="timeline_content">
                        <Typography className="timeline_title">
                          {experience.title}
                        </Typography>
                        <Typography className="timeline_place">
                          {experience.place}
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          {experience.date}
                        </Typography>
                        <ul className="timeline_tasks" variant="body2">
                          {experience.tasks.map((task) => {
                            return <li>{task}</li>;
                          })}
                        </ul>
                      </TimelineContent>
                    </TimelineItem>
                  );
                })}
              </CustomTimeline>
            </Grid>
            {/** Education  */}
            <Grid item sm={12} md={6}>
              <CustomTimeline title={"Education"} icon={<WorkIcon />}>
                {resumeData.education.map((item) => {
                  return (
                    <TimelineItem>
                      <CustomTimelineSeparator />
                      <TimelineContent className="timeline_content">
                        <Typography className="timeline_title">
                          {item.title}
                        </Typography>
                        <Typography className="timeline_place">
                          {item.universiity}
                        </Typography>
                        <Typography variant="caption" className="timeline_date">
                          {item.date}
                        </Typography>
                        <Typography className="timeline_tasks">
                          {item.discreption != null ? item.discreption : null}
                        </Typography>
                      </TimelineContent>
                    </TimelineItem>
                  );
                })}
              </CustomTimeline>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/** Services */}
      <Grid container className="section"></Grid>
      {/** Skills */}
      <Grid container className="section"></Grid>
      {/**  Contact */}
      <Grid container className="section"></Grid>
    </>
  );
}

export default Resume;
