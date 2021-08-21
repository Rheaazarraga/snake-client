// Stores the active TCP connection object.
let connection;

const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }

  if (key === 'w') {
  connection.write('Move: up');
  } 
  
  if (key === 'a') {
    connection.write('Move: left');
  } 

  if (key ==='s') {
  connection.write('Move: down')
  } 
  
  if (key === 'd') {
  connection.write('Move: right');
  }

  if (key === '1') {
    connection.write('Say: SsSssSs');
  }

  if (key === '2') {
    connection.write('Say: I can\'t be defeated!');
  }

  if (key === '3') {
    connection.write('Say: nom nom nom');
  }

  if (key === '4') {
    connection.write('Say:❤️❤️❤️ ');
  }

  if (key === '5') {
    connection.write('Say: HAHA you died');
  }

 };


 const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.on('data', handleUserInput);
  stdin.resume();
  return stdin;
};


module.exports = { setupInput };