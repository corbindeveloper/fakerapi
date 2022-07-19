const express = require("express");
const app = express();
const port = 8000;
const { faker } = require('@faker-js/faker');

class User {
    constructor() {
        this._id = faker.database.mongodbObjectId();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
        this.phoneNumber = faker.phone.phoneNumber();
        this.firstName = faker.name.firstName();
        this.lastName = faker.name.lastName();
    }
}

// ***********************************************
class Company {
    constructor() {
        this._id = faker.database.mongodbObjectId();
        this.name = faker.company.companyName();
        this.street = faker.address.street();
        this.zipCode = faker.address.zipCode();
        this.city = faker.address.city();
        this.state = faker.address.state();
        this.country = faker.address.country();
    }
}

// Create a route to get a random user
app.get("/api/users/new", (req,res)=>{
    let newUser = new User();
    res.json({
        results: newUser
    })
})

// ************************************************
// Create a route to get a random user
app.get("/api/companies/new", (req,res)=>{
    let newCompany = new Company();
    res.json({
        results: newCompany
    })
})

// ************************************************
// Return ONE user and ONE company
app.get("/api/user/company", (req,res)=>{
    let newCompany = new Company();
    let newUser = new User();
    res.json({
        results: newCompany, newUser
    })
})



// ENDING
app.listen( port, () => console.log(`Listening on port: ${port}`) );