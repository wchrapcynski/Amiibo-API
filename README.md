# Amiibo API Project

## Description

This is a RESTful API that covers all the various Amiibos that are available. Data was originally pulled from [https://www.amiiboapi.com/](https://www.amiiboapi.com/).

## Requirements

- [Node JS](https://nodejs.org/en/)
- [Mongo DB](https://www.mongodb.com/download-center)

## Installation

First install the requirements. Then download this repo to your hard drive. You'll then need to use `npm install` in the root of the amiibo_api folder to install dependencies.

You'll then need to go to the `/src/db/` folder and use either the Axios or the Fetch versions of GrabData to obtain the json file needed to seed your database. Either one of the following commands will work:

```
node GrabData_axios.js
node GrabData_fetch.js
```

Sample of the data:
![Data Sample](images/datasample.png)
Tale and Head are **not** used in this project. Image will be used when implementing the front end. EU and AU in the release dates are also **not** used.

You will now have a json file for seeding your database. `seed.js` is currently set up to use the Fetch version of the json file. You will needed to edit the name of the file if you used the Axios version. Use the command, `node seed.js` to send the data to a Mongo database. If you get any errors, make sure that the Mongo server is started. You can use `top | grep mongod` in the terminal to see if the process is already running. If it's not, use `mongod` to start it up.

## Usage

The following routes are currently set to be used. You can test GET by running `nodemon` in the `/src` folder and go to `localhost:3000` in your browser. You can also use [Postman](https://www.getpostman.com/) to test everything out. Replace DOMAIN with either localhost:3000 or whatever domain you have the API installed on.
<sub>
| Route                                              | URL                                                      | Method | Description                                                            |
| -------------------------------------------------- | :------------------------------------------------------- | :----- | :--------------------------------------------------------------------- |
| "/"                                                | http://DOMAIN/                                           | GET    | Redirects the root to the amiibo resource.                             |
| "/amiibo"                                          | http://DOMAIN/amiibo                                     | GET    | Main resource that lists the entire database.                          |
| "/amiibo/id/:id"                                   | http://DOMAIN/id/<"id">                                  | GET    | Searching by ID.                                                       |
| "/amiibo/releaseNA/:release"                       | http://DOMAIN/realeaseNA/<"date">                        | GET    | Search by North American Release dates. The date format is YYYY-MM-DD. |
| "/amiibo/releaseRangeNA/:releaseStart/:releaseEnd" | http://DOMAIN/releaseRangeNA/<"Start Date">/<"End Date"> | GET    | Search by a range of dates for North American Releases.                |
| "/amiibo/releaseJP/:release"                       | http://DOMAIN/realeaseJP/<"date">                        | GET    | Search by Japanese dates. The date format is YYYY-MM-DD.       |
| "/amiibo/releaseRangeJP/:releaseStart/:releaseEnd" | http://DOMAIN/releaseRangeJP/<"Start Date">/<"End Date"> | GET    | Search by a range of dates for North Japanese Releases.                |
| "/amiibo/name/:name"                               | http://DOMAIN/name/<"name">                              | GET    | Search by name.                                                        |
| "/amiibo/character/:character"                     | http://DOMAIN/character/<"character">                    | GET    | Search by character name.                                              |
| "/amiibo/type/:type"                               | http://DOMAIN/type/<"type">                              | GET    | Search by type (Card/Figure).                                          |
| "/amiibo"                                          | http://DOMAIN/amiibo                                     | POST   | Creates Amiibo listing.                                                |
| "/amiibo/id/:id"                                   | http://DOMAIN/id/<"id">                                  | PUT    | Edits an Amiibo listing                                                |
| "/amiibo/id/:id"                                   | http://DOMAIN/id/<"id">                                  | DELETE | Deletes an Amiibo listing                                              |
</sub>
If you're testing things out with Postman, you'll need to use these values in under Header:

```
KEY: Content-Type
VALUE: application/json
```

This is the format for adding and updating data:

```
{
    "amiiboSeries": "Super Smash Bros.",
    "character": "Mario",
    "gameSeries": "Super Mario",
    "head": "00000000",
    "image": "https://raw.githubusercontent.com/N3evin/AmiiboAPI/master/images/icon_00000000-00000002.png",
    "name": "Mario",
    "release": {
      "au": "2014-11-29",
      "eu": "2014-11-28",
      "jp": "2014-12-06",
      "na": "2014-11-21"
    },
    "tail": "00000002",
    "type": "Figure"
  }
```

## Author

William Chrapcynski: all code

[Nevin Vu](https://www.amiiboapi.com/): Data
