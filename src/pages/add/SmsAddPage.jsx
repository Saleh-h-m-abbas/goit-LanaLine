import "./SmsForm.scss"
import Navbar from "../../components/navbar/Navbar"
import SmsAddForm from "./SmsAddForm";
import SmsDatatable from "../../components/datatable/AddDatatable";
import Sidebar from "../../components/sidebar/Sidebar";

const SmsAddPage = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <SmsAddForm />
        <SmsDatatable />
      </div>
    </div>
  )
}

export default SmsAddPage;