import { Typography } from "@mui/material";
import React from "react";
import "./Footer.css";
import resumeData from "../../utils/resumeData";
function CustomFooter() {
  return (
    <div className="footer">
      <div className="footer_left">
        <Typography className="footer_name">{resumeData.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Designed and Developed by{" "}
          <a
            href="https://www.linkedin.com/in/feriel-zarrouki-1ba917186/"
            target="_blank"
          >
            Feriel Zarrouki
          </a>
          <br></br>
          Clone idea from{" "}
          <a
            href="https://html.tavonline.co/mat/default/index.html"
            target="_blank"
          >
            Tavonline
          </a>
        </Typography>
      </div>
    </div>
  );
}

export default CustomFooter;
