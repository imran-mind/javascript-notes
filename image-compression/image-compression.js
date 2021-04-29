// const imagemin = require('imagemin');
// const imageminJpegtran = require('imagemin-mozjpeg');
// const imageminPngquant= require('imagemin-pngquant');

// (async()=>{
//     const files = await imagemin(['C:\Users\shimran\Pictures\sample-images/*.{jpg,png}'], {
//         destination: 'C:\Users\shimran\Pictures\sample-images\output-images',
//         plugins: [
//             imageminJpegtran(),
//             imageminPngquant({
//                 quality: [0.6, 0.8]
//             })
//         ]
//     });
//     console.log(files);
// })();

// const imagemin = require('imagemin');
// const imageminMozjpeg = require('imagemin-mozjpeg');

import imagemin from 'imagemin';
// import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';

(async () => {
    await imagemin(['C:\Users\shimran\Pictures\sample-images/*.jpg'],
    'C:\Users\shimran\Pictures\sample-images\output-images', {
        use: [
            imageminPngquant()
        ]
    });
 
    console.log('Images optimized');
})();
