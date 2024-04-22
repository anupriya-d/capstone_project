import { Routes,Route } from "react-router-dom";
import ExplorePage from "../pages/ExplorePage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";


function AppRoutes(props) {

  return (

    <Routes>

      {/* index matches on default/home URL: / */}
      <Route index element={<HomePage {...props} />} />
      <Route path="/explore" element={<ExplorePage {...props} />} />
      <Route path="/contact" element={<ContactPage {...props} />} />
      <Route path="/signup" element={<SignUpPage {...props} />} />
      <Route path="/signin" element={<SignInPage {...props} />} />


      {/* special route to handle if none of the above match */}


    </Routes>
  );
}
export default AppRoutes;