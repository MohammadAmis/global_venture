import { useState } from "react";
import Tabbar from './dashboard_pages/Tabbar.jsx'
import Setting from './dashboard_pages/Setting.jsx'
import History from './dashboard_pages/History.jsx'
import Products from './dashboard_pages/Products.jsx'
import Analytics from './dashboard_pages/Analytics.jsx'
import Orders from './dashboard_pages/Orders.jsx'
import Overview from './dashboard_pages/Overview.jsx'


const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");


  return (
    <div className="min-h-screen bg-gray-100">
      <Tabbar activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === "overview" && <Overview />}
        {activeTab === "products" &&  <Products/>}
        {activeTab === "orders" && <Orders />}
        {activeTab === "analytics" && <Analytics />}
        {activeTab === "history" && <History />}
        {activeTab === "setting" && <Setting />}
      </main>
    </div>
  );
};

export default Dashboard;
