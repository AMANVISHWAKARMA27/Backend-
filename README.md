npm init
install mongoose

make file names models and make different models and export them
eg:

-----------------------------------------------------

import mogosse from "mongooe"

const userSchema = new mongoose.Schema({})

export const USer = momgoose.model("User", userSchema);

-----------------------------------------------------
The above code remains same in all models

In models folder, we create different database schemas.

In each models, the name of model gets converted into plural in database. For exampple, if we have a model named 'User', it gets converted into 'Users'.

//Refer mongoose docs
