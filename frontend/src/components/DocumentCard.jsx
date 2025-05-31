export default function DocumentCard({ document }) {
  return (
    <div className="border p-4 rounded shadow bg-white">
      <h2 className="font-bold">{document.title}</h2>
      <p>{document.pages} pages</p>
      {/* <p className="text-sm text-gray-500">Type: {document.type}</p> */}
    </div>
  );
}
