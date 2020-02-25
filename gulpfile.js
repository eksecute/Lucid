const gulp = require ('gulp');
const sass = require ('gulp-sass');
const browserSync = require ('browser-sync').create();

function style() {
    //в папке scss и во всех вложенных (**) все файлы (*) с расширением scss сделай pipe()
    return gulp.src('./scss/**/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css')) //куда мы хотим положить наш сконвертированный файл
        .pipe(browserSync.stream())
}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    })
    gulp.watch('./scss/**/*.scss', style);
    gulp.watch('./*.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;
