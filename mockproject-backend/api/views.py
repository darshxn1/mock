from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser 
from rest_framework import status
 
# from tutorials.models import Tutorial
# from tutorials.serializers import TutorialSerializer
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .serializers import UserDataSerializer
from .models import UserData


@api_view(['GET', 'POST', 'DELETE'])
def search_result(request):
    if request.method == 'GET':
        person = {'name': 'Dennis'}
        return Response(person)



@api_view(['POST'])
def post_user_data(request):
    serializer = UserDataSerializer(data=request.data, many=True)
    if serializer.is_valid():
        serializer.save()
        return Response({'msg': serializer.data})
    
    return Response({'error': serializer.errors})


@api_view(['GET'])
def get_user_data(request):
    object_data = UserData.objects.all()
    serializer = UserDataSerializer(object_data, many=True)
    return Response({'msg': serializer.data})
    
    # return Response({'error': serializer.errors})



        
    