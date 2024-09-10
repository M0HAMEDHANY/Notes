from django.urls import path
from . import views


urlpatterns = [
    path("api/csrf-token/", views.get_csrf_token, name="csrf-token"),
    path("", views.getRoutes, name="routes"),
    path("notes/", views.getNotes, name="notes"),
    path("notes/<str:pk>/", views.getNote, name="note"),
]
