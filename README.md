# Document Intelligence Platform

A full-stack web application that allows users to upload documents (PDF, DOCX, TXT) and ask natural language questions using RAG (Retrieval Augmented Generation).

## 🔧 Tech Stack

**Frontend**:

* React.js
* Tailwind CSS

**Backend**:

* Django REST Framework
* Sentence Transformers
* ChromaDB (Vector Storage)

**AI Integration**:

* LM Studio / OpenAI GPT

## 📁 Project Structure

```
project-root/
├── backend/
│   ├── api/
│   ├── manage.py
│   └── requirements.txt
└── frontend/
    ├── src/
    ├── public/
    └── tailwind.config.js
```

## 🚀 Features

* 📄 Upload DOCX, PDF, TXT documents
* 🤖 Ask contextual questions using RAG pipeline
* 📚 View all uploaded documents with metadata

## 🧪 Sample Questions & Answers

**Document:** `chemistry lecture.pdf`

**Q:** what are types of chemical bonds

**A:** The types of chemical bonds are:
1. Electrovalent or ionic bond
2. Covalent bond
3. Coordinate bond.

## 📷 Screenshots

> Add screenshots here:

* Dashboard
  ![image](https://github.com/user-attachments/assets/f3e72d07-5551-4ed2-96a9-ebf38a31c846)

* Upload Page
 ![image](https://github.com/user-attachments/assets/49a906d2-3381-4c52-83df-2c233aefce31)

* Q\&A Interface
  ![image](https://github.com/user-attachments/assets/0e3fe9e9-b0a2-4488-99a8-5e0e3c3d2fad)


## 🛠️ Setup Instructions

### Backend

```bash
cd backend
python -m venv env
source env/bin/activate  # or env\Scripts\activate on Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
Create a .env file in the backend/ directory:
```
OPENAI_API_KEY="*********"
```

### Frontend

```bash
cd frontend
npm install
npm run dev
```
## 📥 API Documentation

### `GET /api/list_documents/`

> Returns metadata of all uploaded documents.

### `POST /api/upload/`

> Upload and process a document.

### `POST /api/ask_question/`

> Ask a question about a specific document.

**Payload:**

```json
{
  "document_id": 1,
  "question": "What is the summary?",
  "top_k": 3
}
```

**Response:**

```json
{
  "success": true,
  "answer": "The document discusses...",
  "chunks_used": 3,
  "processing_time": 1.24
}
```

## ✅ Submission Checklist

* [x] Full-stack app working (Upload + RAG Q\&A)
* [x] React frontend with Tailwind styling
* [x] Django REST backend with vector database
* [x] Screenshots included
* [x] requirements.txt provided
* [x] Code pushed to GitHub
* [x] Repo submitted via form ✅

---

For any issues or feedback, reach out to: [sadvikachiteti@gmail.com](mailto:sadvikachitteti@gmail.com)
