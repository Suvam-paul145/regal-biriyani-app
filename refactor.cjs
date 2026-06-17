const fs = require('fs');
const path = require('path');

const dir = './src/pages';
fs.readdirSync(dir).forEach(file => {
    if (!file.endsWith('.jsx')) return;
    let content = fs.readFileSync(path.join(dir, file), 'utf8');

    // 1. Replace Navigation with <Navbar />
    if (content.includes('<nav')) {
        content = content.replace(/<nav[\s\S]*?<\/nav>/, '<Navbar />');
        
        // Add import if not exists
        if (!content.includes('import Navbar')) {
            content = content.replace(/import React[^;]*;/, "$&\nimport Navbar from '../components/Navbar';");
        }
    }

    // 2. Make menu items properly scrollable in Home and Menu
    if (content.includes('grid-cols-1 md:grid-cols-12')) {
        content = content.replace(
            /className="grid grid-cols-1 md:grid-cols-12 gap-6"/g, 
            'className="flex overflow-x-auto hide-scrollbar gap-6 pb-6 w-full snap-x"'
        );
        content = content.replace(
            /className="md:col-span-8/g, 
            'className="min-w-[320px] md:min-w-[600px] flex-shrink-0 snap-start hover:-translate-y-2 hover:shadow-xl transition-all duration-300'
        );
        content = content.replace(
            /className="md:col-span-4/g, 
            'className="min-w-[280px] md:min-w-[350px] flex-shrink-0 snap-start hover:-translate-y-2 hover:shadow-xl transition-all duration-300'
        );
    }
    
    // Add hover effects to all general cards
    content = content.replace(
        /className="([^"]*royal-shadow[^"]*)"/g, 
        (match, p1) => {
            if (!p1.includes('hover:-translate-y')) {
                return `className="${p1} hover:-translate-y-2 hover:shadow-xl transition-all duration-300"`;
            }
            return match;
        }
    );

    fs.writeFileSync(path.join(dir, file), content);
});

console.log('Refactoring complete.');
