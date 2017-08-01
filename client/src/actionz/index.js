import axios from 'axios';

export const UPLOAD_FILE = 'upload_file';
export const FETCH_FILES = 'fetch_files';

const ROOT_URL ='http://localhost:5000';

export function fetchFiles() {
  const request = axios.get(`${ROOT_URL}/files`);

  return {
    type: FETCH_FILES,
    payload: request
  };
}

export function uploadFile(fileData) {
  const request = axios.post(`${ROOT_URL}`, fileData);

  return {
    type: FETCH_FILES,
    payload: request
  };
}
