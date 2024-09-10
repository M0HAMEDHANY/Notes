from django.shortcuts import get_object_or_404
from rest_framework.response import Response
from .models import Note
from .serializers import NoteSerializer
from django.views.decorators.csrf import csrf_exempt
from rest_framework import status


def getNotesList(request):
    notes = Note.objects.all().order_by("-updated")
    serializer = NoteSerializer(notes, many=True)
    return Response(serializer.data)

@csrf_exempt
def getNoteDetail(request, pk):
    notes = Note.objects.get(id=pk)
    serializer = NoteSerializer(notes, many=False)
    return Response(serializer.data)

@csrf_exempt
def createNote(request, pk):
    data = request.data
    note = Note.objects.create(body=data["body"])
    serializer = NoteSerializer(note, many=False)
    return Response(serializer.data)


@csrf_exempt
def updateNote(request, pk):
    data = request.data
    note = get_object_or_404(Note, id=pk)
    serializer = NoteSerializer(instance=note, data=data)

    if serializer.is_valid():
        serializer.save()
        return Response(
            serializer.data, status=status.HTTP_200_OK
        )

    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@csrf_exempt
def deleteNote(request, pk):
    note = Note.objects.get(id=pk)
    note.delete()
    return Response("Note was deleted!")
