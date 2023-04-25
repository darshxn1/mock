from django.db import models


class UserData(models.Model):
    name = models.CharField(max_length=70, blank=False, default='')
    username = models.CharField(max_length=70, blank=False, default='')
    bio = models.CharField(max_length=2000,blank=False, default='')
    state = models.CharField(max_length=2000,blank=False, default='')
    city = models.CharField(max_length=2000,blank=False, default='')
    photos_uploaded = models.IntegerField(default=0)
    follower = models.IntegerField(default=0)
    following = models.IntegerField(default=0)
    rating = models.FloatField(default=0)
    profile_photo_url = models.CharField(max_length=200, default='')