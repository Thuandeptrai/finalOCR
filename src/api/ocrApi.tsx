import axios from 'axios';
import config from '../utils/config';
// Create Axios
const ocrApi = axios.create({
  baseURL: config.API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
// Convert image base64 to text
export const convertImageToText = async (data : any) => {
  return await ocrApi.post('/ocr', data);
};
