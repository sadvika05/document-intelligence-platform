// Upload.jsx
import React from "react";
import UploadForm from "../components/UploadForm";

export default function Upload() {
  return (
    <div className="p-6 bg-white rounded shadow space-y-6">
      <h1 className="text-2xl font-bold">Upload Document</h1>
      <UploadForm />
    </div>
  );
}
