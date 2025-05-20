import fs from 'fs/promises';
import { EOL } from 'os';
import path from 'path';

const TEXT_EXTENSIONS = new Set([
    '.js',
    '.jsx',
    '.cjs',
    '.mjs',
    '.ts',
    '.tsx',
    '.cts',
    '.mts',
    '.css',
    '.scss',
    '.sass',
    '.html',
    '.php',
    '.json',
]);


function createHeader(filePath) {
    const separator = '-'.repeat(20);

    return `/* ${separator} ${filePath} ${separator} */` + EOL;
}

async function processDirectory(dirPath, outputFilePath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });

  for (const entry of entries) {
      const fullPath = path.join(dirPath, entry.name);

      if (entry.isDirectory()) {
          await processDirectory(fullPath, outputFilePath);
      } else if (entry.isFile()) {
          const ext = path.extname(entry.name).toLowerCase();

          if (TEXT_EXTENSIONS.has(ext)) {
            const absolutePath = path.resolve(fullPath);

            const header = createHeader(absolutePath);

            const content = await fs.readFile(fullPath, 'utf8');

            const outputBlock = `${header}${content}` + EOL + EOL;

            await fs.appendFile(outputFilePath, outputBlock, 'utf8');
          }
      }
  }
}

async function main() {
    const startDir = process.argv[2];
    const outputFileName = process.argv[3];

    if (!startDir || !outputFileName) {
        process.exit(1);
    }

    const absoluteStartDir = path.resolve(startDir);
    const absoluteOutputFilePath = path.resolve(outputFileName);

    const stats = await fs.stat(absoluteStartDir);

    if (!stats.isDirectory()) {
          process.exit(1);
    }

    await fs.writeFile(absoluteOutputFilePath, '', 'utf8');

    await processDirectory(absoluteStartDir, absoluteOutputFilePath);
}

main();
