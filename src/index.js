// Create a tagged template lf`...` that formats text using LF line endings.
var lf = () => {};

// Create a tagged template cr`...` that formats text using CR line endings.
var cr = () => {};

// Create a tagged template crlf`...` that formats text using CRLF line endings.
var crlf = () => {};

const transformLineEnding = (string, lineEnding) => {
  string = (string != null ? string.toString() : "");

  if (lineEnding === LineEndings.CR) {
    string = replaceCRLF(string, "\r");
    string = replaceLF(string, "\r");
  } else if (lineEnding === LineEndings.LF) {
    string = replaceCRLF(string, "\n");
    string = replaceCR(string, "\n");
  } else if (lineEnding === LineEndings.CRLF) {
    string = replaceCR(string, "\r\n");
    string = replaceLF(string, "\r\n");
  }
  return string;
};

const LineEndings = {
  CR: "CR",
  LF: "LF",
  CRLF: "CRLF"
};

function replaceCR(string, newEnding) {
return string.replace(/(\r+)([^\n]|$)/g, (_match, p1, p2) => {
  return `${newEnding.repeat(p1.length)}${p2}`
})}

function replaceLF(string, newEnding) {
return string.replace(/([^\r]|^)(\n+)/g, (_match, p1, p2) => {
  return `${p1}${newEnding.repeat(p2.length)}`;
})}

function replaceCRLF(string, newEnding) { return string.replace(/\r\n/g, `${newEnding}`)}

const LineEndingReplacements = {

};

module.exports = {
  lf,
  cr,
  crlf,
  LineEndings,
  transformLineEnding
};
