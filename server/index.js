var api = require('./src/api.js').app;
var users = require('./src/users.json');
var tester = require('./src/tester.json');
var fs = require('fs');
var data2;

api.get('/', function (request, response) {
  response.json('NodeJS REST API');
});

api.get('/users', function (request, response) {
  response.json(users);
});

api.get('/tester', function (request, response) {
    response.json(tester);
});

api.put('/users', function (request, response) {
  users[users.length] = request.body;
  response.json('User was saved succesfully');

});

api.put('/tester', function (request, response) {
    tester[tester.length] = request.body;
    response.json('tester was saved succesfully');

    //fs.writeFileSync(tester, JSON.stringify(request));

    //fs.writeFileSync('./src/tester.json', JSON.stringify(request.body), function (err) {
    //    if (err) throw err;
    //    console.log('complete2');
    //}
    //);


    fs.writeFileSync('./src/tester.json', JSON.stringify(tester), function (err) {
        if (err) throw err;
        console.log('complete1');
    }
    );



    console.log('complete2');
    //thing2(data);



    //fs.writeFile('./src/tester.json', JSON.stringify(data), function (err) {
    //    if (err) throw err;
    //    console.log('complete');
    //}
    //);


    //tester[tester.length] = request.body;
    //response.json('tester was saved succesfully');



});

function thing2(dataa) {
    
    fs.writeFileSync(tester, JSON.stringify(dataa));

}





api.delete('/users/:index', function (request, response) {
  users.splice(request.params.index, 1);
  response.json('User with index ' + request.params.index + ' was deleted');
});

api.listen(3000, function () {
  console.log('Server running @ localhost:3000');
});






//const sql = require('mssql/msnodesqlv8');

//var config={
//    database: 'TDbase',
//    server: 'DESKTOP-A5P03KC',
//    driver: 'msnodesqlv8',
//    options: {
//        trustedConnection:true
//    }
//};

//sql.connect(config, function (err) {


//    if (err) console.log(err);
//    //var request = new sql.Request();

//    //request.query('select * from thing', function (err, recordSet) {

//    //    if (err) console.log(err);
//    //     else  console.log(recordSet);
        

//    //})

//})

