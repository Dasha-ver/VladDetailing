from rest_framework.viewsets import ReadOnlyModelViewSet
from .models import Service
from .serializers import ServiceSerializer

class ServiceViewSet(ReadOnlyModelViewSet):
    queryset = Service.objects.all()
    serializer_class = ServiceSerializer


