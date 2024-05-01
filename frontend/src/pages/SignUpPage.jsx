import MyAppBar from "../components/MyAppBar";
import MyBannerSmall from "../components/MyBannerSmall";
import MyFooter from "../components/MyFooter";
import SignUp from "../components/SignUp";
import SmallBanner from "../assets/lakeshort.jpg"

export default function SignInPage() {
    // Save in pages/Homepage.jsx
    return (
      <>
        <div className="SignInPage"></div>
        <MyAppBar/>
        <MyBannerSmall image={SmallBanner}/>
        <SignUp/>
       <MyFooter/>
      </>
    );
  }