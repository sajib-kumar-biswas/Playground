{/* https://www.freecodecamp.org/news/javascript-async-await-tutorial-learn-callbacks-promises-async-await-by-making-icecream/ */}

const AsyncAwaitPromise = () => {
    const helper = ()=>{
        console.log('i');
        console.log('eat');
        console.log('ice-cream.');
    }
    const helper1 = ()=>{
        console.log('i');
        setTimeout(()=>{
            console.log('eat');
        },2000);
        console.log('ice-cream.');
    }
    helper();
    helper1();
    return (
        <div>
            <h1>Learning Async and Sync function...</h1>
            <p>See the code in the components js section.</p>

            <h1>Callbacks</h1>
            <p>
                first thing first, why do we even need callbacks ? 
            </p>
            <p>
                breaking down a complex task into smaller task.
            </p>
        </div>
    )
}

export default AsyncAwaitPromise;