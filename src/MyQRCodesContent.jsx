import React, { useState, useEffect } from "react";
import MyQR from "./MyQRCodes.module.css";

function MyQRCodesContent() {
  // State to manage dropdown visibility
  const [dropdown1Visible, setDropdown1Visible] = useState(false);
  const [dropdown2Visible, setDropdown2Visible] = useState(false);
  const [dropdown3Visible, setDropdown3Visible] = useState(false);
  const [dropdown4Visible, setDropdown4Visible] = useState(false);

  // Toggle dropdown function
  const toggleDropdown = (dropdownId) => {
    switch (dropdownId) {
      case "1":
        setDropdown1Visible(!dropdown1Visible);
        break;
      case "2":
        setDropdown2Visible(!dropdown2Visible);
        break;
      case "3":
        setDropdown3Visible(!dropdown3Visible);
        break;
      case "4":
        setDropdown4Visible(!dropdown4Visible);
        break;
      default:
        break;
    }
  };

  // Close dropdowns on click outside
  const handleClickOutside = (event) => {
    const dropdowns = [
      { id: "1", visible: dropdown1Visible, setVisible: setDropdown1Visible },
      { id: "2", visible: dropdown2Visible, setVisible: setDropdown2Visible },
      { id: "3", visible: dropdown3Visible, setVisible: setDropdown3Visible },
      { id: "4", visible: dropdown4Visible, setVisible: setDropdown4Visible },
    ];

    // Check if the click target is inside any of the dropdowns
    const isClickInsideDropdown = dropdowns.some(({ visible }) => visible);

    if (!isClickInsideDropdown) {
      // Close all dropdowns if the click is outside
      dropdowns.forEach(({ visible, setVisible }) => {
        if (visible) {
          setVisible(false);
        }
      });
    }
  };

  // Attach click event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener("click", handleClickOutside);

    // Cleanup event listener when the component unmounts
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [dropdown1Visible, dropdown2Visible, dropdown3Visible, dropdown4Visible]);

  return (
    <div>
      <div className={MyQR.container}>
        <div className={MyQR.header}>
          <h2>My QR Codes</h2>
          <nav>
            <ol>
              <li>All QR codes /</li>
            </ol>
          </nav>
        </div>
        <div className={MyQR.buttonContainer}>
          <a
            href="/qr-code-generator"
            className={MyQR.createBtn}
            id="create-new-qenerator-btn"
            data-action="click->admin--qr-filters#createNewBtn"
          >
            <div>
              <img src="/public/more.png" alt="add" />
              <span>Create new QR</span>
            </div>
          </a>
        </div>
      </div>
      {/* New big container with three child divs */}
      <div className={MyQR.bigContainer}>
        <div className={MyQR.headDiv1}>
          <button className={MyQR.selectAllBtn}>Select All</button>
          <button className={MyQR.copyBtn} id={MyQR.copyButton}></button>
          <button className={MyQR.deleteBtn} id={MyQR.deleteButton}></button>
          <div className={MyQR.dropdown} id={MyQR.filterButton}>
            <button
              onClick={() => toggleDropdown("1")}
              className={MyQR.dropbtn}
            >
              <img
                src="/public/filter.png"
                alt="from"
                style={{ width: "24px", height: "24px" }}
              />
            </button>
            <div
              id={MyQR.dropdownContent1}
              className={`${MyQR.dropdownContent} ${
                dropdown1Visible ? MyQR.show : ""
              }`}
            >
              <a href="#" onClick={() => toggleDropdown("1")}>
                Link
              </a>
              <a href="#" onClick={() => toggleDropdown("1")}>
                Vcard
              </a>
              <a href="#" onClick={() => toggleDropdown("1")}>
                Text
              </a>
            </div>
          </div>

          <div className={MyQR.dropdown} id={MyQR.fromButton}>
            <button
              onClick={() => toggleDropdown("2")}
              className={MyQR.dropbtn}
            >
              <img
                src="/public/from.png"
                alt="from"
                style={{ width: "24px", height: "24px" }}
              />
            </button>
            <div
              id={MyQR.dropdownContent2}
              className={`${MyQR.dropdownContent} ${
                dropdown2Visible ? MyQR.show : ""
              }`}
            >
              <a href="#" onClick={() => toggleDropdown("2")}>
                New First
              </a>
              <a href="#" onClick={() => toggleDropdown("2")}>
                Old First
              </a>
              <a href="#" onClick={() => toggleDropdown("2")}>
                By Popularity
              </a>
            </div>
          </div>
        </div>
        <div className={MyQR.headDiv2}>
          <input type="text" id={MyQR.searchBox} placeholder="Search..." />
        </div>
        <div className={MyQR.belowDiv}>
          <div className={MyQR.qrCodeContainer}>
            <div className={MyQR.checkboxContainer}>
              {/* Checkbox */}
              <input type="checkbox" id={MyQR.checkbox} />
              {/* Text next to the checkbox */}
              <label htmlFor={MyQR.checkbox} className={MyQR.checkboxLabel}>
                Include in Selection
              </label>
            </div>
            <img src="./public/download.png" alt="QR Code" className={MyQR.qrCode} />
            <div className={MyQR.qrCodeInfo}>
              <p>Link: https://me-qr.com/entry/vcard/N6Oj8nMX</p>
              <p>Type: vCard</p>
              <p>Created: 11.12.23</p>
            </div>
            <div className={MyQR.textColumns}>
              <p>Scans:</p>
              <p>5</p>
              <p>Users:</p>
              <p>3</p>
            </div>
            <div className={MyQR.buttonsContainer}>
              <div className={MyQR.dropdown}>
                <button
                  onClick={() => toggleDropdown("3")}
                  className={MyQR.dropbtn}
                >
                  Dowload
                </button>
                <div
                  className={`${MyQR.dropdownContent} ${
                    dropdown3Visible ? MyQR.show : ""
                  }`}
                >
                  <a
                    href="#"
                    style={{ display: "flex", alignItems: "center" }}
                    onClick={() => toggleDropdown("3")}
                  >
                    PNG
                    <img
                      src="/public/qrdowload.png"
                      alt="Download SVG"
                      style={{
                        width: "24px",
                        height: "24px",
                        marginLeft: "30px",
                      }}
                    />
                  </a>
                  <a
                    href="#"
                    style={{ display: "flex", alignItems: "center" }}
                    onClick={() => toggleDropdown("3")}
                  >
                    SVG
                    <img
                      src="/public/qrdowload.png"
                      alt="Download SVG"
                      style={{
                        width: "24px",
                        height: "24px",
                        marginLeft: "30px",
                      }}
                    />
                  </a>
                </div>
              </div>
              <div className={MyQR.dropdown}>
                <button
                  onClick={() => toggleDropdown("4")}
                  className={MyQR.dropbtn}
                >
                  Option
                </button>
                <div
                  className={`${MyQR.dropdownContent} ${
                    dropdown4Visible ? MyQR.show : ""
                  }`}
                >
                  <a onClick={() => toggleDropdown("4")}>Delete</a>
                  <a onClick={() => toggleDropdown("4")}> Copy </a>
                  <a onClick={() => toggleDropdown("4")}>Select</a>
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
