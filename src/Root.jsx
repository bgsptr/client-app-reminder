import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
// import { AuthProvider } from "./context/authContext";
import App from "./App";
import Maps from "./pages/Maps";

const Root = () => {
  return (
    <Suspense>
      <Routes>
        {/* <AuthProvider> */}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/" element={<Maps />} />
        {/* </AuthProvider> */}
      </Routes>
    </Suspense>
  );
};

export default Root;
