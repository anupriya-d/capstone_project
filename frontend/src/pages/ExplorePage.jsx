import ExploreParks from "../components/ExporeParks";
import MyAppBar from "../components/MyAppBar";
import MyBanner from "../components/MyBanner";
import MyFooter from "../components/MyFooter";
import bannerExPage from'../assets/waytomountcook.jpg'

export default function ExplorePage() {
    // Save in pages/Homepage.jsx
    return (
      <>
        <div className="ExplorePage"></div>
        <MyAppBar/>
        <MyBanner image={bannerExPage}/>
        <ExploreParks/>
       <MyFooter/>
      </>
    );
  }