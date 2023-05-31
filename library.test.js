const newLibrary = require('./library')

describe("The Home of Books", () => {
    let Library;
    const books = [
        { title: "MobyDick", author: "Ja Morant" },
        { title: "ALLLL BLUEEEE", author: "Sanji" },
        { title: "MAFIA MURDER", author: "AJ" },
        { title: "DailyDoseOfInternet", author: "Mark Zuckerberg" },
        { title: "DragonFruit", author: "Earth" }
    ];
    beforeEach(() => {
        Library =  new newLibrary();
    });

    test('should be able to add books to its inventory', () => {
        books.forEach((book) => {
            Library.addBook(book);
        });
        expect(Library.getInventory()).toEqual(books);
    });
})