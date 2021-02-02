//replace the default hello message with a typeScript function
function sayHello() {
    const compiler = (document.getElementById("compiler") as HTMLInputElement)
        .value;
    const framework = (document.getElementById("framework") as HTMLInputElement)
        .value;
    return `Hello from ${compiler} and ${framework}!`;
}