const fs = require("fs");
const pkg = require("../../package.json");
const chalk = require("chalk");

const increaseVersion = () => {
  const pckg = pkg;
  const oldVersion = pckg.version;
  const versionArray = oldVersion.split(".");
  let newV = parseInt(versionArray[2], 10);
  newV++;
  const newVersion = `${versionArray[0]}.${versionArray[1]}.${newV}`;
  pckg.version = newVersion;
  fs.writeFileSync("./package.json", JSON.stringify(pckg, null, 4));
  console.log(
    chalk.magenta(`version increased from ${oldVersion} to ${newVersion}`)
  );
};

function versionup() {
  increaseVersion();
}
module.exports = versionup;
