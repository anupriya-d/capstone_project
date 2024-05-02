import MyAppBar from "../components/MyAppBar";
import MyFooter from "../components/MyFooter";
import Contacts from "../components/Contacts";
import MyBanner from "../components/MyBanner"
import ContactBanner from "../assets/roys-peak.jpg"


export default function ContactPage() {
    // Save in pages/Homepage.jsx
    return (
      <>
        <div className="ContactPage"></div>
        <MyAppBar/>
        <MyBanner image={ContactBanner}/>
        <Contacts/>
        <MyFooter/>
      </>
    );
  }