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