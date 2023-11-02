{
    //spread operator 
    //rest operator
    // d structuring

    const brothers1 : string[] = ['Rakib','Sakib'];
    const brothers2 : string[] = ['Shawon','Mehrab'];

    brothers1.push(...brothers2);

    const mentors1 = {
        typescript: 'Rakib',
        redux: 'Mir',
        dbms: 'Mizan',
    }

    const mentors2 = {
        prisma: 'Firoz',
        next: 'Tonmoy',
        cloud: 'Nahid',
    }

    const mentorList = {
        ...mentors1,
        ...mentors2,
    }

    console.log(mentorList);


    //learn rest operator
    const greetFriends = (...friends: string[]) =>{
        // console.log(`Hi ${friend1} ${friend2} ${friend3}`);
        friends.forEach((friend : string)=> console.log(`hi ${friend}`));
    }

    greetFriends('Rakib','Sakib','Khalid','Rashed');

}
