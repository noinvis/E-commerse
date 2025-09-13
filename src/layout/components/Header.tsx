import { memo } from "react";
import { BsBellFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router-dom";
import { removeToken } from "../../features/auth/store/authSlice";
import { useDispatch } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(removeToken());
    navigate("/login");
  };
  return (
    <div className="flex items-center justify-between sticky top-0 z-10 bg-white h-[60px]">
      <button className="p-[10px] bg-[#BC8E5B] text-white rounded-[10px] cursor-pointer">
        <FaBars />
      </button>
      <div className="flex gap-[24px]">
        <button className="text-[20px] text-[#555] cursor-pointer">
          <BsBellFill />
        </button>
        <button
          className="text-[20px] text-[#555] cursor-pointer"
          onClick={logout}
        >
          <RxExit />
        </button>
      </div>
    </div>
  );
};

export default memo(Header);
