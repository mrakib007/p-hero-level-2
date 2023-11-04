{
    //interface - Generic

    interface Developer<T,X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        }
        smartWatch: T;
        bike? : X;
    }

    type EmilableWatch = {
        brand: string;
        model: string;
        display: string;
    }

    // const poorDeveloper : Developer<{
    //     brand: string;
    //     model: string;
    //     display: string;
    // }> = {
    //     name: 'Rakib',
    //     computer: {
    //         brand: 'HP',
    //         model: 'XR',
    //         releaseYear: 2018,
    //     },
    //     smartWatch: {
    //         brand: 'Casio',
    //         model: 'Kw6',
    //         display: 'LED',
    //     }
    // }
    const poorDeveloper : Developer<EmilableWatch> = {
        name: 'Rakib',
        computer: {
            brand: 'HP',
            model: 'XR',
            releaseYear: 2018,
        },
        smartWatch: {
            brand: 'Casio',
            model: 'Kw6',
            display: 'LED',
        }
    }

    interface AppleWatch {
        brand: string;
        model: string;
        heartRate: boolean;
        sleepTrack: boolean;
    }

    interface YamahaBike {
        model: string;
        engineCapacity: string;
    }

    const richDeveloper : Developer<AppleWatch,YamahaBike> = {
        name: 'Rich',
        computer: {
            brand: 'MacBook',
            model: 'XR',
            releaseYear: 2018,
        },
        smartWatch: {
            brand: 'Apple',
            model: 'Kw6',
            heartRate: true,
            sleepTrack: true,
        },
        bike:{
            model: 'Ymaha',
            engineCapacity: '100cc',
        }
    }


}