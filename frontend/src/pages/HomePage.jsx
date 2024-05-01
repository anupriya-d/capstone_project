import ExploreActivity from "../components/ExploreActivity";
import MyAppBar from "../components/MyAppBar";
import MyBanner from "../components/MyBanner";
import MyFooter from "../components/MyFooter";
import Weather from "../components/Weather";
import bannerPhoto from '../assets/easy.jpg';
export default function HomePage() {
    // Save in pages/Homepage.jsx
    return (
      <>
        <div className="HomePage"></div>
        <MyAppBar/>
        <MyBanner image={bannerPhoto}/>
        <ExploreActivity/>
        
       <MyFooter/>
      </>
    );
  }