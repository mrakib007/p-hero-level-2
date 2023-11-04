{
    //function with generics

    const createArray = (param: string): string[] => {
        return [param];
    
    }

    const createArrayWithGeneric = <T>(param: T): T[] => {
        return [param];
    }

    const res1 = createArray('Bangladesh');
    const generic = createArrayWithGeneric<boolean>(true)
    const generic2 = createArrayWithGeneric<string>('India');

    type User = {id: number; name: string}
    const resGenericObj = createArrayWithGeneric<User>({
        id: 123,
        name: 'Rakib',
    })


    const createArrayWithTuple = <T,Q>(param1: T,param2:Q): [T,Q] => {
        return [param1,param2];
    }

    const res10 = createArrayWithTuple<string,number>('Bangladesh',123);
    const res11 = createArrayWithTuple<string,{name:string}>('Bangladesh',{name: 'Asia'})
    
    const addCourseToStudent =<T> (student : T) =>{
        const course = 'Next Level';

        return {
            ...student,
            course,
        }
    }
    const student1 = addCourseToStudent({name: 'Rakib',
    email: 'rakkugmail',
    devType: 'next level'});
    
    const student2 = addCourseToStudent({name: 'Sakib',
    email: 'sakkugmail',
    hasWatch: 'next watch'});


}