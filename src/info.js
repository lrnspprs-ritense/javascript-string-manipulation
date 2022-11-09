const usage = "Usage: crlf-convert [CR|LF|CRLF]";

const help = `${usage}\n\n
            Converts text between newline (${String.raw`\n`}), carriage return (${String.raw`\r`}), and combined\n
            (${String.raw`\r`}${String.raw`\n`}) line endings.\n\n
            Options:\n\n
            [CR|LF|CRLF]: Desired line ending\n\n
                CR is a carriage return character ${String.raw`\r`} (rare)\n
                LF is a line feed character ${String.raw`\n`} (common on Unix and macOS)\n
                CRLF is a combined ending ${String.raw`\r`}${String.raw`\n`} (common on Windows)\n
            Example:\n\n
                cat in.txt | crlf-convert LF > out.txt`;


console.log(help);
module.exports = {
  help,
  usage
};
