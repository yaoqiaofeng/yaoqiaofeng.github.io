(function() {
    'use strict';
    var gulp = require('gulp'),
        rev = require('gulp-rev-append'),
        htmlclean = require('gulp-htmlclean'),
        htmlmin = require('gulp-htmlmin'),
        uglify = require('gulp-uglify'),
        notify = require('gulp-notify'),
        minifycss = require('gulp-minify-css'),
        autoprefixer = require('gulp-autoprefixer')

    /*====================================================
        部署前代码处理
    ====================================================*/

    // 压缩处理 css
    gulp.task('minify-css', function() {
        return gulp.src('./public/**/*.css')
        .pipe(autoprefixer({
            browsers: ['last 10 versions', 'Firefox >= 20', 'Opera >= 36', 'ie >= 9', 'Android >= 4.0', ],
            cascade: true, //是否美化格式
            remove: false //是否删除不必要的前缀
        }))
        .pipe(minifycss())
        .pipe(gulp.dest('./public'))
        .pipe(notify({message: 'css minify complete'}));
    });

    // 压缩处理 js
    gulp.task('minify-js', function() {
        return gulp.src('./public/js/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public/js'))
        .pipe(notify({message: 'js minify complete'}));
    });

    // 压缩处理 html
    gulp.task('minify-html', function() {
        return gulp.src('./public/**/*.html')
        .pipe(htmlclean())
        .pipe(htmlmin({
             removeComments: true, //清除HTML注释
             collapseWhitespace: true, //压缩HTML
             minifyJS: true, //压缩页面JS
             minifyCSS: true, //压缩页面CSS
             minifyURLs: true
        }))
        .pipe(gulp.dest('./public'));
    });
    
    // 添加版本号
    gulp.task('rev', function() {
        return gulp.src('./public/**/*.html')
        .pipe(rev())
        .pipe(gulp.dest('./public'));
    });

    // 同步执行task
    gulp.task('deploy',sequence(['minify-css','minify-js'],'rev','minify-html'));
    
    // 部署前代码处理
    gulp.task('default',['deploy'],function(e){
       console.log("[complete] please execute： hexo d");
    })
})();