import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import logoPng from '../Img/logo.png';

export default function AboutUs() {
  return (<CardContent sx={{
    margin: "auto",
    width: "425px",
    paddingTop: "50px",
    minHeight: "100vh",
    backgroundColor: "black"
  }}>
    <img
      src={logoPng}
      style={{ width: "200px", height: "auto" }}
    />
    <Typography sx={{ color: "white" }}>
      <h2 style={{ marginTop: "0px" }}>Welcome to GymBuddy!</h2>
      <p>We are a dynamic team of three full-stack developers who are passionate about fitness, technology, and pursuing our dreams. Our shared journey through a web development bootcamp has brought us together to create this innovative workout app.</p>
      <h2>Meet Our Team:</h2>
      <h4>Hanvid Lee - The Fitness Guru:</h4>
      <p>Hanvid's experience as a sales and revenue analyst within the tech industry has given him a deep understanding of data analysis. His assets are invaluable as he translates his expertise into creating meaningful insights.</p>
      <h4>Nelson Cheng - The Tech Wizard:</h4>
      <p>Nelson's background within the Royal Canadian Air Force has honed his ability to thrive in high-pressure environments. His meticulousness, precision, and multitasking skills are essential for developing and managing this application's infrastructure.</p>
      <h4>Wendina Teng - The Financial Mind:</h4>
      <p>Wendina's background in accounting, with a specialization in reconciliation accounting, brings a unique perspective to the GymBuddy team. Her ability to analyze data, identify patterns, and maintain accuracy aligns perfectly with the nature of web development.</p>
    </Typography>
  </CardContent >
  );
}