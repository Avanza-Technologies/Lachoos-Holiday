import fs from 'fs';
import https from 'https';
import path from 'path';

const images = {
  'wayanad-1.jpg': 'https://images.unsplash.com/photo-1590050752117-23a9d7f28243?auto=format&fit=crop&w=1200&q=85',
  'wayanad-2.jpg': 'https://static.toiimg.com/photo/82684826/82684826.jpg',
  'wayanad-3.jpg': 'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?auto=format&fit=crop&w=1200&q=85'
};

const dir = path.join(process.cwd(), 'public', 'images', 'packages');

if (!fs.existsSync(dir)){
    fs.mkdirSync(dir, { recursive: true });
}

async function download(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
          download(response.headers.location, dest).then(resolve).catch(reject);
          return;
      }
      response.pipe(file);
      file.on('finish', () => {
          file.close();
          resolve();
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function run() {
  for (const [filename, url] of Object.entries(images)) {
    console.log(`Downloading ${filename}...`);
    try {
        await download(url, path.join(dir, filename));
        console.log(`Successfully downloaded ${filename}`);
    } catch (e) {
        console.error(`Failed to download ${filename}: ${e.message}`);
    }
  }
}

run();
