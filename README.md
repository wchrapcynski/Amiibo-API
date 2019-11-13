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

You will now have a json file for seeding your database. `seed.js` is currently set up to use the Fetch version of the json file. You will needed to edit the name of the file if you used the Axios version. Use the command, `node seed.js` to send the data to a Mongo database. If you get any errors, make sure that the Mongo server is started. You can use `top | grep mongod` in the terminal to see if the process is already running. If it's not, use `mongod` to start it up.

## Usage

The following routes are currently set to be used. You can test GET by running `nodemon` in the `/src` folder and go to `localhost:3000` in your browser. You can also use [Postman](https://www.getpostman.com/) to test everything out. 
```
// Redirects the root to the amiibo resource
router.get("/", function(req, res) { res.redirect(307, "/amiibo"); });
// Main resource that lists the entire database
router.get("/amiibo", amiiboController.index);
// Searching by ID
router.get("/amiibo/id/:id", amiiboController.showId);
// Search by North American Release dates
router.get("/amiibo/releaseNA/:release", amiiboController.showReleaseNA);
// Searcy by American Release dates. The date format is YYYY-MM-DD.
router.get("/amiibo/releaseJP/:release", amiiboController.showReleaseJP);
// Search by name
router.get("/amiibo/name/:name", amiiboController.showName);
// Search by character name
router.get("/amiibo/character/:character", amiiboController.showCharacter);
// Search by type (Card/Figure)
router.get("/amiibo/type/:type", amiiboController.showType);
// Creates Amiibo listing
router.post("/amiibo", amiiboController.create);
// Edits an Amiibo listing
router.put("/amiibo/id/:id", amiiboController.edit);
// Deletes an Amiibo listing
router.delete("/amiibo/id/:id", amiiboController.delete);   
```
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