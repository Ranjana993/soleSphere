import MainUI from "./MainUI"
import Sidebar from "./Sidebar"


const Dashboard = () => {
  return (
    <div className="flex gap-2">
      <div className="w-[15%]">
        <Sidebar />
      </div>
      <div className="w-[85%]">
        <MainUI />
      </div>
    </div>
  )
}

export default Dashboard