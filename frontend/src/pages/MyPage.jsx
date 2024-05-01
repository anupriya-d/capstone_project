
import DisplayReviewsByUser from "../components/DisplayReviewsByUser";
import MyAppBar from "../components/MyAppBar";
import MyBannerSmall from "../components/MyBannerSmall";
import MyFooter from "../components/MyFooter";
import { useUserContext } from '../context/UserContext';
import MyPageBanner from '../assets/tasman.jpg'
import { Card, CardContent, Grid, Typography } from '@mui/material';
import DisplayBookingByUser from "../components/DisplayBookingByUser";
export default function MyPage() {

    const { currentUser } = useUserContext();
    // Save in pages/Homepage.jsx
    return (
      <>
        
        <MyAppBar/>
        <MyBannerSmall image={MyPageBanner}/>
        <div style={{ padding: '20px', margin: '60px 20px', border: '1px solid #ccc', borderRadius: '8px', backgroundColor:'#F7B787 ',fontFamily:'sans-serif' }}>
        <h4>Logged In : {currentUser.firstName}</h4>
        <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Reviews by {currentUser.firstName}
                        </Typography>
                        <DisplayReviewsByUser userId={currentUser._id} userName={currentUser.firstName} />
                    </CardContent>
                </Card>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
                <Card>
                    <CardContent>
                        <Typography variant="h6" gutterBottom>
                            Reviews by {currentUser.firstName}
                        </Typography>
                        <DisplayBookingByUser userId={currentUser._id}/>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>
             </div>
       <MyFooter/>
      </>
    );
  }