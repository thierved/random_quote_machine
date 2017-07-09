
    var randomQuote;

   $("button").click(function() {     
     randomQuote =quotes[Math.floor(Math.random()*quotes.length)];
     
        $("p").text(randomQuote.quote);
        $("h4").text(randomQuote.name);
         
   }); 







var quotes = [
		{   "name":"Albert Einstein",
			"quote":"Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.",
			"image":""
		},
		{   "name":"Oscar Wilde",
			"quote":"Success is a science; if you have the conditions, you get the result.",
			"image":""
		},
		{   "name":"Edward Teller",
			"quote":"The science of today is the technology of tomorrow.",
			"image":""
		},
		{   "name":"A. P. J. Abdul Kalam",
			"quote":"Science is a beautiful gift to humanity; we should not distort it.",
			"image":""
		},
		{   "name":"Carl Sagan",
			"quote":"We live in a society exquisitely dependent on science and technology, in which hardly anyone knows anything about science and technology. ",
			"image":""
		},
		{   "name":"Nelson Mandela",
			"quote":"Education is the most powerful weapon which you can use to change the world.",
			"image":""
		},
		{   "name":"Malcolm X",
			"quote":"Education is the passport to the future, for tomorrow belongs to those who prepare for it today.",
			"image":""
		},
		{   "name":"Albert Einstein",
			"quote":"Education is what remains after one has forgotten what one has learned in school.",
			"image":""
		},
		{   "name":"Benjamin Franklin",
			"quote":"An investment in knowledge pays the best interest.",
			"image":""
		},
		{   "name":"John F. Kennedy",
			"quote":"The goal of education is the advancement of knowledge and the dissemination of truth.",
			"image":""
		},
		{   "name":"Leo Buscaglia",
			"quote":"Change is the end result of all true learning.",
			"image":""
		},
		{   "name":"Aristotle",
			"quote":"There is no great genius without some touch of madness.",
			"image":""
		}
	
	];