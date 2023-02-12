import React from "react";
import "./Resume.css";
import { Grid, TextField, Typography ,Icon, Paper } from "@mui/material";
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
import CustomButton from "../Button/Button";

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
      {/** Services */
      /*<Grid container className="section pb_45  mb_30">
        <Grid item className="section_title mb_30">
            <span></span>
            <h6 className="section_title_text">Services</h6>
          </Grid>
       <Grid item xs={12} >
        <Grid container spacing={3} justify="space-around">
           {resumeData.services.map((key)=>{
            return(
              <Grid item xs={12} sm={6} md={3} >
                <div className='service'>
                  <Icon className='service_icon'>{key.icon}</Icon>
                  <Typography variant="h6" className='service_title'>{key.title}</Typography>
                  <Typography variant="body2" className='service_desc'>{key.description}</Typography>
                </div>

              </Grid>
            );
           })}
        </Grid>
       </Grid>
     
      </Grid> */}

      {/** Skills */}
      <Grid container className="section pb_45">
            <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">Skills</h6>
            </Grid>
            <Grid container>
                {resumeData.skills.map((skill)=>{
                return(
                  <Grid item xs={12} sm={6} md={3} lg={4} className="section">
                    <Paper elevation={0} className="skill">
                      <Typography variant="h6" className="skill_title">
                        {skill.title}
                      </Typography>
                      {skill.discreption.map(el=>{
                        return(
                          <Typography  variant="body2" className="skill_desc">
                            <TimelineDot variant={'outlined'} className="timeline_dot">
                            </TimelineDot>
                            {el}
                          </Typography>
                        );
                      })}
                    </Paper>
                  </Grid>
                );
                })}
            </Grid>
            
      </Grid>

      {/**  Contact */}
      <Grid container className="section pb_45 pt_45" spacing={7}>
          {/**  Contact Form */}
        <Grid item xs={12} lg={7}>
           <Grid container>
            <Grid item className="section_title mb_30">
              <span></span>
              <h6 className="section_title_text">Contact Form</h6>
            </Grid>

            <Grid item xs={12}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6} >
                   <TextField fullWidth name="name" label="Name" />
                </Grid>
                <Grid item xs={12} sm={6} >
                   <TextField fullWidth name="email" label="Email" />
                </Grid>
                <Grid item xs={12}>
                   <TextField fullWidth name="message" label="Message" multiline rows={4}/>
                </Grid>
                <Grid item xs={12}>
                   <CustomButton text={"Submit"} ></CustomButton>
                </Grid>


              </Grid>
              </Grid>
           </Grid>
        </Grid>
           {/**  Contact Information */}
        <Grid item xs={12} lg={5} className="section pb_45 pt_45">
          <Grid container >
              <Grid item className="section_title mb_30">
                <span></span>
                <h6 className="section_title_text">Contact Information</h6>
              </Grid>
              <Grid item  xs={12}>
                <Grid container >
                <Grid item>
                  <Typography  className="contactInfo_item">
                    <span>Address: </span>{resumeData.address}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography  className="contactInfo_item">
                    <span>Phone: </span>{resumeData.phone}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography  className="contactInfo_item">
                    <span>Email:</span>{resumeData.email}
                  </Typography>
                </Grid>

                </Grid>
              </Grid>
              <Grid item xs={12} >
                <Grid container className="contactInfo_socialsContainer">
                   {Object.keys(resumeData.socials).map((key)=>{
                   return(
                    <Grid item className="contactInfo_social">
                      <a href={resumeData.socials[key].link}>{resumeData.socials[key].icon}</a>
                    </Grid>);
                   })}
                </Grid>
              </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

export default Resume;
