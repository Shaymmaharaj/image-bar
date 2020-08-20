const faker = require('faker')
const mysql = require('mysql')
const connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: 'nick',
    database:"photogallery"
})
  connection.connect()


  let listings = [];
  const seedImages = function(){ 
  //let imagesArray = [];
  // let captions = [];
  var randomNumberOfImages = faker.random.number({min: 5, max: 50})
  for(var i = 0; i <= randomNumberOfImages; i++){
    let num = faker.random.number({min:1, max:50})
    let imageUrl = `https://s3-us-west-1.amazonaws.com/fec-top-image-component/${num}.jpeg`
      imagesArray.push(imageUrl)
    connection.query(`INSERT INTO images (url) VALUES ("${imageUrl}")`);
    let randomCaption = faker.lorem.sentence();
  }
};
seedImages();


const seedListings = function(){
    for(var i = 0; i <= 100; i++){
      
    }
}

connection.end();
