var prompt = require('prompt');
var mysql      = require('mysql');
var connection = mysql.createConnection({
 host     : 'localhost',
 user     : 'semaj5588',
 password : 'password',
 database : 'bamazon'
});


connection.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  	console.log('Connection established');
});

connection.query('SELECT * FROM products',function(err,rows){
	if(err) throw err;

	console.log('Data received from Db:\n');
	console.log(rows);
});

// Prompt
prompt.start();

prompt.get(['username', 'email'], function (err, result) {
    if (err) { return onErr(err); }
    console.log('Command-line input received:');
    console.log('  Username: ' + result.username);
    console.log('  Email: ' + result.email);
});

  function onErr(err) {
    console.log(err);
    return 1;
}