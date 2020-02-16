var books = [
    { 
        title: "The Adventures Of Tom Sawyer",
        stars: 5,
        author: "Mark Twain",
        color: color(106, 230, 135),
        available: true
    },
    { 
        title: "White fang",
        stars: 5,
        author: "Jack London",
        color: color(252, 252, 252),
        available: true
    }, 
    { 
        title: "Gone with the Wind",
        stars: 5,
        author: "Margaret Mitchell",
        color: color(237, 61, 132),
        available: false
    },
    { 
        title: "The Lord of the Rings",
        stars: 4,
        author: "J. R. R. Tolkien",
        color: color(96, 176, 222),
        available: true
    }, 
    { 
        title: "Harry Potter",
        stars: 4,
        author: "J. K. Rowling",
        color: color(212, 179, 72),
        available: false
    } 
];

var drawBook = function(book, x, y){
    fill(book.color);
    rect(x, y, 90, 100);
    fill(0, 0, 0);
    text(book.title, x + 15, y + 15, 70, 100);
    for (var i = 0; i < book.stars; i++) {
        image(getImage("cute/Star"), x + 3 + i * 10, y + 70, 20, 30);
    }
};

var x = 10;
var y = 20;

var drawBookShell = function(){
    // draw shelf
    fill(173, 117, 33);
    rect(0, 120, 400, 10);
    
    // draw one book
    for(var i = 0; i<books.length; i++){
        if(x>300)
        {
            x = 10;
            y += 140;
            fill(173, 117, 33);
            rect(0, y + 100, 400, 10);
        }
        drawBook(books[i], x, y);
        if(books[i].available)
        {
            fill(34, 107, 23);
            text("Available", x + 5, y-5);
        }
        else
        {
            fill(219, 51, 21);
            text("Not Available", x + 5, y - 5);
        }
        x+=100;
    }
};
drawBookShell();
