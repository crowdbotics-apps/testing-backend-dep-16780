# Generated by Django 2.2.17 on 2020-12-15 22:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0003_customtext_test'),
    ]

    operations = [
        migrations.CreateModel(
            name='CompanyText',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=256)),
                ('content', models.TextField()),
            ],
        ),
    ]
