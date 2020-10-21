// const data = [
//     {
//         "id": 1,
//         "name": "Death note",
//         "category": "anime",
//         "genre": "anime",
//         "property": "is a Japanese manga series written by Tsugumi Ohba and illustrated by Takeshi Obata. The story follows Light Yagami, a teen genius who stumbles across a mysterious otherworldly notebook: the Death Note, which belonged to the Shinigami Ryuk and grants the user the supernatural ability to kill anyone whose name is written in its pages",
//         "urlImage": "https://m.media-amazon.com/images/M/MV5BODkzMjhjYTQtYmQyOS00NmZlLTg3Y2UtYjkzN2JkNmRjY2FhXkEyXkFqcGdeQXVyNTM4MDQ5MDc@._V1_UY1200_CR99,0,630,1200_AL_.jpg",
//         "urlTrailor": "https://www.youtube.com/embed/tJZtOrm-WPk",
//         "urlVideo": "----",
//         "counterVue": 0,
//         "likeCounter": 0,
//         "dislikeCounter": 0
//     },
//     {
//         "id": 2,
//         "name": "Attack on titan",
//         "category": "anime",
//         "genre": "anime",
//         "property": "is a Japanese manga series written and illustrated by Hajime Isayama. It is set in a world where humanity lives within cities surrounded by enormous walls that protect them from gigantic man-eating humanoids referred to as Titans; the story follows Eren Yeager, who vows to retake the world after a Titan brings about the destruction of his home town and the death of his mother",
//         "urlImage": "https://financerewind.com/wp-content/uploads/2020/10/Attack-On-Titan-Season-4-Every-Detail-1024x768-1.jpg",
//         "urlTrailor": "https://www.youtube.com/embed/MGRm4IzK1SQ",
//         "urlVideo": "----",
//         "counterVue": 0,
//         "likeCounter": 0,
//         "dislikeCounter": 0
//     },
//     {
//         "id": 3,
//         "name": "Naruto",
//         "category": "anime",
//         "genre": "anime",
//         "property": " is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is told in two parts – the first set in Naruto's pre-teen years, and the second in his teens.",
//         "urlImage": "https://m.media-amazon.com/images/M/MV5BZmQ5NGFiNWEtMmMyMC00MDdiLTg4YjktOGY5Yzc2MDUxMTE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_UY1200_CR93,0,630,1200_AL_.jpg",
//         "urlTrailor": "https://www.youtube.com/embed/thh7bVCgDHs",
//         "urlVideo": "----",
//         "counterVue": 0,
//         "likeCounter": 0,
//         "dislikeCounter": 0
//     },
//     {
//         "id": 4,
//         "name": "One piece",
//         "category": "anime",
//         "genre": "anime",
//         "property": "  is a Japanese manga series written and illustrated by Eiichiro Oda. It has been serialized in Shueisha's Weekly Shōnen Jump magazine since July 1997, with its individual chapters compiled into 97 tankōbon volumes as of September 2020. The story follows the adventures of Monkey D. Luffy, a boy whose body gained the properties of rubber after unintentionally eating a Devil Fruit",
//         "urlImage": "https://www.denofgeek.com/wp-content/uploads/2020/07/One-Piece-Full-Cast-Header-Image.jpg?fit=2560%2C1440",
//         "urlTrailor": "https://www.youtube.com/embed/S8_YwFLCh4U",
//         "urlVideo": "----",
//         "counterVue": 0,
//         "likeCounter": 0,
//         "dislikeCounter": 0
//     },
//     {
//         "id": 5,
//         "name": "Tokyo Goul",
//         "category": "anime",
//         "genre": "anime",
//         "property": "   is a Japanese dark fantasy manga series written and illustrated by Sui Ishida. It was serialized in Shueisha's seinen manga magazine Weekly Young Jump between September 2011 and September 2014, and was collected in fourteen tankōbon volumes",
//         "urlImage": "https://images-na.ssl-images-amazon.com/images/I/51UfgHEbgiL._AC_SY355_.jpg",
//         "urlTrailor": "https://www.youtube.com/embed/ETHpMMV8rJU",
//         "urlVideo": "----",
//         "counterVue": 0,
//         "likeCounter": 0,
//         "dislikeCounter": 0
//     },
//     {
//         "id": 6,
//         "name": "Peaky Blinders",
//         "category": "serie",
//         "genre": "serie",
//         "property": " is a British period crime drama television series created by Steven Knight. Set in Birmingham, England, the series follows the exploits of the Shelby crime family in the direct aftermath of the First World War ",
//         "urlImage": "https://deadline.com/wp-content/uploads/2018/03/pb4_master_keyart_aw_land_v2-_-35-e1584361674557.jpg",
//         "urlTrailor": "https://www.youtube.com/embed/Ruyl8_PT_y8",
//         "urlVideo": "----",
//         "counterVue": 0,
//         "likeCounter": 0,
//         "dislikeCounter": 0
//     },
//     {
//         "id": 7,
//         "name": "Sex Education",
//         "category": "serie",
//         "genre": "serie",
//         "property": " is a British comedy-drama television series created by Laurie Nunn. Starring Asa Butterfield as an insecure teenager and Gillian Anderson as his mother, a sex therapist, the series premiered on 11 January 2019 on Netflix. ",
//         "urlImage": "https://pics.filmaffinity.com/Sex_Education_TV_Series-957722846-mmed.jpg",
//         "urlTrailor": "https://www.youtube.com/embed/Hd2ldTR-WpI",
//         "urlVideo": "----",
//         "counterVue": 0,
//         "likeCounter": 0,
//         "dislikeCounter": 0
//     },
//     {
//         "id": 8,
//         "name": "Breaking Bad",
//         "category": "serie",
//         "genre": "serie",
//         "property": "  is an American neo-Western crime drama television series created and produced by Vince Gilligan. The show aired on AMC from January 20, 2008, to September 29, 2013, consisting of five seasons for a total of 62 episodes.",
//         "urlImage": "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSK9eqijqRLTwXWp8mGWvE5ti1l3FCZ2qVkx83TJNW2SRT4vkHC",
//         "urlTrailor": "https://www.youtube.com/embed/HhesaQXLuRY",
//         "urlVideo": "----",
//         "counterVue": 0,
//         "likeCounter": 0,
//         "dislikeCounter": 0
//     },
//     {
//         "id": 9,
//         "name": "Friends",
//         "category": "serie",
//         "genre": "serie",
//         "property": "is an American television sitcom, created by David Crane and Marta Kauffman, which aired on NBC from September 22, 1994, to May 6, 2004, lasting ten seasons.",
//         "urlImage": "https://www.rollingstone.com/wp-content/uploads/2019/09/FriendsLead.jpg",
//         "urlTrailor": "https://www.youtube.com/embed/Gpa5S8DgPzs",
//         "urlVideo": "----",
//         "counterVue": 0,
//         "likeCounter": 0,
//         "dislikeCounter": 0
//     },
//     {
//         "id": 10,
//         "name": "Dark ",
//         "category": "serie",
//         "genre": "serie",
//         "property": "is a German science fiction thriller streaming television series co-created by Baran bo Odar and Jantje Friese. It ran for three seasons from 2017 to 2020. In the aftermath of a child's disappearance, Dark follows characters from the fictional German town of Winden as they pursue the truth.",
//         "urlImage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiAci3ZPn4Pu1BEqPsObJfMb_G02aJ_tzPxaGEmvEuAZ32LiwK",
//         "urlTrailor": "https://www.youtube.com/embed/cq2iTHoLrt0",
//         "urlVideo": "----",
//         "counterVue": 0,
//         "likeCounter": 0,
//         "dislikeCounter": 0
//     },
//     {
//         "id": 11,
//         "name": "Bad boys for life ",
//         "category": "movie",
//         "genre": "movie",
//         "property": "is a 1995 American action comedy film directed by Michael Bay, in his feature directorial debut, produced by Don Simpson and Jerry Bruckheimer and starring Martin Lawrence and Will Smith as two Miami narcotics detectives, Marcus Burnett and Mike Lowrey.",
//         "urlImage": "https://m.media-amazon.com/images/M/MV5BMWU0MGYwZWQtMzcwYS00NWVhLTlkZTAtYWVjOTYwZTBhZTBiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
//         "urlTrailor": "https://www.youtube.com/embed/jKCj3XuPG8M",
//         "urlVideo": "----",
//         "counterVue": 0,
//         "likeCounter": 0,
//         "dislikeCounter": 0
//     },
//     {
//         "id": 12,
//         "name": "Ip Man 3 ",
//         "category": "movie",
//         "genre": "movie",
//         "property": " is a 2015 Hong Kong biographical martial arts film directed by Wilson Yip, produced by Raymond Wong and written by Edmond Wong with action choreography by Yuen Woo-ping.",
//         "urlImage": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRlQALzDf8eCRlazKWxKI8pEVUrzXHODNdxfU4TjSCpOGaWpe3H",
//         "urlTrailor": "https://www.youtube.com/embed/yo7z8c87Egg",
//         "urlVideo": "----",
//         "counterVue": 0,
//         "likeCounter": 0,
//         "dislikeCounter": 0
//     },
//     {
//         "id": 13,
//         "name": "The Revenant",
//         "category": "movie",
//         "genre": "movie",
//         "property": "is a 2015 American epic Western action-adventure period drama film directed by Alejandro González Iñárritu. The screenplay by Mark L. Smith and Iñárritu is based in part on Michael Punke's 2002 novel of the same name, describing frontiersman Hugh Glass's experiences in 1823.",
//         "urlImage": "https://m.media-amazon.com/images/M/MV5BMDE5OWMzM2QtOTU2ZS00NzAyLWI2MDEtOTRlYjIxZGM0OWRjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
//         "urlTrailor": "https://www.youtube.com/embed/QRfj1VCg16Y",
//         "urlVideo": "----",
//         "counterVue": 0,
//         "likeCounter": 0,
//         "dislikeCounter": 0
//     },
//     {
//         "id": 14,
//         "name": "Shaft",
//         "category": "movie",
//         "genre": "movie",
//         "property": "is a 2019 American action comedy film directed by Tim Story and written by Kenya Barris and Alex Barnow. The film stars Samuel L. Jackson, Jessie T. Usher, and Richard Roundtree. It is the fifth film in the Shaft series and a direct sequel to the 2000 film with the same title.",
//         "urlImage": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQ39JHA7hBCffU-12mX2ryyLNAcI6C6PkqXri_0m-hDru1o-hNQ",
//         "urlTrailor": "https://www.youtube.com/embed/lD41XdWcmbY",
//         "urlVideo": "----",
//         "counterVue": 0,
//         "likeCounter": 0,
//         "dislikeCounter": 0
//     },
//     {
//         "id": 15,
//         "name": "Siccin 4",
//         "category": "movie",
//         "genre": "movie",
//         "property": "Yilmaz family moves in their grandmother Saadet's house. But Saadet is not living alone as known. Saadet's old house, which is also a tomb of her deceased husband.",
//         "urlImage": "https://e.snmc.io/i/300/w/a47199d3bd6bac72a07a12080edb0cd8/7153305",
//         "urlTrailor": "https://www.youtube.com/embed/rivB0DjQixs",
//         "urlVideo": "----",
//         "counterVue": 0,
//         "likeCounter": 0,
//         "dislikeCounter": 0
//     }
// ]