from rest_framework import serializers
from .models import Service, ServiceDetail

class ServiceDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = ServiceDetail
        fields = ['id', 'name', 'price']

class ServiceSerializer(serializers.ModelSerializer):
    details = ServiceDetailSerializer(source='servicedetail_set', many=True)

    class Meta:
        model = Service
        fields = ['id', 'name', 'details']
