import React, { useEffect, useState } from "react";

import { Typography, ChmexUIContext, NavBar, Code, TextInput } from "chmex-ui";

import Sun from "./assets/sun.png";
import Moon from "./assets/moon.png";
import ChmexUILogo from "./assets/chmex-ui.svg";

import { getDocumentation, getSectionCategory } from "./network/ApiAxios";
import SideBarItem from "./components/SideBarItem";
import axios from "axios";
import Example from "./components/Example";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [docs, setDocs] = useState([]);
  const [sectionCategories, setSectionCategories] = useState([]);

  const [openSideBarCategory, setOpenSideBarCategory] = useState(null);

  const tryGetDocumentation = async () => {
    axios.all([getSectionCategory(), getDocumentation()]).then(
      axios.spread((dataSectionCategory, dataDocs) => {
        // console.log(dataSectionCategory.data, dataDocs.data)
        setSectionCategories(dataSectionCategory.data.data);
        setDocs(dataDocs.data.data);
      })
    );
  };

  useEffect(() => {
    tryGetDocumentation();
  }, []);

  function renderElement(blockItem) {
    if (blockItem.item.isExample) {
      return <Example>{createElement(blockItem)}</Example>;
    } else {
      return createElement(blockItem);
    }
  }

  function createElement(blockItem) {
    switch (blockItem.collection) {
      case "typography":
        return (
          <Typography
            key={blockItem.id}
            kind={blockItem.item.kind}
            color={blockItem.item.color}
            style={blockItem.item.style}
          >
            {blockItem.item.value}
          </Typography>
        );

      case "code":
        return (
          <Code
            key={blockItem.id}
            code={blockItem.item.code}
            value={blockItem.item.value}
            style={blockItem.item.style}
          />
        );

      case "textinput":
        return (
          <TextInput
            key={blockItem.id}
            label={blockItem.item.label}
            borderVariant={blockItem.item.borderVariant}
            containerStyle={blockItem.item.style}
          />
        );

      case "multifield":
        let elmts = [];
        blockItem.item.field.forEach((multifield) =>
          elmts.push(renderElement(multifield))
        );
        return elmts;

      default:
        break;
    }
  }

  return (
    <ChmexUIContext.Provider
      value={{
        dark: isDarkMode,
      }}
    >
      <div className={`page-container ${isDarkMode ? "dark" : "light"}`}>
        <div className="sidebar">
          <div className="title">
            <img alt="Chmex UI Logo" src={ChmexUILogo} className="logo" />
            <Typography kind="h4" style={{ marginBottom: 0 }}>
              Chmex UI
            </Typography>
          </div>
          <div className="items">
            {sectionCategories.map((sectionCategory) => (
              <SideBarItem
                isDarkMode={isDarkMode}
                key={sectionCategory.id}
                onClick={() => {
                  openSideBarCategory !== sectionCategory.id
                    ? setOpenSideBarCategory(sectionCategory.id)
                    : setOpenSideBarCategory(null);
                }}
                label={sectionCategory.title}
                itemChildren={sectionCategory.sectionId}
                isOpen={openSideBarCategory === sectionCategory.id}
              />
            ))}
          </div>
        </div>
        <div className="documentation-wrapper">
          <NavBar
            style={{ paddingInline: 64 }}
            leftChild={
              <div>{/* <h1 style={{ color: 'white' }}>hi</h1> */}</div>
            }
            rightChild={
              <img
                alt="dark-mode-toggle"
                src={isDarkMode ? Sun : Moon}
                className="mode-icon"
                onClick={() => {
                  setIsDarkMode(!isDarkMode);
                }}
              />
            }
          />
          <div className="documentation">
            {docs.map((section) => (
              <div id={section.title} className="section" key={section.id}>
                {section.field.map((blockItem) => renderElement(blockItem))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </ChmexUIContext.Provider>
  );
};
export default App;
