import ImageForm from "../components/ImageForm";
import LoginForm from "../components/LoginForm";

import MyAppBar from "../components/MyAppBar";
import MyFooter from "../components/MyFooter";


export default function SignUpPage() {
    // Save in pages/Homepage.jsx
    return (
      <>
        <div className="SignUpPage"></div>
        <MyAppBar/>
        
       <LoginForm/>
       <ImageForm/>
       <MyFooter/>
      </>
    );
  }