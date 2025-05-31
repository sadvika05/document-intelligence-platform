export default function QuestionBox({ question, setQuestion, onAsk }) {
  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow space-y-4">
      <label className="block text-white text-lg font-semibold">Your Question</label>
      <textarea
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Ask a question..."
        className="w-full bg-gray-900 text-white border border-gray-600 rounded p-3 resize-none focus:outline-none"
        rows={4}
      />
      <button
        onClick={onAsk}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded transition"
      >
        Ask
      </button>
    </div>
  );
}
