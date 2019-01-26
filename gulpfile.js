
// imp install  gulp  gulp-typescript gulp-typescript-filesort gulp-filelist gulp gulp-shell glob silly-datetime gulp-typescript-sort minimist tsify

const gulp = require("gulp");
const ts = require("gulp-typescript");
const filelist = require('gulp-filelist');
const sd = require("silly-datetime");
const tsProject = ts.createProject("tsconfile_gulp.json");
const sorter = require("gulp-typescript-sort");
const browserify = require("browserify");
const source = require('vinyl-source-stream');
const tsify = require("tsify");
var concat = require('gulp-concat');
var compiling = false;

function compileTSFile() {
    if (compiling == true) return;
    var startTime = sd.format(new Date(), 'HH:mm:ss').yellow;
    console.log(`[${startTime}] TS File Start Compile`);
    compiling = true;

    return gulp.src([
        "libs/*.ts",
        "src/**/*.ts"
    ])
        .pipe(sorter(true))
        .pipe(tsProject())
        .pipe(concat('bundle.js'))//输入到all.min.js中  
        // .pipe(filelist('filelist.json'))
        .pipe(gulp.dest("bin/js/"));
}





gulp.task('default', function (args, args2) {
    return compileTSFile();
});





