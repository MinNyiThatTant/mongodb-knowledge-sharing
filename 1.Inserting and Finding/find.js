// find 


db.student.find({age:{$gt:23}})

db.student.find({age: {$ne:25}})

db.student.find({name: "/ko/"})

db.student.find({name:'win', age: 23})

db.student.find({$or: [ {name: 'win'}, { age: 21} ]})

db.student.find({age: {$gt: 19, $lt: 30}})





