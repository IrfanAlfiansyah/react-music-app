import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./Pages/Landing-page";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Detail from "./Pages/Detail";
import ManageMusic from "./Pages/Manage-music";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main  */}
        <Route path="/" element={<LandingPage />} />
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="detail" element={<Detail />} />
        <Route path="manage-music" element={<ManageMusic />} />

        {/* Private admin route */}
        {/* <Route element={<privateRoute isAdmin={true} />}></Route> */}

        {/* PageNotFound  */}
        <Route
          path="*"
          element={
            <main className="d-flex justify-content-center align-item-center p-5 fw-bold">
              <p>404. Page Not Found!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
