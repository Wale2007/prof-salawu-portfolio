const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\dell\\.gemini\\antigravity\\brain\\d970f3ee-786a-4302-9ee8-8aac7f2b5852\\media__1777817764738.jpg';
const dest = 'C:\\Users\\dell\\.gemini\antigravity\\scratch\\prof-salawu-portfolio\\public\\prof-salawu.jpg';

try {
    fs.copyFileSync(src, dest);
    console.log('Successfully copied image');
} catch (err) {
    console.error('Error copying file:', err);
}
