import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { AppContext } from "./context/app-context";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const user = {
      name: "John Doe",
      avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    };

    setUser(user);
  }, []);

  const AppContextValue = {
    user,
  };

  return (
    <div className="App">
      <AppContext.Provider value={AppContextValue}>
        <Navbar />
      </AppContext.Provider>
    </div>
  );
}

export default App;
