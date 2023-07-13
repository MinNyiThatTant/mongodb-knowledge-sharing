db.employee.aggregate({$match:{address:"kyaukse"}})

db.employee.aggregate({$match:{name:{$eq:"mandalay"}}})

db.employee.aggregate({$match:{$and:[{salary:{$eq:300000}},{name:{$eq:"koko"}}]}})

db.employee.aggregate({$project:{name:1, salary:1,_id:0}})

db.employee.aggregate({$project:{address:1,_id:0}})

//match and project
db.employee.aggregate({$match:{salary:{$gt:10000}}},
                      {$project:{name:1,salary:1}}
    )


//projection
db.employee.find({},{address:1,salary:1})


// {$group: {_id:<expression>, expression <field1>:{<accumulator1>:<expression1>}, ... }}

// Accumulator Operator 
$avg
$first
$last
$max
$min
$sum


db.employee.aggregate({$group:{_id:"$address", total_salary:{$sum:"$salary"}}})

//$limit
db.employee.aggregate({$limit: 2}, {$out: "firstlimit"})
//$skip

// $out <= copy collection
db.employee.aggregate({$out:"employee1"})

// $match, $group, $out
db.employee.aggregate({$match:{address:"mandalay"}},
                    {$group:{_id:"$address", total_count:{$sum:1}}}                      
                    {$out:"next_employee"}
)

db.next_employee.find()

db.employee.aggregate(
                    {$match:{address:"kyaukse"}},
                    {$count:"total_count"},
                    {$out:"another_employee"}
)

