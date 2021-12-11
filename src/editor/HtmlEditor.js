import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/snippets/html";
import "ace-builds/src-min-noconflict/ext-searchbox";
import "ace-builds/src-min-noconflict/ext-language_tools";
import { EditorContex } from "../context";
import { useContext } from "react/cjs/react.development";

const HtmlEditor = () => {
  const { htmlValue, setHtmlValue } = useContext(EditorContex);
  return (
    <>
      <AceEditor
        width="100%"
        placeholder="Write your code here.."
        mode="html"
        theme="monokai"
        name="editor_html"
        fontSize={14}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        onChange={(val) => setHtmlValue(val)}
        value={htmlValue}
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
export default HtmlEditor;
