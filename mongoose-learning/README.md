//The queries

db.test.find({ gender: "Male" }, { name: 1, gender: 1, phone: 1 }) //find entries with gender male and have only name, gender and phone filed there.

db.test.find({ gender: "Male" }).project({name: 1,gender: 1,email: 1}); //Project will also do the same work but it only works with find.

db.test.findOne({gender: {$eq: "Male"}}); //Showing only one result where gender = male.

db.test.find({gender: {$eq: "Male"}});

db.test.find({age: {$eq: 12}}); //Showing result where age = 12

db.test.find({age: {$ne: 12}}); //Showing result where age != 12

db.test.find({age:{$gt : 30}}) //Showing result where age > 12

db.test.find({ age: { $gte: 40 },gender:"Male" }).sort({ age: 1,gender:1 })

db.test.find({ age: { $lte: 40 },gender:"Male" }).sort({ age: 1,gender:1 })

db.test.find({ gender: "Female", age: { $gt: 18, $lt: 30 } }, { age: 1, gender: 1 }).sort({ age: 1 })
//implicit and

db.test.find({ gender: "Female", age: { $in: [18, 20, 22, 24, 26] } },
{ age: 1, gender: 1 }).sort({age : 1})
//gives values that matches any of the values of the array.

db.test.find(
{ gender: "Female", age: { $nin: [18, 20, 22, 24, 26] } },
{ age: 1, gender: 1 }).sort({ age: 1 })
//the returned value will not include the array elements.

db.test.find(
{
gender: "Female", age: { $nin: [18, 20, 22, 24, 26] },
interests: { $in: ["Cooking", "Gaming"] }
},
{ age: 1, gender: 1, interests: 1 }).sort({ age: 1 })
//returns the value that has cooking or gaming interests or both of them.

db.test.find({ age: { $ne: 15, $le: 30 } })
implicit and

db.test.find({
    $and: [
        { gender: "Female" },
        { age: { $ne: 15 } },
        { age: { $lte: 30 } }
    ]
}).project({
    age: 1,
    gender: 1
}).sort({
    age: 1
})
//Explicit and, every condition has to be true.

db.test.find({
    $or: [
        {interests: "Traveling"},
        {interests: "Cooking"},
    ]
}).project({
    interests: 1
}).sort({
    age: 1
})
//Explicit or. Any true condition will give result.

db.test.find({
    $or: [
        {"skills.name" : "JAVASCRIPT"},
        {"skills.name" : "PYTHON"},
    ]
}).project({
    "skills": 1
}).sort({
    age: 1
})
//Explicit or. Any true condition will give result.

db.test.find({ "skills.name": { $in: ["JAVASCRIPT","PYTHON"] }}).project({
    "skills": 1
}).sort({
    age: 1
})
//Explicit or

db.test.find({age:{$exists:true}})
//It will return true if the document has the field that we are searching with. 

db.test.find({age:{$type:"string"}})
db.test.find({friends:{$type:"array"}})
//checks if any field age has the type string.
//checks if any field named friends has the type array.

db.test.find({friends : {$size:4}}).project({friends:1})
//shows those array with length 4

db.test.find({company : {$type:"null"}}).project({company:1})

db.test.find({interests:"Cooking"}).project({interests:1})
db.test.find({"interests.2":"Cooking"}).project({interests:1})
//gives those results that has cooking at the 2nd position in the array.

db.test.find({interests:["Cooking","Writing","Reading"]}).project({interests:1})
//Here we have to maintain the order of the array to find the result.

db.test.find({interests:{$all:["Cooking","Writing","Reading"]}}).project({interests:1})
//gives all the results regardless of the order of the array.

db.test.find({"skills.name":"JAVASCRIPT"}).project({skills:1})
db.test.find({skills:{
    name:"JAVASCRIPT",
    level:"Intermidiate",
    learning: false
}}).project({skills:1})
//this also matches exactly like array.

db.test.find({
    skills:{$eleMatch:{
        name: "JAVASCRIPT",
        level: "Intermidiate"
    }}
}).project({skills:1})
//this doesn't have to match exactly.


