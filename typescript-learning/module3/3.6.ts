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

        set deposit(amount: number){
            this._balance = this.balance + amount;
        }

        // public addDeposit(amount : number){
        //     this._balance = this._balance + amount;
        // }

        //getter
        get balance(){
            return this._balance;
        }
        // public getBalance(){
        //     return this._balance;
        // }
    }

     const poorAccount = new BankAccount(111,'Rakib',2000);

     poorAccount.deposit = 50;
    // // poorAccount.id = 222;
    // // poorAccount.balance = 0;
    // poorAccount.addDeposit(300); //function calling
    // const myBalance = poorAccount.getBalance(); //again function calling
    
    const myBalance = poorAccount.balance; //we are using it like property 
    console.log(myBalance);
}