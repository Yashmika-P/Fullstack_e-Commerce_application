from rest_framework import viewsets, filters
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from .models import Category, Product
from .serializers import CategorySerializer, ProductSerializer


class CategoryViewSet(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
    lookup_field = 'slug'


class ProductViewSet(viewsets.ModelViewSet):
    """
    Product API.

    Supported query parameters:

    /api/products/
        Returns all active products.

    /api/products/?category=<slug>
        Filters products by category.

    /api/products/?search=<term>
        Searches product name, description,
        and category name.

    /api/products/?ordering=price
        Sorts products by price.

    /api/products/?ordering=-price
        Sorts products by highest price first.

    /api/products/?ordering=created_at
        Sorts products by creation date.

    Search and category filters can be combined:

    /api/products/?category=electronics&search=phone
    """

    serializer_class = ProductSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]

    lookup_field = 'slug'

    filter_backends = [
        filters.SearchFilter,
        filters.OrderingFilter,
    ]

    # DRF SearchFilter will use icontains-style
    # matching for these fields.
    search_fields = [
        'name',
        'description',
        'category__name',
    ]

    ordering_fields = [
        'price',
        'created_at',
        'name',
    ]

    def get_queryset(self):
        queryset = Product.objects.filter(
            is_active=True
        )

        category_slug = self.request.query_params.get(
            'category'
        )

        if category_slug:
            queryset = queryset.filter(
                category__slug=category_slug
            )

        return queryset