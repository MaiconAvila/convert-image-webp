// Build: gulp webp
// Add: gulp / gulp-webp /

const { src, dest } = require('gulp');
const webp = require('gulp-webp');

const webpImages = () => {
  return src('images/*.{png,jpg,jpeg}')
    // .pipe(webp())
    .pipe(webp({
      quality: 30
    }))
    .pipe(dest('webp'))
}

exports.webp = webpImages;