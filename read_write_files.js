const fs =  require('fs');

//write files

// fs.writeFile('./blog.txt','Hello world !', () => {
//     console.log("\n file was created \n");
// })

// //read files

// fs.readFile('./blog.txt', (err,data) => {
//     if(err) console.log(err);
//     console.log(data.toString());
// })

// // making directories

// if(!fs.existsSync('blog'))
// {
//     fs.mkdir('./blog', (err) => {
//        if(err) { console.log(err); };
//         console.log("------created--------");
//      } );
// }
// else {
//     fs.rmdir('./blog', (err) => {if(err) console.log(err);
//     console.log("\n ---Dir removed -----");});
// }

