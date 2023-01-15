import UsersDatatable from "../../components/datatable/UsersDatatable";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import UsersAdd from "./UsersAdd";

const Users = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <UsersAdd />
        <UsersDatatable />
      </div>
    </div>
  );
};

export default Users;
