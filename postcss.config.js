const path = require('path');
const {
  uniPostcssPlugin
} = require('@dcloudio/uni-cli-shared')

console.log(path,'posto');

module.exports = {
  parser: require('postcss-comment'),
  plugins: [
    // uniPostcssPlugin(),
    require('postcss-import')({
      resolve(id, basedir, importOptions) {
        console.log(id,'postcss-config')
        if (id.startsWith('~@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substring(3));
        } else if (id.startsWith('@/')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substring(2));
        } else if (id.startsWith('/') && !id.startsWith('//')) {
          return path.resolve(process.env.UNI_INPUT_DIR, id.substring(1));
        }
        return id;
      },
    }),
    // purgecss({
    //   content: ['./**/*.vue', './**/*.wxml', './**/*.html'],
    //   css: ['**/*.wxss', '**/*.css'],
    // }),
    
    require('tailwindcss'),
    require('autoprefixer')({
      remove: process.env.UNI_PLATFORM !== 'h5',
    }),
    require('postcss-class-rename')({
      '\\\\:': '__',
      '\\\\/': '_',
    }),
  ],
};
