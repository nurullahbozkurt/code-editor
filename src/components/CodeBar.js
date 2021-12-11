import styles from "../components/CodeBar.module.css";
import { useContext } from "react";
import HtmlEditor from "../editor/HtmlEditor";
import CssEditor from "../editor/CssEditor";
import JsEditor from "../editor/JsEditor";
import { EditorContex } from "../context";
const CodeBar = () => {
  const {
    activeTab,
    setActiveTab,
    cssValue,
    setCssValue,
    jsValue,
    setJsValue,
  } = useContext(EditorContex);

  return (
    <>
      <div className={styles.codebar}>
        <nav className={styles.navbar}>
          <button
            onClick={() => setActiveTab("html")}
            className={
              activeTab === "html" ? styles.activeButton : styles.button
            }
          >
            HTML
          </button>
          <button
            onClick={() => setActiveTab("css")}
            className={
              activeTab === "css" ? styles.activeButton : styles.button
            }
          >
            CSS
          </button>
          <button
            onClick={() => setActiveTab("js")}
            className={activeTab === "js" ? styles.activeButton : styles.button}
          >
            JS
          </button>
        </nav>
        <section className={styles.editor}>
          {activeTab === "html" && <HtmlEditor />}
          {activeTab === "css" && (
            <CssEditor value={cssValue} onChange={setCssValue} />
          )}
          {activeTab === "js" && (
            <JsEditor value={jsValue} onChange={setJsValue} />
          )}
        </section>
      </div>
    </>
  );
};
export default CodeBar;
