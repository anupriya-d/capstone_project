import ExploreActivity from "../components/ExploreActivity";
import MyAppBar from "../components/MyAppBar";
import MyBanner from "../components/MyBanner";
import MyFooter from "../components/MyFooter";
import bannerPhoto from "../assets/easy.jpg";
//import all modules/components used to homepage

export default function HomePage() {
  // in pages/Homepage.jsx and exported
  return (
    <>
      <div className="HomePage"></div>
      {/* all components to display */}
      <MyAppBar />
      <MyBanner image={bannerPhoto} />
      <ExploreActivity />
      <MyFooter />
    </>
  );
}
