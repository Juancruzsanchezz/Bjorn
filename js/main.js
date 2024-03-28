/**
 * ! Clave de acceso Unsplash API
 */
const accessKey = 'dSxMiACMHYwOw601FokzDnCEtXG-Qj5dNbdtrQlq3xw';

const vuelos = [ 
    { continente: "Europa", pais: "Francia", destino: "Paris", precio: 575, imagen: "https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "France, renowned for its art, fashion, gastronomy, and culture, is a must-visit destination. From the romantic streets of Paris to the sun-kissed vineyards of Bordeaux, France offers a diverse range of experiences. Explore charming villages, indulge in world-class cuisine, and immerse yourself in the country's rich history and art.", favorito: false},
    { continente: "America", pais: "Mexico", destino: "Punta de Mita", precio: 150, imagen: "https://images.unsplash.com/photo-1563723876511-99c7ac0ae81c?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Punta de Mita, located on Mexico's Pacific coast, is a hidden gem known for its pristine beaches, luxury resorts, and world-class surfing spots. This exclusive destination offers a tranquil escape with stunning ocean views, lush tropical landscapes, and a laid-back atmosphere. Whether you're seeking relaxation on the beach or adventure in the water, Punta de Mita promises a memorable getaway.", favorito: false},
    { continente: "America", pais: "Argentina", destino: "Ushuaia", precio: 200, imagen: "https://images.unsplash.com/photo-1615656543085-130a54570311?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Ushuaia, often referred to as the 'End of the World,' is a charming city nestled at the southern tip of Argentina. Surrounded by the stunning landscapes of Tierra del Fuego National Park, Ushuaia offers a unique blend of natural beauty and adventure. Visitors can explore the rugged terrain, embark on cruises to Antarctica, or enjoy winter sports in the nearby Andes Mountains. With its breathtaking scenery and rich wildlife, Ushuaia is a paradise for nature lovers and adventurers alike.", favorito: false},
    { continente: "America", pais: "Estados Unidos", destino: "New York", precio: 650, imagen: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "New York City, often simply called New York, is a bustling metropolis known for its iconic landmarks, diverse culture, and vibrant atmosphere. Home to world-famous attractions such as Times Square, Central Park, and the Statue of Liberty, New York offers endless opportunities for exploration and discovery. From Broadway shows to renowned museums and galleries, the city is a hub of creativity and excitement. With its bustling streets, towering skyscrapers, and melting pot of cultures, New York City is a destination like no other.", favorito: false},
    { continente: "Europa", pais: "Grecia", destino: "Santorini", precio: 425, imagen: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Santorini, a picturesque Greek island in the Aegean Sea, is renowned for its stunning sunsets, white-washed buildings, and crystal-clear waters. The island's unique architecture, with its blue-domed churches and cliffside homes, creates a postcard-perfect setting. Visitors can explore charming villages like Oia and Fira, relax on beautiful beaches, or indulge in delicious Mediterranean cuisine. With its breathtaking views and romantic ambiance, Santorini is a dream destination for travelers seeking beauty and tranquility.",  favorito: false},
    { continente: "Europa", pais: "Italia", destino: "Roma", precio: 440, imagen: "https://plus.unsplash.com/premium_photo-1661962723801-1015e61ec340?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Rome, the capital city of Italy, is a captivating blend of ancient history and modern culture. Known as the 'Eternal City,' Rome boasts iconic landmarks such as the Colosseum, Roman Forum, and Pantheon, which offer a glimpse into its rich past. Visitors can explore world-class museums, wander through charming piazzas, and admire stunning architecture at every turn. With its vibrant street life, delectable cuisine, and artistic treasures, Rome is a city that truly captures the heart and imagination.", favorito: false },
    { continente: "Asia", pais: "Japón", destino: "Tokyo", precio: 620, imagen: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?q=80&w=1794&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Tokyo, the bustling capital of Japan, is a vibrant metropolis known for its unique blend of traditional culture and modernity. The city offers a dynamic mix of high-tech innovation, historic temples, and bustling street markets. Visitors can explore iconic landmarks such as the Tokyo Tower, Senso-ji Temple, and the Imperial Palace, as well as enjoy world-class shopping and dining experiences. With its efficient public transportation system, bustling neighborhoods, and rich cultural heritage, Tokyo is a fascinating destination for travelers from around the globe.", favorito: false },
    { continente: "Africa", pais: "Egipto", destino: "El Cairo", precio: 250, imagen: "https://plus.unsplash.com/premium_photo-1661891622579-bee76e28c304?q=80&w=1781&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Cairo, the capital city of Egypt, is a bustling metropolis that blends ancient history with modern-day life. Home to the iconic pyramids of Giza, the Sphinx, and the Egyptian Museum, Cairo is a treasure trove of archaeological wonders. Visitors can explore historic sites, wander through bustling bazaars, and cruise along the Nile River. With its vibrant culture, rich history, and warm hospitality, Cairo offers a captivating experience for travelers seeking to immerse themselves in the mystique of ancient Egypt.", favorito: false },
    { continente: "Oceania", pais: "Australia", destino: "Sydney", precio: 450, imagen: "https://images.unsplash.com/photo-1526959300019-11dd99a21233?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Sydney, the capital of New South Wales, Australia, is a vibrant city known for its stunning harbor, iconic landmarks, and beautiful beaches. The Sydney Opera House, with its unique sail-like design, is a world-famous symbol of the city. Visitors can explore the historic Rocks area, stroll along Bondi Beach, or take a ferry ride across the harbor to Manly. With its vibrant arts scene, diverse culinary offerings, and laid-back beach culture, Sydney offers a unique blend of cosmopolitan charm and natural beauty.", favorito: false },
    { continente: "America", pais: "Brasil", destino: "Río de Janeiro", precio: 280, imagen: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Rio de Janeiro, often called Rio, is a vibrant city in Brazil known for its stunning natural landscapes, lively culture, and beautiful beaches. The city is famous for its annual Carnival festival, featuring elaborate parades, samba music, and street parties. Visitors can take a cable car ride to the top of Sugarloaf Mountain for panoramic views of the city, relax on the iconic Copacabana Beach, or explore the historic neighborhoods of Santa Teresa and Lapa. With its breathtaking scenery, rich cultural heritage, and warm hospitality, Rio de Janeiro is a destination that captivates the hearts of travelers from around the world.", favorito: false },
    { continente: "Asia", pais: "China", destino: "Pekín", precio: 320, imagen: "https://images.unsplash.com/photo-1603258740665-711401f368bb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Beijing, formerly known as Peking, is the capital city of China and is renowned for its rich history, cultural landmarks, and modern development. The city is home to iconic sites such as the Great Wall of China, the Forbidden City, and the Temple of Heaven, which reflect its imperial past. Visitors can also explore the vibrant street markets, sample delicious local cuisine, and experience traditional Chinese arts and performances. With its blend of ancient traditions and modern innovations, Beijing offers a fascinating glimpse into China's past, present, and future.", favorito: false },
    { continente: "America", pais: "Canadá", destino: "Toronto", precio: 380, imagen: "https://images.unsplash.com/photo-1514924013411-cbf25faa35bb?q=80&w=1890&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Toronto, the capital of the province of Ontario, is Canada's largest city and a dynamic metropolis known for its diverse culture, vibrant arts scene, and stunning skyline. The city is home to iconic landmarks such as the CN Tower, which offers panoramic views of the city and Lake Ontario. Visitors can explore diverse neighborhoods like Kensington Market, Chinatown, and Little Italy, each offering its own unique charm and culinary delights. With its world-class museums, bustling markets, and lively entertainment venues, Toronto offers a rich tapestry of experiences for travelers to discover.", favorito: false },
    { continente: "Africa", pais: "Kenia", destino: "Nairobi", precio: 290, imagen: "https://images.unsplash.com/photo-1612253577861-6a8175a9dfb6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Nairobi, the capital city of Kenya, is a bustling metropolis known for its rich history, vibrant culture, and stunning natural beauty. The city is a hub of commerce, culture, and tourism in East Africa, offering visitors a unique blend of urban and natural attractions. Nairobi is home to the Nairobi National Park, where visitors can see a variety of wildlife such as lions, giraffes, and zebras against the backdrop of the city skyline. The city also boasts a thriving arts and music scene, as well as a variety of restaurants serving delicious Kenyan cuisine. With its warm hospitality and diverse attractions, Nairobi is a must-visit destination for travelers exploring Kenya.", favorito: false },
    { continente: "Oceania", pais: "Nueva Zelanda", destino: "Auckland", precio: 360, imagen: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Auckland, located in the North Island of New Zealand, is a vibrant city known for its stunning harbors, beautiful beaches, and lush landscapes. The city is surrounded by volcanic hills and is home to the iconic Sky Tower, offering panoramic views of the city and the surrounding area. Auckland is also known for its vibrant arts and culture scene, with a range of museums, galleries, and theaters to explore. Visitors can enjoy a variety of outdoor activities, from sailing and kayaking in the harbors to hiking and cycling in the nearby hills. With its stunning natural beauty and diverse range of attractions, Auckland is a captivating destination for travelers.", favorito: false },
    { continente: "America", pais: "Argentina", destino: "Buenos Aires", precio: 310, imagen: "https://images.unsplash.com/photo-1629085601815-c99c5fc6f557?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Buenos Aires, the capital of Argentina, is a vibrant city known for its rich culture, stunning architecture, and lively tango scene. The city is home to iconic neighborhoods like La Boca, known for its colorful buildings and street art, and Recoleta, famous for its elegant architecture and the Recoleta Cemetery, where Eva Perón is buried. Visitors can explore the historic Plaza de Mayo, stroll along the bustling Avenida Corrientes, or enjoy a traditional tango show in one of the city's many milongas. With its blend of European elegance and Latin American flair, Buenos Aires offers a unique and captivating experience for travelers.", favorito: false },
    { continente: "Europa", pais: "España", destino: "Madrid", precio: 240, imagen: "https://images.unsplash.com/photo-1578305698944-874fa44d04c9?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Madrid, the capital of Spain, is a vibrant city known for its rich history, stunning architecture, and lively culture. The city is home to world-class museums such as the Prado Museum, the Reina Sofia Museum, and the Thyssen-Bornemisza Museum, which showcase an impressive collection of Spanish and international art. Visitors can explore historic landmarks such as the Royal Palace of Madrid and the Plaza Mayor, or relax in one of the city's many parks and gardens. With its bustling markets, lively nightlife, and delicious cuisine, Madrid offers a captivating blend of old-world charm and modern excitement.", favorito: false },
    { continente: "Asia", pais: "India", destino: "Nueva Delhi", precio: 330, imagen: "https://images.unsplash.com/photo-1515091943-9d5c0ad475af?q=80&w=1535&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "New Delhi, the capital of India, is a bustling metropolis known for its rich history, vibrant culture, and stunning architecture. The city is a blend of ancient traditions and modernity, with historic monuments such as the Red Fort, Qutub Minar, and Humayun's Tomb standing alongside contemporary structures like the Lotus Temple and India Gate. New Delhi is also known for its bustling markets, where visitors can shop for everything from spices and textiles to handicrafts and jewelry. The city's diverse culinary scene offers a wide range of flavors, from street food to fine dining. With its mix of history, culture, and cuisine, New Delhi offers a truly unique and memorable experience for travelers.", favorito: false },
    { continente: "America", pais: "México", destino: "Ciudad de México", precio: 390, imagen: "https://images.unsplash.com/photo-1601585144584-2a53183be14c?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Mexico City, also known as CDMX, is the capital of Mexico and one of the largest and most vibrant cities in Latin America. The city is famous for its rich history, stunning architecture, and diverse culture. Some of its most notable attractions include the Zocalo, one of the largest squares in the world, the Metropolitan Cathedral, the Palace of Fine Arts, and the National Museum of Anthropology, which houses artifacts from ancient Mexican civilizations. Visitors can also enjoy Mexican cuisine at the city's numerous markets and restaurants", favorito: false },
    { continente: "Africa", pais: "Sudáfrica", destino: "Ciudad del Cabo", precio: 260, imagen: "https://images.unsplash.com/photo-1547970810-dc1eac37d174?q=80&w=1836&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Cape Town, located in South Africa, is a vibrant city known for its stunning natural beauty, diverse culture, and rich history. The city is nestled between the iconic Table Mountain and the azure waters of the Atlantic Ocean, offering breathtaking views from almost every corner. Cape Town is famous for its beautiful beaches, including Camps Bay and Clifton, as well as its vibrant waterfront area, bustling with shops, restaurants, and entertainment venues. The city also boasts a rich cultural heritage, with historic sites such as Robben Island, where Nelson Mandela was imprisoned, and the District Six Museum, which commemorates the forced removals of the apartheid era. With its stunning scenery, diverse attractions, and warm hospitality, Cape Town is a must-visit destination for travelers.", favorito: false },
    { continente: "Europa", pais: "Alemania", destino: "Berlín", precio: 260, imagen: "https://images.unsplash.com/photo-1587330979470-3595ac045ab0?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Berlin, the capital of Germany, is a vibrant and diverse city known for its rich history, cultural attractions, and dynamic arts scene. The city is home to a wealth of historic landmarks, including the Berlin Wall, the Brandenburg Gate, and the Reichstag building, which reflect its tumultuous past and reunification. Berlin also boasts world-class museums, such as the Pergamon Museum and the Jewish Museum, showcasing art, history, and culture from around the world. The city's diverse neighborhoods offer a mix of trendy boutiques, galleries, and restaurants, as well as green spaces like Tiergarten and the Mauerpark. With its blend of history, culture, and modernity, Berlin is a fascinating destination for travelers.", favorito: false },
    { continente: "Asia", pais: "Corea del Sur", destino: "Seúl", precio: 350, imagen: "https://plus.unsplash.com/premium_photo-1661963468634-71b9482a3efe?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "South Korea, officially the Republic of Korea (ROK), is a country in East Asia, constituting the southern part of the Korean Peninsula, and sharing a land border with North Korea. Its capital and largest city is Seoul, the second largest metropolitan in the world. South Korea is a highly developed country known for its advanced technology, vibrant culture, and delicious cuisine. The country has a rich history, with ancient temples, palaces, and traditional hanok villages, as well as modern skyscrapers and high-tech cities. South Korea is also famous for its pop culture, including K-pop music and Korean dramas, which have gained international popularity. With its mix of ancient traditions and modern innovations, South Korea offers a fascinating destination for travelers.", favorito: false },
    { continente: "America", pais: "Perú", destino: "Machu Picchu", precio: 380, imagen: "https://images.unsplash.com/photo-1415804941191-bc0c3bbac10d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Machu Picchu is an ancient Inca city located in the Andes Mountains of Peru. It is one of the most famous and iconic archaeological sites in the world, known for its stunning mountainous setting and well-preserved ruins. Machu Picchu was built in the 15th century and was abandoned during the Spanish conquest. It was rediscovered in 1911 by the American explorer Hiram Bingham. The site is renowned for its sophisticated dry-stone construction, including its terraced fields, temples, and palaces. Machu Picchu is also famous for its breathtaking views of the surrounding mountains and valleys. It is a UNESCO World Heritage Site and a popular destination for tourists and hikers on the Inca Trail.", favorito: false },
    { continente: "America", pais: "Mexico", destino: "Cancun", precio: 375, imagen: "https://images.unsplash.com/photo-1581710862235-eb6e05d8783f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", descripcion: "Cancún, the tropical paradise of Mexico, awaits you with white sandy beaches and crystal-clear waters. Enjoy the sun, the sea, and the fun in this vibrant and welcoming destination. Discover the beauty of Cancún and create unforgettable memories!", favorito: false}
];

const actPopulares = [
    {   
        destino: "Paris",   
        actividades: [
            "Visit to the Eiffel Tower",
            "Tour of the Louvre Museum",
            "Walk along the Champs-Élysées"
        ],
        restoCafe: [
            "Le Jules Verne",
            "Coffe da Flore",
            "Le Relais de l'Entrecôte"
        ]
    },

    {   
        destino: "Punta de Mita",
        actividades: [
            "Surfing at La Lancha Beach",
            "Snorkeling at the Marietas Islands",
            "Whale watching tours"
        ],
        restoCafe: [
            "Tuna Blanca by Café des Artistes",
            "Sí Señor Beach",
            "Blue Shrimp"
        ]
    }, 
    
    {   
        destino: "Ushuaia",
        actividades: [
            "Tierra del Fuego National Park",
            "Beagle Channel Boat Tour",
            "Hiking in Martial Glacier"
        ],
        restoCafe: [
            "Kaupe",
            "Moustacchio",
            "La Estancia"
        ]
    },  
    
    {   
        destino: "New York",
        actividades: [
            "Visit Central Park",
            "Explore the Metropolitan Museum of Art",
            "Walk across the Brooklyn Bridge"
        ],
        restoCafe: [
            "Le Bernardin",
            "Katz's Delicatessen",
            "Shake Shack"
        ]
    },
    
    {   
        destino: "Santorini",
        actividades: [
            "Watch the sunset in Oia",
            "Explore the ruins of Ancient Thera",
            "Relax at the Red Beach"
        ],
        restoCafe: [
            "1800-Floga Restaurant",
            "Amoudi Bay",
            "Lucky's Souvlakis"
        ]
    },

    {   
        destino: "Roma",
        actividades: [
            "Visit the Colosseum",
            "Explore the Vatican Museums",
            "Throw a coin in the Trevi Fountain"
        ],
        restoCafe: [
            "La Pergola",
            "Pizzeria da Baffetto",
            "Giolitti"
        ]
    },
    
    {   
        destino: "Tokyo",
        actividades: [
            "Visit the Senso-ji Temple in Asakusa",
            "Explore the Tsukiji Fish Market",
            "Experience the Shibuya Crossing"
        ],
        restoCafe: [
            "Sukiyabashi Jiro",
            "Ichiran Ramen",
            "Gonpachi"
        ]
    },
    
    {   
        destino: "El Cairo",
        actividades: [
            "Visit the Pyramids of Giza",
            "Explore the Egyptian Museum",
            "Take a Nile River cruise"
        ],
        restoCafe: [
            "Naguib Mahfouz Cafe",
            "Koshary Abou Tarek",
            "Sequoia"
        ]
    },

    {   
        destino: "Sydney",
        actividades: [
            "Visit the Sydney Opera House",
            "Relax at Bondi Beach",
            "Explore the Royal Botanic Garden"
        ],
        restoCafe: [
            "Quay",
            "Bourke Street Bakery",
            "The Grounds of Alexandria"
        ]
    },

    {   
        destino: "Río de Janeiro",
        actividades: [
            "Visit Sugarloaf Mountain",
            "Relax at Copacabana Beach",
            "Explore the Tijuca National Park"
        ],
        restoCafe: [
            "Aprazível",
            "Confeitaria Colombo",
            "Bar Urca"
        ]
    },

    {   
        destino: "Pekín",
        actividades: [
            "Visit the Great Wall of China",
            "Explore the Forbidden City",
            "Walk around the Summer Palace"
        ],
        restoCafe: [
            "Dadong Roast Duck",
            "Jing Yaa Tang",
            "Dali Courtyard"
        ]
    },

    {   
        destino: "Toronto",
        actividades: [
            "Visit the CN Tower",
            "Explore the Royal Ontario Museum",
            "Walk around the Distillery District"
        ],
        restoCafe: [
            "Canoe",
            "Kost",
            "Byblos Toronto"
        ]
    },

    {   
        destino: "Nairobi",
        actividades: [
            "Visit the David Sheldrick Wildlife Trust",
            "Explore the Giraffe Centre",
            "Take a safari in Nairobi National Park"
        ],
        restoCafe: [
            "Carnivore Restaurant",
            "Karen Blixen Coffee Garden",
            "Talisman Restaurant"
        ]
    },

    {   
        destino: "Auckland",
        actividades: [
            "Visit the Sky Tower",
            "Explore the Auckland Art Gallery",
            "Relax at Waiheke Island"
        ],
        restoCafe: [
            "Ortolana",
            "Federal Delicatessen",
            "The Grove"
        ]
    },

    {   
        destino: "Buenos Aires",
        actividades: [
            "Visit the Recoleta Cemetery",
            "Explore the La Boca neighborhood",
            "Enjoy a tango show"
        ],
        restoCafe: [
            "Café Tortoni",
            "Güerrín",
            "La Cabrera"
        ]
    },

    {   
        destino: "Madrid",
        actividades: [
            "Visit the Prado Museum",
            "Explore the Retiro Park",
            "Enjoy tapas in La Latina"
        ],
        restoCafe: [
            "Botín",
            "Casa Labra",
            "Mercado de San Miguel"
        ]
    },

    {   
        destino: "Nueva Delhi",
        actividades: [
            "Visit the Red Fort",
            "Explore the Jama Masjid",
            "Shop in Chandni Chowk"
        ],
        restoCafe: [
            "Indian Accent",
            "Karim's",
            "Pandara Road"
        ]
    },

    {   
        destino: "Ciudad de Mexico",
        actividades: [
            "Visit the National Museum of Anthropology",
            "Explore the Zócalo",
            "Take a boat ride in Xochimilco"
        ],
        restoCafe: [
            "El Cardenal",
            "Azul Histórico",
            "Pujol"
        ]
    },

    {   
        destino: "Ciudad del Cabo",
        actividades: [
            "Visit Table Mountain",
            "Explore the V&A Waterfront",
            "Take a drive to the Cape of Good Hope"
        ],
        restoCafe: [
            "The Test Kitchen",
            "The Pot Luck Club",
            "Gold Restaurant"
        ]
    },

    {   
        destino: "Berlín",
        actividades: [
            "Visit the Berlin Wall",
            "Explore the Brandenburg Gate",
            "Relax in Tiergarten Park"
        ],
        restoCafe: [
            "Katz Orange",
            "Café Einstein Stammhaus",
            "Renger-Patzsch"
        ]
    },

    {   
        destino: "Seúl",
        actividades: [
            "Visit Gyeongbokgung Palace",
            "Explore Bukchon Hanok Village",
            "Shop in Myeongdong"
        ],
        restoCafe: [
            "Sukiyabashi Jiro",
            "Ichiran Ramen",
            "Gonpachi"
        ]
    },

    {   
        destino: "Machu Picchu",
        actividades: [
            "Visit the ancient ruins of Machu Picchu",
            "Hike the Inca Trail",
            "Explore the Sacred Valley"
        ],
        restoCafe: [
            "Tinkuy Buffet Restaurant",
            "Inka Grill",
            "MAP Café"
        ]
    },

    {   
        destino: "Cancun",
        actividades: [
            "Relax at the beach",
            "Visit the Mayan ruins of Tulum",
            "Swim in cenotes"
        ],
        restoCafe: [
            "Puerto Madero",
            "Lorenzillo's",
            "La Habichuela"
        ]
    }
];


let inicio = document.getElementById('inicio');
document.addEventListener("DOMContentLoaded", () => {   
    let keyInicio = localStorage.getItem('Sesion');
    if(keyInicio == 'true') {  
        inicio.style.display = 'none';
    }
});

document.addEventListener("DOMContentLoaded", () => {   
    if (localStorage.getItem('inicioSesion')) { 
        let contenedorBtnSingUpLogin = document.getElementById('contenedor_btn_sing_up');
        contenedorBtnSingUpLogin.children[0].textContent = '"Every flight, a new story"';
        contenedorBtnSingUpLogin.children[1].style.display = 'none';
    }
})

let seccion = document.getElementById('seccion');
let login = document.getElementById('login');
let loginForm = document.getElementById('login_form');
let bienvenidaLogin = document.getElementById('bienvenida_login');
let singUp = document.getElementById('sing_up');
let bienvenidaExito = document.getElementById('bienvenida_exito');
let slideExito = document.getElementById('slide_exito');
let slideExitoIcono = document.getElementById('exito_icono');
let slideExitoContenido = document.getElementById('exito_contenido');

let backAzul = document.getElementById('background_azul');
const patroPermitido = /^[a-zA-Z0-9@. ]*$/;

let notificacion = document.getElementById('notificacion');
let contenedorNoti = notificacion.getElementsByClassName('notificacion_contenedor')[0];
let textoNoti = contenedorNoti.getElementsByClassName('notificacion_titulo')[0];
let mensaje;

let btnStarted = document.getElementById('btn_started');
let btnContinuar = document.getElementById('btn_login_continuar');
let btnExito = document.getElementById('btn_exito');
let btnRegistro = document.getElementById('btn_registro');
let btnVolverSingUp = document.getElementById('btn_volver');
let btnSingUp = document.getElementById('btn_sing_up');

/** 
 * ! -------------------------> Funcion Notificacion <---------------------------
 */

function notificacionPopUp (texto, bool) {    
    textoNoti.textContent = texto;

    if(bool) {  
        notificacion.children[0].style.backgroundColor = "var(--col2)";
        notificacion.classList.add('active');

        setTimeout(() => {  
            notificacion.classList.remove('active');
        }, 4000);
    }
    else {  
        notificacion.children[0].style.backgroundColor = "var(--col9)";
        notificacion.classList.add('active');

        setTimeout(() => {  
            notificacion.classList.remove('active');
        }, 4000);
    }
}

/**
 * ! -------------------------> Login <---------------------------
 */

let inicioSesion = localStorage.getItem('inicioSesion');
function loginSesion (inicioSesion) { 
    if (inicioSesion) { 
        let recuperarDatosUser = JSON.parse(localStorage.getItem('datosUsuario'));
        let emailRecuUser = recuperarDatosUser[3];
        let passwordRecuUser = recuperarDatosUser[4];
        let emailLogin = document.getElementById('email_login').value;
        let passwordLogin = document.getElementById('password_login').value;
        
        if (emailLogin !== emailRecuUser || passwordLogin !== passwordRecuUser) { 
            mensaje = '¡email or password is incorrect!';
            notificacionPopUp(mensaje, false);
        } else {  
            alert("flacow");   
        }
    } else {    
        mensaje = '¡sing up to continue!';
        notificacionPopUp(mensaje, false);
    }
}

function singUpSesion () { 
    let nombreUser = document.getElementById('input_nombre').value;
    let nacimientoUser = document.getElementById('input_nacimiento').valor;
    let numeroUser = document.getElementById('input_numero').value;
    let emailUser = document.getElementById('input_email').value;
    let passwordUser = document.getElementById('input_contrasena').value;
    let confirmPasswordUser = document.getElementById('input_confirm_contrasena').value;

    let datosUser = [nombreUser, nacimientoUser, numeroUser, emailUser, passwordUser];

    let inputVacio = false;
    for (let i = 0; i < datosUser.length; i++) {
        if (datosUser[i] === "") {  
            inputVacio = true;
        }
    }

    let validarEmail = false;
    for (let i = 0; i < emailUser.length; i++) {
        if (emailUser[i] == "@") {  
            if (emailUser.indexOf(".") !== -1) {    
                validarEmail = true;
            }
        }
    }

    let errorCaracter = true;
    for (let i = 0; i < datosUser.length; i++) {
        if (!patroPermitido.test(datosUser[i])) { 
            errorCaracter = false;
        }
    }

    if (inputVacio == true) {  
        mensaje = '¡Please complete all inputs!';
        notificacionPopUp(mensaje, false);
    }
    else if (validarEmail == false) {   
        mensaje = '¡enter a validated email!';
        notificacionPopUp(mensaje, false);
    }
    else if (passwordUser != confirmPasswordUser) {    
        mensaje = '¡passwords are not the same!';
        notificacionPopUp(mensaje, false);
    }
    else if (errorCaracter == false) {    
        mensaje = '¡enter valid characters!';
        notificacionPopUp(mensaje, false);
    }
    else {  
        singUp.classList.add("hidden");
        slideExito.classList.remove("hidden");
        bienvenidaExito.classList.remove("hidden");
        setTimeout(() => {
            slideExitoIcono.classList.add("active");
            setTimeout(() => {
                slideExitoContenido.classList.add("active");
                btnExito.classList.add("active");
            }, 1500);
        }, 1500);

        let datosUserJSON = JSON.stringify(datosUser);
        localStorage.setItem('datosUsuario', datosUserJSON);
        inicioSesion = localStorage.setItem('inicioSesion', true);     
    }
}

btnContinuar.addEventListener('click', () => {  
    loginSesion(inicioSesion);
})

btnStarted.addEventListener('click', () => { 
    inicio.classList.add("hidden_up");

    localStorage.setItem('Sesion', true);
});

btnSingUp.addEventListener('click', () => { 
    singUp.classList.remove('hidden');
    loginForm.style.bottom = '-1000px';
    bienvenidaLogin.style.transform = 'translateY(1000px)';
});

btnVolverSingUp.addEventListener('click', () => {   
    singUp.classList.add("hidden");
    loginForm.style.bottom = '0px';
    bienvenidaLogin.style.transform = 'translateY(0px)';
});

btnRegistro.addEventListener('click', () => {   
    singUpSesion();
});

btnExito.addEventListener('click', () => {  
    slideExito.classList.add('hidden');
    bienvenidaExito.classList.add('hidden');
    loginForm.style.bottom = '0px';
    bienvenidaLogin.style.transform = 'translateY(0px)';
    location.reload();
});

// <----------------------- cambiar seccion con navegacion ------------------------->


function cambiarSeccion(seccion) {
    let secciones = document.getElementsByClassName("seccion");

    for (let i = 0; i < secciones.length; i++) {
        secciones[i].classList.remove("active");
    }

    let btnNav = document.getElementsByClassName("nav_icon");
    for (let i = 0; i < btnNav.length; i++) {
        btnNav[i].classList.remove("active");
    }

    document.getElementById("sc" + seccion).classList.add("active");

    document.getElementById("btn" + seccion).classList.add("active");
}

/** 
 * ! ----------------------> Buscador Home <----------------------
 */

const buscadorViajes = document.getElementById("buscador_home");
function completarInput(resultado) {
    let destino = resultado.children[1].children[0].textContent.trim();
    buscadorViajes.value = destino;
}

const contenedorResultados = document.getElementById("resultados_busqueda");
buscadorViajes.addEventListener("input", (texto) => { 
    let textoBuscador = texto.target.value;
    textoBuscador = textoBuscador.charAt(0).toUpperCase() + textoBuscador.slice(1);
    let filtraData = vuelos.filter(vuelo => vuelo.destino.includes(textoBuscador) || vuelo.pais.includes(textoBuscador));

    contenedorResultados.innerHTML = ``;

    filtraData.forEach((vuelo) => { 
        let resultado = document.createElement("div");
        resultado.classList.add("resultado");
        resultado.setAttribute('onclick', 'completarInput(this)');
        resultado.innerHTML = ` 
            <img src="${vuelo.imagen}" alt="">
            <div class="resultado_info">    
                <h4>
                    ${vuelo.destino}, ${vuelo.pais}
                </h4>
                <h4>    
                    ${vuelo.continente}
                </h4>
            </div>
        `
        contenedorResultados.appendChild(resultado);
    });
});
document.getElementById("buscador_home").addEventListener("blur", () => {
    setTimeout(() => {
        contenedorResultados.innerHTML = ``;
    }, 0);
});

/**     x
 * ! ----------------------> VUELOS <----------------------    
 **/
// <-------------------- Crear Cards Explore --------------------> 
// Crea los elementos de la seccion EXPLORE de forma dinamica

const vuelosPorPagina = 10;
const btnSeeMore = document.getElementById('btn_seeMore');
btnSeeMore.style.fontSize = '16px';
btnSeeMore.style.color = 'var(--col2)';
btnSeeMore.style.fontWeight = '600';
let contenedorCards = document.getElementById('contenedor_vuelo');
let paginaActual = 1;
let cont = 0;

function cargarVuelos() {
    let inicio = (paginaActual - 1) * vuelosPorPagina;
    let fin = inicio + vuelosPorPagina;

    vuelos.slice(inicio, fin).forEach(function(vuelo) {
        let cardVuelo = document.createElement("div");
        cardVuelo.classList.add("card");
        cardVuelo.setAttribute('onclick', 'cargarGaleria(this)');
        cardVuelo.style.backgroundImage = `url(${vuelo.imagen})`;
        cardVuelo.innerHTML = `
        <div class="card_fav" onclick = "favsCard(this, event)">  
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0.985503C9.32877 -2.436 17.6507 3.55163 6 11.25C-5.6507 3.55163 2.67123 -2.436 6 0.985503Z" fill="#979797"/>
                            </svg>
                        </div>
                        <div class="card_info"> 
                            <div class="card_info_ubi"> 
                                <h6>    
                                ${vuelo.destino}
                                </h6>
                                <div class="card_info_ubi_dest">    
                                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9.12433 6.70482C8.73131 7.50113 8.19934 8.29508 7.65432 9.00753C7.11099 9.71776 6.56582 10.3326 6.15576 10.7704C6.10127 10.8285 6.04924 10.8835 6 10.9351C5.95076 10.8835 5.89873 10.8285 5.84424 10.7704C5.43418 10.3326 4.88901 9.71776 4.34568 9.00753C3.80066 8.29508 3.26869 7.50113 2.87567 6.70482C2.4786 5.90031 2.25 5.14643 2.25 4.5C2.25 2.42893 3.92893 0.75 6 0.75C8.07107 0.75 9.75 2.42893 9.75 4.5C9.75 5.14643 9.5214 5.90031 9.12433 6.70482ZM6 12C6 12 10.5 7.73528 10.5 4.5C10.5 2.01472 8.48528 0 6 0C3.51472 0 1.5 2.01472 1.5 4.5C1.5 7.73528 6 12 6 12Z" fill="white"/>
                                        <path d="M6 6C5.17157 6 4.5 5.32843 4.5 4.5C4.5 3.67157 5.17157 3 6 3C6.82843 3 7.5 3.67157 7.5 4.5C7.5 5.32843 6.82843 6 6 6ZM6 6.75C7.24264 6.75 8.25 5.74264 8.25 4.5C8.25 3.25736 7.24264 2.25 6 2.25C4.75736 2.25 3.75 3.25736 3.75 4.5C3.75 5.74264 4.75736 6.75 6 6.75Z" fill="white"/>
                                    </svg>
                                    <h7>    
                                    ${vuelo.pais}
                                    </h7>
                                </div>
                            </div>
                            <div class="card_precio">   
                                <h7>    
                                    $${vuelo.precio}
                                </h7>
                            </div>
                        </div>
      `;

        contenedorCards.appendChild(cardVuelo);
        checkFavs();
    });

    cont += 10;
}

function mostrarMasVuelos() {
    paginaActual++;
    cargarVuelos();
}

window.onload = function() {
    cargarVuelos();
};

btnSeeMore.addEventListener('click', () => {
    if(cont == vuelos.length - (vuelos.length % 10)) {    
        mostrarMasVuelos();
        btnSeeMore.style.display = 'none';
    } else {    
        mostrarMasVuelos();
    } 

});

// <-------------------- filtro de vuelos ----------------------->

let btnFiltro = document.getElementsByClassName("btn_filtro");

function filtrarVuelos(valor, boton) {  

    document.querySelectorAll('.btn_filtro').forEach(btn => {
        btn.classList.remove('active');
    });

    
    boton.classList.add('active');

    contenedorCards.innerHTML = '';

    vuelos.forEach(vuelo => {   
        if(vuelo.continente === valor) { 
            let cardVuelo = document.createElement("div");
            btnSeeMore.style.display = 'none';
            cardVuelo.classList.add("card");
            cardVuelo.setAttribute('onclick', 'cargarGaleria(this)');
            cardVuelo.style.backgroundImage = `url(${vuelo.imagen})`;
            cardVuelo.innerHTML = `
                <div class="card_fav" onclick = "favsCard(this, event)">  
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0.985503C9.32877 -2.436 17.6507 3.55163 6 11.25C-5.6507 3.55163 2.67123 -2.436 6 0.985503Z" fill="#979797"/>
                        </svg>
                    </div>
                    <div class="card_info"> 
                        <div class="card_info_ubi"> 
                            <h6>    
                            ${vuelo.destino}
                            </h6>
                            <div class="card_info_ubi_dest">    
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.12433 6.70482C8.73131 7.50113 8.19934 8.29508 7.65432 9.00753C7.11099 9.71776 6.56582 10.3326 6.15576 10.7704C6.10127 10.8285 6.04924 10.8835 6 10.9351C5.95076 10.8835 5.89873 10.8285 5.84424 10.7704C5.43418 10.3326 4.88901 9.71776 4.34568 9.00753C3.80066 8.29508 3.26869 7.50113 2.87567 6.70482C2.4786 5.90031 2.25 5.14643 2.25 4.5C2.25 2.42893 3.92893 0.75 6 0.75C8.07107 0.75 9.75 2.42893 9.75 4.5C9.75 5.14643 9.5214 5.90031 9.12433 6.70482ZM6 12C6 12 10.5 7.73528 10.5 4.5C10.5 2.01472 8.48528 0 6 0C3.51472 0 1.5 2.01472 1.5 4.5C1.5 7.73528 6 12 6 12Z" fill="white"/>
                                    <path d="M6 6C5.17157 6 4.5 5.32843 4.5 4.5C4.5 3.67157 5.17157 3 6 3C6.82843 3 7.5 3.67157 7.5 4.5C7.5 5.32843 6.82843 6 6 6ZM6 6.75C7.24264 6.75 8.25 5.74264 8.25 4.5C8.25 3.25736 7.24264 2.25 6 2.25C4.75736 2.25 3.75 3.25736 3.75 4.5C3.75 5.74264 4.75736 6.75 6 6.75Z" fill="white"/>
                                </svg>
                                <h7>    
                                ${vuelo.pais}
                                </h7>
                            </div>
                        </div>
                        <div class="card_precio">   
                            <h7>    
                                $${vuelo.precio}
                            </h7>
                        </div>
                    </div>
            `;
            contenedorCards.appendChild(cardVuelo);
            checkFavs();
        } 
        else if(valor == ''){  
            let cardVuelo = document.createElement("div");
            cardVuelo.classList.add("card");
            cardVuelo.setAttribute('onclick', 'cargarGaleria(this)');
            cardVuelo.style.backgroundImage = `url(${vuelo.imagen})`;
            cardVuelo.innerHTML = `
                <div class="card_fav" onclick = "favsCard(this, event)">  
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0.985503C9.32877 -2.436 17.6507 3.55163 6 11.25C-5.6507 3.55163 2.67123 -2.436 6 0.985503Z" fill="#979797"/>
                        </svg>
                    </div>
                    <div class="card_info"> 
                        <div class="card_info_ubi"> 
                            <h6>    
                            ${vuelo.destino}
                            </h6>
                            <div class="card_info_ubi_dest">    
                                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.12433 6.70482C8.73131 7.50113 8.19934 8.29508 7.65432 9.00753C7.11099 9.71776 6.56582 10.3326 6.15576 10.7704C6.10127 10.8285 6.04924 10.8835 6 10.9351C5.95076 10.8835 5.89873 10.8285 5.84424 10.7704C5.43418 10.3326 4.88901 9.71776 4.34568 9.00753C3.80066 8.29508 3.26869 7.50113 2.87567 6.70482C2.4786 5.90031 2.25 5.14643 2.25 4.5C2.25 2.42893 3.92893 0.75 6 0.75C8.07107 0.75 9.75 2.42893 9.75 4.5C9.75 5.14643 9.5214 5.90031 9.12433 6.70482ZM6 12C6 12 10.5 7.73528 10.5 4.5C10.5 2.01472 8.48528 0 6 0C3.51472 0 1.5 2.01472 1.5 4.5C1.5 7.73528 6 12 6 12Z" fill="white"/>
                                    <path d="M6 6C5.17157 6 4.5 5.32843 4.5 4.5C4.5 3.67157 5.17157 3 6 3C6.82843 3 7.5 3.67157 7.5 4.5C7.5 5.32843 6.82843 6 6 6ZM6 6.75C7.24264 6.75 8.25 5.74264 8.25 4.5C8.25 3.25736 7.24264 2.25 6 2.25C4.75736 2.25 3.75 3.25736 3.75 4.5C3.75 5.74264 4.75736 6.75 6 6.75Z" fill="white"/>
                                </svg>
                                <h7>    
                                ${vuelo.pais}
                                </h7>
                            </div>
                        </div>
                        <div class="card_precio">   
                            <h7>    
                                $${vuelo.precio}
                            </h7>
                        </div>
                </div>
            `;
            contenedorCards.appendChild(cardVuelo);
            checkFavs();
        }
    });
}

// <----------------------- Filtro AVZ ----------------------->

function filtroAvz(boton) { 
    window.scrollTo(0,0);
    document.getElementById("sc1").style.overflow = 'hidden';
    const formFiltro = document.getElementById('contenedor_filtro_avz');
    const capa = document.getElementById('capa');

    formFiltro.classList.add("active");
    capa.classList.add("active");

    document.querySelectorAll('.btn_filtro').forEach(btn => {
        btn.classList.remove('active');
    });
    boton.classList.add('active');

    const btnVolverFiltro = document.getElementById('btn_volver_filtro');
    btnVolverFiltro.addEventListener('click', () => {   
        document.getElementById("sc1").style.overflow = 'auto';
        formFiltro.classList.remove("active")
        capa.classList.remove("active");
        boton.classList.remove("active");
    });

    const btnFiltroAvz = document.getElementById('btnFiltroAvz');
    btnFiltroAvz.addEventListener('click', () => {  
        const inpDesde = parseInt(document.getElementById('filtro_desde').value);
        const inpHasta = parseInt(document.getElementById('filtro_hasta').value);
        const inpContinente = document.getElementById('continente').value;
        let resultadoBusq = document.getElementById('resultados-busqueda');

        let filtraData = vuelos.filter(vuelo => {
            return (
                (vuelo.continente === inpContinente) &&
                (vuelo.precio >= inpDesde && vuelo.precio <= inpHasta)
            );
        });
        btnSeeMore.style.display = 'none';
        resultadoBusq.innerHTML = '';
        contenedorCards.innerHTML = '';
        filtraData.forEach((vuelo) => {    
            let elementoRecu = document.createElement("div");
            elementoRecu.classList.add("card");
            elementoRecu.setAttribute('onclick', 'cargarGaleria(this)');
            elementoRecu.style.backgroundImage = `url(${vuelo.imagen})`;
            elementoRecu.innerHTML = `
                <div class="card_fav" onclick = "favsCard(this, event)">  
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0.985503C9.32877 -2.436 17.6507 3.55163 6 11.25C-5.6507 3.55163 2.67123 -2.436 6 0.985503Z" fill="#979797"/>
                    </svg>
                </div>
                <div class="card_info"> 
                    <div class="card_info_ubi"> 
                        <h6>    
                        ${vuelo.destino}
                        </h6>
                        <div class="card_info_ubi_dest">    
                            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.12433 6.70482C8.73131 7.50113 8.19934 8.29508 7.65432 9.00753C7.11099 9.71776 6.56582 10.3326 6.15576 10.7704C6.10127 10.8285 6.04924 10.8835 6 10.9351C5.95076 10.8835 5.89873 10.8285 5.84424 10.7704C5.43418 10.3326 4.88901 9.71776 4.34568 9.00753C3.80066 8.29508 3.26869 7.50113 2.87567 6.70482C2.4786 5.90031 2.25 5.14643 2.25 4.5C2.25 2.42893 3.92893 0.75 6 0.75C8.07107 0.75 9.75 2.42893 9.75 4.5C9.75 5.14643 9.5214 5.90031 9.12433 6.70482ZM6 12C6 12 10.5 7.73528 10.5 4.5C10.5 2.01472 8.48528 0 6 0C3.51472 0 1.5 2.01472 1.5 4.5C1.5 7.73528 6 12 6 12Z" fill="white"/>
                                <path d="M6 6C5.17157 6 4.5 5.32843 4.5 4.5C4.5 3.67157 5.17157 3 6 3C6.82843 3 7.5 3.67157 7.5 4.5C7.5 5.32843 6.82843 6 6 6ZM6 6.75C7.24264 6.75 8.25 5.74264 8.25 4.5C8.25 3.25736 7.24264 2.25 6 2.25C4.75736 2.25 3.75 3.25736 3.75 4.5C3.75 5.74264 4.75736 6.75 6 6.75Z" fill="white"/>
                            </svg>
                            <h7>    
                            ${vuelo.pais}
                            </h7>
                        </div>
                    </div>
                    <div class="card_precio">   
                        <h7>    
                            $${vuelo.precio}
                        </h7>
                    </div>
                </div>
            `;

            contenedorCards.appendChild(elementoRecu);
            checkFavs();
        });

        document.getElementById("sc1").style.overflow = 'auto';
        formFiltro.classList.remove("active")
        capa.classList.remove("active");
    });
}

// <----------------------- Buscador Explore ----------------------->

document.getElementById("buscador").addEventListener("input", (texto) => { 
    let textoBuscador = texto.target.value;
    textoBuscador = textoBuscador.charAt(0).toUpperCase() + textoBuscador.slice(1);
    let filtraData = vuelos.filter(vuelo => vuelo.destino.includes(textoBuscador) || vuelo.pais.includes(textoBuscador));

    btnSeeMore.style.display = 'none';

    document.querySelectorAll('.btn_filtro').forEach(btn => {
        btn.classList.remove('active');
    });

    contenedorCards.innerHTML = '';

    filtraData.forEach((vuelo) => {    
        let elementoRecu = document.createElement("div");
        elementoRecu.classList.add("card");
        elementoRecu.setAttribute('onclick', 'cargarGaleria(this)');
        indiceImagen = 0;

        for (let i = 0; i < vuelos.length; i++) {
            if (vuelos[i].destino === vuelo.destino) {
                indiceImagen = i;
                break;
            }
        }

        elementoRecu.style.backgroundImage = `url(${vuelos[indiceImagen].imagen})`;
        elementoRecu.innerHTML = `
        <div class="card_fav" onclick = "favsCard(this, event)">  
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0.985503C9.32877 -2.436 17.6507 3.55163 6 11.25C-5.6507 3.55163 2.67123 -2.436 6 0.985503Z" fill="#979797"/>
            </svg>
        </div>
        <div class="card_info"> 
            <div class="card_info_ubi"> 
                <h6>    
                ${vuelo.destino}
                </h6>
                <div class="card_info_ubi_dest">    
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.12433 6.70482C8.73131 7.50113 8.19934 8.29508 7.65432 9.00753C7.11099 9.71776 6.56582 10.3326 6.15576 10.7704C6.10127 10.8285 6.04924 10.8835 6 10.9351C5.95076 10.8835 5.89873 10.8285 5.84424 10.7704C5.43418 10.3326 4.88901 9.71776 4.34568 9.00753C3.80066 8.29508 3.26869 7.50113 2.87567 6.70482C2.4786 5.90031 2.25 5.14643 2.25 4.5C2.25 2.42893 3.92893 0.75 6 0.75C8.07107 0.75 9.75 2.42893 9.75 4.5C9.75 5.14643 9.5214 5.90031 9.12433 6.70482ZM6 12C6 12 10.5 7.73528 10.5 4.5C10.5 2.01472 8.48528 0 6 0C3.51472 0 1.5 2.01472 1.5 4.5C1.5 7.73528 6 12 6 12Z" fill="white"/>
                        <path d="M6 6C5.17157 6 4.5 5.32843 4.5 4.5C4.5 3.67157 5.17157 3 6 3C6.82843 3 7.5 3.67157 7.5 4.5C7.5 5.32843 6.82843 6 6 6ZM6 6.75C7.24264 6.75 8.25 5.74264 8.25 4.5C8.25 3.25736 7.24264 2.25 6 2.25C4.75736 2.25 3.75 3.25736 3.75 4.5C3.75 5.74264 4.75736 6.75 6 6.75Z" fill="white"/>
                    </svg>
                    <h7>    
                    ${vuelo.pais}
                    </h7>
                </div>
            </div>
            <div class="card_precio">   
                <h7>    
                    $${vuelo.precio}
                </h7>
            </div>
        </div>
      `;

      contenedorCards.appendChild(elementoRecu);
      checkFavs()
    });
})

/**
 * ! <--------------------- Carrusel de la galeria de c/card
 */

const carruselCard = document.getElementById('carrusel_card');
let guiaCarruselCard = document.querySelectorAll(".card_guia_slide");
let elementosCarrusel = document.querySelectorAll(".card_descripcion_carrousel_img");

carruselCard.addEventListener('scroll', () => { 
    let indiceSlideActual = Math.round(carruselCard.scrollLeft / carruselCard.offsetWidth);

    guiaCarruselCard.forEach((guia, i) => { 
        if(i === indiceSlideActual) {   
            guia.classList.add("active");
        } else {    
            guia.classList.remove("active");
        }
    });
});

function cargarInfoGaleria(card, destino) {  
    let pais = card.children[1].children[0].children[1].children[1].textContent.trim();
    let precio = card.children[1].children[1].children[0].textContent.trim();
    const btnVolverCardDescripcion = document.getElementById('btn_volver_card_descripcion');
    document.getElementById('card_descripcion').classList.add("active");
    document.getElementById('card_descripcion_destino').textContent = destino;
    document.getElementById('card_descripcion_pais').textContent = pais;
    document.getElementById('card_descripcion_precio').textContent = precio;

    for (let i = 0; i < vuelos.length; i++) {
        if(vuelos[i].destino == destino) {
            document.getElementById('card_descripcion_leyenda').textContent = vuelos[i].descripcion;
        }
    }

    let textoCompleto = false;
    let textoDescripcion = document.getElementById("card_descripcion_leyenda");
    let texto = textoDescripcion.textContent;
    textoDescripcion.textContent = textoDescripcion.textContent.slice(0, 150) + '...';

    textoDescripcion.addEventListener('click', () => {  
        if (textoCompleto === false) {
            textoDescripcion.textContent = texto;
            textoCompleto = true;
        } else {
            textoDescripcion.textContent = textoDescripcion.textContent.slice(0, 150) + '...';
            textoCompleto = false;
        }
    });

    /** 
     * Cargar actividades y restoCafe's
     */
    let itemsActividades = document.querySelectorAll(".item_actividad");
    let itemsRestoCafe = document.querySelectorAll(".item_restoCafe");
    let i = 0;
    let j = 0;

    itemsActividades.forEach(item => {
        while (actPopulares[i].destino != destino) {
            if (actPopulares[i].destino == destino) {
                break;
            }
            i++;
        }
        item.children[1].textContent = actPopulares[i].actividades[j];
        j++;
    });

    i = 0;
    j = 0;

    itemsRestoCafe.forEach(item => {
        while (actPopulares[i].destino != destino) {
            if (actPopulares[i].destino == destino) {
                break;
            }
            i++;
        }
        item.children[1].textContent = actPopulares[i].restoCafe[j];
        j++;
    });

    btnVolverCardDescripcion.addEventListener('click', () => {  
        document.getElementById('card_descripcion').classList.remove("active");
        document.getElementById("fav").classList.remove("active");
    });

    const vecFavs = JSON.parse(localStorage.getItem('favoritos'));
    for (let i = 0; i < vecFavs.length; i++) {
        if(vecFavs[i].destino === destino) {    
            document.getElementById("fav").classList.add("active");
        }
    } 
}

/**
 * ! <--------------------- Carga la galeria con el destino de la card
*/

elementosCarrusel = Array.from(document.querySelectorAll(".card_descripcion_carrousel_img"));
function cargarGaleria(card) {
    let destino = card.children[1].children[0].children[0].textContent.trim();

    cargarInfoGaleria(card, destino);

    const url = `https://api.unsplash.com/search/photos?page=1&query=${destino}&client_id=${accessKey}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const fotos = data.results;

            elementosCarrusel.forEach((elemento, i) => {
                elemento.style.backgroundImage = `url(${fotos[i].urls.regular})`;;
            });
        })
        .catch(error => {
            console.error('Error al obtener las fotos:', error);
        });  
}

/** 
 * ! <----------------> Favoritos <---------------->
 */

function checkFavs() {  
    const vecLocalFavs = JSON.parse(localStorage.getItem('favoritos'));

    if(vecLocalFavs) {   
        let btnsFav = document.querySelectorAll(".card_fav");
        
        btnsFav.forEach(card => {   
            let elementoPadre = card.parentElement;
            let destinoCard =  elementoPadre.children[1].children[0].children[0].textContent.trim();

            vecLocalFavs.forEach(fav => {    
                if(fav.destino === destinoCard) {   
                    card.classList.add("active");
                }
            });
        });
    }
}

document.addEventListener('load', checkFavs());

function favsCard(btnFavs, event) {  

    /**
         * ! event es el evento de la card que contiene a btnFavs, para que no abra la galeria
    */

    event.stopPropagation();
    let card = btnFavs.parentElement;
    const destino = card.children[1].children[0].children[0].textContent.trim();
    const pais = card.children[1].children[0].children[1].children[1].textContent.trim();
    const precio = card.children[1].children[1].children[0].textContent.trim();

    let vecFavs = [];
    if(localStorage.getItem('favoritos') === null) { 
        vecFavs.push({destino, pais, precio});
        localStorage.setItem('favoritos', JSON.stringify(vecFavs));

        mensaje = '¡trip added to favorites!';
        notificacionPopUp(mensaje, true);
    }
    else {
        let elementoRepetido = false;  
        vecFavs = JSON.parse(localStorage.getItem('favoritos'));
        
        for (let i = 0; i < vecFavs.length; i++) {
            if(vecFavs[i].destino === destino) {    
                
                // Cuando se toca de nuevo un elemento agregado a favoritos, este se elimina de dicha seccion

                let btnsFav = document.querySelectorAll(".card_fav");
        
                btnsFav.forEach(card => {   
                    let elementoPadre = card.parentElement;
                    let destinoCard =  elementoPadre.children[1].children[0].children[0].textContent.trim();

                    vecFavs.forEach(fav => {    
                        if(fav.destino === destinoCard) {   
                            card.classList.remove("active");
                        }
                    });
                });

                vecFavs.splice(i, 1);



                localStorage.setItem('favoritos', JSON.stringify(vecFavs));
                elementoRepetido = true;
                
                mensaje = '¡It was removed from your favorites!';
                notificacionPopUp(mensaje, false);

                break;
            }
        }

        if(elementoRepetido === false) { 
            vecFavs.push({destino, pais, precio});
            localStorage.setItem('favoritos', JSON.stringify(vecFavs));


            mensaje = '¡trip added to favorites!';
            notificacionPopUp(mensaje, true);
        }
    }
    checkFavs(vecFavs);
    crearCardsFavs();
}

function crearCardsFavs() {
    let vecLocalFavs = JSON.parse(localStorage.getItem("favoritos"));  
    const contenedorFavs = document.getElementById("contenedor_cards_favoritos");
    
    contenedorFavs.innerHTML = '';

    vecLocalFavs.forEach((fav) => {  
        let cardFav = document.createElement("div");
        cardFav.classList.add("card");
        cardFav.setAttribute('onclick', 'cargarGaleria(this)');
        indiceImagen = 0;

        for (let i = 0; i < vuelos.length; i++) {
            if (vuelos[i].destino === fav.destino) {
                indiceImagen = i;
                break;
            }
        }

        cardFav.style.backgroundImage = `url(${vuelos[indiceImagen].imagen})`;
        cardFav.innerHTML = `
        <div class="card_fav" onclick = "favsCard(this, event)">  
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0.985503C9.32877 -2.436 17.6507 3.55163 6 11.25C-5.6507 3.55163 2.67123 -2.436 6 0.985503Z" fill="#979797"/>
            </svg>
        </div>
        <div class="card_info"> 
            <div class="card_info_ubi"> 
                <h6>    
                ${fav.destino}
                </h6>
                <div class="card_info_ubi_dest">    
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.12433 6.70482C8.73131 7.50113 8.19934 8.29508 7.65432 9.00753C7.11099 9.71776 6.56582 10.3326 6.15576 10.7704C6.10127 10.8285 6.04924 10.8835 6 10.9351C5.95076 10.8835 5.89873 10.8285 5.84424 10.7704C5.43418 10.3326 4.88901 9.71776 4.34568 9.00753C3.80066 8.29508 3.26869 7.50113 2.87567 6.70482C2.4786 5.90031 2.25 5.14643 2.25 4.5C2.25 2.42893 3.92893 0.75 6 0.75C8.07107 0.75 9.75 2.42893 9.75 4.5C9.75 5.14643 9.5214 5.90031 9.12433 6.70482ZM6 12C6 12 10.5 7.73528 10.5 4.5C10.5 2.01472 8.48528 0 6 0C3.51472 0 1.5 2.01472 1.5 4.5C1.5 7.73528 6 12 6 12Z" fill="white"/>
                        <path d="M6 6C5.17157 6 4.5 5.32843 4.5 4.5C4.5 3.67157 5.17157 3 6 3C6.82843 3 7.5 3.67157 7.5 4.5C7.5 5.32843 6.82843 6 6 6ZM6 6.75C7.24264 6.75 8.25 5.74264 8.25 4.5C8.25 3.25736 7.24264 2.25 6 2.25C4.75736 2.25 3.75 3.25736 3.75 4.5C3.75 5.74264 4.75736 6.75 6 6.75Z" fill="white"/>
                    </svg>
                    <h7>    
                    ${fav.pais}
                    </h7>
                </div>
            </div>
            <div class="card_precio">   
                <h7>    
                    ${fav.precio}
                </h7>
            </div>
        </div>
      `;

      contenedorFavs.appendChild(cardFav);
      checkFavs()
    });
}

window.addEventListener("load", () => {    
    const vecLocalFavs = JSON.parse(localStorage.getItem('favoritos'));
    document.getElementById("contenedor_cards_favoritos").innerHTML = '';

    crearCardsFavs(vecLocalFavs);
})

// <-------------------------> Buscador Favs <------------------------->  

document.getElementById("buscador_favoritos").addEventListener("input", (texto) => { 
    let textoBuscador = texto.target.value;
    textoBuscador = textoBuscador.charAt(0).toUpperCase() + textoBuscador.slice(1);
    const vecLocalFavs = JSON.parse(localStorage.getItem('favoritos'));
    let filtraData = vecLocalFavs.filter(fav => fav.destino.includes(textoBuscador) || fav.pais.includes(textoBuscador));

    const contenedorFavs = document.getElementById("contenedor_cards_favoritos");
    
    contenedorFavs.innerHTML = '';

    filtraData.forEach((fav) => {    
        let elementoRecu = document.createElement("div");
        elementoRecu.classList.add("card");
        elementoRecu.setAttribute('onclick', 'cargarGaleria(this)');
        indiceImagen = 0;

        for (let i = 0; i < vuelos.length; i++) {
            if (vuelos[i].destino === fav.destino) {
                indiceImagen = i;
                break;
            }
        }

        elementoRecu.style.backgroundImage = `url(${vuelos[indiceImagen].imagen})`;
        elementoRecu.innerHTML = `
        <div class="card_fav" onclick = "favsCard(this, event)">  
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0.985503C9.32877 -2.436 17.6507 3.55163 6 11.25C-5.6507 3.55163 2.67123 -2.436 6 0.985503Z" fill="#979797"/>
            </svg>
        </div>
        <div class="card_info"> 
            <div class="card_info_ubi"> 
                <h6>    
                ${fav.destino}
                </h6>
                <div class="card_info_ubi_dest">    
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.12433 6.70482C8.73131 7.50113 8.19934 8.29508 7.65432 9.00753C7.11099 9.71776 6.56582 10.3326 6.15576 10.7704C6.10127 10.8285 6.04924 10.8835 6 10.9351C5.95076 10.8835 5.89873 10.8285 5.84424 10.7704C5.43418 10.3326 4.88901 9.71776 4.34568 9.00753C3.80066 8.29508 3.26869 7.50113 2.87567 6.70482C2.4786 5.90031 2.25 5.14643 2.25 4.5C2.25 2.42893 3.92893 0.75 6 0.75C8.07107 0.75 9.75 2.42893 9.75 4.5C9.75 5.14643 9.5214 5.90031 9.12433 6.70482ZM6 12C6 12 10.5 7.73528 10.5 4.5C10.5 2.01472 8.48528 0 6 0C3.51472 0 1.5 2.01472 1.5 4.5C1.5 7.73528 6 12 6 12Z" fill="white"/>
                        <path d="M6 6C5.17157 6 4.5 5.32843 4.5 4.5C4.5 3.67157 5.17157 3 6 3C6.82843 3 7.5 3.67157 7.5 4.5C7.5 5.32843 6.82843 6 6 6ZM6 6.75C7.24264 6.75 8.25 5.74264 8.25 4.5C8.25 3.25736 7.24264 2.25 6 2.25C4.75736 2.25 3.75 3.25736 3.75 4.5C3.75 5.74264 4.75736 6.75 6 6.75Z" fill="white"/>
                    </svg>
                    <h7>    
                    ${fav.pais}
                    </h7>
                </div>
            </div>
            <div class="card_precio">   
                <h7>    
                    $${fav.precio}
                </h7>
            </div>
        </div>
      `;

      contenedorFavs.appendChild(elementoRecu);
      checkFavs()
    });
})
