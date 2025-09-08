import { memo } from "react";
import { AiOutlineProduct } from "react-icons/ai";
import { BiSolidUserAccount } from "react-icons/bi";
import { GoGraph } from "react-icons/go";
import { NavLink, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
      <div className="sidebar w-[250px] p-[1rem]">
        <div className="pl-[18px] cursor-pointer" onClick={() => navigate("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="214"
            height="46"
            viewBox="0 0 214 46"
            fill="none"
            role="img"
            aria-label="E-Commerce logo"
          >
            <g transform="translate(8,6)">
              <rect
                x="0"
                y="0"
                width="34"
                height="34"
                rx="6"
                fill="#BA8D5B"
                opacity="0.06"
              />
              <path
                d="M6 10h1.8l3.6 10.5a1.2 1.2 0 0 0 1.14.8h8.16a1.2 1.2 0 0 0 1.14-.8L28 10.6H10"
                stroke="#BA8D5B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                fill="none"
              />
              <circle cx="14" cy="26" r="2.4" fill="#0F1826" />
              <circle cx="24" cy="26" r="2.4" fill="#0F1826" />
            </g>

            <g transform="translate(54,12)">
              <text
                x="0"
                y="12"
                font-family="Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"
                font-size="18"
                font-weight="700"
                fill="#0F1826"
              >
                E-Commerce
              </text>
              <text
                x="0"
                y="32"
                font-family="Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"
                font-size="10"
                fill="#666666"
              >
                online market
              </text>
            </g>
          </svg>
        </div>
        <ul>
          <li>
            <NavLink end={true} className={"sidebar__link"} to={""}>
              <div className="flex gap-[16px] items-center">
                <GoGraph className="text-[24px]" />
                <p>Statistics</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink className={"sidebar__link"} to={"product"}>
              <div className="flex gap-[16px] items-center">
                <AiOutlineProduct className="text-[24px]" />
                <p>Products</p>
              </div>
            </NavLink>
          </li>
          <li>
            <NavLink className={"sidebar__link"} to={"user"}>
              <div className="flex gap-[16px] items-center">
                <BiSolidUserAccount className="text-[24px]" />
                <p>Users</p>
              </div>
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default memo(Sidebar);
