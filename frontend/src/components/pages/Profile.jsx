import { useState } from "react";
import { FiSearch, FiBell, FiKey, FiMoon, FiSun, FiChevronRight } from "react-icons/fi";
import { MdOutlineLocalShipping, MdOutlinePending, MdOutlineDeliveryDining } from "react-icons/md";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("profile");
  const [theme, setTheme] = useState("light");
  const [searchOrder, setSearchOrder] = useState("");
  const [notificationEnabled, setNotificationEnabled] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const dummyUser = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 234 567 8900",
    avatar: "images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3"
  };

  const dummyOrders = [
    {
      id: "ORD001",
      date: "2024-01-15",
      items: ["Premium Headphones", "Wireless Mouse"],
      status: "Delivered",
      total: "$299.99"
    },
    {
      id: "ORD002",
      date: "2024-01-10",
      items: ["Smart Watch", "Phone Case"],
      status: "Processing",
      total: "$459.99"
    },
    {
      id: "ORD003",
      date: "2024-01-05",
      items: ["Laptop Stand", "USB Hub"],
      status: "Shipped",
      total: "$89.99"
    },
    {
      id: "ORD003",
      date: "2024-01-05",
      items: ["Laptop Stand", "USB Hub"],
      status: "Shipped",
      total: "$89.99"
    }
  ];

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    setErrorMessage("Profile updated successfully!");
    setTimeout(() => setErrorMessage(""), 3000);
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "Delivered":
        return <MdOutlineDeliveryDining className="text-green-500" />;
      case "Shipped":
        return <MdOutlineLocalShipping className="text-blue-500" />;
      case "Processing":
        return <MdOutlinePending className="text-yellow-500" />;
      default:
        return null;
    }
  };

  const filteredOrders = dummyOrders.filter(order =>
    order.id.toLowerCase().includes(searchOrder.toLowerCase()) ||
    order.items.some(item => item.toLowerCase().includes(searchOrder.toLowerCase()))
  );

  return (
    <div className="min-h-[calc(100vh-6rem)] flex items-center justify-center mx-auto my-auto p-4 md:p-8 ">
      <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar Navigation */}
          <div className="w-full md:w-64 bg-gradient-to-r from-blue-300 to-purple-500 text-black p-6">
            <div className="flex items-center justify-center mb-8">
              <img
                src={`https://${dummyUser.avatar}`}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border-4 border-gray-700"
              />
            </div>
            <nav>
              <button
                onClick={() => setActiveTab("profile")}
                className={`w-full text-left px-4 py-3 rounded-lg mb-2 ${activeTab === "profile" ? "bg-gray-700" : "hover:bg-gray-700"}`}
                aria-label="Profile Section"
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab("orders")}
                className={`w-full text-left px-4 py-3 rounded-lg mb-2 ${activeTab === "orders" ? "bg-gray-700" : "hover:bg-gray-700"}`}
                aria-label="Orders Section"
              >
                Orders
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full text-left px-4 py-3 rounded-lg ${activeTab === "settings" ? "bg-gray-700" : "hover:bg-gray-700"}`}
                aria-label="Settings Section"
              >
                Settings
              </button>
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1 p-6">
            {errorMessage && (
              <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg" role="alert">
                {errorMessage}
              </div>
            )}

            {/* Profile Section */}
            {activeTab === "profile" && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold mb-6">Profile Information</h2>
                <form onSubmit={handleUpdateProfile}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        defaultValue={dummyUser.name}
                        className="w-full px-4 py-2 border rounded-lg  bg-gray-200 text-black focus:ring-2 focus:ring-black"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        defaultValue={dummyUser.email}
                        className="w-full px-4 py-2 border rounded-lg bg-gray-200 text-black focus:ring-2 focus:ring-black"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        defaultValue={dummyUser.phone}
                        className="w-full px-4 py-2 border rounded-lg  bg-gray-200 text-black focus:ring-2 focus:ring-black"
                      />
                    </div>
                  </div>
                  <button
                    type="submit"
                    className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    Update Profile
                  </button>
                </form>
              </div>
            )}

            {/* Orders Section */}
            {activeTab === "orders" && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold mb-6">Order History</h2>
                <div className="mb-6 relative">
                  <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search orders..."
                    value={searchOrder}
                    onChange={(e) => setSearchOrder(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="space-y-4">
                  {filteredOrders.map((order) => (
                    <div
                      key={order.id}
                      className="border rounded-lg p-4 hover:shadow-md transition-shadow"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-lg">{order.id}</h3>
                          <p className="text-sm text-gray-600">{order.date}</p>
                          <div className="mt-2">
                            {order.items.map((item, index) => (
                              <span
                                key={index}
                                className="inline-block bg-gray-100 rounded-full px-3 py-1 text-sm mr-2 mb-2"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="flex items-center space-x-2 mb-2">
                            {getStatusIcon(order.status)}
                            <span className={`text-sm ${order.status === "Delivered" ? "text-green-500" : order.status === "Shipped" ? "text-blue-500" : "text-yellow-500"}`}>
                              {order.status}
                            </span>
                          </div>
                          <p className="font-bold">{order.total}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Settings Section */}
            {activeTab === "settings" && (
              <div className="animate-fadeIn">
                <h2 className="text-2xl font-bold mb-6">Account Settings</h2>
                <div className="space-y-6">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <FiBell className="text-xl" />
                      <div>
                        <h3 className="font-semibold">Notifications</h3>
                        <p className="text-sm text-gray-600">Receive order updates and promotions</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notificationEnabled}
                        onChange={() => setNotificationEnabled(!notificationEnabled)}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <FiKey className="text-xl" />
                      <div>
                        <h3 className="font-semibold">Change Password</h3>
                        <p className="text-sm text-gray-600">Update your account password</p>
                      </div>
                    </div>
                    <button className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      <FiChevronRight />
                    </button>
                  </div>

                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      {theme === "light" ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
                      <div>
                        <h3 className="font-semibold">Theme</h3>
                        <p className="text-sm text-gray-600">Switch between light and dark mode</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                      className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      {theme === "light" ? "Dark" : "Light"}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;