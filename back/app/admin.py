from .models import Service, ServiceDetail
from django.contrib import admin


class ServiceAdmin(admin.ModelAdmin):
    list_display = ['id', 'name']
    search_fields = ['name']
    ordering = ['name']


class ServiceDetailAdmin(admin.ModelAdmin):
    list_display = ['id', 'service', 'name', 'price']
    search_fields = ['name']
    ordering = ['name']


admin.site.register(Service, ServiceAdmin)
admin.site.register(ServiceDetail, ServiceDetailAdmin)
