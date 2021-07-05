import fs from 'fs';
import path from 'path';
import chalk from 'chalk';
import rootPath from 'app-root-path';
import generateRandomString from './stringGenerator';

function createFile() {
  const secretString = generateRandomString();
  const stream = fs.createWriteStream(path.join(rootPath.path, '.env'));

  stream.once('open', () => {
    // APP
    stream.write(`# App`);
    stream.write('\n\n');
    stream.write(`APP_URL="http://127.0.0.1"`);
    stream.write('\n');
    stream.write(`APP_PORT=8080`);
    stream.write('\n');
    stream.write(`NODE_ENV="development"`);
    stream.write('\n\n');

    // AUTH
    stream.write(`# Auth`);
    stream.write('\n\n');
    stream.write(`APP_SECRET="${secretString}"`);
    stream.write('\n\n');

    // Info
    stream.write(`# Info`);
    stream.write('\n\n');
    stream.write(`APP_NAME="Religare Vídeo API"`);
    stream.write('\n');
    stream.write(`COMPANY="RELIGARE"`);
    stream.write('\n\n');

    // DigitalOcean s3
    stream.write(`# DigitalOcean 3`);
    stream.write('\n\n');
    stream.write(`S3_ENDPOINT=""`);
    stream.write('\n');
    stream.write(`S3_BUCKET=""`);
    stream.write('\n');
    stream.write(`S3_ACL="public-read"`);
    stream.write('\n');
    stream.write(`S3_ACCESS_KEY=""`);
    stream.write('\n');
    stream.write(`S3_SECRET_ACCESS_KEY=""`);
    stream.write('\n\n');

    // Sentry
    stream.write('# Sentry');
    stream.write('\n\n');
    stream.write('SENTRY_DSN=""');
    stream.write('\n\n');

    // Config
    stream.write('# Config');
    stream.write('\n\n');
    stream.write('SUBDIRECTORY=""');

    stream.end();

    console.log(chalk.hex('#2ed573').bold('\nSuccessfully created file\n'));
  });
}

createFile();
