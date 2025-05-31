# backend/api/models.py
from django.db import models

class Document(models.Model):
    title = models.CharField(max_length=255)
    file_path = models.TextField()
    file_type = models.CharField(max_length=50)
    size = models.IntegerField()
    pages = models.IntegerField(default=1)
    status = models.CharField(max_length=50, default="processing")
    created_at = models.DateTimeField(auto_now_add=True)

class DocumentChunk(models.Model):
    document = models.ForeignKey(Document, on_delete=models.CASCADE)
    chunk_index = models.IntegerField()
    text = models.TextField()
    embedding_id = models.CharField(max_length=255)
    page_number = models.IntegerField(default=1)
    created_at = models.DateTimeField(auto_now_add=True)