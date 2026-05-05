import fs from 'fs';
import https from 'https';
import path from 'path';

const images = {
  // Munnar
  'munnar-1.jpg': 'https://images.unsplash.com/photo-1593693397690-362ae9666ec3?auto=format&fit=crop&w=1200&q=85',
  'munnar-2.jpg': 'https://images.unsplash.com/photo-1597530831278-204120802611?auto=format&fit=crop&w=1200&q=85',
  'munnar-3.jpg': 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1200&q=85',
  
  // Kochi / Athirappilly
  'kochi-1.jpg': 'https://images.unsplash.com/photo-1590117070146-5f502202619c?auto=format&fit=crop&w=1200&q=85',
  'kochi-2.jpg': 'https://images.unsplash.com/photo-1589982840479-5093527f6a4e?auto=format&fit=crop&w=1200&q=85',
  'kochi-3.jpg': 'https://images.unsplash.com/photo-1593179241557-bce039779953?auto=format&fit=crop&w=1200&q=85',

  // Kumarakom
  'kumarakom-1.jpg': 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85',
  'kumarakom-2.jpg': 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1200&q=85',
  'kumarakom-3.jpg': 'https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?auto=format&fit=crop&w=1200&q=85',

  // Thekkady
  'thekkady-1.jpg': 'https://images.unsplash.com/photo-1597530831278-204120802611?auto=format&fit=crop&w=1200&q=85',
  'thekkady-2.jpg': 'https://images.unsplash.com/photo-1581067720297-56134b5e9a47?auto=format&fit=crop&w=1200&q=85',
  'thekkady-3.jpg': 'https://images.unsplash.com/photo-1590050752117-23a9d7f28243?auto=format&fit=crop&w=1200&q=85',

  // Varkala
  'varkala-1.jpg': 'https://images.unsplash.com/photo-1599933023823-978016a7328c?auto=format&fit=crop&w=1200&q=85',
  'varkala-2.jpg': 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1200&q=85',
  'varkala-3.jpg': 'https://images.unsplash.com/photo-1582298538104-fe2e74c27f59?auto=format&fit=crop&w=1200&q=85',

  // Bekal
  'bekal-1.jpg': 'https://images.unsplash.com/photo-1603223000572-8877f9859f7b?auto=format&fit=crop&w=1200&q=85',
  'bekal-2.jpg': 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=1200&q=85',
  'bekal-3.jpg': 'https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?auto=format&fit=crop&w=1200&q=85',

  // Gavi
  'gavi-1.jpg': 'https://images.unsplash.com/photo-1588665977926-21808006e232?auto=format&fit=crop&w=1200&q=85',
  'gavi-2.jpg': 'https://images.unsplash.com/photo-1597530831278-204120802611?auto=format&fit=crop&w=1200&q=85',
  'gavi-3.jpg': 'https://images.unsplash.com/photo-1590050752117-23a9d7f28243?auto=format&fit=crop&w=1200&q=85',

  // Sabarimala
  'sabarimala-1.jpg': 'https://img.mathrubhumi.com/view/acePublic/alias/contentid/1pxmeox4wlgoob3n9wb/0/sabarimala-jpg.webp?f=1x1&w=1080&q=0.8',
  'sabarimala-2.jpg': 'https://images.unsplash.com/photo-1590050752117-23a9d7f28243?auto=format&fit=crop&w=1200&q=85',
  'sabarimala-3.jpg': 'https://images.unsplash.com/photo-1588665977926-21808006e232?auto=format&fit=crop&w=1200&q=85'
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
