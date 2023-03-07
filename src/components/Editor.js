import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor({
  value,
  placeholder,
  onChange,
  fieldName,
  modules,
  formats,
  id
}) {
  return (
    <ReactQuill
      theme="snow"
      value={value}
      onChange={e => onChange(e, fieldName)}
      placeholder={placeholder}
      modules={modules}
      formats={formats}
      id={id}
    />
  );
}

export default Editor;
