import React, { useState, useEffect } from "react";
import { askQuestion, getDocuments } from "../services/api";
import QuestionBox from "../components/QuestionBox";
import AnswerBox from "../components/AnswerBox";

export default function QAInterface() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState(null);
  const [docId, setDocId] = useState("");
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    getDocuments().then(setDocuments).catch(console.error);
  }, []);

  const handleAsk = async () => {
    if (!docId || !question.trim()) {
      alert("Please select a document and enter a question.");
      return;
    }

    try {
      const response = await askQuestion(docId, question);
      setAnswer(response.answer);
    } catch (error) {
      console.error("Question answering failed:", error);
      setAnswer("Error: " + (error.response?.data?.error || "Something went wrong."));
    }
  };

  return (
    <div className="p-4 max-w-xl mx-auto">
      <label className="block mb-2 font-bold">
        <h1>Select a document:</h1></label>
      <select
        className="mb-4 border border-gray-300 p-2 rounded w-full"
        value={docId}
        onChange={(e) => setDocId(e.target.value)}
      >
        <option value="">-- Choose a document --</option>
        {documents.map((doc) => (
          <option key={doc.id} value={doc.id}>
            {doc.title}
          </option>
        ))}
      </select>

      <QuestionBox question={question} setQuestion={setQuestion} onAsk={handleAsk} />
      {answer && <AnswerBox answer={answer} />}
    </div>
  );
}
