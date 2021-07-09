const fs = require('fs');
const { hashElement } = require('folder-hash');

const options = {
  files: { exclude: ['.gitignore'] },
};

console.log('Creating a hash over the current folder:');
hashElement('./build/images', options)
  .then(hash => {
    console.log(hash.toString());
    try {
      const data = fs.writeFileSync('./build/resources.json', JSON.stringify(hash));
      //file written successfully
    } catch (err) {
      console.error(err);
    }
  })
  .catch(error => {
    return console.error('hashing failed:', error);
  });
