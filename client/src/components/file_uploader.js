import React, { Component } from 'react';

class FileUploader extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: ''
    };
  }

  updateName(event){
    this.setState({name: event.target.value});
  }

  uploadFile(event, { file }){
    const data = new FormData();
    event.preventDefault();
    data.append('file', event.target.file.files[0]);
    data.append('originalFileName', event.target.file.files[0].name);
    data.append('givenFileName', event.target.fileName.value);
    data.append('fileDescription', event.target.fileDescription.value);
    
  }

  render(){
    return(
      <div>
      <h1> JSX is rendering </h1>
        <form
        onSubmit={this.uploadFile}
        className="form-uploader"
        encType="multipart/form-data">
          <label htmlFor="fileName">File Name:
            <input type="text" name="fileName"
            value={this.state.name}
            onChange={this.updateName.bind(this)}/>
          </label>
          <label htmlFor="fileDescription">File Description:
            <textarea
            name="fileDescription"
            id="textarea"
            rows="8" cols="60">
            </textarea>
          </label>
          <input type="file" name="file" />
          <input type="submit" name="submit" value="Upload file" />
        </form>
      </div>
    );
  }
}

export default FileUploader;
