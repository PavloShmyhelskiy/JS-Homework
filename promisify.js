function fetchUser(id, callback) {
	const users = {
		1: {
			uid: 1,
			name: 'John Doe',
			age: 22
		}
	};

	const selectedUser = users[id];

	selectedUser ? null : ()=> callback(new Error(`No User Found for ${selectedUser}`));

	setTimeout(function () {
		callback(null, selectedUser)
	}, 500)
}
function promisify(f){
  return function (...args){
    return new Promise((resolve, reject) => {
      function callback(err, selectedUser){
        if (err) { reject(err);}
        else {resolve(selectedUser);
      }
    }
    args.push(callback);
    f.call(this, ...args);
    });
  };
}
const promisifiedFetchUser = promisify(fetchUser);

promisifiedFetchUser(1)
 .then(response => console.log(`User data: ${response}`))
 .catch(error => console.log(`An error happened: ${error}`))