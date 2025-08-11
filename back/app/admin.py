from django.contrib import admin
from .models import Service, ServiceDetail

class ServiceDetailInline(admin.TabularInline):
    model = ServiceDetail
    extra = 1

@admin.register(Service)
class ServiceAdmin(admin.ModelAdmin):
    inlines = [ServiceDetailInline]
    list_display = ['name']

@admin.register(ServiceDetail)
class ServiceDetailAdmin(admin.ModelAdmin):
    list_display = ['name', 'price', 'service']
