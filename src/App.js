import Login from "./components/auth/login";
import Register from "./components/auth/register";
import Header from "./components/header";
import Home from "./components/home";
import Updates from "./components/updates"; // Import the Updates component
import Docs from "./components/docs"; // Import the Docs component
import Lookup from "./components/lookup"; // Import the Docs component
import { AuthProvider } from "./contexts/authContext";
import { useRoutes } from "react-router-dom";
import Pricing from "./components/pricing";

function App() {
  const routesArray = [
    {
      path: "*",
      element: <Login />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/home",
      element: <Home />,
    },
    {
      path: "/pricing",
      element: <Pricing />,
    },
    {
      path: "/updates",
      element: <Updates />, // Define the route for the Updates page
    },
    {
      path: "/docs",
      element: <Docs />, // Define the route for the Docs page
    },
    {
      path: "/lookup",
      element: <Lookup />, // Define the route for the Docs page
    },
  ];
  let routesElement = useRoutes(routesArray);
  return (
    <AuthProvider>
      <Header />
      <div className="w-full h-screen flex flex-col">{routesElement}</div>
    </AuthProvider>
  );
}

export default App;
