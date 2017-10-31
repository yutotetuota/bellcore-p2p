'use strict';

var gulp = require('gulp');
var vertcoreTasks = require('vertcore-build');

vertcoreTasks('p2p', {skipBrowser: true});

gulp.task('default', ['lint', 'coverage']);
