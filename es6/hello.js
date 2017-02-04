function hello(name) {
    console.log('Hello, ' + name + '!');
}

function main() {
    hello('world');
}

// Apparently I don't know how export works.
module.exports = {
    hello: hello,
    main: main
};
