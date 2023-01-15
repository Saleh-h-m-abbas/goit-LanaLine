import "./SmsForm.scss"
import Navbar from "../../components/navbar/Navbar"
import SmsAddForm from "./SmsAddForm";
import Sidebar from "../../components/sidebar/Sidebar";
import AddDatatable from "../../components/datatable/AddDatatable";

const SmsAddPage = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <SmsAddForm />
        <AddDatatable />
      </div>
    </div>
  )
}

export default SmsAddPage;