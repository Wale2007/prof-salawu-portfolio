const fs = require('fs');
const path = require('path');

const src = path.join(__dirname, 'profSALAWU.jpg');
const dest = path.join(__dirname, 'public', 'prof-salawu.jpg');

try {
    if (fs.existsSync(src)) {
        fs.copyFileSync(src, dest);
        console.log('Successfully copied image from root to public/');
    } else {
        console.error('Source file not found at:', src);
    }
} catch (err) {
    console.error('Error copying file:', err);
}
