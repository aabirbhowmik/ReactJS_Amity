document.getElementById('searchButton').addEventListener('click', function() {
    let title = document.getElementById('booktitle').value;

    fetch(`https://openlibrary.org/search.json?title=${title}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            if(data.docs.length === 0) {
                return;
            }
            let book = data.docs[0];
            document.getElementById('title').innerHTML = `Title: ${book.title}`;
            document.getElementById('author').innerHTML =`Author: ${book.author_name}`; 
            if(book.cover_i) {
                document.getElementById('cover').src = `https://covers.openlibrary.org/b/id/${book.cover_i}-L.jpg`;
            } else {
                document.getElementById('cover').src = '';
            }

        });

});