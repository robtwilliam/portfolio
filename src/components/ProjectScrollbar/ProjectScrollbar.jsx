import React from "react";
import { NavLink } from "react-router-dom";
import './projectscrollbar.css';

const links = [
    { name: "cyclistic-bikeshare", nav_title: "Cyclistic Bikeshare", path: "?id=cyclistic-bikeshare" },
    { name: "apex-legends-tournament-earnings", nav_title: "Apex Legends Tournament Earnings", path: "?id=apex-legends-tournament-earnings" },
    { name: "photomosaic-builder", nav_title: "Photomosaic Builder",  path: "?id=photomosaic-builder" },
    { name: "little-lemon-booking", nav_title: "Little Lemon", path: "?id=little-lemon-booking" }
  ];


function ProjectScrollbar(props) {
    return (
        <div
          className="scrollbar-div"
        >
          <nav
            className="scrollbar-nav"
          >
            {links.map((link, index) => (
              <NavLink
                key={index}
                to={link.path}
                className={({ isActive }) => (
                    `nav-link ${link.name == props.id ? "active" : ""}`)
                }
                >
                {link.nav_title}
              </NavLink>
            ))}
          </nav>
        </div>
      );
    };

export default ProjectScrollbar;