import React, { useState, useEffect, createContext, useContext } from "react";

import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import { Box, Divider } from "@mui/material";
import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "white",
          height: "100vh",
          width: "15%",
          display: "flex",
          flexDirection: "column",
          fontFamily: 'tajawal'
        }}
      >
        <MenuList
          style={{
            display: "flex",
            flexDirection: "column",
            width: "auto",
          }}
          dir="rtl"
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: 40,
            }}
          >
            <img
              className="w-50"
              src={
                "https://img.freepik.com/premium-vector/chef-food-restaurant-logo_7085-179.jpg"
              }
            />
          </div>

          <MenuItem>
            <Link
              to={"/mangeusers"}
              style={{
                textDecoration: "none",
              }}
            >
              <ListItemText
                sx={{
                  color: "#02023E",
                  fontFamily: "tajawal",
                  padding: "10px",
                }}
              >
                ادارة المستخدمين
              </ListItemText>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              to={"/admins"}
              style={{
                textDecoration: "none",
              }}
            >
              <ListItemText
                sx={{
                  color: "#02023E",
                  fontFamily: "tajawal",
                  padding: "10px",
                }}
              >
                مدراء النظام 
              </ListItemText>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              to={"/addadmin"}
              style={{
                textDecoration: "none",
              }}
            >
              <ListItemText
                sx={{
                  color: "#02023E",
                  fontFamily: "tajawal",
                  padding: "10px",
                }}
              >
                 اضافة مدير نظام    
              </ListItemText>
            </Link>
          </MenuItem>
          <Divider sx={{ backgroundColor: "#02023E" }} />

          <MenuItem>
            <Link
              to={"/categorys"}
              style={{
                textDecoration: "none",
              }}
            >
              <ListItemText
                sx={{
                  color: "#02023E",
                  fontFamily: "tajawal",
                  padding: "10px",
                }}
              >
                 التصنيفات
              </ListItemText>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              to={"/addcategory"}
              style={{
                textDecoration: "none",
              }}
            >
              <ListItemText
                sx={{
                  color: "#02023E",
                  fontFamily: "tajawal",
                  padding: "10px",
                }}
              >
                 اضافة تصنيف  
              </ListItemText>
            </Link>
          </MenuItem>
          <Divider sx={{ backgroundColor: "#02023E" }} />

          <MenuItem>
            <Link
              to={"/addmeal"}
              style={{
                textDecoration: "none",
              }}
            >
              <ListItemText
                style={{
                  fontFamily: "tajawal",
                  color: "#02023E",
                  padding: "10px",
                }}
              >
                اضافة اكلة 
              </ListItemText>
            </Link>
          </MenuItem>

          <MenuItem>
            <Link
              to={"/addinfo"}
              style={{
                textDecoration: "none",
              }}
            >
              <ListItemText
                sx={{
                  color: "#02023E",
                  fontFamily: "tajawal",
                  padding: "10px",
                }}
              >
اضافة معلومة صحية
              </ListItemText>
            </Link>
          </MenuItem>
 
        </MenuList>
      </Box>
    </>
  );
}
