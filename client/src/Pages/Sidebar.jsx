import { BadgePlus, BarChart4, DollarSign, FilePen, GitCompareArrows, Home } from "lucide-react"
import { Link } from "react-router-dom"

const Sidebar = () => {
  return (
    <div className="bg-slate-200 h-screen sticky top-0 left-0">
      <ul className="p-3">
        <li className="bg-blue-700 text-white p-2 rounded-lg flex gap-1">
          <Home />
          <span className="lg:inline hidden">Dashboard</span>
        </li>
        <li>
          <Link className="mt-1 hover:bg-slate-600 p-2 rounded-lg flex gap-1 hover:text-white" to="/new-blog">
            <BadgePlus />
            <span className="lg:inline hidden">New Post</span>
          </Link>
        </li>
        <li className="hover:bg-slate-600 p-2 rounded-lg flex gap-1 hover:text-white">
          <GitCompareArrows />
          <span className="lg:inline hidden">Category</span>
        </li>
        <li className="mt-3 hover:bg-slate-600 p-2 rounded-lg flex gap-1 hover:text-white">
          <FilePen />
          <span className="lg:inline hidden">My Post</span>
        </li>
        <li className="hover:bg-slate-600 p-2 rounded-lg flex gap-1 hover:text-white">
          <DollarSign />
          <span className="lg:inline hidden">Earning</span>
        </li>
        <li className="hover:bg-slate-600 p-2 rounded-lg flex gap-1 hover:text-white">
          <BarChart4 />
          <span className="lg:inline hidden">Analytics</span>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
