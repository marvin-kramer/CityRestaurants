db = db.getSiblingDB("cityRestaurantsDB");

db.createCollection("cities");
db.createCollection("restaurants");

db.cities.insertMany([
  {
    "_id": "paris_id",
    "name": "Paris",
    "country": "Frankreich",
    "postal_code": "75000",
    "restaurants": [
      { "$ref": "restaurants", "$id": "le_jules_verne_id" },
      { "$ref": "restaurants", "$id": "l_astrance_id" }
    ]
  },
  {
    "_id": "tokio_id",
    "name": "Tokio",
    "country": "Japan",
    "postal_code": "100-0001",
    "restaurants": [
      { "$ref": "restaurants", "$id": "sukiyabashi_jiro_id" },
      { "$ref": "restaurants", "$id": "narisawa_id" }
    ]
  },
  {
    "_id": "new_york_id",
    "name": "New York City",
    "country": "USA",
    "postal_code": "10001",
    "restaurants": [
      { "$ref": "restaurants", "$id": "le_bernardin_id" },
      { "$ref": "restaurants", "$id": "eleven_madison_park_id" }
    ]
  },
  {
    "_id": "london_id",
    "name": "London",
    "country": "Großbritannien",
    "postal_code": "SW1A 1AA",
    "restaurants": [
      { "$ref": "restaurants", "$id": "gordon_ramsay_id" },
      { "$ref": "restaurants", "$id": "the_ledbury_id" }
    ]
  },
  {
    "_id": "bangkok_id",
    "name": "Bangkok",
    "country": "Thailand",
    "postal_code": "10100",
    "restaurants": [
      { "$ref": "restaurants", "$id": "gaggan_id" },
      { "$ref": "restaurants", "$id": "nahm_id" }
    ]
  },
  {
    "_id": "barcelona_id",
    "name": "Barcelona",
    "country": "Spanien",
    "postal_code": "08001",
    "restaurants": [
      { "$ref": "restaurants", "$id": "tickets_id" },
      { "$ref": "restaurants", "$id": "el_celler_de_can_roca_id" }
    ]
  },
  {
    "_id": "rom_id",
    "name": "Rom",
    "country": "Italien",
    "postal_code": "00100",
    "restaurants": [
      { "$ref": "restaurants", "$id": "la_pergola_id" },
      { "$ref": "restaurants", "$id": "roscioli_id" }
    ]
  },
  {
    "_id": "sydney_id",
    "name": "Sydney",
    "country": "Australien",
    "postal_code": "2000",
    "restaurants": [
      { "$ref": "restaurants", "$id": "quay_id" },
      { "$ref": "restaurants", "$id": "tetsuyas_id" }
    ]
  },
  {
    "_id": "singapur_id",
    "name": "Singapur",
    "country": "Singapur",
    "postal_code": "018956",
    "restaurants": [
      { "$ref": "restaurants", "$id": "odette_id" },
      { "$ref": "restaurants", "$id": "burnt_ends_id" }
    ]
  },
  {
    "_id": "hongkong_id",
    "name": "Hongkong",
    "country": "Hongkong",
    "postal_code": "999077",
    "restaurants": [
      { "$ref": "restaurants", "$id": "lung_king_heen_id" },
      { "$ref": "restaurants", "$id": "amber_id" }
    ]
  }
])

db.restaurants.insertMany([
    {
      "_id": "le_jules_verne_id",
      "name": "Le Jules Verne",
      "address": "Eiffelturm, Avenue Gustave Eiffel, Paris",
      "cuisine": "Traditionelle französische Küche mit modernem Touch",
      "city_id": "paris_id"
  },
  {
    "_id": "l_astrance_id",
    "name": "L'Astrance",
    "address": "4 Rue Beethoven, Paris",
    "cuisine": "Kreative, moderne französische Küche",
    "city_id": "paris_id"
  },
  {
    "_id": "sukiyabashi_jiro_id",
    "name": "Sukiyabashi Jiro",
    "address": "4-2-15 Ginza, Chuo, Tokio",
    "cuisine": "Sushi",
    "city_id": "tokio_id"
  },
  {
    "_id": "narisawa_id",
    "name": "Narisawa",
    "address": "Minami Ayoyama, Minato, Tokio",
    "cuisine": "Innovative japanische Küche",
    "city_id": "tokio_id"
  },
  {
    "_id": "le_bernardin_id",
    "name": "Le Bernardin",
    "address": "155 W 51st St, New York",
    "cuisine": "Meeresfrüchte",
    "city_id": "new_york_id"
  },
  {
    "_id": "eleven_madison_park_id",
    "name": "Eleven Madison Park",
    "address": "11 Madison Ave, New York",
    "cuisine": "Moderne amerikanische Küche",
    "city_id": "new_york_id"
  },
  {
    "_id": "gordon_ramsay_id",
    "name": "Gordon Ramsay",
    "address": "68 Royal Hospital Rd, London",
    "cuisine": "Raffinierte britische Küche",
    "city_id": "london_id"
  },
  {
    "_id": "the_ledbury_id",
    "name": "The Ledbury",
    "address": "127 Ledbury Rd, London",
    "cuisine": "Moderne europäische Küche",
    "city_id": "london_id"
  },
  {
    "_id": "gaggan_id",
    "name": "Gaggan",
    "address": "68/1 Soi Langsuan, Ploenchit Road, Lumpini, Bangkok",
    "cuisine": "Kreative indisch inspirierte Küche",
    "city_id": "bangkok_id"
  },
  {
    "_id": "nahm_id",
    "name": "Nahm",
    "address": "27 S Sathorn Rd, Bangkok",
    "cuisine": "Traditionelle thailändische Gerichte",
    "city_id": "bangkok_id"
  },
  {
    "_id": "tickets_id",
    "name": "Tickets",
    "address": "Avinguda del Parallel 164, Barcelona",
    "cuisine": "Tapas",
    "city_id": "barcelona_id"
  },
  {
    "_id": "el_celler_de_can_roca_id",
    "name": "El Celler de Can Roca",
    "address": "Can Sunyer, 48, Girona (nahe Barcelona)",
    "cuisine": "Kreative katalanische Küche",
    "city_id": "barcelona_id"
  },
  {
    "_id": "la_pergola_id",
    "name": "La Pergola",
    "address": "Via Alberto Cadlolo 101, Rom",
    "cuisine": "Hochklassige italienische und mediterrane Küche",
    "city_id": "rom_id"
  },
  {
    "_id": "roscioli_id",
    "name": "Roscioli",
    "address": "Via dei Giubbonari 21/22, Rom",
    "cuisine": "Traditionelle römische Küche",
    "city_id": "rom_id"
  },
  {
    "_id": "quay_id",
    "name": "Quay",
    "address": "Overseas Passenger Terminal, The Rocks, Sydney",
    "cuisine": "Moderne australische Küche",
    "city_id": "sydney_id"
  },
  {
    "_id": "tetsuyas_id",
    "name": "Tetsuya's",
    "address": "529 Kent St, Sydney",
    "cuisine": "Kombination aus japanischer und französischer Küche",
    "city_id": "sydney_id"
  },
  {
    "_id": "odette_id",
    "name": "Odette",
    "address": "1 St. Andrew's Road, Singapur",
    "cuisine": "Französische Haute Cuisine",
    "city_id": "singapur_id"
  },
  {
    "_id": "burnt_ends_id",
    "name": "Burnt Ends",
    "address": "20 Teck Lim Rd, Singapur",
    "cuisine": "Grillgerichte",
    "city_id": "singapur_id"
  },
  {
    "_id": "lung_king_heen_id",
    "name": "Lung King Heen",
    "address": "8 Finance St, Central, Hongkong",
    "cuisine": "Exquisite kantonesische Küche",
    "city_id": "hongkong_id"
  },
  {
    "_id": "amber_id",
    "name": "Amber",
    "address": "15 Queen's Road Central, Hongkong",
    "cuisine": "Modern europäische Küche mit asiatischem Einfluss",
    "city_id": "hongkong_id"
  }
])
