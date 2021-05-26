from django.shortcuts import redirect, render
from .models import Author, Book


def index_view(request):
    return render(request, 'index.html')

def add_book_view(request):
    # populate the book table with all books 
    context = {
        'all_books' : Book.objects.all()
    }

    return render(request, 'add_book.html', context)

def add_author_view(request):
    # populate the authors table with all authors 
    context = {
        'all_authors' : Author.objects.all()
    }
    return render(request, 'add_author.html', context)


def book_detail_view(request, id):

    # grab all the authors by book
    book = Book.objects.get(id=id)

    # grab the selected book and add to detail view
    context = {
        'book_details' : Book.objects.get(id=id),
        'authors_for_book' : book.authors.all(),
        'all_authors' : Author.objects.exclude(books=id)
    }
    return render(request, 'book_details.html', context)


def author_detail_view(request, id):
    # grab all the books by auth
    author = Author.objects.get(id=id)

    context = {
        'author_details' : Author.objects.get(id=id),
        'books_for_auth' : author.books.all(),
        'all_books' : Book.objects.exclude(authors=id)
    }
    return render(request, 'author_details.html', context)


def add_book(request):

    if request.method == 'POST':
        new_book_add = request.POST.get('new-book-add', None)
        new_book_desc = request.POST.get('new-book-desc', None)

        book_added = Book.objects.create(
            title=new_book_add,
            desc = new_book_desc
        )    
        book_added.save()

        # Should this section have an if statement built-in to check for "None"
        # return built in bad submission from Http module??
        return redirect('/book')

    # Could this ever happen?

    return redirect('/')


def add_author(request):
    if request.method == 'POST':

        author_added = Author.objects.create(
            first_name = request.POST.get('auth-first', None),
            last_name = request.POST.get('auth-last', None),
            notes = request.POST.get('new-auth-notes', None),
        )    
        author_added.save()

        # Should this section have an if statement built-in to check for "None"
        # return built in bad submission from Http module??
        return redirect('/author')

    # Could this ever happen?
    return redirect('/')


def add_auth_book(request):
    # add an author to a book. Need the auth id and book is

    # first book id from the details page
    book_id = request.POST.get('book-id', None)
    auth_id = request.POST.get('authors', None)

    # from the selected option the returned value is is
    author = Author.objects.get(id=auth_id)
    # add the book to the author 
    author.books.add(Book.objects.get(id=book_id))
    
    return redirect('/')

def add_book_auth(request):

    id_auth = request.POST.get('auth-id', None)
    id_book = request.POST.get('books', None)

    author = Author.objects.get(id=id_auth)
    author.books.add(Book.objects.get(id=id_book))


    return redirect('/')
