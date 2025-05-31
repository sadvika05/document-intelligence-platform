from django.urls import path
from .views import upload_document, ask_question, list_documents

urlpatterns = [
    path('upload/', upload_document, name='upload_document'),
    path('ask/', ask_question, name='ask_question'),
    path('documents/', list_documents, name='list_documents'),
]
