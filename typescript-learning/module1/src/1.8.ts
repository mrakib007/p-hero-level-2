{//destructuring
    const user = {
        id: 123,
        name: {
            firstName: 'Rakib',
            middleName: 'hasan',
            lastnName: 'Rakku',
        },
        contactNo: "01777777",
        address: "kallyanpur",
    }

    const { contactNo,
        name: { middleName: midName }
    } = user;

    //array destructuring
    const myFriends = ['Chandler','Joye','Ross','Rachel','Monica','Phoebe'];
    // const [a,b,bestFriend] = myFriends;
    const [,,bestFriend,...rest] = myFriends;
    console.log(myFriends);
}