# Generated by Django 5.0 on 2024-09-20 14:27

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0004_addtocart"),
    ]

    operations = [
        migrations.CreateModel(
            name="WishList",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("product_id", models.IntegerField()),
            ],
        ),
    ]
