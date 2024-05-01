import MyAppBar from "../components/MyAppBar";
import MyFooter from "../components/MyFooter";
import ReviewForm from "../components/ReviewForm";
import TrackDisplay from "../components/TrackDisplay";
import { useParams } from "react-router-dom";

export default function TrackPage(props) {
  const { id,title} = useParams();
  // Save in pages/Homepage.jsx
  return (
    <>
      <div className="TrackPage"></div>
      <MyAppBar />
      <TrackDisplay trackId={id}/>

      <ReviewForm trackId={id} trackTitle={title}/>

      <MyFooter />
    </>
  );
}
