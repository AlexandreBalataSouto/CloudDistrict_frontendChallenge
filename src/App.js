import "./App.css";
import Home from "./components/Home/Home";
import Profile from "./components/Profile/Profile";
import Loading from "./components/Loading/Loading";
import NotFound from "./components/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <main className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </main>
  );
}

export default App;
