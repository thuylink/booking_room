mix.react('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .webpackConfig({
       resolve: {
           extensions: ['.js', '.jsx'],
           alias: {
               '@': path.resolve('resources/js'),
           },
       },
   });
