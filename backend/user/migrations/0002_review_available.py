# Generated by Django 4.0.5 on 2022-06-28 04:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('order', '0002_alter_order_order_time'),
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='review',
            name='available',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='order.order'),
        ),
    ]
