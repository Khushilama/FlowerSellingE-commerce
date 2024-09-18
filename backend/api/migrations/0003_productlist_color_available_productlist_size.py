# Generated by Django 5.0 on 2024-09-15 16:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_productlist_types'),
    ]

    operations = [
        migrations.AddField(
            model_name='productlist',
            name='color_available',
            field=models.CharField(default='red,yellow,green,gray', max_length=500),
        ),
        migrations.AddField(
            model_name='productlist',
            name='size',
            field=models.CharField(default='M,S,L', max_length=500),
        ),
    ]