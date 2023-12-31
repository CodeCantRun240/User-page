import React, { useState } from "react";
import MyQrCodes from "./MyQRCodes.module.css"
function MyQRCodesContent() {
  // Toggle dropdown function
  const toggleDropdown = (buttonId) => {
    const dropdownContent = document.getElementById(
      `dropdownContent${buttonId}`
    );
    dropdownContent.classList.toggle("show");

    // Close other dropdowns
    const dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (
        openDropdown.id !== `dropdownContent${buttonId}` &&
        openDropdown.classList.contains("show")
      ) {
        openDropdown.classList.remove("show");
      }
    }
  };

  // Close dropdowns on click outside
  const handleClickOutside = (event) => {
    if (!event.target.matches(".dropbtn")) {
      const dropdowns = document.getElementsByClassName("dropdown-content");
      for (let i = 0; i < dropdowns.length; i++) {
        const openDropdown = dropdowns[i];
        if (openDropdown.classList.contains("show")) {
          openDropdown.classList.remove("show");
        }
      }
    }
  };

  // Attach click event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="container">
        <div className="header">
          <h2>My QR Codes</h2>
          <nav>
            <ol>
              <li>All QR codes /</li>
            </ol>
          </nav>
        </div>
        <div className="button-container">
          <a
            href="/qr-code-generator"
            className="create-btn"
            id="create-new-qenerator-btn"
            data-action="click->admin--qr-filters#createNewBtn"
          >
            <img src="/static/pages/admin-img/plus-circle.svg" alt="add" />{" "}
            Create new QR
          </a>
        </div>
      </div>
      {/* New big container with three child divs */}
      <div className="big-container">
        <div className="head-div1">
          {/* Dropdown button */}
          {/* Button to select all */}
          <button className="select-all-btn">Select All</button>
          {/* Button to copy selected content */}
          {/* Button with copy icon */}
          <button className="copy-btn" id="copyButton"></button>
          {/* Button with delete icon */}
          <button className="delete-btn" id="deleteButton"></button>
          <div className="dropdown">
            <button onClick={() => toggleDropdown("1")} className="dropbtn">
              To
            </button>
            <div id="dropdownContent1" className="dropdown-content">
              <a href="#">Link</a>
              <a href="#">Vcard</a>
              <a href="#">Text</a>
            </div>
          </div>

          <div className="dropdown">
            <button onClick={() => toggleDropdown("2")} className="dropbtn">
              From
            </button>
            <div id="dropdownContent2" className="dropdown-content">
              <a href="#">New First</a>
              <a href="#">Old First</a>
              <a href="#">By Popularity</a>
            </div>
          </div>
        </div>
        <div className="head-div2">
          {/* Replace the heading with a search box */}
          <input type="text" id="searchBox" placeholder="Search..." />
        </div>
        <div className="below-div">
          <div className="qr-code-container">
            <img src="download.png" alt="QR Code" className="qr-code" />
            <div className="qr-code-info">
              <p>Link: https://me-qr.com/entry/vcard/N6Oj8nMX</p>
              <p>Type: vCard</p>
              <p>Created: 11.12.23</p>
              <p>Folder: N60j8nMX</p>
            </div>
            <div className="text-columns">
              <p>Scans:</p>
              <p>5</p>
              <p>Users:</p>
              <p>3</p>
            </div>
            <div className="buttons-container">
              <div className="dropdown">
                <button onClick={() => toggleDropdown("3")} className="dropbtn">
                  Dowload
                </button>
                <div id="dropdownContent3" className="dropdown-content">
                  <a href="#">PNG</a>
                  <a href="#">SVG</a>
                </div>
              </div>
              <div className="dropdown">
                <button onClick={() => toggleDropdown("4")} className="dropbtn">
                  Option
                </button>
                <div id="dropdownContent4
                " className="dropdown-content">
                  <a href="#">Sellect</a>
                  <a href="#">Copy</a>
                  <a href="#">Delete</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyQRCodesContent;
