// 클래스
class Person {
    sayHello = () => {
        console.log('Hi there~');
    }
}

const obj = new Person();
obj.sayHello(); //Hi there~

// 파라미터 - inline

function doIt( what ) {
    what();
}

const run = () => {
    console.log('Run Run!');
}

doIt(run); //Run Run!

doIt( () => {
    console.log('Jump!'); //Jump!
});


// 반환값

function sayIt() {
    const sing = () => {
        console.log('let it go');
    }
    return sing;
}

const singAsong = sayIt();
singAsong(); //let it go

function danceIt() {
    return () => {
        console.log('shall we dance?');
    }
}

danceIt()(); //shall we dance?

// inline, with parameter
const doYouWanna = (it) => {
    return () => {
        console.log(`do you wanna build ${it}`);
    }
}

doYouWanna('snowman')(); //do you wanna build snowman