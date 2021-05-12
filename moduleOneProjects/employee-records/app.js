var employees = []

function Employee(name, jobtitle, salary){
    
    this.name = name
    this.jobtitle = jobtitle
    this.salary = salary
    this.status = "Full Time"
    this.printEmployeeForm = function(){
        let printOutput = this.name + " " + this.jobtitle + " " + this.salary + " " + this.status
        return printOutput
    }
}

var Claire = new Employee("Claire", "Developer", 80000)
var Paige = new Employee("Paige", "Teller", 60000)
var Emily = new Employee("Emily", "Recruiter", 77000)

// Employee.prototype.status = function(){
//     console.log("Full Time")
// }

Claire.status = "Contract"

employees.push(Claire.printEmployeeForm())
employees.push(Paige.printEmployeeForm())
employees.push(Emily.printEmployeeForm())

console.log(employees)

// console.log(Claire, Paige, Emily)



