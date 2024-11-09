import React from "react";
import { FaHome, FaUser, FaBell, FaSearch, FaCoins } from "react-icons/fa";
import * as Tabs from "@radix-ui/react-tabs";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";
import Grid from "@mui/material/Grid";
import{ useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";

const Artify = () => {

      const [openDonateDialog, setOpenDonateDialog] = useState(false);
  const [donationDetails, setDonationDetails] = useState({ amount: "", message: "", name: "" });

  const handleOpenDonateDialog = () => setOpenDonateDialog(true);
  const handleCloseDonateDialog = () => setOpenDonateDialog(false);

  const handleDonate = () => {
    console.log("Donation Details:", donationDetails);
    handleCloseDonateDialog();
  };

  return (
    <div>
      {/* Top bar */}
      <div className="flex justify-between items-center p-3 bg-gray-100 border-b border-gray-300 sticky top-0 z-50">
        {/* Search bar */}
        <div className="flex items-center bg-gray-200 px-3 py-1 rounded-full">
          <FaSearch className="w-5 h-5 text-gray-600" />
          <input
            type="text"
            placeholder="Search"
            className="ml-2 bg-transparent outline-none text-gray-700 placeholder-gray-500"
          />
        </div>

        {/* Icon section */}
        <div className="flex items-center space-x-5">
          <FaHome className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
          <FaBell className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />
          <FaUser className="w-6 h-6 text-gray-600 hover:text-gray-800 cursor-pointer" />

          {/* Coin and counter */}
          <div className="flex items-center space-x-1">
            <FaCoins className="w-6 h-6 text-yellow-500" />
            <span className="text-gray-700 font-semibold">3,501</span>
          </div>
        </div>
      </div>

      {/* Tabs section */}
      <div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-5xl mx-auto">
          <Tabs.Root defaultValue="Artist" className="w-full">
            <Tabs.List className="flex justify-center gap-6 mb-6 border-b border-gray-300 pb-2 sticky top-14 z-50 bg-white p-4">
              <Tabs.Trigger
                value="Artist"
                className={({ selected }) =>
                  `text-lg font-semibold ${
                    selected
                      ? "text-red-600"
                      : "text-gray-500 hover:text-indigo-700"
                  } flex-1 text-center`
                }
              >
                Artist
              </Tabs.Trigger>
              <Tabs.Trigger
                value="Media"
                className={({ selected }) =>
                  `text-lg font-semibold ${
                    selected
                      ? "text-red-600"
                      : "text-gray-500 hover:text-indigo-700"
                  } flex-1 text-center`
                }
              >
                Media
              </Tabs.Trigger>
              <Tabs.Trigger
                value="Products"
                className={({ selected }) =>
                  `text-lg font-semibold ${
                    selected
                      ? "text-red-600"
                      : "text-gray-500 hover:text-indigo-700"
                  } flex-1 text-center`
                }
              >
                Products
              </Tabs.Trigger>
              <Tabs.Trigger
                value="Donate"
                className={({ selected }) =>
                  `text-lg font-semibold ${
                    selected
                      ? "text-red-600"
                      : "text-gray-500 hover:text-indigo-700"
                  } flex-1 text-center`
                }
              >
                Donate
              </Tabs.Trigger>
            </Tabs.List>

            {/* Content */}
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "40px",
                margintop: "100px",
                textAlign: "center",
              }}
            >
              TATTOO COLOUR
            </Typography>

            <Tabs.Content
              value="Artist"
              className="pt-4 text-center text-gray-600 w-full"
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {/* Left column */}
                  <div className="flex flex-col items-center space-y-4">
                    <div className="flex  items-center space-x-2">
                      <EmojiEventsOutlinedIcon
                        sx={{ color: "gold", fontSize: "40px" }}
                      />
                      <Typography
                        sx={{
                          fontWeight: "bold",
                          fontSize: "40px",
                          margintop: "100px",
                        }}
                      >
                        Top Donate
                      </Typography>
                      <EmojiEventsOutlinedIcon
                        sx={{ color: "gold", fontSize: "40px" }}
                      />
                    </div>
                    <Box
                      sx={{
                        width: 240,
                        height: 240,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        border: "2px solid #e0e0e0", // Light gray border for minimal look
                        borderRadius: "50%", // Makes the frame circular
                        padding: "10px", // Adds some spacing around the avatar
                        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
                        backgroundColor: "#fff", // Optional white background for contrast
                      }}
                    >
                      <Avatar
                        alt="Profile Picture"
                        src="https://as1.ftcdn.net/jpg/02/01/55/80/1000_F_201558038_mqa2vi2cyQhLnb4OHnVlpjC6DyhLcyoE.webp"
                        sx={{ width: 220, height: 220 }}
                      />
                    </Box>
                    <Typography sx={{ fontWeight: "bold", fontSize: "20px" }}>
                      Saravut Hungsakunrat
                    </Typography>
                    <div className="flex items-center space-x-2">
                      <FaCoins className="w-6 h-6 text-yellow-500 m-2" />
                      <p className="text-gray-700 font-bold">47,510</p>
                    </div>
                  </div>

                  {/* Right column */}
                  <div className="bg-white border rounded-lg overflow-hidden shadow-lg p-6 max-w-5xl mx-auto mt-6">
                      
                  </div>
                </div>
              </Box>
              <div>{/* ว่าง */}</div>
              <div className="flex justify-between">
                <div>เนื้อเรื่องซ้าย</div>
                <div>เนื้อเรื่องขวา</div>
              </div>
            </Tabs.Content>
            <Tabs.Content
              value="Media"
              className="pt-4 text-center text-gray-600 w-full"
            >
              <p>Social media</p>
              <div className="max-w-full">
                <div className="bg-white overflow-hidden  p-6">

                <p>Live</p>
                <div>
                    <p>LIVE NOW!S</p>
                        <iframe
                        width="100%"
                        height="400"
                        src="https://www.youtube.com/embed/-Plkae_yezo?si=JIRdN3y_Z8K3k0_G"
                        title="YouTube video 1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-50"
                      ></iframe><br />
                </div>
                <div className="grid grid-cols-5 gap-4">
                    <div></div>
                        <iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/-Plkae_yezo?si=JIRdN3y_Z8K3k0_G"
                        title="YouTube video 1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-50"
                      ></iframe>
                        <iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/-Plkae_yezo?si=JIRdN3y_Z8K3k0_G"
                        title="YouTube video 1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-50"
                      ></iframe>
                        <iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/-Plkae_yezo?si=JIRdN3y_Z8K3k0_G"
                        title="YouTube video 1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-50"
                      ></iframe>
                        <iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/-Plkae_yezo?si=JIRdN3y_Z8K3k0_G"
                        title="YouTube video 1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-50"
                      ></iframe>
                </div>
                <br />
                <p>Video</p>
                  <div className="grid grid-cols-3 gap-4">
                    {/* แถวที่ 1 */}
                    <div>
                      <iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/-Plkae_yezo?si=JIRdN3y_Z8K3k0_G"
                        title="YouTube video 1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-50"
                      ></iframe>
                      <p className="text-sm text-gray-600 mt-2">
                        TATTOO COLOUR - แล้วแต่แม่คุณ | My Lady feat.
                        TangBadVoice
                      </p>
                    </div>
                    <div>
                      <iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/aHdtoDZlUKA?si=4nQZ5zWAilaNuyc3"
                        title="YouTube video 2"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-50"
                      ></iframe>
                      <p className="text-sm text-gray-600 mt-2">
                        TATTOO COLOUR - ขาหมู [Official Music Video]
                      </p>
                    </div>
                    <div>
                      <iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/VIDEO_ID_4"
                        title="YouTube video 1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-50"
                      ></iframe>
                      <p className="text-sm text-gray-600 mt-2">
                        พิเศษ!! เฉพาะสมาชิก | TATTOO COLOUR MemberShip Only
                      </p>
                    </div>

                    {/* แถวที่ 2 */}
                    <div>
                      <iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/VIDEO_ID_4"
                        title="YouTube video 1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-50"
                      ></iframe>
                      <p className="text-sm text-gray-600 mt-2">
                        พิเศษ!! เฉพาะสมาชิก | TATTOO COLOUR MemberShip Only
                      </p>
                    </div>
                    <div>
                      <iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/VIDEO_ID_4"
                        title="YouTube video 1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-50"
                      ></iframe>
                      <p className="text-sm text-gray-600 mt-2">
                        พิเศษ!! เฉพาะสมาชิก | TATTOO COLOUR MemberShip Only
                      </p>
                    </div>
                    <div>
                      <iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/VIDEO_ID_4"
                        title="YouTube video 1"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        className="w-full h-50"
                      ></iframe>
                      <p className="text-sm text-gray-600 mt-2">
                        พิเศษ!! เฉพาะสมาชิก | TATTOO COLOUR MemberShip Only
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Tabs.Content>

            {/* รายการสินค้า */}
            <Tabs.Content
              value="Products"
              className="pt-4 text-center text-gray-600 w-full"
            >
              <p>รายการสินค้า</p>
            </Tabs.Content>

            {/* โดเนทศิลปิน */}
            <Tabs.Content
              value="Donate"
              className="pt-4 text-center text-gray-600 w-full"
            >
              <p>โดเนทศิลปิน</p>
              <div>
                        {/* Content for Donate Tab */}
            <Tabs.Content value="Donate" className="pt-4 text-center text-gray-600 w-full">
              <Typography variant="h5" gutterBottom>
                สนับสนุนศิลปิน
              </Typography>
              <Button variant="contained" color="primary" onClick={handleOpenDonateDialog}>
                โดเนท
              </Button>

              {/* Donate Dialog */}
              <Dialog open={openDonateDialog} onClose={handleCloseDonateDialog}>
                <DialogTitle>รายละเอียดการโดเนท</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    กรุณากรอกข้อมูลการโดเนทของคุณด้านล่าง
                  </DialogContentText>

                  <TextField
                    autoFocus
                    margin="dense"
                    label="จำนวนเงินที่ต้องการโดเนท ($)"
                    type="number"
                    fullWidth
                    variant="outlined"
                    value={donationDetails.amount}
                    onChange={(e) => setDonationDetails({ ...donationDetails, amount: e.target.value })}
                  />

                  <TextField
                    margin="dense"
                    label="ข้อความของคุณ (ไม่บังคับ)"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={donationDetails.message}
                    onChange={(e) => setDonationDetails({ ...donationDetails, message: e.target.value })}
                  />

                  <TextField
                    margin="dense"
                    label="ชื่อของคุณ"
                    type="text"
                    fullWidth
                    variant="outlined"
                    value={donationDetails.name}
                    onChange={(e) => setDonationDetails({ ...donationDetails, name: e.target.value })}
                  />
                </DialogContent>
                <DialogActions>
                  <Button onClick={handleCloseDonateDialog} color="secondary">
                    ยกเลิก
                  </Button>
                  <Button onClick={handleDonate} color="primary">
                    โดเนทเลย
                  </Button>
                </DialogActions>
              </Dialog>
            </Tabs.Content>
              </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
    </div>
  );
};

export default Artify;
