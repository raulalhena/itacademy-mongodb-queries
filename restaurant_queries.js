db.restaurantes.find().pretty();
db.restaurantes.find({}, {restaurant_id: true, name: true, borough: true, cuisine: true}).pretty();
db.restaurantes.find({}, {_id: false, restaurant_id: true, name: true, borough: true, cuisine: true}).pretty();
db.restaurantes.find({}, {_id: false, restaurant_id: true, name: true, borough: true, address: {zipcode: true}}).pretty();
db.restaurantes.find({borough: "Bronx"}).pretty();
db.restaurantes.find({borough: "Bronx"}).limit(5).pretty();
db.restaurantes.find({borough: "Bronx"}).limit(5).skip(5).pretty();
db.restaurantes.find({"grades.score": {$gt: 90}}).pretty();
db.restaurantes.find({"grades.score": {$gt: 80, $lt: 100}}).pretty();
db.restaurantes.find({"address.coord.0": {$lt: -95.754168 }}).pretty();
db.restaurantes.find({"grades.score": {$gt: 70}, "address.coord.0": {$lt: -65.754168}, cuisine: {$ne: "American "}}).pretty()
db.restaurantes.find({"grades.score": {$gt: 70}, "address.coord.0": {$lt: -65.754168}, cuisine: {$not: /American*/}}).pretty()
db.restaurantes.find({cuisine: {$not: /American*/}, borough: {$ne: "Brooklyn"}, "grades.grade": "A" }).sort({cuisine: -1}).pretty()
db.restaurantes.find({name: {$regex: /^Will/}}, {_id: false, restaurant_id: true, name: true, borough: true, cuisine: true}).pretty();
db.restaurantes.find({name: {$regex: /ces$/}}, {_id: false, restaurant_id: true, name: true, borough: true, cuisine: true}).pretty();
db.restaurantes.find({name: {$regex: /Reg/}}, {_id: false, restaurant_id: true, name: true, borough: true, cuisine: true}).pretty();
db.restaurantes.find({borough: "Bronx", $or: [{cuisine: {$regex: /American*/}}, {cuisine: "Chinese"}]}).pretty();
db.restaurantes.find({$or: [{borough: "Staten Island"}, {borough: "Queens"}, {borough: "Bronx"}, {borough: "Brooklyn"}]}, {_id: false, restaurant_id: true, name: true, borough: true, cuisine: true}).pretty();
db.restaurantes.find({$nor: [{borough: "Staten Island"}, {borough: "Queens"}, {borough: "Bronx"}, {borough: "Brooklyn"}]}, {_id: false, restaurant_id: true, name: true, borough: true, cuisine: true}).pretty();
db.restaurantes.find({"grades.score": {$lte: 10}}, {_id: false, restaurant_id: true, name: true, borough: true, cuisine: true}).pretty();
db.restaurantes.find({$nor: [ {cuisine: {$regex: /American*/}}, {cuisine: "Chinese"}, {name: {$regex: /^Will/}} ]}, {_id: false, restaurant_id: true, name: true, borough: true, cuisine: true}).pretty();
db.restaurantes.find({"grades.score": 11, "grades.grade": "A", "grades.date": ISODate("2014-08-11T00:00:00Z")}, {restaurant_id: true, name: true, grades: true}).pretty();
db.restaurantes.find({"grades.1.score": 9, "grades.1.grade": "A", "grades.date": ISODate("2014-08-11T00:00:00Z")}, {restaurant_id: true, name: true, grades: true}).pretty();
db.restaurantes.find({"address.coord.1": {$gt: 42, $lt: 52}}, {_id: false, restaurant_id: true, name: true, "address.street": true, "address.coord": true}).pretty();
db.restaurantes.find().sort({name: 1}).pretty();
db.restaurantes.find().sort({name: -1}).pretty();
db.restaurantes.find().sort({cuisine: 1, borough: -1}).pretty();
db.restaurantes.find({$or: [{"address.street": {$exists: true}}, {"address.street":{$exists: false}}]}).pretty();
db.restaurantes.find({"address.coord": {$type: 1}}).pretty();
db.restaurantes.find({"grades.score": {$mod: [7,0]}}, {restaurant_id: true, name: true, grades: true}).pretty();
db.restaurantes.find({name: {$regex: /mon/}}, {restaurant_id: true, name: true, borough: true, "address.coord": true, cuisine: true}).pretty();
db.restaurantes.find({name: {$regex: /^Mad/}}, {restaurant_id: true, name: true, borough: true, "address.coord": true, cuisine: true}).pretty();
