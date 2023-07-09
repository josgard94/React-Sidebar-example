import Sidebar from "./components/sidebar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, Container, Toolbar } from "@mui/material";
import Home from "./pages/home";
import Cats from "./pages/cats";
import Dogs from "./pages/dogs";

function App() {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <Sidebar />
        <Toolbar />
        <Box>
          <Container maxWidth="lg">
            {
              <Routes>
                <Route exact path={"/"} element={<Home/>} />
                <Route exact path={"React-Sidebar-example"} element={<Home/>}/>
                <Route path={"/cats"} element={<Cats/>} />
                <Route path={"/dogs"} element={<Dogs/>} />
                <Route
                  path="*"
                  element={<h1>404</h1>}
                />
              </Routes>
            }
          </Container>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
