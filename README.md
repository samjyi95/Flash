# Auth Boiler plate

This project application is called "Flash", you can think of it as "Instagram" with the basic functionality other than liking and following. Other 
than that, a user is able to post pictures and view other user profiles.

## What it includes

* Local Auth (email & password)
* Passport and passport-local
* Session for saving user info and displaying flash messages
* Settings for PostgresSQL and Sequelize
* Hasshed Passwords
* EJS templating and EJS layouts 
* Sequelize User model
* Materialize styling - nav/footer/icons
* Moment 
* Method Override - Editing and Deletion routes 
* Cloudinary API for image storages 

## Included Model

**UserModel**

| Coloumn | Type | Notes |
|---------------|----------------|------------------------------|
| id | Integer | Serial primary key |
| firstname | STRING | Required Length > 1 |
| lastname | STRING | Required Length > 1 |
| email | STRING | Unique Login |
| password | STRING | Hash |
| birthday | DATE | - |
| email | STRING | Unique Login |
| username | STRING | Unique Login |
| bio | text | - |
| pic | text | - |
| createdAt| Date | Automatically added by Sequelize |
| updatedAt| Date | Automatically added by Sequelize |

## Included Routes

| Method | Path | Purpose |
|--------|----------------------|------------------------------|
| GET | / | Home page |
| GET | * | Catch-all for 404s |

**Routes in controllers/auth.js**
| Method | Path | Purpose |
|--------|----------------------|------------------------------|
| GET | '/auth/login | Render Login Form |
| POST | '/auth/login | Process Login Data |
| GET | '/auth/signup | Render signup form |
| POST | '/auth/signup | Process Signup Data |
| GET | '/auth/logout | Remove user from session + redirect |

**Routes in controllers/profile.js**
| Method | Path | Purpose |
|--------|----------------------|------------------------------|
| GET | '/profile/user' | Show user dashboard (authorized user only) |
| GET | '/profile/admin' | Show admin dashboard (authorized admin only |
| GET | '/profile/guest/:id' | View user dashboard as guest (authorized user only) |
| PUT | '/user/:id' | Edit user information (authorized user only) |

**Routes in controllers/logistics.js**
| GET | logistic/posting | |
| GET | logistic/userIndex | returns a list of all the users on flash |
| GET | logistic/feed | returns a list of all the pictures posted on flash |
| POST| /profile/user | User is able to create a post that will show on their page and feed page |
| DELETE | /profile/user| logged-in user is able to delete a pic from their own page|

## Directions for use

### 1. clone the repository but with a different name.

Run the following command(s) on the terminal.

```sh
git clone <repo_link> <new_name>
```
**For Example**

```
git clone https://github.com/samjyi95/auth-boiler.git whateva-you-want-to-name-it
```

### 2. Install the modules from package.json and other packages listed below

```sh
npm i 
```
```sh
npm i cloudinary
```
```sh
npm i multer
```
```sh
cloudinary-core
```
```sh
npm i sequelize-cli
```

### 3. Customize the new project

Remove defaulty stuff. For exampl:

* Title in `layout.ejs`
* Logo firld in the nav bar
* Description and Repository field in package.json
* Remove this boilerplate's readme content
* Switch Favicon to project-specific one (in `layout.ejs` head section)


### 4. Create a new database for the new project

```sh
createdb <new_db_name>
```

**For Example**

```sh
createb whateva_you_want_to_name_it 
```

### 5. Alter Sequelize Config File

In `config/config.json`, update the database name to the one created in step 4, Other settings are likely okay to be untouched, but you should check the username, password, and dialect.


### 6. Check user model for relevance to new project to new project's needs

For example, if the new project doesn't need a birthday field then delete it from the user model and use migration files 


### 7. Run the sequelize migrations 

```sh
sequelize db:migrate
```

### 8. Create a file for environment variables 

```sh 
touch .env
```

> Alternatively just create via text editor

Include the following .env variables:

* SESSION_SECRET - this a key for the session to use

### 9, Run the server and make sure ir works

**with nodemon**

```sh 
nodemon
```

**without nodemon**

```sh
node index.js
```

### 10. Delete the origin that points to the boilerplate repository

Currently if we run this command:

```sh
git remote -v
```

it will show `origin` as being hookeup up to the boilerplate repository. We'll want a fresh repository insteead, so let's delete the origin remote

```sh
git remote remove origin
```

### 11. Create an empty git repo throught the 

Via the Github websitte. Follow the directions as they show up when you create a new repository

```sh
git init
git add .
got commit -m "Initial commit"
git remote add origin <new_repo_name>
git push origin master 
```

## Happy Developing!!!





