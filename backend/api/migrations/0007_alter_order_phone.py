# Generated by Django 5.1.1 on 2024-09-25 04:22

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0006_order"),
    ]

    operations = [
        migrations.AlterField(
            model_name="order",
            name="phone",
            field=models.CharField(max_length=15),
        ),
    ]