import { Routes,Route } from "react-router-dom";
import ExplorePage from "../pages/ExplorePage";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import TrackPage from "../pages/TrackPage";
import ActivityPage from "../pages/ActivityPage";
import ParkPage from "../pages/ParkPage";
import ManageTrackPage from "../pages/ManageTrackPage";
import BookingPage from "../pages/BookingPage";
import ForgotPassword from "../components/ForgotPassword";

function AppRoutes(props) {

  return (

    <Routes>

      {/* index matches on default/home URL: / */}
      <Route index element={<HomePage {...props} />} />
      <Route path="/explore" element={<ExplorePage {...props} />} />
      <Route path="/contact" element={<ContactPage {...props} />} />
      <Route path="/signup" element={<SignUpPage {...props} />} />
      <Route path="/signin" element={<SignInPage {...props} />} />
      <Route path="/track/:id/:title" element={<TrackPage {...props} />} />
      <Route path="/activity/:name" element={<ActivityPage {...props} />} />
      <Route path="/park/:name" element={<ParkPage {...props} />} />
      <Route path="forgotpw" element={<ForgotPassword {...props} />} />
      <Route path="/booking/:id/:title" element={<BookingPage {...props} />} />
      <Route path="/managetrack" element={<ManageTrackPage {...props} />} />
      
      {/* special route to handle if none of the above match */}


    </Routes>
  );
}
export default AppRoutes;