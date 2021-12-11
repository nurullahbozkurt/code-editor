import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/javascript";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
import { EditorContex } from "../context";
import { useContext } from "react";
const JsEditor = ({ value, onChange }) => {
  const { jsValue, setJsValue } = useContext(EditorContex);
  return (
    <>
      <AceEditor
        placeholder="Write your code here.."
        mode="javascript"
        theme="monokai"
        name="editor_javascript"
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        onChange={(val) => setJsValue(val)}
        value={jsValue}
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
export default JsEditor;
