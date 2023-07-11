mongoimport c: \data\movies.json - d bookdb - c books
// add json file 

db.collection.getIndexes()
db.books.getIndexes()

db.books.find({
    title: "Unlocking Android"
})


db.books.createIndex({ title: 1 })

db.books.getIndexes()

db.books.find({
    title: "Unlocking Android"
})




