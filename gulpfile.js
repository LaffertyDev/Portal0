var gulp = require('gulp');

gulp.task('default', function() {
    //move angular and related module code to the content directory (from managed npm sources to view sources)
    gulp.src('node_modules/es6-shim/es6-shim.min.js').pipe(gulp.dest('./src/Client/Content/js/'));
    gulp.src('node_modules/systemjs/dist/system-polyfills.js').pipe(gulp.dest('./src/Client/Content/js/'));
    gulp.src('node_modules/angular2/es6/dev/src/testing/shims_for_IE.js').pipe(gulp.dest('./src/Client/Content/js/'));
    gulp.src('node_modules/angular2/bundles/angular2-polyfills').pipe(gulp.dest('./src/Client/Content/js/'));
    gulp.src('node_modules/rxjs/bundles/Rx.js').pipe(gulp.dest('./src/Client/Content/js/'));
    gulp.src('node_modules/angular2/bundles/angular2.dev.js').pipe(gulp.dest('./src/Client/Content/js/'));
    gulp.src('node_modules/systemjs/dist/system.src.js').pipe(gulp.dest('./src/Client/Content/js/'));
});