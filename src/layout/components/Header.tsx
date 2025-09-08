import { memo } from "react";
import { BsBellFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { RxExit } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-between py-[1rem]">
      <button className="p-[10px] bg-[#BC8E5B] text-white rounded-[10px] cursor-pointer">
        <FaBars />
      </button>
      <div className="flex gap-[24px] pr-[30px]">
        <button className="text-[20px] text-[#555] cursor-pointer">
          <BsBellFill />
        </button>
        <button
          className="text-[20px] text-[#555] cursor-pointer"
          onClick={() => navigate("/")}
        >
          <RxExit />
        </button>
      </div>
    </div>
  );
};

export default memo(Header);
