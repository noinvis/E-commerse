import { memo } from "react";
import { BsBellFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../features/auth/store/authSlice";
import { useDispatch } from "react-redux";
import { IoSearchOutline } from "react-icons/io5";

const Header = ({ user, onToggle }: { user: any; onToggle: () => void }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const logout = () => {
    dispatch(removeToken());
    navigate("/login");
  };
  const goProfile = () => {
    navigate("/profile")
  }
  return (
    <div className="flex items-center justify-between sticky top-0 z-10 bg-white h-[60px]">
      <div className="flex gap-4 items-center">
        <button onClick={onToggle} className="p-[10px] bg-[#BC8E5B] text-white rounded-[10px] cursor-pointer">
          <FaBars />
        </button>
      <div className="flex gap-3 bg-white border border-[#D5D5D5] items-center py-[7px] px-4 rounded-[20px] w-[380px]">
        <label htmlFor="search">
          <IoSearchOutline className="text-[20px] cursor-pointer opacity-50"/>
        </label>
        <input type="text" id="search" placeholder="Search" className="outline-0 w-full"/>
      </div>
      </div>
      <div className="flex gap-[24px] items-center">
        <button className="text-[20px] text-[#555] cursor-pointer">
          <BsBellFill />
        </button>
        <button
          className="text-[20px] text-[#555] cursor-pointer"
          onClick={logout}
        >
          <RxExit />
        </button>
        <div className="flex gap-2">
          <div className="flex flex-col items-end">
            <p className="font-semibold text-[#404040]">{user ? user?.data?.fname : "?"}</p>
            <p className="text-[12px] text-[#565656]">{user ? user?.data?.role : "?"}</p>
          </div>
          <button onClick={goProfile} className="size-10 cursor-pointer bg-[#BC8E5B] text-white rounded-full grid place-items-center font-bold">
            {user ? user?.data?.fname.slice(0, 1) : "?"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(Header);
