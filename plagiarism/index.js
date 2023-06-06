const fs = require('fs');
const path = require('path');
const levenshtein = require('js-levenshtein');

function compareFiles(file1, file2) {
  const text1 = fs.readFileSync(file1, 'utf8');
  const text2 = fs.readFileSync(file2, 'utf8');
  const distance = levenshtein(text1, text2);
  
  const maxLength = Math.max(text1.length, text2.length);
  const similarityRatio = (maxLength - distance) / maxLength;

  return similarityRatio;
}

function checkPlagiarism(folderPath) {
  fs.readdir(folderPath, (err, files) => {
    if (err) {
      console.error('Error reading folder:', err);
      return;
    }

    const numFiles = files.length;

    for (let i = 0; i < numFiles; i++) {
      for (let j = i + 1; j < numFiles; j++) {
        const file1 = path.join(folderPath, files[i]);
        const file2 = path.join(folderPath, files[j]);
        const similarity = compareFiles(file1, file2);

        console.log(`Comparing ${files[i]} and ${files[j]}:`);
        console.log(`Similarity ratio: ${similarity}`);

        if (similarity > 0.8) {
          console.log('Possible plagiarism detected!\n');
        }
      }
    }
  });
}

// Exemplo de uso
const folderPath = path.resolve(__dirname, 'arquivos');
checkPlagiarism(folderPath);