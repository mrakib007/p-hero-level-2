{
    //Type guard
    //typeof --> type guard
    type Alphaneumeric = string | number;
    const add = (param1:Alphaneumeric, param2:Alphaneumeric): Alphaneumeric => {
        if (typeof param1 === "number" && typeof param2 === "number") {
            return param1 + param2;
        }else{
            return param1.toString() + param2.toString();
        }
    }
    const reslut1 = add(2,3);
    console.log(reslut1);

    // in guard
    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: 'admin';
    }
    const getuser = (user: NormalUser | AdminUser) => {
        if('role' in user){
            console.log(`My name is ${user.name} and my role is ${user.role}`);
        }else{
            console.log(`My name is ${user.name}`);
        }
    }

    const normalUser : NormalUser = {
        name: 'Rakib',
    }
    const AdminUser : AdminUser = {
        name: "Mr Admin",
        role: "admin"
    }

    getuser(normalUser);
    getuser(AdminUser);
}