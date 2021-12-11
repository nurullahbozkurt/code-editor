import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/css";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
import { EditorContex } from "../context";
import { useContext } from "react";

const CssEditor = () => {
  const { cssValue, setCssValue } = useContext(EditorContex);
  return (
    <>
      <AceEditor
        placeholder="Write your code here.."
        mode="css"
        theme="monokai"
        name="editor_css"
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        onChange={(val) => setCssValue(val)}
        value={cssValue}
        setOptions={{
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
          enableSnippets: true,
          showLineNumbers: true,
          tabSize: 2,
        }}
      />
    </>
  );
};
export default CssEditor;
