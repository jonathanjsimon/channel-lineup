#!/bin/bash

TARGET="build/"


mkdir -p "${TARGET}"
rm -rf "${TARGET}/*"

mkdir -p "${TARGET}"/{js,css,data}

html-minifier index.html                 --collapse-whitespace --minify-js --minify-css --o "${TARGET}/index.html" > /dev/null

uglifyjs js/index.js                     -o                                                 "${TARGET}/js/index.js"

node-sass --output-style compressed -x   css/style.scss >                                   "${TARGET}/css/style.css"

cp       data/data.json                                                                     "${TARGET}/data/data.json"