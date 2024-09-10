from rest_framework.response import Response
from rest_framework.decorators import api_view
from .utils import updateNote, getNoteDetail, deleteNote, getNotesList, createNote
from django.http import JsonResponse
from django.middleware.csrf import get_token
from rest_framework import status

# Create your views here.


def get_csrf_token(request):
    token = get_token(request)
    return JsonResponse({"csrfToken": token})


@api_view(["GET"])
def getRoutes(request):
    # define the routes of the api
    # this will be the first endpoint that will be hit when the api is called
    # it will return a json response of the routes available in the api
    routes = [
        {
            "Endpoint": "/notes/",
            "method": "GET",
            "body": None,
            "description": "Returns an array of notes",
        },
        {
            "Endpoint": "/notes/id",
            "method": "GET",
            "body": None,
            "description": "Returns a single note object",
        },
    ]
    return Response(routes)


@api_view(["GET", "POST"])
def getNotes(request):

    if request.method == "GET":
        return getNotesList(request)

    if request.method == "POST":
        return createNote(request, pk=None)


@api_view(["GET", "PUT", "DELETE"])
def getNote(request, pk):
    if pk == "new":  # Handle this case gracefully
        return Response(
            {"error": "Cannot fetch 'new' as a note id"},
            status=status.HTTP_400_BAD_REQUEST,
        )

    if request.method == "GET":
        return getNoteDetail(request, pk)

    if request.method == "PUT":
        return updateNote(request, pk)

    if request.method == "DELETE":
        return deleteNote(request, pk)
