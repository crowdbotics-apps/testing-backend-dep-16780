from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .viewsets import CompanyTextViewSet

router = DefaultRouter()
router.register("companytext", CompanyTextViewSet)

urlpatterns = [
    path("", include(router.urls)),
]