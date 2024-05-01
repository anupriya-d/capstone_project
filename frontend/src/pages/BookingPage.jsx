import BookingForm from "../components/BookingForm";
import MyAppBar from "../components/MyAppBar";
import MyBanner from "../components/MyBanner";
import MyFooter from "../components/MyFooter";
import { useParams } from "react-router-dom";
import BannerBooking from "../assets/keplertrack.jpg"

export default function BookingPage(props) {
  const { id, title } = useParams();

  return (
    <>
      
      <MyAppBar />
        <MyBanner image={BannerBooking}/>
        <div style={{ padding: '20px', margin: '60px 20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor:'#F7B787 ' }}>
      <BookingForm trackId={id} trackTitle={title}/>
      </div>
      <MyFooter />

    </>
  );
}
