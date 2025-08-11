from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name


class ServiceDetail(models.Model):
    service = models.ForeignKey(Service, on_delete=models.CASCADE, null=True)
    name = models.CharField(max_length=300)
    price = models.IntegerField()

    def __str__(self):
        return self.name


from django.db import models

# Create your models here.
