// Storing the data from API here in case it will no longer be available
const DATA = [
{
"reviews": [
{
"name": "John Smith",
"rating": 5,
"text": "Excellent movie! Must watch",
"_id": "5a8a9c4b50892c0014469803"
},
{
"name": "Tom Brown",
"rating": 2,
"text": "Didn't like it. Boring",
"_id": "5a8a9c4b50892c0014469802"
},
{
"name": "John Doe",
"rating": 3,
"text": "meh",
"_id": "5a8aa7580c6eed00145eba47"
}
],
"_id": "5a8a9c4b50892c0014469804",
"imgUrl": "https://images-na.ssl-images-amazon.com/images/I/519NBNHX5BL._SY445_.jpg",
"title": "The Shawshank Redemption",
"year": 1994,
"price": 10,
"shortDescription": "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
"fullDescription": "Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit. The film portrays the man's unique way of dealing with his new, torturous life; along the way he befriends a number of fellow prisoners, most notably a wise long-term inmate named Red.",
"director": "Frank Darabont"
},
{
"reviews": [
{
"name": "John Smith",
"rating": 5,
"text": "Excellent movie! Must watch",
"_id": "5a8a9d6950892c0014469806"
},
{
"name": "Tom Brown",
"rating": 2,
"text": "Didn't like it. Boring",
"_id": "5a8a9d6950892c0014469805"
}
],
"_id": "5a8a9d6950892c0014469807",
"imgUrl": "http://static.metacritic.com/images/products/movies/3/47c2b1f35087fc23c5ce261bbc3ad9e0.jpg",
"title": "The Godfather",
"year": 1972,
"price": 8,
"shortDescription": "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
"fullDescription": "When the aging head of a famous crime family decides to transfer his position to one of his subalterns, a series of unfortunate events start happening to the family, and a war begins between all the well-known families leading to insolence, deportation, murder and revenge, and ends with the favorable successor being finally chosen.",
"director": "Francis Ford Coppola"
},
{
"reviews": [
{
"name": "John Smith",
"rating": 5,
"text": "Excellent movie! Must watch",
"_id": "5a8a9dd750892c0014469809"
},
{
"name": "Tom Brown",
"rating": 2,
"text": "Didn't like it. Boring",
"_id": "5a8a9dd750892c0014469808"
}
],
"_id": "5a8a9dd750892c001446980a",
"imgUrl": "https://images-na.ssl-images-amazon.com/images/I/51jc6OZBguL._SY445_.jpg",
"title": "The Dark Knight",
"year": 2008,
"price": 20,
"shortDescription": "When the menace known as the Joker emerges from his mysterious past, he wreaks havoc and chaos on the people of Gotham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
"fullDescription": "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new district attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City until a mysterious and sadistic criminal mastermind known only as the Joker appears in Gotham, creating a new wave of chaos. Batman's struggle against the Joker becomes deeply personal, forcing him to confront everything he believes and improve his technology to stop him. A love triangle develops between Bruce Wayne, Dent and Rachel Dawes.",
"director": "Christopher Nolan"
},
{
"reviews": [
{
"name": "John Smith",
"rating": 5,
"text": "Excellent movie! Must watch",
"_id": "5a8a9e2a50892c001446980c"
},
{
"name": "Tom Brown",
"rating": 2,
"text": "Didn't like it. Boring",
"_id": "5a8a9e2a50892c001446980b"
}
],
"_id": "5a8a9e2a50892c001446980d",
"imgUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_UX182_CR0,0,182,268_AL_.jpg",
"title": "12 Angry Men",
"year": 1957,
"price": 3,
"shortDescription": "A jury holdout attempts to prevent a miscarriage of justice by forcing his colleagues to reconsider the evidence.",
"fullDescription": "The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young man is guilty or innocent of murdering his father. What begins as an open-and-shut case of murder soon becomes a detective story that presents a succession of clues creating doubt, and a mini-drama of each of the jurors' prejudices and preconceptions about the trial, the accused, and each other. Based on the play, all of the action takes place on the stage of the jury room.",
"director": "Sidney Lumet"
},
{
"reviews": [
{
"name": "John Smith",
"rating": 5,
"text": "Excellent movie! Must watch",
"_id": "5a8a9ee250892c0014469815"
},
{
"name": "Tom Brown",
"rating": 2,
"text": "Didn't like it. Boring",
"_id": "5a8a9ee250892c0014469814"
}
],
"_id": "5a8a9ee250892c0014469816",
"imgUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BYWY1ZWQ5YjMtMDE0MS00NWIzLWE1M2YtODYzYTk2OTNlYWZmXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_UX182_CR0,0,182,268_AL_.jpg",
"title": "The Lord of the Rings: The Return of the King",
"year": 2003,
"price": 15,
"shortDescription": "Gandalf and Aragorn lead the World of Men against Sauron's army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.",
"fullDescription": "The final confrontation between the forces of good and evil fighting for control of the future of Middle-earth. Hobbits: Frodo and Sam reach Mordor in their quest to destroy the one ring, while Aragorn leads the forces of good against Sauron's evil army at the stone city of Minas Tirith.",
"director": "Peter Jackson"
},
{
"reviews": [
{
"name": "John Smith",
"rating": 5,
"text": "Excellent movie! Must watch",
"_id": "5a8a9e6f50892c001446980f"
},
{
"name": "Tom Brown",
"rating": 2,
"text": "Didn't like it. Boring",
"_id": "5a8a9e6f50892c001446980e"
}
],
"_id": "5a8a9e6f50892c0014469810",
"imgUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg",
"title": "Schindler's List",
"year": 1993,
"price": 10,
"shortDescription": "In German-occupied Poland during World War II, Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazi Germans.",
"fullDescription": "Oskar Schindler is a vainglorious and greedy German businessman who becomes an unlikely humanitarian amid the barbaric German Nazi reign when he feels compelled to turn his factory into a refuge for Jews. Based on the true story of Oskar Schindler who managed to save about 1100 Jews from being gassed at the Auschwitz concentration camp, it is a testament to the good in all of us",
"director": "Steven Spielberg"
},
{
"reviews": [
{
"name": "John Smith",
"rating": 5,
"text": "Excellent movie! Must watch",
"_id": "5a8a9eb350892c0014469812"
},
{
"name": "Tom Brown",
"rating": 2,
"text": "Didn't like it. Boring",
"_id": "5a8a9eb350892c0014469811"
}
],
"_id": "5a8a9eb350892c0014469813",
"imgUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_UX182_CR0,0,182,268_AL_.jpg",
"title": "Pulp Fiction",
"year": 1994,
"price": 15,
"shortDescription": "The lives of two mob hitmen, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
"fullDescription": "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.",
"director": "Quentin Tarantino"
},
{
"reviews": [
{
"name": "John Smith",
"rating": 5,
"text": "Excellent movie! Must watch",
"_id": "5a8a9f2550892c0014469818"
},
{
"name": "Tom Brown",
"rating": 2,
"text": "Didn't like it. Boring",
"_id": "5a8a9f2550892c0014469817"
}
],
"_id": "5a8a9f2550892c0014469819",
"imgUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_UX182_CR0,0,182,268_AL_.jpg",
"title": "The Good, the Bad and the Ugly",
"year": 1966,
"price": 15,
"shortDescription": "A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.",
"fullDescription": "Blondie (The Good) is a professional gunslinger who is out trying to earn a few dollars. Angel Eyes (The Bad) is a hit man who always commits to a task and sees it through, as long as he is paid to do so. And Tuco (The Ugly) is a wanted outlaw trying to take care of his own hide. Tuco and Blondie share a partnership together making money off Tuco's bounty, but when Blondie unties the partnership, Tuco tries to hunt down Blondie. When Blondie and Tuco come across a horse carriage loaded with dead bodies, they soon learn from the only survivor (Bill Carson) that he and a few other men have buried a stash of gold in a cemetery. Unfortunately Carson dies and Tuco only finds out the name of the cemetery, while Blondie finds out the name on the grave. Now the two must keep each other alive in order to find the gold. Angel Eyes (who had been looking for Bill Carson) discovers that Tuco and Blondie met with Carson and knows they know the location of the gold.",
"director": "Sergio Leone"
},
{
"reviews": [
{
"name": "John Smith",
"rating": 5,
"text": "Excellent movie! Must watch",
"_id": "5a8a9f5150892c001446981b"
},
{
"name": "Tom Brown",
"rating": 2,
"text": "Didn't like it. Boring",
"_id": "5a8a9f5150892c001446981a"
}
],
"_id": "5a8a9f5150892c001446981c",
"imgUrl": "https://images-na.ssl-images-amazon.com/images/M/MV5BMzFjMWNhYzQtYTIxNC00ZWQ1LThiOTItNWQyZmMxNDYyMjA5XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
"title": "Fight Club",
"year": 1999,
"price": 15,
"shortDescription": "An insomniac office worker, looking for a way to change his life, crosses paths with a devil-may-care soapmaker, forming an underground fight club that evolves into something much, much more.",
"fullDescription": "A nameless first person narrator (Edward Norton) attends support groups in attempt to subdue his emotional state and relieve his insomniac state. When he meets Marla (Helena Bonham Carter), another fake attendee of support groups, his life seems to become a little more bearable. However when he associates himself with Tyler (Brad Pitt) he is dragged into an underground fight club and soap making scheme. Together the two men spiral out of control and engage in competitive rivalry for love and power. When the narrator is exposed to the hidden agenda of Tyler's fight club, he must accept the awful truth that Tyler may not be who he says he is. ",
"director": "David Fincher"
}
];