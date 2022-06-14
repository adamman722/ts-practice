class Department {
  // private readonly id: string;
  // private name: string;
  //switching it to protected it allows all the calssed derivied from this class to use it but anything outside it cannot be used
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {
    // this.id = id;
    // this.name = n;
  }

  static createEmployee(name: string) {
    return { name: name };
  }

  describe(this: Department) {
    console.log(`Department (${this.id}): ${this.name}`);
  }

  addEmployee(employee: string) {
    // validation etc
    // this.id = 'd2';
    this.employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this.employees.length);
    console.log(this.employees);
    console.log(this.employees + " Nugget");
  }
}

class ITDepartment extends Department {
  admins: string[];
  //to asigin any new props you must use the "this" keyword and must be after super
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("No report found.");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in proper value");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }

  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment("d1", ["Max"]);

it.addEmployee("Max");
it.addEmployee("Manu");

// it.employees[2] = 'Anna';

it.describe();
it.name = "NEW NAME";
it.printEmployeeInformation();

console.log(it);

const accounting = new AccountingDepartment("d2", []);

accounting.mostRecentReport = "new one boiiiiiiii";

accounting.addReport("Something went wrong...");
console.log(accounting.mostRecentReport);

accounting.addEmployee("Max");
accounting.addEmployee("Manu");

accounting.printReports();

accounting.printEmployeeInformation();

console.log("thingsss");
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();
