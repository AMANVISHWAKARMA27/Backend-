npm init
install mongoose

make file names models and make different models and export them
eg:

---

import mogosse from "mongooe"

const userSchema = new mongoose.Schema({})

export const USer = momgoose.model("User", userSchema);

---

The above code remains same in all models

In models folder, we create different database schemas.

In each models, the name of model gets converted into plural in database. For exampple, if we have a model named 'User', it gets converted into 'Users'.

//Refer mongoose docs

---

On some website, make a detailed architechture of the project you are going to make. Basically this architecture consists of the database models, style and all the data to be taken and stored.

npm init

Now initialise git repo for the project.

Usullly we use third party tools like cloudinary or aws to store images. We just upload the images on cloudinary.

## folder names:

public
temp
.gitkeep file
.gitignore file ( use gitignore generators)
.env file(environmental variables file)

src
app.js, constants.js, index.js

Add "type" : "module" below description

install nodemon (it restarts the server automatically after every change) (npm i -D nodemon)

controllers
db
middlewares
models
routes
utils

setup database
define .env variables
connect to db using mongoose
