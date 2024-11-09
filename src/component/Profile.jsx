import React from "react";
import { FaHome, FaUser, FaBell, FaSearch, FaCoins } from "react-icons/fa";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import AddIcon from "@mui/icons-material/Add";
const Profile = () => {
  return (
    <Box className="bg-gray-100 min-h-screen">
      {/* Top bar */}
      <Box className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300 sticky top-0 z-50">
        {/* Search bar */}
        <Box className="flex items-center bg-gray-200 px-3 py-1 rounded-full w-1/3">
          <FaSearch className="w-5 h-5 text-gray-600" />
          <TextField
            variant="standard"
            placeholder="Search"
            InputProps={{ disableUnderline: true }}
            className="ml-2 bg-transparent text-gray-700 placeholder-gray-500 w-full"
          />
        </Box>

        {/* Icon section */}
        <Box className="flex items-center space-x-5">
          <Tooltip title="Home">
            <IconButton>
              <FaHome className="w-6 h-6 text-gray-600 hover:text-gray-800" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Notifications">
            <IconButton>
              <FaBell className="w-6 h-6 text-gray-600 hover:text-gray-800" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Profile">
            <IconButton>
              <FaUser className="w-6 h-6 text-gray-600 hover:text-gray-800" />
            </IconButton>
          </Tooltip>
          {/* Coin and counter */}
          <Box className="flex items-center space-x-1">
            <FaCoins className="w-6 h-6 text-yellow-500" />
            <Typography className="text-gray-700 font-semibold">
              3,501
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Profile Section */}
      <Box className="flex flex-col items-center mt-8">
        {/* Profile Picture */}
        
        <Box
            sx={{
                width: 320,
                height: 320,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                border: '2px solid #e0e0e0', // Light gray border for minimal look
                borderRadius: '50%', // Makes the frame circular
                padding: '10px', // Adds some spacing around the avatar
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
                backgroundColor: '#fff', // Optional white background for contrast
                
            }}
        >
            <Avatar
                alt="Profile Picture"
                src="https://as1.ftcdn.net/jpg/02/01/55/80/1000_F_201558038_mqa2vi2cyQhLnb4OHnVlpjC6DyhLcyoE.webp"
                sx={{ width: 300, height: 300 }}
            />
        </Box>
        {/* Profile Details */}
        <Paper
          elevation={3}
          className="w-11/12 md:w-2/3 p-6 bg-white rounded-lg mb-6 mt-4"
          sx={{
            
            // backgroundImage: 'url(https://p16-va.lemon8cdn.com/tos-alisg-v-a3e477-sg/oQEeSfyJUCAhB7zwINEbAQAgh0nkEiN2LA5E2O~tplv-tej9nj120t-origin.webp)',
            // backgroundSize: 'cover',
            //     backgroundPosition: 'center',
            //     padding: 2,
            //     borderRadius: 2,
                
        }}
        >
          <Box className="grid grid-cols-2 gap-4 text-gray-700 text-sm">
            <Box>
            <Typography sx={{ fontWeight: 'bold' }}>Email: test123@gmail.com</Typography>
            <Typography sx={{ fontWeight: 'bold' }}>Age: 26</Typography>
            <Typography sx={{ fontWeight: 'bold' }}>Tel: 086-123456XXX</Typography>
            </Box>
            <Box>
              <Typography sx={{ fontWeight: 'bold' }}>
                Facebook:{" "}
                <a href="#" className="text-blue-500 text-" >
                  ลามะ
                </a>
              </Typography>
              <Typography sx={{ fontWeight: 'bold' }}>
                Instagram:{" "}
                <a href="#" className="text-blue-500">
                  ลามะ
                </a>
              </Typography>
              <Typography sx={{ fontWeight: 'bold' }}>
                X:{" "}
                <a href="#" className="text-blue-500">
                  ลาลี
                </a>
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Wallet and Name */}
        <Box className="text-center">
          <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
            Saravut Hungsakunrat
          </Typography>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            className="mt-2 space-x-1"
          >
            <Typography>Wallet:</Typography>
            <Button
              variant="text"
              color="primary"
              onClick={() =>
                navigator.clipboard.writeText(
                  "0x28dbb63711AF5E796fa1183198893d74b13F8455"
                )
              }
              startIcon={<FaCoins className="text-yellow-500" />}
            >
              0x28dbb63711AF5E796fa1183198893d74b13F8455
            </Button>
          </Box>
        </Box>

        <Paper
          elevation={3}
          className="w-11/12 md:w-2/3 p-3 bg-white rounded-lg mb-3 "
        >
          <Box className="grid grid-cols-2 gap-4 text-gray-700"></Box>
          <Box className=" items-center justify-left flex ">
            <img
              src="https://s.isanook.com/jo/0/ud/476/2380601/7e676c08e45a266a916e04151be39891.jpg"
              alt="Profile Picture"
              className="w-26 h-24 m-1.5"
            />
            <img
              src="https://storage-wp.thaipost.net/2024/07/1-45.jpg"
              alt="Profile Picture"
              className="w-26 h-24 m-1.5"
            />
            <img
              src="https://i.ytimg.com/vi/-Plkae_yezo/maxresdefault.jpg"
              alt="Profile Picture"
              className="w-26 h-24 m-1.5"
            />
            <Box className="flex flex-col items-center space-y-2 m-5    ">
              {/* Circle Button */}
              <IconButton
                className="w-20 h-20 border-2 border-gray-400 rounded-full flex items-center justify-center"
                aria-label="Add New"
              >
                <AddIcon style={{ fontSize: 40, color: "gray" }} />
              </IconButton>

              {/* Label */}
              <Typography className="text-gray-500 text-lg">NEW</Typography>
            </Box>
          </Box>
        </Paper>
        <Typography variant="h6" className="font-semibold">
          Reward
        </Typography>
        <Paper
          elevation={3}
          className="w-11/12 md:w-2/3 p-3 bg-white rounded-lg mb-3 "
        //   sx={{
        //     backgroundImage :'url(https://img.pikbest.com/backgrounds/20191205/cute-dinosaur-unicorn-seamless-pattern-cartoon-drawing-with-pastel-colors-background--v_1608531jpg!w700wp)'
        //   }}
        >
          <Box className="grid grid-cols-2 gap-4 text-gray-700">
            {/* <EmojiEventsIcon className="w-6 h-6 text-yellow-500" /> */}
            <div className="relative flex items-center justify-center w-48 h-48">
              {/* Background Image */}
              <img
                src="backend-reward.png" // Replace with actual path or URL
                alt="Background Reward"
                className="absolute w-full h-full"
              />

              {/* Front Image */}
              <img
                src="front-reward.jpg" // Replace with actual path or URL
                alt="Front Reward"
                className="relative w-32 h-32 rounded-full border-4 border-white -mt-20"
                
              />
            </div>
          </Box>
        </Paper>
      </Box>
    </Box>
  );
};

export default Profile;

// import React from 'react';
// import { FaHome, FaUser, FaBell, FaSearch, FaCoins } from 'react-icons/fa';

// const Profile = () => {
//     return (
//         <div className="bg-gray-100 min-h-screen">
//             {/* Top bar */}
//             <div className="flex justify-between items-center p-4 bg-gray-100 border-b border-gray-300 sticky top-0 z-50">
//                 {/* Search bar */}
//                 <div className="flex items-center bg-gray-200 px-3 py-1 rounded-full w-1/3">
//                     <FaSearch className="w-5 h-5 text-gray-600" />
//                     <input
//                         type="text"
//                         placeholder="Search"
//                         className="ml-2 bg-transparent outline-none text-gray-700 placeholder-gray-500 w-full"
//                     />
//                 </div>

//                 {/* Icon section */}
//                 <div className="flex items-center space-x-5">
//                     <FaHome className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
//                     <FaBell className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
//                     <FaUser className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />

//                     {/* Coin and counter */}
//                     <div className="flex items-center space-x-1">
//                         <FaCoins className="w-6 h-6 text-yellow-500" />
//                         <span className="text-gray-700 font-semibold">3,501</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Profile Section */}
//             <div className="flex justify-center items-center mt-8">
//                 {/* Profile Picture */}
//                 <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mr-5">
//                     <img
//                         src="https://as1.ftcdn.net/jpg/02/01/55/80/1000_F_201558038_mqa2vi2cyQhLnb4OHnVlpjC6DyhLcyoE.webp"
//                         alt="Profile"
//                         className="w-full h-full object-cover"
//                     />
//                 </div>

//                 {/* Profile Details */}
//                 <div className="flex flex-col w-2/3">
//                     <div className="bg-white shadow-md p-4 rounded-lg">
//                         <div className="grid grid-cols-2 gap-2">
//                             <div className="text-gray-700">
//                                 <p>Email: test123@gmail.com</p>
//                                 <p>Age: 26</p>
//                                 <p>Tel: 086-123456XXX</p>
//                             </div>
//                             <div className="text-gray-700">
//                                 <p>Facebook: <a href="#" className="text-blue-500">ลามะ</a></p>
//                                 <p>Instagram: <a href="#" className="text-blue-500">ลามะ</a></p>
//                                 <p>X: <a href="#" className="text-blue-500">ลาลี</a></p>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Wallet and Name */}
//                     <div className="text-center mt-4">
//                         <h1 className="text-xl font-semibold">Saravut Hungsakunrat</h1>
//                         <p className="text-gray-600">Wallet: 0x28dbb63711AF5E796fa1183198893d74b13F8455</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Profile;
