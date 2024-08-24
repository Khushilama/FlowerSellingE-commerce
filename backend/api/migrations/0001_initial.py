# Generated by Django 5.0 on 2024-08-03 03:40

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='ProductList',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('product_name', models.CharField(max_length=255)),
                ('price', models.IntegerField()),
                ('image', models.ImageField(upload_to='product_images/')),
                ('product_desc', models.CharField(max_length=500)),
                ('categories', models.CharField(max_length=100)),
            ],
        ),
    ]