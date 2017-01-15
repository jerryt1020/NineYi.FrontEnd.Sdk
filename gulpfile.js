var gulp = require('gulp');
var compass = require('gulp-compass');
var connect = require('gulp-connect');
var plumber = require('gulp-plumber');
var tsc = require('gulp-typescript');
var uglify = require('gulp-uglify');
var open = require('gulp-open');
var livereload = require('gulp-livereload');

// 設定檔
var path = {
    compassPath: './Scss/**/*.scss',
    ngScriptPath: './src/TypeScripts/**/*.js',

    // TypeScript相關路徑
    typescriptPath: './src/TypeScripts/**/*.ts',
    typescriptDest: './src/TypeScripts'
};

gulp.task('connect', function () {
    connect.server({
        root: 'src',
        port: 3000,
        livereload: true
    });

    gulp.src('./src/index.html').pipe(open({uri: 'http://localhost:3000'}));
});

// 編譯Compass
gulp.task('compass', function () {
    gulp.src(path.compassPath)
        .pipe(plumber())
        .pipe(compass({
            css: './Styles',
            sass: './Scss'
        }));
});

// 編譯TypeScript
gulp.task('typescript', function () {
    gulp.src(path.typescriptPath)
        .pipe(tsc())
        .pipe(gulp.dest(path.typescriptDest));
});

// Watch
gulp.task('watch', function () {
    // gulp.watch(path.compassPath, ['compass']);
    var server = livereload();
    gulp.watch('*.*', function (file) {
        server.changed(file.path);
    });
});

// 預設
gulp.task('default', ['connect']);

// 建置加密
gulp.task('build', function () {
    gulp.src(path.ngScriptPath)
        .pipe(uglify())
        .pipe(gulp.dest('dist'));
});