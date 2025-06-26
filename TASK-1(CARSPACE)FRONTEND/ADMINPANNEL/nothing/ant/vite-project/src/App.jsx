// now for responses page i want NotificationAndProfile page as the top bar .update app.jsx.import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Topbar from "./Components/Topbar";
import NotificationAndProfile from "./Components/NotificationAndProfile"
import UserHeader from "./Components/UserHeader";
import UserTable from "./Components/UserTable";
import UserDetails from "./pages/UserDetails";
import "./App.css";
import Greetings from "./pages/Greetings";
import ManageListings from "./pages/ManageListing";
import AddCarDetails from "./pages/AddCarDetails";
import BlogsPage from './pages2/Blogspage';
import FAQs from "./Components2/FAQs";
import AddFAQ from "./Components2/AddFAQ"
import AddBlog from "./pages2/AddBlog";
import ResponsesTable from "./Components2/ResponsesTable";
import Bookings from "./pages2/Bookings";
import AddCarTopbar from "./pages/AddCarTopbar";
import HoliGreeting from "./pages2/HoliGreeting";

function App() {
  const location = useLocation();

  // Show UserHeader for both /users and /users/:id
  const isUserPage = location.pathname.startsWith("/users");
  const isResponsesPage = location.pathname === "/responses";
  const isManagePage = location.pathname === "/manage";
  const isAddCarPage = location.pathname === "/addcardetails";
  const isBookingsPage = location.pathname === "/bookings";
  const isFaqsPage = location.pathname === "/faqs";
  const isAddFaqPage = location.pathname === "/addfaq";
  const isBlogsPage = location.pathname === "/blogs";
  const isAddBlogPage = location.pathname === "/addblog";
  const isGreetingsPage = location.pathname === '/greetings'; 
  const isHoliGreetingsPage = location.pathname === '/addgreetings'; // or your actual route



  return (
    <div style={{ display: "flex" }}>
      <Sidebar />

      <div className="main" style={{ flex: 1, padding: "16px" }}>
        {/* {isUserPage ? <UserHeader /> : <Topbar />} */}
              {isBookingsPage || isAddFaqPage || isAddBlogPage || isGreetingsPage || isHoliGreetingsPage  ? null : 
          isUserPage ? (
            <UserHeader />
          ) : isResponsesPage || isManagePage || isFaqsPage || isBlogsPage ? (
            <NotificationAndProfile />
          ) : isAddCarPage ? (
            <AddCarTopbar />
          ) : (
            <Topbar />
          )
        }




        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserTable />} />
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/greetings" element={<Greetings/>} />
          <Route path="/manage" element={<ManageListings/>} />
          <Route path="/addcardetails" element={<AddCarDetails/>}/>
          <Route path="/blogs" element={<BlogsPage/>}/>
          <Route path="/bookings" element={<Bookings/>}/>
          <Route path="/faqs" element={<FAQs/>}/>
          <Route path="/addfaq" element={<AddFAQ/>}/>
          <Route path="/addblog" element={<AddBlog/>}/>
          <Route path="/responses" element={<ResponsesTable/>}/>
          <Route path="/addgreetings" element={<HoliGreeting/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
 