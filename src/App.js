import Sidebar from "./components/sidebar";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Box, Container, Toolbar } from "@mui/material";
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
                <Route exact path={"/"} element={<h1>home</h1>} />
                <Route path={"/cats"} element={<h1>cats</h1>} />
                <Route path={"/dogs"} element={<h1>dogs</h1>} />
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
