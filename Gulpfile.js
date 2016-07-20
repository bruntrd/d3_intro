var gulp = require('gulp');
var uglify = require('gulp-uglify');

var path = {
    assets: "server/public/assets/",
    vendors: "server/public/vendors/"
};

var vendorSources = [

    "node_modules/jquery/dist/jquery.min.js",
    "node_modules/d3/build/d3.min.js"

];

var assetSources = [
    "client/styles/**/*",
    "client/views/**/*"
];

gulp.task('scripts', function() {
    return gulp.src('client/scripts/**/*')
        .pipe(gulp.dest("server/public/assets/scripts"))
});


gulp.task('assets', function() {
    return gulp.src(assetSources, {base: "client/"})
        .pipe(gulp.dest(path.assets))
});

gulp.task('vendors', function() {
    return gulp.src(vendorSources, {base: "node_modules/"})
        .pipe(gulp.dest(path.vendors));
});

gulp.task('watch', function() {
    gulp.watch('client/scripts/**/*', ['scripts']);
    gulp.watch(['client/styles/**/*', 'client/views/**/*'], ['assets']);
});

gulp.task('default', ['scripts', 'assets', 'vendors','watch']);