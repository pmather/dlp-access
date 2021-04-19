import React, { Component } from "react";
import { Form } from "semantic-ui-react";
import { Storage } from "aws-amplify";

class ContentUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: {},
      hasError: false,
      isUploaded: false
    };
  }

  setFile = e => {
    if (!e.target.files[0]) return;
    const file = e.target.files[0];
    if (file.type.match(/\/(jpeg|jpg|gif|png|html)$/g)) {
      this.setState({ file: file, hasError: false, isUploaded: false });
    } else {
      this.setState({ file: {}, hasError: true });
    }
  };

  uploadFile = async () => {
    if (!this.state.hasError) {
      const folder = this.state.file.type === "text/html" ? "html" : "image";
      Storage.configure({
        customPrefix: {
          public: `public/sitecontent/${folder}/${process.env.REACT_APP_REP_TYPE.toLowerCase()}/`
        }
      });
      await Storage.put(this.state.file.name, this.state.file, {
        contentType: this.state.file.type
      });
      const eventInfo = {
        upload_content: {
          name: this.state.file.name,
          type: this.state.file.type,
          size: this.state.file.size
        }
      };
      this.setState({ isUploaded: true });
      this.props.updateSite(eventInfo);
    } else {
      this.setState({ isUploaded: false });
    }
  };

  afterMessage = () => {
    let color = "green";
    let message = null;
    if (this.state.hasError) {
      color = "red";
      message = "Please upload image or HTML file only!!";
    } else if (this.state.isUploaded) {
      message = `${this.state.file.name} is uploaded successfully!`;
    }
    return (
      <p style={{ color: color }} data-test="upload-message">
        {message}
      </p>
    );
  };

  uploadForm = () => {
    return (
      <div>
        <Form onSubmit={this.uploadFile}>
          <Form.Field>
            <label>Image or HTML file only:</label>
            <input type="file" onChange={this.setFile} />
          </Form.Field>
          <Form.Button>Upload File</Form.Button>
        </Form>
        {this.state.hasError || this.state.isUploaded
          ? this.afterMessage()
          : ""}
      </div>
    );
  };

  render() {
    return (
      <div className="col-lg-9 col-sm-12 admin-content">
        <h2>{`${process.env.REACT_APP_REP_TYPE}: Upload Site Content`}</h2>
        {this.uploadForm()}
      </div>
    );
  }
}

export default ContentUpload;
