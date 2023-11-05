{
    //constraints

    const addCourseToStudent =<T extends {id: number;name: string;email:string;}> (student : T) =>{
        const course = 'Next Level';

        return {
            ...student,
            course,
        }
    }
    const student3 = addCourseToStudent({id: 44 , name: 'Mr.x',email:'x@gmail.com',test: 'test'})

    const student1 = addCourseToStudent<
   { id: number;
    name: string;
    email: string;
    devType: string;
    }>({name: 'Rakib',
    email: 'rakkugmail',
    id: 111,
    devType: 'next level'
});
    
    const student2 = addCourseToStudent({name: 'Sakib',
    email: 'sakkugmail',
    id: 222,
    hasWatch: 'next watch'});
}