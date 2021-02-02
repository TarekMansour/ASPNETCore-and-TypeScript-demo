//This file is the main entry point for defining Gulp tasks and using Gulp plugins

var gulp = require("gulp");
var del = require("del");

var paths = {
    scripts: ["scripts/**/*.js", "scripts/**/*.ts", "scripts/**/*.map"],
};

// run the ‘clean’ task when you ask Visual Studio to clean the build
gulp.task("clean", function () {
    return del(["wwwroot/scripts/**/*"]);
});

//run the task ‘default’ after the build finishes
gulp.task("default", function () {
    gulp.src(paths.scripts).pipe(gulp.dest("wwwroot/scripts"));
});