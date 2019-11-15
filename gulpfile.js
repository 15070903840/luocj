var gulp = require('gulp');
var concat = require('gulp-concat');
var minifyHtml = require('gulp-minify-html');
var uglify = require('gulp-uglify');
var minifycss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');
var gulpconnect = require('gulp-connect');
var rename = require('gulp-rename');
var sass = require("gulp-sass");

//合并css
gulp.task('concatcss',function(){
    return gulp.src('./css/*.css')
    .pipe(concat('main.css'))
    .pipe(gulp.dest('./dist/css'))
    .pipe(gulpconnect.reload());
})

//合并js
gulp.task('concjs', function () {
    return gulp.src(['./js/*.js','!./js/j*.js','!./js/c*.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(gulpconnect.reload());
});

//压缩html
gulp.task('mihtml', function () {
    return gulp.src('./*.html')
        .pipe(minifyHtml())
        .pipe(gulp.dest('./dist'))
        .pipe(gulpconnect.reload());
})

//压缩js
gulp.task('uglify', function () {
    return gulp.src('./dist/js/main.js')
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'));
})

//压缩css
// gulp.task('minifycss', function () {
//     return gulp.src('./dist/css/*.css')
//         .pipe(minifycss())
//         .pipe(gulp.dest('./dist/css'))
// })

//压缩照片
gulp.task('imagemin', function (done) {
    gulp.src('./images/*.*')
    //.pipe(imagemin())
    .pipe(gulp.dest('./dist/images'));
    done();
})

//重新加载
gulp.task('gulpconnect', function (done) {
    gulpconnect.server({
        livereload: true,//自动更新
    });
    done();
})
//重命名
gulp.task('rename', function () {
    return gulp.src('./js/jquery-1.8.3.js') //读取文件
    .pipe(uglify()) //压缩
    .pipe(rename('jquery-1.8.3.min.js'))//重命名
    .pipe(gulp.dest('./dist/js'));//写入js文件夹
});
//sass
gulp.task('sass',function () {
    return gulp.src('./test.scss')
    .pipe(sass())
    .pipe(gulp.dest('./css'));
});

// gulp.task('compileSass',function () {
//     gulp.watch('./test.scss',gulp.series('sass'));
// });

//监听文件
gulp.task('whatch', function () {
    // gulp.watch('./css/*.css', gulp.series('concatcss', 'minifycss'));
    gulp.watch('./js/*.js', gulp.series('concjs', 'uglify'));
    gulp.watch('./*.html', gulp.series('mihtml'));
    gulp.watch('./images/*.*', gulp.series('imagemin'));
    gulp.watch('./test.scss',gulp.series('sass'));
});



//重新加载
gulp.task('run',gulp.series('gulpconnect','whatch'));




//提包
// gulp.task('bliud', gulp.parallel(
//     gulp.series('concatcss', 'minifycss'),
//     gulp.series('concjs', 'uglify'),
//     gulp.series('imagemin'),
//     gulp.series('mihtml')
//     )
// );