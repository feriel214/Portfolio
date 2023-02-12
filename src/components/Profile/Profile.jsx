import React from "react";
import "./Profile.css";
import profileImage from "../../assets/img/me.jpeg";
import CustomTimeline, { CustomTimelineSeparator } from "../Timeline/Timeline";
import resumeData from "../../utils/resumeData";
import { PersonOutlineOutlined } from "@mui/icons-material";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import { Typography } from "@mui/material";
import CustomButton from "../Button/Button";
import DownloadIcon from "@mui/icons-material/Download";
const CustomTimelineItem = ({ title, text, link }) => {
  return (
    <TimelineItem>
      <CustomTimelineSeparator />
      <TimelineContent className="timeline_content">
        {link ? (
          <Typography className="timelineItem_text">
            <span>{title} : </span>
            <a href={link} target="_blank">
              {text}
            </a>
          </Typography>
        ) : (
          <Typography className="timelineItem_text">
            <span>{title} : </span>
            {text}
          </Typography>
        )}
      </TimelineContent>
    </TimelineItem>
  );
};
function Profile() {
  return (
    <div className="profile container_shadow">
      <div className="profile_name">
        <Typography className="name">{resumeData.name}</Typography>
        <Typography className="title">{resumeData.title}</Typography>
      </div>
      <figure className="profile_image">
        <img src={profileImage} alt="profile image" />
      </figure>
      <div className="profile_information">
        <CustomTimeline icon={<PersonOutlineOutlined />}>
          <CustomTimelineItem title="Name" text={resumeData.name} />
          <CustomTimelineItem title="Title" text={resumeData.title} />
          <CustomTimelineItem title="Email" text={resumeData.email} />
          {Object.keys(resumeData.socials).map((key) => {
            return (
              <CustomTimelineItem
                title={key}
                text={resumeData.socials[key].text}
                link={resumeData.socials[key].link}
              />
            );
          })}
        </CustomTimeline>
        <br></br>
        <div className="button_container">
          <CustomButton
            text="Download Cv"
            icon={<DownloadIcon />}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
}

export default Profile;
