const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function main() {
  rl.question('Input numbers or words with spaces (or type "exit" to quit, "new" to input new words)',
    (input) => {
      inputArray = input.split(' ');
      rl.question(
        '1. Sort words alphabetically\n2. Show numbers from lesser to greater\n3. Show numbers from bigger to smaller\n4. Display words in ascending order by the number of letters in the word\n5. Show only unique words\n6. Display only unique values from the set of words and numbers entered by the user\nInput number to choose operation: ',
        (choice) => {
          if (choice === 'exit') {
            rl.close();
            return;
          } else {
            let result = inputArray;

            switch (parseInt(choice)) {
              case 1:
                result = result.sort();
                break;
              case 2:
                result = result.sort((a, b) => parseFloat(a) - parseFloat(b));
                break;
              case 3:
                result = result.sort((a, b) => parseFloat(b) - parseFloat(a));
                break;
              case 4:
                result = result.sort((a, b) => a.length - b.length);
                break;
              case 5:
                result = result.filter((value, index, self) => self.indexOf(value) === index);
                break;
              case 6:
                result = Array.from(new Set(result));
                break;
              default:
                console.log('Number or word doesn`t exist, or something went wrong.');
                break;
            }
            console.log('Result: ', result.join(' '));
            main();
          }
        }
      );
    });
}


main();
