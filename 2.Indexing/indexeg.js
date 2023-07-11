db.student.creatIndex({regno:1},{name:"index on regno"})

db.student.getIndexes()

db.student.creatIndex({regno:-1})

db.student.getIndexes()

db.student.dropIndex("regno_1")

db.student.creatIndex({regno:1},{name:"myname"})

db.student.getIndexes()

db.student.creatIndex({name:1})

db.student.getIndexes()

db.student.dropIndex("name_1")

db.student.getIndexs()

//compound
db.student.creatIndex({regno:1,name:1})

