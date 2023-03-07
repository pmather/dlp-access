import React, { Fragment } from "react";
import { Form, Input, TextArea } from "semantic-ui-react";
import Editor from "../../../components/Editor";

const editorModules = {
  toolbar: [["bold", "italic", "underline"], ["link"], ["clean"]],
  clipboard: {
    matchVisual: false
  }
};
const editorFormats = ["bold", "italic", "underline", "link"];

const EditMetadata = React.memo(props => {
  let editInput = null;
  let htmlFields = ["source", "related_url", "description", "rights_statement"];
  if (props.isMulti) {
    editInput = (
      <Fragment>
        <ul>
          {props.values &&
            props.values.map((value, idx) => {
              if (htmlFields.find(el => el === props.field)) {
                return (
                  <li key={`${props.label}_${idx}`}>
                    <Editor
                      value={value}
                      placeholder={`Enter ${props.field} for the record`}
                      onChange={props.onChangeValue}
                      fieldName={`${props.field}-${idx}`}
                      modules={editorModules}
                      formats={editorFormats}
                      id={`${props.field}_${idx}`}
                    ></Editor>
                    <button
                      type="button"
                      onClick={() => props.onRemoveValue(props.field, idx)}
                      className="small deleteValue"
                    >
                      Delete Value
                    </button>
                    <div className="clear"></div>
                  </li>
                );
              } else {
                return (
                  <li key={`${props.label}_${idx}`}>
                    <TextArea
                      name={`${props.field}_${idx}`}
                      onChange={event =>
                        props.onChangeValue(event, `${props.field}-${idx}`)
                      }
                      placeholder={`Enter ${props.field} for the record`}
                      value={value || ""}
                    />
                    <button
                      type="button"
                      onClick={() => props.onRemoveValue(props.field, idx)}
                      className="small deleteValue"
                    >
                      Delete Value
                    </button>
                    <div className="clear"></div>
                  </li>
                );
              }
            })}
        </ul>
        <button
          type="button"
          onClick={() => props.onAddValue(props.field)}
          className="small"
          id={`${props.field}_add_value_button`}
        >
          Add Value
        </button>
      </Fragment>
    );
  } else if (props.isBoolean) {
    editInput = (
      <Input
        type="checkbox"
        name={`${props.field}`}
        onChange={event => props.onChangeValue(event, props.field)}
        checked={props.values || false}
      />
    );
  } else {
    if (htmlFields.find(el => el === props.field)) {
      editInput = (
        <Editor
          value={props.values}
          placeholder={`Enter ${props.field} for the record`}
          onChange={props.onChangeValue}
          fieldName={props.field}
          modules={editorModules}
          formats={editorFormats}
          id={props.field}
        ></Editor>
      );
    } else {
      editInput = (
        <TextArea
          name={`${props.field}`}
          onChange={event => props.onChangeValue(event, props.field)}
          placeholder={`Enter ${props.field} for the record`}
          value={props.values || ""}
        />
      );
    }
  }

  return (
    <section>
      <Form.Field required={props.required}>
        <label>{props.label}</label>
        {editInput}
      </Form.Field>
    </section>
  );
});

export default EditMetadata;
