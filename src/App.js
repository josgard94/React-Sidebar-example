import Sidebar from "./components/sidebar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, Container, Toolbar } from "@mui/material";
import Home from "./pages/home";
import Cats from "./pages/cats";
import Dogs from "./pages/dogs";
import ErrorPage from "./pages/404";

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
                <Route exact path={"React-Sidebar-example/"} element={<Home/>} />
                <Route path={"React-Sidebar-example/cats"} element={<Cats/>} />
                <Route path={"React-Sidebar-example/dogs"} element={<Dogs/>} />
                <Route
                  path="*"
                  element={<ErrorPage/>}
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
