// Dashboard.jsx
import React, { useEffect, useState } from "react";
import { getDocuments } from "../services/api";
import DocumentCard from "../components/DocumentCard";

export default function Dashboard() {
  const [documents, setDocuments] = useState([]);
  const sortedDocuments = [...documents].sort((a, b) => b.id - a.id);


  useEffect(() => {
    getDocuments().then(setDocuments);
  }, []);

  return (
    <div className="min-h-screen p-8 bg-[#1a1a1] text-white">
      <h1 className="text-3xl font-semibold mb-6 text-white">Uploaded Documents</h1>
      {documents.length === 0 ? (
        <p className="text-center text-gray-400">No documents uploaded yet.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {sortedDocuments.map((doc) => (
  <DocumentCard key={doc.id} document={doc} />
))}

        </div>
      )}
    </div>
  );
}
