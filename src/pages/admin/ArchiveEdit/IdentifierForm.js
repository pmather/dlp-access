import React, { useState } from "react";
import { Form } from "semantic-ui-react";
import ArchiveForm from "./ArchiveForm";
import "../../../css/adminForms.scss";

const IdentifierForm = props => {
  const [enteredIdentifier, setEnteredIdentifier] = useState("");
  const [identifier, setIdentifier] = useState(null);

  const submitIdentifierHandler = () => {
    setIdentifier(enteredIdentifier);
  };

  let archiveForm = null;
  if (identifier) {
    archiveForm = <ArchiveForm identifier={identifier} />;
  }

  return (
    <div className="col-lg-9 col-sm-12 admin-content">
      <Form onSubmit={submitIdentifierHandler}>
        <Form.Field>
          <label>Please enter valid identifier:</label>
          <input
            type="text"
            onChange={event => setEnteredIdentifier(event.target.value)}
            value={enteredIdentifier}
          />
        </Form.Field>
        <Form.Button>Confirm</Form.Button>
      </Form>
      {archiveForm}
    </div>
  );
};

export default IdentifierForm;
