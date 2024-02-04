let booksData=[
  {
    "id": 1,
    "name": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "genre": "Classic",
    "description": "A novel about the American Dream in the 1920s.",
    "available": true
  },
  {
    "id": 2,
    "name": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "genre": "Fiction",
    "description": "A story of racial injustice and moral growth in the American South.",
    "available": false
  },
  {
    "id": 3,
    "name": "1984",
    "author": "George Orwell",
    "genre": "Dystopian",
    "description": "A classic novel depicting a totalitarian future society.",
    "available": true
  },
  {
    "id": 4,
    "name": "Pride and Prejudice",
    "author": "Jane Austen",
    "genre": "Romance",
    "description": "A romantic novel set in the early 19th century.",
    "available": false
  },
  {
    "id": 5,
    "name": "The Hobbit",
    "author": "J.R.R. Tolkien",
    "genre": "Fantasy",
    "description": "An adventurous tale set in Middle-earth.",
    "available": true
  },
  {
    "id": 6,
    "name": "Moby-Dick",
    "author": "Herman Melville",
    "genre": "Adventure",
    "description": "The story of Captain Ahab's obsessive quest for revenge against a giant white whale.",
    "available": false
  },
  {
    "id": 7,
    "name": "Frankenstein",
    "author": "Mary Shelley",
    "genre": "Gothic",
    "description": "A novel about the consequences of playing god and creating life.",
    "available": true
  },
  {
    "id": 8,
    "name": "The Catcher in the Rye",
    "author": "J.D. Salinger",
    "genre": "Coming-of-age",
    "description": "A story about teenage angst and alienation.",
    "available": false
  },
  {
    "id": 9,
    "name": "The Lord of the Rings",
    "author": "J.R.R. Tolkien",
    "genre": "Fantasy",
    "description": "An epic fantasy trilogy set in the world of Middle-earth.",
    "available": true
  },
  {
    "id": 10,
    "name": "One Hundred Years of Solitude",
    "author": "Gabriel García Márquez",
    "genre": "Magical realism",
    "description": "A novel that tells the multi-generational story of the Buendía family in the fictional town of Macondo.",
    "available": false
  },
  {
    "id": 11,
    "name": "The Odyssey",
    "author": "Homer",
    "genre": "Epic",
    "description": "An ancient Greek epic poem attributed to Homer, telling the story of Odysseus' journey home.",
    "available": true
  },
  {
    "id": 12,
    "name": "The Brothers Karamazov",
    "author": "Fyodor Dostoevsky",
    "genre": "Philosophical novel",
    "description": "A novel that explores morality, faith, and the existence of God.",
    "available": false
  },
  {
    "id": 13,
    "name": "Brave New World",
    "author": "Aldous Huxley",
    "genre": "Dystopian",
    "description": "A novel depicting a futuristic society where people are genetically engineered and conditioned for social stability.",
    "available": true
  },
  {
    "id": 14,
    "name": "Crime and Punishment",
    "author": "Fyodor Dostoevsky",
    "genre": "Psychological novel",
    "description": "A novel that explores the mental anguish and moral dilemmas of a young ex-student in St. Petersburg.",
    "available": false
  },
  {
    "id": 15,
    "name": "The Picture of Dorian Gray",
    "author": "Oscar Wilde",
    "genre": "Gothic",
    "description": "A novel that examines the moral degradation of a young man as he pursues a life of pleasure.",
    "available": true
  },
  {
    "id": 16,
    "name": "The War of the Worlds",
    "author": "H.G. Wells",
    "genre": "Science fiction",
    "description": "A novel about an alien invasion of Earth.",
    "available": false
  },
  {
    "id": 17,
    "name": "Les Misérables",
    "author": "Victor Hugo",
    "genre": "Historical novel",
    "description": "A novel set in 19th-century France, following the lives of several characters as they navigate the challenges of society.",
    "available": true
  },
  {
    "id": 18,
    "name": "Wuthering Heights",
    "author": "Emily Brontë",
    "genre": "Gothic",
    "description": "A tale of passion, revenge, and the destructive nature of love.",
    "available": false
  },
  {
    "id": 19,
    "name": "The Count of Monte Cristo",
    "author": "Alexandre Dumas",
    "genre": "Adventure",
    "description": "A tale of betrayal, revenge, and redemption.",
    "available": true
  },
  {
    "id": 20,
    "name": "The Grapes of Wrath",
    "author": "John Steinbeck",
    "genre": "Social commentary",
    "description": "A novel that explores the plight of migrant workers during the Great Depression.",
    "available": false
  },
  {
    "id": 21,
    "name": "Jane Eyre",
    "author": "Charlotte Brontë",
    "genre": "Gothic",
    "description": "A coming-of-age novel that follows the life of the orphaned Jane Eyre.",
    "available": true
  },
  {
    "id": 22,
    "name": "The Iliad",
    "author": "Homer",
    "genre": "Epic",
    "description": "An ancient Greek epic poem attributed to Homer, telling the story of the Trojan War.",
    "available": false
  },
  {
    "id": 23,
    "name": "Anna Karenina",
    "author": "Leo Tolstoy",
    "genre": "Realist novel",
    "description": "A novel that explores the themes of love, infidelity, and societal norms.",
    "available": true
  },
  {
    "id": 24,
    "name": "Dracula",
    "author": "Bram Stoker",
    "genre": "Gothic",
    "description": "A novel that introduces the iconic vampire Count Dracula.",
    "available": false
  },
  {
    "id": 25,
    "name": "The Three Musketeers",
    "author": "Alexandre Dumas",
    "genre": "Adventure",
    "description": "A historical adventure novel set in 17th-century France.",
    "available": true
  },
  {
    "id": 26,
    "name": "Great Expectations",
    "author": "Charles Dickens",
    "genre": "Coming-of-age",
    "description": "A novel that follows the life of an orphan named Pip.",
    "available": false
  },
  {
    "id": 27,
    "name": "The Canterbury Tales",
    "author": "Geoffrey Chaucer",
    "genre": "Poetry",
    "description": "A collection of stories told by pilgrims on their way to Canterbury.",
    "available": true
  },
  {
    "id": 28,
    "name": "The Hunchback of Notre-Dame",
    "author": "Victor Hugo",
    "genre": "Historical novel",
    "description": "A novel set in 15th-century Paris, featuring the deformed bell-ringer Quasimodo.",
    "available": false
  },
  {
    "id": 29,
    "name": "The Scarlet Letter",
    "author": "Nathaniel Hawthorne",
    "genre": "Historical novel",
    "description": "A novel that explores the consequences of adultery in Puritan society.",
    "available": true
  },
  {
    "id": 30,
    "name": "A Tale of Two Cities",
    "author": "Charles Dickens",
    "genre": "Historical novel",
    "description": "A novel set in London and Paris before and during the French Revolution.",
    "available": false
  },
  {
    "id": 31,
    "name": "The Jungle",
    "author": "Upton Sinclair",
    "genre": "Social commentary",
    "description": "A novel that exposes the harsh conditions in the meatpacking industry in Chicago.",
    "available": true
  },
  {
    "id": 32,
    "name": "The Divine Comedy",
    "author": "Dante Alighieri",
    "genre": "Epic poem",
    "description": "An epic poem that follows the journey of the soul through Hell, Purgatory, and Paradise.",
    "available": false
  },
  {
    "id": 33,
    "name": "The Wind in the Willows",
    "author": "Kenneth Grahame",
    "genre": "Children's literature",
    "description": "A classic children's novel featuring anthropomorphic animals.",
    "available": true
  },
  {
    "id": 34,
    "name": "The Silmarillion",
    "author": "J.R.R. Tolkien",
    "genre": "Fantasy",
    "description": "A collection of mythopoeic stories set in Tolkien's Middle-earth.",
    "available": false
  },
  {
    "id": 35,
    "name": "Walden",
    "author": "Henry David Thoreau",
    "genre": "Philosophy",
    "description": "A reflection on simple living in natural surroundings.",
    "available": true
  },
  {
    "id": 36,
    "name": "Sense and Sensibility",
    "author": "Jane Austen",
    "genre": "Romance",
    "description": "A novel that explores the societal expectations of the Dashwood sisters.",
    "available": false
  },
  {
    "id": 37,
    "name": "The Metamorphosis",
    "author": "Franz Kafka",
    "genre": "Absurdist fiction",
    "description": "A novella that tells the story of Gregor Samsa's transformation into a giant insect.",
    "available": true
  },
  {
    "id": 38,
    "name": "Gulliver's Travels",
    "author": "Jonathan Swift",
    "genre": "Satire",
    "description": "A satirical novel that follows Lemuel Gulliver's travels to imaginary lands.",
    "available": false
  },
  {
    "id": 39,
    "name": "The Wonderful Wizard of Oz",
    "author": "L. Frank Baum",
    "genre": "Fantasy",
    "description": "A classic children's novel that follows Dorothy's journey to the magical land of Oz.",
    "available": true
  },
  {
    "id": 40,
    "name": "A Clockwork Orange",
    "author": "Anthony Burgess",
    "genre": "Dystopian",
    "description": "A novel that explores the impact of behavioral conditioning on a young delinquent named Alex.",
    "available": false
  },
  {
    "id": 41,
    "name": "The Prince",
    "author": "Niccolò Machiavelli",
    "genre": "Political philosophy",
    "description": "A treatise on political power and leadership.",
    "available": true
  },
  {
    "id": 42,
    "name": "The Old Man and the Sea",
    "author": "Ernest Hemingway",
    "genre": "Novella",
    "description": "A story of an aging Cuban fisherman's struggle with a giant marlin.",
    "available": false
  },
  {
    "id": 43,
    "name": "The Road",
    "author": "Cormac McCarthy",
    "genre": "Post-apocalyptic",
    "description": "A novel that follows a father and son's journey through a post-apocalyptic world.",
    "available": true
  },
  {
    "id": 44,
    "name": "Siddhartha",
    "author": "Hermann Hesse",
    "genre": "Spiritual",
    "description": "A novel that explores the spiritual journey of Siddhartha, a young man in ancient India.",
    "available": false
  },
  {
    "id": 45,
    "name": "The Great Expectations",
    "author": "Charles Dickens",
    "genre": "Coming-of-age",
    "description": "A novel that follows the life of an orphan named Pip.",
    "available": true
  },
  {
    "id": 46,
    "name": "The Odyssey",
    "author": "Homer",
    "genre": "Epic",
    "description": "An ancient Greek epic poem attributed to Homer, telling the story of Odysseus' journey home.",
    "available": false
  },
  {
    "id": 47,
    "name": "The Adventures of Sherlock Holmes",
    "author": "Arthur Conan Doyle",
    "genre": "Mystery",
    "description": "A collection of detective stories featuring Sherlock Holmes and Dr. John Watson.",
    "available": true
  },
  {
    "id": 48,
    "name": "The Alchemist",
    "author": "Paulo Coelho",
    "genre": "Philosophical fiction",
    "description": "A novel that follows Santiago's journey to find a hidden treasure.",
    "available": false
  },
  {
    "id": 49,
    "name": "A Midsummer Night's Dream",
    "author": "William Shakespeare",
    "genre": "Comedy",
    "description": "A play that explores the themes of love and magic in a forest setting.",
    "available": true
  },
  {
    "id": 50,
    "name": "The Republic",
    "author": "Plato",
    "genre": "Philosophy",
    "description": "A philosophical dialogue discussing justice, the nature of the soul, and the ideal state.",
    "available": false
  }
]

export default booksData;