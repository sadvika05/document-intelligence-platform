export default function DocumentCard({ document }) {
  return (
    <div className="border p-4 rounded shadow bg-white text-gray-800">
      <h2 className="font-bold text-lg mb-2">{document.title}</h2>
      <p><span className="font-medium">Pages:</span> {document.pages}</p>
      <p><span className="font-medium">Type:</span> {document.file_type}</p>
      <p><span className="font-medium">Size:</span> {(document.size / 1024).toFixed(2)} KB</p>
      <p><span className="font-medium">Status:</span> {document.status}</p>
      <p><span className="font-medium">Uploaded:</span> {new Date(document.created_at).toLocaleString()}</p>
    </div>
  );
}
