import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import { WebOutlined } from "@mui/icons-material";
export default {
  name: "Feriel Zarrouki",
  title: "Software Engineer | Full Stack Developer | Lead Web Instructor",
  birthday: "27th November 1999",
  email: "fzarrouki1999@gmail.com",
  address: "Ben Arous , Tunisia",
  phone: "+216 52366247",
  socials: {
    Facebook: {
      link: "https://www.facebook.com",
      text: "My Facebook",
      icon: <FacebookIcon />,
    },
    LinkedIn: {
      link: "https://www.facebook.com",
      text: "My LinkedIn",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://www.facebook.com",
      text: "My Github",
      icon: <GitHubIcon />,
    },
    Twitter: {
      link: "https://www.facebook.com",
      text: "My Twitter",
      icon: <TwitterIcon />,
    },
  },
  about:
    "I am a highly motivated software engineering student with a passion for technology and a drive to learn. \n As a Lead Web Development Instructor, I have the opportunity to share my expertise and help others grow their skills. I embrace challenges and am always eager to take on new projects that push me to my limits.\n \n My strong work ethic, combined with my ability to quickly adapt to new technologies, has enabled me to consistently deliver outstanding results. I am excited to connect with professionals in the tech industry and explore opportunities to further my growth and impact",
  experiences: [
    {
      title: "Web Development Instructor",
      place: "Master Class | Manouba,Tunisia",
      date: " Present - 2022",
      tasks: [
        "Planning and preparation of lessons and exercises for students.",
        "Development and training in MERN stack.",
      ],
    },
    {
      title: "Full Stack JS Developer",
      date: "Feb 2021 - Jul 2021 ",
      place: "Final Year Project | Telematik | Zaghouan,Tunisia",
      tasks: [
        "A web-based solution for vehicle position monitoring and traffic control driver behavior.",
        "Technologies used: VueJs, Express JS, Azure Table Storage, Redis, Postgresql, Git,Ulbotech T381.",
      ],
    }
  ],
  education: [
    {
      title: "National Diploma in Software Development Engineering",
      universiity: "Higher Institute of Computer Science | Ariana",
      date: "Present - Sept 2021",
      discreption: "",
    },
    {
      title: "Applied License in Information Systems Development",
      universiity: "Higher Institute of Technological Studies | Zaghouan",
      date: "Sep 2018 - Jul 2021",
      discreption: "Major of promotion",
    },
    {
      title: "Ben Arous Secondary School",
      universiity: "Bachelor in Mathematics | Ben Arous",
      date: "2018",
      discreption: "",
    },
  ],
  services:[
    {
      title:"Web Development",
      description:" I have a been a web Developer for 2 years",
      icon : <WebOutlined />
    },
    {
      title:"Mobile Development",
      description:" I have a been a web Developer for 2 years",
      icon : <WebOutlined />
    },
    {
      title:"Web Dev",
      description:" I have a been a web Developer for 2 years",
      icon : <WebOutlined />
    }
  ],
  skills:[
   {
    title:"FRONTEND",
    discreption:["ReactJS","JavaScript","TypeScript","Material UI","Bootstrap"]
   },
   {
    title:"BACKEND",
    discreption:["NodeJS","Java","Python","Material UI","Bootstrap"]
   },
   {
    title:"DATABASES",
    discreption:["Firebase","MySQL","postgreSQL","MongoDB","Table Storage","Redis"]
   },/*{
    title:"SOURCE CONTROL",
    discreption:["Git","GitHub","SCRUM/Agile"]
   }*/
  ]
};

/**
 * 
 * ,
    {
      title: "Web Developer",
      date: "Jan 2020 - Feb 2020",
      place: "Worker internship|The National Post Office|Tunis,Tunisia",
      tasks: [
        "A web application for managing and sharing files securely between several parts.",
        "Technologies used: Symfony 4, Windows Server, MySQL",
      ],
    },
    {
      title: " WordPress Developer",
      date: "Jul 2019 - Aug 2019",
      place: "Summer internship | Naxxum Mea | Lac2,Tunisia",
      tasks: [
        "Creation of an event management and advertising web application for the association `la voix de l'enfant Nabeul`.",
        "Technologies used: Wordpress, Elementor, MySQL",
      ],
    },
    {
      title: "Initiation Internship",
      date: "Jan 2019 - Feb 2019",
      place: "Sigma Conseil | Alain Savarey , Tunisia",
      tasks: [
        "Creation of animated promotional videos, advertising images.",
        "Participation in the company's anniversary ceremony.",
        "Technologies used: Animaker",
      ],
    },
 * 
 */