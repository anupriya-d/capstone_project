import MyAppBar from "../components/MyAppBar";
import MyFooter from "../components/MyFooter";
import TrackForm from "../components/TrackForm";
import TrackImageUpload from "../components/TrackImageUpload";

export default function ManageTrackPage(props) {
  return (
    <>
      <div className="TrackPage"></div>
      <MyAppBar />
      <TrackForm />

      <TrackImageUpload/>
        <MyFooter />
    </>
  );
}
