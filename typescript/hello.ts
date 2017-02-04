
/**
 * This is a ridiculous function which does little good.
 *
 * @param {string} name
 **/

function greet(name: string) {
    console.log('Hello, ' + name);
}

function greet_world() {
    greet('world');

    greet('Jesse');
}

export = {
    greet: greet,
    greet_world: greet_world
};
