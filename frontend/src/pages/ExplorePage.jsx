import ExploreParks from "../components/ExporeParks";
import MyAppBar from "../components/MyAppBar";
import MyFooter from "../components/MyFooter";


export default function ExplorePage() {
    // Save in pages/Homepage.jsx
    return (
      <>
        <div className="ExplorePage"></div>
        <MyAppBar/>
        <ExploreParks/>
       <MyFooter/>
      </>
    );
  }