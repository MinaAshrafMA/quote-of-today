function fetchQuotes() {


    
        var x = Math.ceil(Math.random() * 5);
        document.getElementById("quote_txt").innerHTML = quotes[x].quote;
        document.getElementById("author").innerHTML = quotes[x].author
    


}


var quotes = [

    {
        quote: "“Don’t walk in front of me… I may not follow Don’t walk behind me… I may not lead Walk beside me… just be my friend”",
        author: "― Albert Camus"
    },

    {
        quote: "“If you tell the truth, you don't have to remember anything.”",
        author: "― Mark Twain"
    },

    {
        quote: "“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”",
        author: "― Maya Angelou"
    },

    {
        quote: "“A friend is someone who knows all about you and still loves you.”",
        author: "― Elbert Hubbard"
    },

    {
        quote: " “Live as if you were to die tomorrow. Learn as if you were to live forever.”",
        author: "― Mahatma Gandhi"
    }


]