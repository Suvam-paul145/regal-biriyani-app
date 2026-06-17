const fs = require('fs');
const path = require('path');

const dir = './src/pages';
fs.readdirSync(dir).forEach(file => {
    if (!file.endsWith('.jsx')) return;
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // Fix malformed img tags
    content = content.replace(/\/ className="object-cover w-full h-full rounded-lg shadow-md" \/>/g, 'className="object-cover w-full h-full rounded-lg shadow-md" />');
    
    // Fix {t('heroSubtitle')}br /> in Home.jsx
    content = content.replace(/\{t\('heroSubtitle'\)\}br \/>/g, "{t('heroSubtitle')}<br />");

    fs.writeFileSync(path.join(dir, file), content);
});
console.log('Fixed JSX syntax errors');
