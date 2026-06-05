import { useState } from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../Theme";

// Icons
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import MenuOutLinedIcon from "@mui/icons-material/MenuOutLined"
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <MenuItem
      active={selected === title}
      style={{ color: colors.grey[100] }}
      onClick={() => setSelected(title)}
      icon={icon}
      component={<Link to={to} />}
    >
      <Typography>{title}</Typography>
    </MenuItem>
  );
};

function SideBar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        height: "100vh",
      }}
    >
      <Sidebar
        collapsed={isCollapsed}
        backgroundColor={colors.primary[400]}
        rootStyles={{
          border: "none",
          height:'100vh'
        }}
      >
        <Menu iconShape='square'>
            {/* Logo and Menu Icon */}
            <MenuItem onClick={()=> setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? (<MenuOutLinedIcon/>) : undefined}
            style={{
                margin:"10px 0 20px 0",
                color: colors.grey[100]
            }}
            >
                {!isCollapsed && (
                    <Box sx={{display:'flex',justifyContent:"space-between",alignItems:"center",ml:"15px" }}>
                        <Typography variant="h3" color={colors.grey[100]}>
                            ADMINS
                        </Typography>
                        <IconButton onClick={()=> setIsCollapsed(!isCollapsed)}>
                            <MenuOutLinedIcon/>
                        </IconButton>
                    </Box>
                )}
            </MenuItem>
        </Menu>
        {/* User Info */}
        {!isCollapsed && (
          <Box
            sx={{
              mb: 4,
              mt: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
            >
              <Box
    component="img"
    src="src/../public/assets/891783163894871043.jpg"
    alt="profile-user"
      sx={{
    width: 110,
    height: 110,
    borderRadius: "50%",
    objectFit: "cover",
    boxShadow: 3,
  }}
  />

            <Box sx={{ textAlign: "center", mt: 2 }}>
              <Typography
                variant="h5"
                color={colors.grey[100]}
                fontWeight="bold"
              >
                Ed Roh
              </Typography>

              <Typography
                variant="body1"
                color={colors.greenAccent[500]}
              >
                VP Fancy Admin
              </Typography>
            </Box>
          </Box>
        )}

        {/* Menu Items */}
        <Menu>
          <Item
            title="Dashboard"
            to="/"
            icon={<HomeOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

            <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{m:'15px 0 5px 20px'}}
            >Data
            </Typography>

          <Item
            title="Manage Team"
            to="/team"
            icon={<PeopleOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Contact Information"
            to="/contacts"
            icon={<ContactsOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Invoices Balances"
            to="/invoices"
            icon={<ReceiptOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

            <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{m:'15px 0 5px 20px'}}
            >Pages
            </Typography>

          <Item
            title="Profile Form"
            to="/form"
            icon={<PersonOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="Calendar"
            to="/calendar"
            icon={<CalendarMonthOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          <Item
            title="FAQ"
            to="/faq"
            icon={<HelpOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

            <Typography
            variant="h6"
            color={colors.grey[300]}
            sx={{m:'15px 0 5px 20px'}}
            >Charts 
            </Typography>

          <Item
            title="Bar Chart"
            to="/bar"
            icon={<BarChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
          
            <Item
            title="Pie Chart"
            to="/pie"
            icon={<PieChartOutlineOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />

          
            <Item
            title="Line Chart"
            to="/line"
            icon={<ShowChartOutlinedIcon />}
            selected={selected}
            setSelected={setSelected}
          />
        </Menu>
      </Sidebar>
    </Box>
  );
}

export default SideBar;