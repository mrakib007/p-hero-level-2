{
    //encapsulation
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
        private getBalance(){
            return this._balance;
        }

        getHeddenMethod(){
            return this.getBalance();
        }
    }

    class StudentAccount extends BankAccount{
        test(){
            this.getHeddenMethod();
        }
    }

    const poorAccount = new BankAccount(111,'Rakib',2000);
    // poorAccount.id = 222;
    // poorAccount.balance = 0;
    poorAccount.addDeposit(300);
    const myBalance = poorAccount.getHeddenMethod();
    console.log(myBalance);

}