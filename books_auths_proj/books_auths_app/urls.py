from django.urls import path
from . import views

urlpatterns = [
    path('', views.index_view, name='index'),

    path('book/', views.add_book_view, name='add_book_view'),
    path('author/', views.add_author_view, name='add_author_view'),

    path('book/book-details/<int:id>/', views.book_detail_view, name='book_details'),
    path('author/author-details/<int:id>/', views.author_detail_view, name='author_details'),

    path('add-book/', views.add_book, name='add_book'),
    path('add-author/', views.add_author, name='add_author'),

    path('add-auth-book/', views.add_auth_book, name='add_auth_book'),
    path('add-book-auth/', views.add_book_auth, name='add_book_auth')
]