# Amiibo API Project

## Description
This is a RESTful API that covers all the various Amiibos that are available. Data was originally pulled from [https://www.amiiboapi.com/](https://www.amiiboapi.com/). 

## Requirements
* [Node JS](https://nodejs.org/en/)
* [Mongo DB](https://www.mongodb.com/download-center)

## Installation
First install the requirements. Then download this repo to your hard drive. You'll then need to use `npm install` in the root of the amiibo_api folder to install dependencies. 

You'll then need to go to the `/src/db/` folder and use either the Axios or the Fetch versions of GrabData to obtain the json file needed to seed your database. Either one of the following commands will work:
```
node GrabData_axios.js
node GrabData_fetch.js
```

Sample of the data:
![Data Sample](images/datasample.png)
Tale and Head are not used in this project.

You will now have a json file for seeding your database. `seed.js` is currently set up to use the Fetch version of the json file. You will needed to edit the name of the file if you used the Axios version. Use the command, `node seed.js` to send the data to a Mongo database. If you get any errors, make sure that the Mongo server is started. You can use `top | grep mongod` in the terminal to see if the process is already running. If it's not, use `mongod` to start it up.

## Usage

The following routes are currently set to be used. You can test GET by running `nodemon` in the `/src` folder and go to `localhost:3000` in your browser. You can also use [Postman](https://www.getpostman.com/) to test everything out. 

| Route                          | Description
|--------------------------------|:---------------------------------------------------------------------:|
| "/"                            | Redirects the root to the amiibo resource.
| "/amiibo"                      | Main resource that lists the entire database.
| "/amiibo/id/:id"               | Searching by ID.
| "/amiibo/releaseNA/:release"   | Search by North American Release dates. The date format is YYYY-MM-DD.
| "/amiibo/releaseJP/:release"   | Search by American Release dates. The date format is YYYY-MM-DD.
| "/amiibo/name/:name"           | Search by name.
| "/amiibo/character/:character" | Search by character name.
| "/amiibo/type/:type"           | Search by type (Card/Figure).
| "/amiibo"                      | Creates Amiibo listing.
| "/amiibo/id/:id"               | Edits an Amiibo listing
| "/amiibo/id/:id"               | Deletes an Amiibo listing 

If you're testing things out with Postman, you'll need to use these values in under Header:
```
KEY: Content-Type
VALUE: application/json
```
Please refer to the json file for the object structure for the syntax of adding new documents to your database. 

## TODO

I'm going to work on adding in some routes where you can search the release dates by range. This will make the front end easier to interface with finding data for the users.

## Author
William Chrapcynski: all code

[Nevin Vu](https://www.amiiboapi.com/): Data