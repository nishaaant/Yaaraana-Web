import { useSelector } from "react-redux"
import appStore from "../utils/appStore"

const Navbar = () => {

  const user = useSelector((store) => store.user)


    return (
        <div className="navbar bg-base-200">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">Yaaraana .</a>
  </div>
  <div className="flex-none gap-2">
    <div className="form-control">
      {/* <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" /> */}
    </div>
    
   {user && ( <div className="dropdown dropdown-end ">
    <div className="flex items-center gap-4">
      <h2>Hello , {user.firstName}</h2>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src= {user.photo} />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
          </div>
    </div>)}
  </div>
</div>
    )
}

export default Navbar