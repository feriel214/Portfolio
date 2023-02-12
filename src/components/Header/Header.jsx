import { HomeRounded, Telegram } from "@mui/icons-material";
import React from "react";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Link, NavLink, withRouter, useNavigate } from "react-router-dom";
import resumeData from "../../utils/resumeData";
import CustomButton from "../Button/Button";

function CustomHeader(props) {
  const pathName = props?.location?.pathname;
  return (
    <Navbar expand="lg" sticky="top" className="header">
      {/** Home Link */}
      <Nav.Link as={NavLink} to="/" className="header_navlink">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle></Navbar.Toggle>
      <Navbar.Collapse>
        <Nav className="header_left">
          {/** Resume Link  */}
          <Nav.Link
            as={NavLink}
            to="/"
            className={pathName === "/" ? "header_link_active" : "header_link"}
          >
            Resume
          </Nav.Link>
          {/** Portfolio Link  */}
          <Nav.Link
            as={NavLink}
            to="/portfolio"
            className={
              pathName === "/portfolio" ? "header_link_active" : "header_link"
            }
          >
            Portfolio
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(resumeData.socials).map((key) => {
            return (
              <a href={resumeData.socials[key].link} target="_blank">
                {resumeData.socials[key].icon}
              </a>
            );
          })}
          <CustomButton text={"Hire Me"} icon={<Telegram />}></CustomButton>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CustomHeader;
