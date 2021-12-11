import { createContext, useState } from "react";

export const EditorContex = createContext();

const EditorProvider = (props) => {
  const [activeTab, setActiveTab] = useState("html");
  const [htmlValue, setHtmlValue] = useState("");
  const [cssValue, setCssValue] = useState("");
  const [jsValue, setJsValue] = useState("");
  return (
    <EditorContex.Provider
      value={{
        activeTab,
        setActiveTab,
        htmlValue,
        setHtmlValue,
        cssValue,
        setCssValue,
        jsValue,
        setJsValue,
      }}
    >
      {props.children}
    </EditorContex.Provider>
  );
};
export default EditorProvider;
