import ExploreActivity from "../components/ExploreActivity";
import MyAppBar from "../components/MyAppBar";
import MyBanner from "../components/MyBanner";

export default function HomePage() {
    // Save in pages/Homepage.jsx
    return (
      <>
        <div className="HomePage"></div>
        <MyAppBar/>
        <MyBanner/>
        <ExploreActivity/>
       
      </>
    );
  }