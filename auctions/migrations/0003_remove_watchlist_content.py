# Generated by Django 3.1.1 on 2020-09-19 12:42

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('auctions', '0002_auto_20200917_2119'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='watchlist',
            name='content',
        ),
    ]
