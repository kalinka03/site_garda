'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    uglify = require('gulp-uglify'),
    less = require('gulp-less'),
    sourcemaps = require('gulp-sourcemaps'),
    rigger = require('gulp-rigger'),
    cssmin = require('gulp-minify-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    rimraf = require('rimraf'),
    browserSync = require("browser-sync"),
    reload = browserSync.reload,
    livereload = require('gulp-livereload'),
    connect = require('gulp-connect'),
    cheerio = require('gulp-cheerio');

var path = {
    build: { //Тут мы укажем куда складывать готовые после сборки файлы
        php: './production/',
        tempPhp: './production/template/',
        js: './production/js/',
        css: './production/css/',
        img: './production/img/',
        fonts: './production/fonts/',
        plug: './production/plugin/'
    },
    src: { //Пути откуда брать исходники
        php: './*.php', //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
        tempPhp: './template/*.php',
        js: './js/*.js',//В стилях и скриптах нам понадобятся только main файлы(nien)
        style: './css/main.less',
        css: './css/*.css',
        img: './img/**/*.*', //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
        fonts: './fonts/**/*.*',
        plug: './plugin/**/*.*'
    },
    watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
        php: './*.php',
        tempPhp: './template/*.php',
        js: './js/*.js',
        style: './css/*.less',
        img: './img/**/*.*',
        fonts: './fonts/*.*',
        plug: './plugin/**/*.*'
    },
    clean: './production'
};
var config = {
    server: {
        baseDir: "./"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};

gulp.task('webserver', function () {
    // browserSync(config);
    connect.server({
        root: './',
        livereload: true
    });
});

gulp.task('clean', function (cb) {
    rimraf(path.clean, cb);
});

gulp.task('php:build', function () {
    gulp.src(path.src.php)
       .pipe(rigger())
       .pipe(gulp.dest(path.build.php))
       .pipe(livereload());
});

gulp.task('js:build', function () {
    gulp.src(path.src.js) //Найдем наш main файл
        .pipe(rigger())
        .pipe(uglify()) //Сожмем наш js
        .pipe(gulp.dest(path.build.js))
        .pipe(livereload());
});

gulp.task('style:build', function () {
    gulp.src(path.src.style) //Выберем наш main.less
        .pipe(less()) //Скомпилируем
        .pipe(cssmin()) //Сожмем
        .pipe(gulp.dest(path.build.css)) //И в build
        .pipe(livereload());
});
gulp.task('allStyle:build', function () {
    gulp.src(path.src.css) //Выберем наш main.less
        .pipe(cssmin()) //Сожмем
        .pipe(gulp.dest(path.build.css)) //И в build
        .pipe(livereload());
});


gulp.task('image:build', function () {
    gulp.src(path.src.img) //Выберем наши картинки
        .pipe(imagemin({ //Сожмем их
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img)) //И бросим в build
        .pipe(livereload());
});

gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
});

gulp.task('plugin:build', function() {
    gulp.src(path.src.plug)
        .pipe(gulp.dest(path.build.plug))
});

gulp.task('tempPhpStyle:build', function () {
  return gulp
    .src(['./template/*.php'])
    .pipe(cheerio(function ($, file) {
        $('\n\t<link rel="stylesheet" type="text/css" href="./css/main.css">\n').insertAfter('head title');
        $(".test-script-tmp").remove();
    }))
    .pipe(gulp.dest('./production/template/'))
    .pipe(livereload());
});

gulp.task('build', [
    'php:build',
    'js:build',
    'style:build',
    'allStyle:build',
    'fonts:build',
    'image:build',
    'plugin:build',
    'tempPhpStyle:build'
]);

gulp.task('php:watch', function () {
    gulp.src(path.src.php)
        .pipe(livereload());
});

gulp.task('js:watch', function () {
    gulp.src(path.src.js) //Найдем наш main файл
        .pipe(livereload());
});

gulp.task('style:watch', function () {
    gulp.src(path.src.style) //Выберем наш main.less
        .pipe(livereload());
});

gulp.task('image:watch', function () {
    gulp.src(path.src.img) //Выберем наши картинки
        .pipe(livereload());
});

gulp.task('plugin:watch', function() {
    gulp.src(path.src.plug)
        .pipe(livereload());
});

gulp.task('tempPhpStyle:watch', function () {
    gulp.src(path.src.tempPhp)
    .pipe(livereload());
});

gulp.task('watch', function(){
    livereload.listen();
    watch([path.watch.php], function(event, cb) {
        gulp.start('php:watch');
    });
    watch([path.watch.tempPhp], function(event, cb) {
        gulp.start('tempPhpStyle:watch');
    });
    watch([path.watch.style], function(event, cb) {
        gulp.start('style:watch');
    });
    watch([path.watch.js], function(event, cb) {
        gulp.start('js:watch');
    });
    // watch([path.watch.img], function(event, cb) {
    //     gulp.start('image:watch');
    // });
    watch([path.watch.plug], function(event, cb) {
        gulp.start('plugin:watch');
    });
});

gulp.task('default', ['build', 'webserver', 'watch']);