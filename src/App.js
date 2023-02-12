import { Container, Grid } from "@mui/material";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Profile from "./components/Profile/Profile";
import CustomHeader from "./components/Header/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CustomFooter from "./components/Footer/Footer";
function App() {
  return (
    <Container className="top_60">
      <Grid container spacing={7}>
        <Grid item lg={3} md={4} sm={12} xs={12}>
          <Profile />
        </Grid>
        <Grid xs>
          <Router>
            <CustomHeader />
            <div className="main-content container-shadow">
              <Routes>
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/" element={<Resume />} />
              </Routes>
            </div>
          </Router>
          <CustomFooter />
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
