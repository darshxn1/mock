# Generated by Django 4.1.5 on 2023-04-23 09:17

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='UserData',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='', max_length=70)),
                ('username', models.CharField(default='', max_length=70)),
                ('bio', models.CharField(default='', max_length=2000)),
                ('photos_uploaded', models.IntegerField(default=0)),
                ('follower', models.IntegerField(default=0)),
                ('following', models.IntegerField(default=0)),
                ('rating', models.FloatField(default=0)),
                ('profile_photo_url', models.CharField(default='', max_length=200)),
            ],
        ),
    ]
