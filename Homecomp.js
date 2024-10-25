import React, { useEffect, useState } from 'react'; // Importing necessary React hooks
import { Snackbar, Slide, Box, Typography, Card, CardContent, Button, Stack, IconButton } from '@mui/material'; // Importing Material-UI components
import { Assignment, RequestQuote, Work, Shop, Phone, Chat, ErrorOutline, Warning, Home, Update, ShoppingCart, LocationOn } from '@mui/icons-material'; // Importing icons
import { Swiper, SwiperSlide } from 'swiper/react'; // Importing Swiper for carousel functionality
import 'swiper/css'; // Importing Swiper CSS
import img1 from "./avatar.jpg"; // Importing user avatar image
import image from "./sale.jpg"; // Importing sale image
import { Google } from '@mui/icons-material'; // Importing Google icon

//-------------------------------------------
// Function for Snackbar transition effect
function TransitionRight(props) {
  return <Slide {...props} direction="right" />;
}

const Homecomp = () => {
  const [open, setOpen] = useState(false); // State to manage Snackbar visibility

  useEffect(() => {
    setOpen(true); // Show Snackbar when component mounts
  }, []);

  const handleClose = (event, reason) => {
    // Function to handle Snackbar close action
    if (reason === 'clickaway') {
      return; // Prevent closing Snackbar when clicking away
    }
    setOpen(false); // Close Snackbar
  };

  return (
    <div>
      {/* Snackbar for welcome message */}
      <Snackbar
        open={open} // Snackbar visibility state
        autoHideDuration={3000} // Duration before Snackbar auto-closes
        onClose={handleClose} // Function to handle close action
        TransitionComponent={TransitionRight} // Transition effect for Snackbar
        anchorOrigin={{ vertical: 'top', horizontal: 'left' }} // Snackbar position
      >
        <Box
          sx={{
            background: 'linear-gradient(45deg, #fff8e1, #ffe082)', // Gradient background
            borderRadius: '5px', // Rounded corners
            padding: '20px', // Padding around content
            marginRight: '15px', // Right margin
            marginTop: '50px', // Top margin
            color: '#333', // Text color
          }}
        >
          <Typography variant="h6">
            Welcome,<Typography sx={{ color: 'tomato' }}> Shady</Typography> Find your next job, hire a Pro
          </Typography>
        </Box>
      </Snackbar>

      {/* Cards Section */}
      <Box
        sx={{
          display: 'flex', // Use flexbox for layout
          justifyContent: 'space-around', // Space out cards
          marginTop: '20px', // Top margin
          flexWrap: 'wrap', // Allow wrapping
        }}
      >
        {/* Mapping through icons to create cards */}
        {[Assignment, RequestQuote, Work, Shop].map((Icon, index) => (
          <Card
            key={index} // Unique key for each card
            sx={{
              width: 200, // Card width
              border: '2px dashed #f57f17', // Dashed border style
              backgroundColor: '#fff9c4', // Card background color
              borderRadius: '10px', // Rounded corners
              '&:hover': { boxShadow: 10 }, // Hover effect
              margin: '10px', // Card margin
            }}
          >
            <CardContent>
              <Icon sx={{ fontSize: 40, color: '#f57f17' }} /> {/* Icon for the card */}
              <Typography variant="h6">Hello</Typography> {/* Card title */}
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Top Taskers and Button Section */}
      <Box
        sx={{
          display: 'flex', // Use flexbox for layout
          alignItems: 'center', // Center align items
          justifyContent: 'space-between', // Space between elements
          marginTop: '20px', // Top margin
          padding: '0 10px', // Horizontal padding
          flexWrap: 'wrap', // Allow wrapping
        }}
      >
        <Typography variant="h6" sx={{ flex: 1, minWidth: '150px' }}>
          Top Taskers
        </Typography>
        <Stack spacing={2} direction="row">
          <Button variant="outlined">View All</Button> {/* Button to view all taskers */}
        </Stack>
      </Box>

      {/* Swiper Carousel for Tasker Cards */}
      <Swiper
        spaceBetween={10} // Space between slides
        autoplay={{ delay: 3000 }} // Auto-play delay
        loop // Enable looping
        breakpoints={{
          320: { slidesPerView: 1 }, // One slide for small screens
          600: { slidesPerView: 2 }, // Two slides for medium screens
          960: { slidesPerView: 3 }, // Three slides for large screens
        }}
      >
        {/* Generating slides for taskers */}
        {Array.from({ length: 5 }).map((_, index) => (
          <SwiperSlide key={index}> {/* Each slide needs a unique key */}
            <Card
              sx={{
                maxWidth: 345, // Max width for the card
                margin: '15px', // Card margin
                padding: '10px', // Padding inside the card
                borderRadius: '10px', // Rounded corners
                boxShadow: 3, // Box shadow for card
              }}
            >
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center' }}> {/* Flexbox for profile section */}
                  <Box
                    component="img"
                    sx={{
                      width: 60, // Avatar width
                      height: 60, // Avatar height
                      borderRadius: '50%', // Circular avatar
                      marginRight: 2, // Right margin
                    }}
                    src={img1} // Profile image source
                    alt="Profile" // Alt text for the image
                  />
                  <Box>
                    <Typography variant="h6">John Doe</Typography> {/* Name */}
                    <Typography variant="body2" color="text.secondary">Software Developer</Typography> {/* Job title */}
                    <Typography variant="body2" color="text.secondary">Location: Cairo</Typography> {/* Location */}
                  </Box>
                </Box>

                {/* Icons Section */}
                <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}> {/* Flexbox for icons */}
                  <Phone sx={{ fontSize: 30, color: '#f57f17' }} /> {/* Phone icon */}
                  <Chat sx={{ fontSize: 30, color: '#f57f17' }} /> {/* Chat icon */}
                  <ErrorOutline sx={{ fontSize: 30, color: '#f57f17' }} /> {/* Error icon */}
                  <Warning sx={{ fontSize: 30, color: 'red' }} /> {/* Warning icon */}
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', marginTop: 2 }}> {/* Flexbox for phone number */}
                  <Phone sx={{ fontSize: 20, color: '#f57f17', marginRight: 1 }} /> {/* Phone icon */}
                  <Typography variant="body2" color="text.secondary">+20 123 456 7890</Typography> {/* Phone number */}
                </Box>
              </CardContent>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Service Companies and Button Section */}
      <Box
        sx={{
          display: 'flex', // Use flexbox for layout
          alignItems: 'center', // Center align items
          justifyContent: 'space-between', // Space between elements
          marginTop: '20px', // Top margin
          padding: '0 10px', // Horizontal padding
          flexWrap: 'wrap', // Allow wrapping
        }}
      >
        <Typography variant="h6" sx={{ flex: 1, minWidth: '150px' }}>
          Service Companies
        </Typography>
        <Stack spacing={2} direction="row">
          <Button variant="outlined">View All</Button> {/* Button to view all service companies */}
        </Stack>
      </Box>

      {/* New Cards Section with Google Icons */}
      <Box
        sx={{
          display: 'flex', // Use flexbox for layout
          justifyContent: 'space-around', // Space out cards
          marginTop: '20px', // Top margin
          flexWrap: 'wrap', // Allow wrapping
        }}
      >
        {Array.from({ length: 3 }).map((_, index) => (
          <Card
            key={index} // Unique key for each card
            sx={{
              width: 250, // Card width
              backgroundColor: '#fff9c4', // Card background color
              borderRadius: '10px', // Rounded corners
              boxShadow: 3, // Box shadow for card
              margin: '10px', // Card margin
              '&:hover': { boxShadow: 10 }, // Hover effect
            }}
          >
            <CardContent sx={{ textAlign: 'center' }}> {/* Center align the content */}
              {/* Google Icon at the Center */}
              <Google
                sx={{
                  fontSize: 60, // Icon size
                  color: '#f57f17', // Icon color
                  marginBottom: 2, // Bottom margin
                  boxShadow: 3, // Box shadow for icon
                  borderRadius: '50%', // Rounded icon
                  padding: '10px', // Padding around icon
                  transition: 'box-shadow 0.3s ease-in-out', // Transition for hover effect
                  '&:hover': { boxShadow: 10 } // Hover effect
                }}
              />
              <Typography variant="h6">Company Name</Typography> {/* Company name */}
              <Typography variant="body2" color="text.secondary">Description of the service offered by the company.</Typography> {/* Service description */}
            </CardContent>
          </Card>
        ))}
      </Box>

      {/* Footer Section */}
      <Box
        sx={{
          background: 'linear-gradient(90deg, #1e3c72, #2a5298)', // Gradient background for footer
          padding: '20px', // Padding inside footer
          marginTop: '30px', // Top margin
          display: 'flex', // Use flexbox for layout
          flexDirection: 'column', // Stack elements vertically
          alignItems: 'center', // Center align items
          boxShadow: '0 -1px 5px rgba(0, 0, 0, 0.2)', // Box shadow for footer
        }}
      >
        {/* Location Icon at the Top */}
        <Stack spacing={1} alignItems="center">
          <LocationOn
            sx={{
              fontSize: 50, // Icon size
              color: '#f57f17', // Icon color
              transition: 'transform 0.3s', // Transition for hover effect
              '&:hover': {
                transform: 'scale(1.2)', // Scale effect on hover
                boxShadow: '0 0 10px rgba(0,0,0,0.5)', // Box shadow on hover
              },
            }}
          />
          <Typography variant="body2" color="#fff">Location</Typography> {/* Location text */}
        </Stack>

        {/* Links Section */}
        <Stack direction="row" spacing={2} sx={{ width: '100%', justifyContent: 'space-between', maxWidth: '600px', marginTop: 2 }}>
          {/* Home Link */}
          <Stack spacing={1} alignItems="center">
            <IconButton aria-label="home" sx={{ color: '#f57f17' }}>
              <Home sx={{ fontSize: 30 }} /> {/* Home icon */}
            </IconButton>
            <Typography variant="body2" color="#fff">Home</Typography> {/* Home text */}
          </Stack>

          {/* Update Link */}
          <Stack spacing={1} alignItems="center">
            <IconButton aria-label="update" sx={{ color: '#f57f17' }}>
              <Update sx={{ fontSize: 30 }} /> {/* Update icon */}
            </IconButton>
            <Typography variant="body2" color="#fff">Update</Typography> {/* Update text */}
          </Stack>

          {/* Chat Link */}
          <Stack spacing={1} alignItems="center">
            <IconButton aria-label="chat" sx={{ color: '#f57f17' }}>
              <Chat sx={{ fontSize: 30 }} /> {/* Chat icon */}
            </IconButton>
            <Typography variant="body2" color="#fff">Chat</Typography> {/* Chat text */}
          </Stack>

          {/* Orders Link */}
          <Stack spacing={1} alignItems="center">
            <IconButton aria-label="orders" sx={{ color: '#f57f17' }}>
              <ShoppingCart sx={{ fontSize: 30 }} /> {/* Orders icon */}
            </IconButton>
            <Typography variant="body2" color="#fff">Orders</Typography> {/* Orders text */}
          </Stack>
        </Stack>
      </Box>
    </div>
  );
};

export default Homecomp; // Exporting Homecomp component
