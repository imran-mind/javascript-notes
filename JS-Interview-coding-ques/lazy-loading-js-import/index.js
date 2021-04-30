const button = document.querySelector('button');

button.addEventListener('click',(e)=>{
    e.preventDefault();
    button.style.display = "none";

    // Example 1
    import("./module.js")
        .then((object)=>{
            console.log(object.default())
            // const gallery = object.defualt;
            // gallery();
        })
        .catch((err)=>{
            console.log(err);
        })

    // Example 2

    // (async()=>{
    //     let {defualt: gallery} = await import("./module.js");
    //     gallery();
    // })()

    // Example 3

})