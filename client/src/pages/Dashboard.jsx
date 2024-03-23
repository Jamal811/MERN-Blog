import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import SidebarDash from "../components/SidebarDash";
import ProfileDash from "../components/ProfileDash";
const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <SidebarDash />
      </div>
      {/* profile... */}
      {tab === "profile" && <ProfileDash />}
    </div>
  );
};

export default Dashboard;
