from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CompanyTextViewSet

router = DefaultRouter()
router.register("business", CompanyTextViewSet)

urlpatterns = [
    path("", include(router.urls)),
]