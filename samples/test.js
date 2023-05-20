
const mySort = function(arr){
    const n = arr.length;
    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            if(arr[i].length > arr[j].length){
                //swap items
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
const arr = ["GeeksforGeeks", "I", "from", "am"];
const sortedArr = mySort(arr);
console.log(sortedArr);

const a ='cabd';

// console.log(arr.sort().join(' '))

console.log(arr.sort((a,b)=> a.length < b.length))

// 3 way handshak
// upgrad header from server
//

// Web Workers are like a superhero for your web applications, offering improved responsiveness and performance by executing computationally intensive or time-consuming tasks without blocking the user interface. 🚀

// Here are some key use cases where Web Workers can make a significant impact:

// 1️⃣ Intensive computations: Need to perform heavy calculations, complex math operations, or data processing? Offload these tasks to Web Workers to prevent the main thread from becoming unresponsive and ensure a smooth user experience.

// 2️⃣ Long-running tasks: Uploading or downloading large files, manipulating images, or processing audio/video? Delegate these operations to Web Workers, keeping the main thread available for user interactions while the worker thread handles the heavy lifting.

// 3️⃣ Parallel processing: Take advantage of multi-core processors by using Web Workers to distribute smaller independent tasks across multiple workers. Enable parallel processing and potentially speed up execution time.

// 4️⃣ Real-time applications: Building real-time collaboration tools, multiplayer games, or chat applications? Web Workers excel at handling continuous data processing, messaging, and background tasks while maintaining main thread performance.

// 5️⃣ Offline functionality: Combine Web Workers with service workers to provide offline capabilities for web applications. Leverage workers for caching, background synchronization, and data management, ensuring your app functions even without a network connection.

// It's important to keep in mind that Web Workers have limitations. They can't directly access the DOM or modify the user interface and rely on message passing for communication with the main thread. Also, be sure to verify browser compatibility for wider adoption.

// Embrace the power of Web Workers and unlock the potential for high-performance web applications! 💪💻