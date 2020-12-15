from rest_framework import authentication
from business.models import CompanyText
from .serializers import CompanyTextSerializer
from rest_framework import viewsets
from rest_framework.response import Response


class CompanyTextViewSet(viewsets.ReadOnlyModelViewSet):
    serializer_class = CompanyTextSerializer
    authentication_classes = (
        authentication.SessionAuthentication,
        authentication.TokenAuthentication,
    )
    queryset = CompanyText.objects.all()

    @action(detail=False, methods=["get"], url_path="privacy-policy")
    def privacy_policy(self, request, *args, **kwargs):
        p_policy = CompanyText.privacy_policy()
        if p_policy:
            return Response(self.serializer_class(instance=p_policy).data, status=200)
        return Response({}, status=200)

    @action(detail=False, methods=["get"], url_path="terms-and-conditions")
    def terms_and_conditions(self, request, *args, **kwargs):
        terms_and_conditions = CompanyText.terms_and_conditions()
        if terms_and_conditions:
            return Response(self.serializer_class(instance=terms_and_conditions).data, status=200)
        return Response({}, status=200)