import React, { useEffect, useState } from "react";
import { Form } from "semantic-ui-react";
import ArchiveForm from "./ArchiveForm";
import CollectionForm from "./CollectionForm";
import "../../../css/adminForms.scss";
import PodcastDeposit from "../PodcastDeposit";

const IdentifierForm = props => {
  const { type } = props;
  const [enteredIdentifier, setEnteredIdentifier] = useState("");
  const [identifier, setIdentifier] = useState(null);
  const [newCollection, setNewCollection] = useState(false);
  const [newArchive, setNewArchive] = useState(false);
  const [newPodcast, setNewPodcast] = useState(false);

  useEffect(() => {
    setEnteredIdentifier("");
    setIdentifier(null);
  }, [type]);

  const submitIdentifierHandler = () => {
    setIdentifier(enteredIdentifier);
  };

  const newCollectionHandler = () => {
    setNewCollection(true);
  };

  const newArchiveHandler = () => {
    setNewArchive(true);
  };

  const newPodcastHandler = () => {
    setNewPodcast(true);
  };

  const resetForm = () => {
    setEnteredIdentifier("");
    setIdentifier(null);
  };

  const newCollectionButton = () => {
    let collectionButtonSection = null;
    if (props.type === "collection") {
      collectionButtonSection = (
        <div>
          <p>Or:</p>
          <Form.Button onClick={newCollectionHandler}>
            Create Collection
          </Form.Button>
        </div>
      );
    }
    return collectionButtonSection;
  };

  const newArchiveButton = () => {
    let archiveButtonSection = null;
    if (props.type === "archive") {
      archiveButtonSection = (
        <div>
          <p>Or:</p>
          <Form.Button onClick={newArchiveHandler}>Create Archive</Form.Button>
        </div>
      );
    }
    return archiveButtonSection;
  };

  const newPodcastButton = () => {
    let podcastButtonSection = null;
    if (props.type === "podcast") {
      podcastButtonSection = (
        <div>
          <p>Or:</p>
          <Form.Button onClick={newPodcastHandler}>
            Create Podcast Episode
          </Form.Button>
        </div>
      );
    }
    return podcastButtonSection;
  };

  let form = null;
  if (identifier) {
    if (props.type === "archive") {
      form = <ArchiveForm identifier={identifier} resetForm={resetForm} />;
    } else if (props.type === "collection") {
      form = <CollectionForm identifier={identifier} />;
    } else if (props.type === "podcast") {
      form = <PodcastDeposit identifier={identifier} />;
    }
  } else if (!identifier && newCollection) {
    form = <CollectionForm identifier={null} newCollection={newCollection} />;
  } else if (!identifier && newArchive) {
    form = <ArchiveForm identifier={null} newArchive={newArchive} />;
  } else if (!identifier && newPodcast) {
    form = <PodcastDeposit identifier={null} newPodcast={newPodcast} />;
  }

  return (
    <div className="col-lg-9 col-sm-12 admin-content">
      <Form>
        <Form.Field>
          <label>Please enter valid identifier:</label>
          <input
            type="text"
            className="identifier-field"
            onChange={event => setEnteredIdentifier(event.target.value)}
            value={enteredIdentifier}
          />
        </Form.Field>
        <Form.Button onClick={submitIdentifierHandler}>Confirm</Form.Button>
        {newCollectionButton()}
        {newArchiveButton()}
        {newPodcastButton()}
      </Form>
      {form}
    </div>
  );
};

export default IdentifierForm;
