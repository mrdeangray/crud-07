import { Routes, Route } from "react-router-dom";
import "./App.css";
import CreateUser from "./components/CreateUser";
import Users from "./components/ReadUsers";
import UserProvider from "./context/UserProvider";
import UpdateUser from "./components/UpdateUser";
import DeleteUser from "./components/DeleteUser/Index";

function App() {
  return (
    <div className="App">
      <UserProvider>
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route exact path="/create" element={<CreateUser />} />
          <Route exact path="/update/:id" element={<UpdateUser />} />
          <Route exact path="/delete/:id" element={<DeleteUser />} />
        </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
