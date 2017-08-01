import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import { fetchFiles} from '../actionz';

class FilesShow extends Component {
  componentDidMount(){
    this.props.fetchFiles();
  }

  renderFiles(){
    return _.map(this.props.files, file => {
      return (
        <li className="list-group-item" key={file.id}>
            {file.originalName}
            {file.givenName}
            {file.fileDescription}
        </li>
      );
    });
  }

  render(){
    return(
      <div>
        <ul className="list-group">
          {this.renderFiles()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { files: state.files};
}

export default connect(mapStateToProps, { fetchFiles })(FilesShow);
