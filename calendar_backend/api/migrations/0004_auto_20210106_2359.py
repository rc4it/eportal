# Generated by Django 3.1.5 on 2021-01-06 15:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0003_auto_20210106_2329'),
    ]

    operations = [
        migrations.AddField(
            model_name='event',
            name='contact',
            field=models.CharField(default='contact test', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='event',
            name='description',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AddField(
            model_name='event',
            name='location',
            field=models.CharField(default='location test', max_length=100),
            preserve_default=False,
        ),
        migrations.AddField(
            model_name='event',
            name='repeated',
            field=models.BooleanField(blank=True, default=False, null=True),
        ),
        migrations.DeleteModel(
            name='Detail',
        ),
    ]
