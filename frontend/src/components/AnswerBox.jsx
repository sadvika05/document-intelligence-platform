export default function AnswerBox({ answer }) {
  return (
    <div className="bg-gray-700 p-5 rounded-lg border border-gray-600">
      <h3 className="text-xl font-semibold text-white mb-3">Answer:</h3>
      <p className="text-gray-200 whitespace-pre-wrap">{answer}</p>
    </div>
  );
}
