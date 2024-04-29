import BookingForm from "../components/BookingForm";
import MyAppBar from "../components/MyAppBar";
import MyBanner from "../components/MyBanner";
import MyFooter from "../components/MyFooter";
import { useParams } from "react-router-dom";

export default function BookingPage(props) {
  const { id, title } = useParams();

  return (
    <>
      <div className="TrackPage"></div>
      <MyAppBar />
        <MyBanner/>
      <BookingForm trackId={id} trackTitle={title}/>
      <MyFooter />
    </>
  );
}
