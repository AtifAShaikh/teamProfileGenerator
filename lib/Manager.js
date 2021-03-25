const Employee = require('./Employee');

class Manager extends Employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email);

        this.officeNumber = officeNumber;
        this.role = "Manager"
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getCard(){
        let myCardString = `

        <div style="width: 300px; height: 350px; background-color: rgb(238, 238, 238); box-shadow: 5px 10px 8px #888888;" class="m-4">
        <div style="background-color: rgb(45, 84, 255); color: whitesmoke;" class="p-2">
            <h2 class="pl-2">${this.name}</h2>
            <h4 class="pl-2">${this.role}</h4>
        </div>
        <h6 class="py-3 pl-3 m-2" style="background-color: white;">ID: ${this.id}</h6>
        <h6 class="py-3 pl-3 m-2" style="background-color: white;">${this.email}</h6>
        <h6 class="py-3 pl-3 m-2" style="background-color: white;">Office Number: ${this.officeNumber}</h6>
        </div>`;

        return myCardString;
    }
}

module.exports = Manager;