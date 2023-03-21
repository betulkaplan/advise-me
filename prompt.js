const { writeFile } = require("fs");

const pkgJsonFile = "./package.json";
const pkgJsonData = require(pkgJsonFile);

function updatePackageJson(ticketNumber) {
  pkgJsonData.commmit_sha = ticketNumber;
  const newPkgJsonData = JSON.stringify(pkgJsonData, null, 2) + "\n";

  writeFile(pkgJsonFile, newPkgJsonData, "utf8", (writeFileError) => {
    if (writeFileError) throw writeFileError;
  });
}

let message = process.argv.slice(2)[0];
console.log(message);
updatePackageJson(message);
