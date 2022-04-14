function Account(name) {
    this.name = name;
    this.balance = 0;
      console.info(`New account created for: ${name}`);
      console.info(`IBAN: GR00010003`);
      console.info(`The balance is: ${this.balance}`);
  }
  
  Account.prototype.deposit = function (amount) {
    if (this._isPositive(amount)) {
      this.balance += amount;
      console.info(`Deposit: ${this.name} new balance is ${this.balance}`);
      return true;
    }
    return false;
  };
  
  Account.prototype.withdraw = function (amount) {
    if (typeof amount != "number") {
      console.error("Invalid amount!");
    return false;
    }
    if (this._isAllowed(amount)) {
      this.balance -= amount;
      console.info(`Withdraw: ${this.name} new balance is ${this.balance}`);
      return true;
    }
    return false;
  };
  
  Account.prototype._isPositive = function (amount) {
    const isPositive = amount > 0;
    if (!isPositive) {
      console.error("Invalid amount!");
      return false;
    }
    return true;
  };
  
  Account.prototype._isAllowed = function (amount) {
    if (!this._isPositive(amount)) return false;
    const isAllowed = this.balance - amount >= 0;
    if (!isAllowed) {
      console.error("Insufficient funds!");
      return false;
    }
    return true;
  };
  
  Account.prototype.getBalance = function () {
    console.info(`the balance is ${this.balance}`);
  };
  
  const newAccount = new Account("Kostas Minaidis");
  newAccount.getBalance(); // 0
  newAccount.deposit(100);
  newAccount.getBalance(); // 100
  newAccount.withdraw(50);
  newAccount.getBalance(); // 50
  
  newAccount.withdraw(500); // Error 'Insufficient balance!'
  newAccount.withdraw("50"); // Error 'Invalid amount'
  newAccount.withdraw(-150); // Error 'Invalid amount'