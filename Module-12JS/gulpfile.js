gulp.task('js', () => {
    gulp.src('./src/js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(concat('*.js'))
        .pipe(uglify())
        .pipe(gulp.dest('./dist/'));

})