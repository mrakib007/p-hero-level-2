{
    //access modifiers
    class BankAccount{
        public readonly id: number;
        public name: string;
        // private _balance: number;
        protected _balance: number;

        constructor(id: number,name: string,balance: number){
            this.id = id;
            this .name = name;
            this._balance = balance;
        }
        public addDeposit(amount : number){
            this._balance = this._balance + amount;
        }
        public getBalance(){
            return this._balance;
        }
    }

    class StudentAccount extends BankAccount{
        test(){
            this.getBalance();
        }
    }

    const poorAccount = new BankAccount(111,'Rakib',2000);
    // poorAccount.id = 222;
    // poorAccount.balance = 0;
    poorAccount.addDeposit(300);
    const myBalance = poorAccount.getBalance();
    console.log(myBalance);

}