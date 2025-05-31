import { uploadDocument } from "../services/api";

export default function UploadForm() {
  const handleFileChange = async (e) => {
    const formData = new FormData();
    formData.append("file", e.target.files[0]);
    await uploadDocument(formData);
    alert("File uploaded!");
  };

  return <input type="file" onChange={handleFileChange} className="border p-2" />;
}
