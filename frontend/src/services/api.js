import axios from "axios";

const API = "http://localhost:8000/api";

export const getDocuments = async () => {
  const res = await axios.get(`${API}/documents/`);
  return res.data;
};

export const uploadDocument = async (formData) => {
  return await axios.post(`${API}/upload/`, formData);
};

export const askQuestion = async (docId, question) => {
  const res = await axios.post(`${API}/ask/`, {
    document_id: docId,
    question,
    top_k: 3
  });
  return res.data;
};
