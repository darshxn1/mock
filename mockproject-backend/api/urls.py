from django.urls import path
from . import views 
 
urlpatterns = [ 
    path('getSearch/', views.search_result),
    path('getUserData/', views.get_user_data),
    path('postUserData/', views.post_user_data)
]
