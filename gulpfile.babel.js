//
import { src, dest, watch, series, parallel } from "gulp";
import yargs from "yargs";
import sass from "gulp-sass";
import cleanCss from "gulp-clean-css";
import gulpif from "gulp-if";
import postcss from "gulp-postcss";
import sourcemaps from "gulp-sourcemaps";
import autoprefixer from "autoprefixer";
import imagemin from "gulp-imagemin";
import del from "del";
import webpack from "webpack-stream";
import browserSync from "browser-sync";
import zip from "gulp-zip";
import info from "./package.json";
import replace from "gulp-replace";

const PRODUCTION = yargs.argv.prod;

export const styles = () => {
  return src("assets/scss/bundle.scss")
    .pipe(gulpif(!PRODUCTION, sourcemaps.init()))
    .pipe(sass().on("error", sass.logError))
    .pipe(gulpif(PRODUCTION, cleanCss({ compability: "ie8" })))
    .pipe(gulpif(!PRODUCTION, sourcemaps.write()))
    .pipe(dest("public/build/css"))
    .pipe(server.stream());
};

// export const images = () => {
//     return src('src/images/**/*.{jpg,jpeg,png,svg,gif}')
//     .pipe(gulpif(PRODUCTION, imagemin()))
//     .pipe(dest('dist/images'));

// }

// export const copy = () => {
//     return src(['src/**/*', '!src/{images,js,scss}', '!src/{images,js,scss}/**/*'])
//     .pipe(dest('dist'));
// }

export const scripts = () => {
  return src("assets/js/bundle.js")
    .pipe(
      webpack({
        module: {
          rules: [
            {
              test: /\.js$/,
              use: {
                loader: "babel-loader",
                options: {
                  presets: [],
                },
              },
            },
          ],
        },
        mode: PRODUCTION ? "production" : "development",
        devtool: !PRODUCTION ? "inline-source-map" : false,
        output: {
          filename: "bundle.js",
        },
      })
    )
    .pipe(dest("public/build/js"));
};

const server = browserSync.create();
export const serve = (done) => {
  server.init({
    proxy: "https://valefireandsecurity.local/",
  });
  done();
};
export const reload = (done) => {
  server.reload();
  done();
};

export const clean = () => del(["dist"]);

export const compress = () => {
  return src([
    "**/*",
    "!node_modules{,/**}",
    "!bundled{,/**}",
    "!src{,/**}",
    "!.babelrc",
    "!.gitignore",
    "!gulpfile.babel.js",
    "!package.json",
    "!package-lock.json",
  ])
    .pipe(
      gulpif(
        (file) => file.relative.split(".").pop() !== "zip",
        replace("_themename", info.name)
      )
    )
    .pipe(zip(`${info.name}.zip`))
    .pipe(dest("bundled"));
};

export const watchForChanges = () => {
  watch("**/*.php", reload);
  watch("public/build/css/*.css", reload);
  // watch('src/images/**/*..{jpg,jpeg,png,svg,gif}', images);
  // watch(['src/**/*', '!src/{images,js,scss}', '!src/{images,js,scss}/**/*'], copy);
  watch("assets/js/*.js", scripts);
};

export const dev = series(
  clean,
  parallel(styles, scripts),
  serve,
  watchForChanges,
  reload
);
export const build = series(clean, parallel(styles, scripts), compress);
export default dev;
