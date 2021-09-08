const {
    src,
    dest,
    parallel,
    series,
    watch
} = require('gulp');


const uglify = require('gulp-uglify');
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const changed = require('gulp-changed');
const browsersync = require('browser-sync').create();
const del = require('del')
const gulp = require('gulp');
const sass = require('gulp-sass');
const connect = require('gulp-connect');
const minifyCSS = require('gulp-minify-css');
const imagemin = require ('gulp-imagemin');
const express = require ('gulp-express');
const htmlmin = require('gulp-htmlmin');





