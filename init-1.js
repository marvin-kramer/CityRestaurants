db = db.getSiblingDB("cityRestaurantsDB");

db.createCollection("cities");
db.createCollection("restaurants");

db.cities.insertMany([
  {
    "name": "Paris",
    "country": "Frankreich",
    "postal_code": "75000",
    "restaurants": [
      { "$ref": "restaurants", "$id": "le_jules_verne_id" },
      { "$ref": "restaurants", "$id": "l_astrance_id" }
    ]
  },
  {
    "name": "Tokio",
    "country": "Japan",
    "postal_code": "100-0001",
    "restaurants": [
      { "$ref": "restaurants", "$id": "sukiyabashi_jiro_id" },
      { "$ref": "restaurants", "$id": "narisawa_id" }
    ]
  },
  {
    "name": "New York City",
    "country": "USA",
    "postal_code": "10001",
    "restaurants": [
      { "$ref": "restaurants", "$id": "le_bernardin_id" },
      { "$ref": "restaurants", "$id": "eleven_madison_park_id" }
    ]
  },
  {
    "name": "London",
    "country": "Großbritannien",
    "postal_code": "SW1A 1AA",
    "restaurants": [
      { "$ref": "restaurants", "$id": "gordon_ramsay_id" },
      { "$ref": "restaurants", "$id": "the_ledbury_id" }
    ]
  },
  {
    "name": "Bangkok",
    "country": "Thailand",
    "postal_code": "10100",
    "restaurants": [
      { "$ref": "restaurants", "$id": "gaggan_id" },
      { "$ref": "restaurants", "$id": "nahm_id" }
    ]
  },
  {
    "name": "Barcelona",
    "country": "Spanien",
    "postal_code": "08001",
    "restaurants": [
      { "$ref": "restaurants", "$id": "tickets_id" },
      { "$ref": "restaurants", "$id": "el_celler_de_can_roca_id" }
    ]
  },
  {
    "name": "Rom",
    "country": "Italien",
    "postal_code": "00100",
    "restaurants": [
      { "$ref": "restaurants", "$id": "la_pergola_id" },
      { "$ref": "restaurants", "$id": "roscioli_id" }
    ]
  },
  {
    "name": "Sydney",
    "country": "Australien",
    "postal_code": "2000",
    "restaurants": [
      { "$ref": "restaurants", "$id": "quay_id" },
      { "$ref": "restaurants", "$id": "tetsuyas_id" }
    ]
  },
  {
    "name": "Singapur",
    "country": "Singapur",
    "postal_code": "018956",
    "restaurants": [
      { "$ref": "restaurants", "$id": "odette_id" },
      { "$ref": "restaurants", "$id": "burnt_ends_id" }
    ]
  },
  {
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
      "cuisine": "Traditionelle französische Küche mit modernem Touch"
  },
  {
    "_id": "l_astrance_id",
    "name": "L'Astrance",
    "address": "4 Rue Beethoven, Paris",
    "cuisine": "Kreative, moderne französische Küche"
  },
  {
    "_id": "sukiyabashi_jiro_id",
    "name": "Sukiyabashi Jiro",
    "address": "4-2-15 Ginza, Chuo, Tokio",
    "cuisine": "Sushi"
  },
  {
    "_id": "narisawa_id",
    "name": "Narisawa",
    "address": "Minami Ayoyama, Minato, Tokio",
    "cuisine": "Innovative japanische Küche"
  },

  {
    "_id": "le_bernardin_id",
    "name": "Le Bernardin",
    "address": "155 W 51st St, New York",
    "cuisine": "Meeresfrüchte"
  },
  {
    "_id": "eleven_madison_park_id",
    "name": "Eleven Madison Park",
    "address": "11 Madison Ave, New York",
    "cuisine": "Moderne amerikanische Küche"
  },
  {
    "_id": "gordon_ramsay_id",
    "name": "Gordon Ramsay",
    "address": "68 Royal Hospital Rd, London",
    "cuisine": "Raffinierte britische Küche"
  },
  {
    "_id": "the_ledbury_id",
    "name": "The Ledbury",
    "address": "127 Ledbury Rd, London",
    "cuisine": "Moderne europäische Küche"
  },
  {
    "_id": "gaggan_id",
    "name": "Gaggan",
    "address": "68/1 Soi Langsuan, Ploenchit Road, Lumpini, Bangkok",
    "cuisine": "Kreative indisch inspirierte Küche"
  },
  {
    "_id": "nahm_id",
    "name": "Nahm",
    "address": "27 S Sathorn Rd, Bangkok",
    "cuisine": "Traditionelle thailändische Gerichte"
  },
  {
    "_id": "tickets_id",
    "name": "Tickets",
    "address": "Avinguda del Parallel 164, Barcelona",
    "cuisine": "Tapas"
  },
  {
    "_id": "el_celler_de_can_roca_id",
    "name": "El Celler de Can Roca",
    "address": "Can Sunyer, 48, Girona (nahe Barcelona)",
    "cuisine": "Kreative katalanische Küche"
  },
  {
    "_id": "la_pergola_id",
    "name": "La Pergola",
    "address": "Via Alberto Cadlolo 101, Rom",
    "cuisine": "Hochklassige italienische und mediterrane Küche"
  },
  {
    "_id": "roscioli_id",
    "name": "Roscioli",
    "address": "Via dei Giubbonari 21/22, Rom",
    "cuisine": "Traditionelle römische Küche"
  },
  {
    "_id": "quay_id",
    "name": "Quay",
    "address": "Overseas Passenger Terminal, The Rocks, Sydney",
    "cuisine": "Moderne australische Küche"
  },
  {
    "_id": "tetsuyas_id",
    "name": "Tetsuya's",
    "address": "529 Kent St, Sydney",
    "cuisine": "Kombination aus japanischer und französischer Küche"
  },
  {
    "_id": "odette_id",
    "name": "Odette",
    "address": "1 St. Andrew's Road, Singapur",
    "cuisine": "Französische Haute Cuisine"
  },
  {
    "_id": "burnt_ends_id",
    "name": "Burnt Ends",
    "address": "20 Teck Lim Rd, Singapur",
    "cuisine": "Grillgerichte"
  },
  {
    "_id": "lung_king_heen_id",
    "name": "Lung King Heen",
    "address": "8 Finance St, Central, Hongkong",
    "cuisine": "Exquisite kantonesische Küche"
  },
  {
    "_id": "amber_id",
    "name": "Amber",
    "address": "15 Queen's Road Central, Hongkong",
    "cuisine": "Modern europäische Küche mit asiatischem Einfluss"
  }
])
