// // Create an offscreen canvas
// var offscreenCanvas = document.createElement('canvas');
// var offscreenCtx = offscreenCanvas.getContext('2d');

// // Create an image element
// var image = new Image();

// // Set the image source
// image.src = 'download.png'; // Replace with the actual path to your image

// // Once the image is loaded, extract the matrix
// image.onload = function() {
//   // Set the dimensions of the offscreen canvas
//   offscreenCanvas.width = image.width;
//   offscreenCanvas.height = image.height;

//   // Draw the image on the offscreen canvas
//   offscreenCtx.drawImage(image, 0, 0);

//   // Get the pixel data from the offscreen canvas
//   var imageData = offscreenCtx.getImageData(0, 0, offscreenCanvas.width, offscreenCanvas.height).data;

//   // Build the matrix
//   var matrix = [];
//   for (var y = 0; y < offscreenCanvas.height; y++) {
//     var row = [];
//     for (var x = 0; x < offscreenCanvas.width; x++) {
//       var red = imageData[((y * offscreenCanvas.width + x) * 4) + 0];
//       var green = imageData[((y * offscreenCanvas.width + x) * 4) + 1];
//       var blue = imageData[((y * offscreenCanvas.width + x) * 4) + 2];
      
//     //   if((red==242 && green==254 && blue==254) ||(red<198 && green<212 && blue<236))
//     //   {
//     //     red=254;
//     //     green=254;
//     //     blue=254;
//     //   }
//       row.push([red, green, blue]);
//     }
//     matrix.push(row);
//   }
  
//   var canvas = document.getElementById('myCanvas');
//   var ctx = canvas.getContext('2d');
  
//   // Define the width and height of each pixel
//   var pixelSize = 1;
  
//   // Set the canvas size based on the pixel size and matrix resolution
 
//   canvas.width = 450;
//   canvas.height = 450;
//   //7500

  
//   // Loop through each pixel in the matrix
//   for (var y = 0; y < matrix.length; y++) {
//     for (var x = 0; x < matrix[y].length; x++) {
//       // Get the RGB values for the current pixel
//       var [red, green, blue] = matrix[y][x];
  
//       // Calculate the position of the rectangle
//       var xPos = x * pixelSize;
//       var yPos = y * pixelSize;
  
//       // Set the fill color for the rectangle
//       ctx.fillStyle = `rgb(${red}, ${green}, ${blue})`;
  
//       // Draw the colored rectangle on the canvas
//       ctx.fillRect(xPos, yPos, pixelSize, pixelSize);
//     }
//   }
  

//   // Print the matrix

//   console.log(matrix);
// };


// function matrixmodifier(mat,columns,rows){

//   const modifiedMatrix = [];

//   for (let i = 0; i < rows*50; i++) {
//     const newRow = [];

//     for (let j = 0; j <columns*50; j++) {
//       newRow.push(mat[i][j]);
//     }

//     modifiedMatrix.push(newRow);
//   }
//   console.log(modifiedMatrix);
//   return modifiedMatrix;

// }