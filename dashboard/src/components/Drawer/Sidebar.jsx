import React, { useState, useEffect, createContext, useContext } from "react";

import MenuList from "@mui/material/MenuList";
import ListItemText from "@mui/material/ListItemText";
import { Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineUser, AiOutlineSetting, AiOutlinePlus } from "react-icons/ai";
import { BsGrid3X3GapFill, BsPlusSquare } from "react-icons/bs";

export default function Sidebar() {
  return (
    <Box
      className="bg-white h-screen w-72 pr-10 flex flex-col"
      style={{ fontFamily: "Tajawal" }}
      dir='rtl'
    >
      <div className="flex flex-col items-center mb-8">
        <img
          className="w-56"
          src="https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg"
          alt="logo"
        />
      </div>

      <ul className="flex flex-col space-y-2.5">
      <MenuItem to="/home" icon={<AiOutlineUser />} text="الرئيسية" />

        <MenuItem to="/mangeusers" icon={<AiOutlineUser />} text="ادارة المستخدمين" />
        <MenuItem to="/admins" icon={<AiOutlineSetting />} text="مدراء النظام" />
        {/* Uncomment to add more items */}
        {/* <MenuItem to="/addadmin" icon={<AiOutlinePlus />} text="اضافة مدير نظام" /> */}
        <Divider className="bg-black" />

        <MenuItem to="/categorys" icon={<BsGrid3X3GapFill />} text="التصنيفات" />
        <Divider className="bg-black" />

        <MenuItem to="/allmeals" icon={<BsGrid3X3GapFill />} text="عرض كل الاكلات" />
        <MenuItem to="/addmeal" icon={<AiOutlinePlus />} text="اضافة اكلة" />
        <Divider className="bg-black" />
        {/* <MenuItem to="/allinfo" icon={<BsGrid3X3GapFill />} text="عرض المعلومات" /> */}
        <MenuItem to="/addinfo" icon={<AiOutlinePlus />} text="اضافة معلومة صحية" />
      </ul>
    </Box>
  );
}

function MenuItem({ to, icon, text }) {
  return (
    <li className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-200">
      <Link to={to} className="text-gray-700 p-2">
        {icon}
      </Link>
      <Link to={to} className="text-gray-700">
        {text}
      </Link>
    </li>
  );
}
