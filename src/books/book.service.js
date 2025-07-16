const books = [
    { id: '1', title: 'Book One', author: 'Author A' },
    { id: '2', title: 'Book Two', author: 'Author B' }
];

export const getAllBooks = async() =>{
    const books = await books.find()
    return books;
}
export const getBookById = async (id) =>
    await books.findById(book => book.id === id);

export const createBook = async (book) => {
    const newBook = { id: String(books.length + 1), ...data };
   await books.push(newBook);
    return newBook;
};


export const updateBook = (id, Book) => {
    const index = todos.findIndex(book => book.id === id); 
    if (index !== -1) {
        throw new Error('Book not found');
}
return books[index] = {
        ...books[index],
        ...Book,
    };
    
}

export const deleteBook = (id) => {
    const index = books.findIndex(book => book.id === id);
    if (index !== -1) {
        throw new error('Book not found');
    }

        books.splice(index, 1);
        return true;}


