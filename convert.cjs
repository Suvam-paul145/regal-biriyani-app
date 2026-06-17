const fs = require('fs');
const path = require('path');

const srcDir = './temp_html';
const destDir = './src/pages';

if (!fs.existsSync(destDir)) fs.mkdirSync(destDir, { recursive: true });

const files = fs.readdirSync(srcDir);
let imgCounter = 1;

files.forEach(file => {
    if (!file.endsWith('.html')) return;
    let content = fs.readFileSync(path.join(srcDir, file), 'utf8');
    
    // Extract everything inside <body>
    const bodyMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
    if (!bodyMatch) return;
    let body = bodyMatch[1];
    
    // Convert class= to className=
    body = body.replace(/class=/g, 'className=');
    body = body.replace(/for=/g, 'htmlFor=');
    body = body.replace(/style="([^"]*)"/g, ""); // remove inline styles

    // Fix <br> tags
    body = body.replace(/<br>/gi, '<br />');
    body = body.replace(/<hr>/gi, '<hr />');
    
    // SVG attributes
    body = body.replace(/stroke-width/g, 'strokeWidth');
    body = body.replace(/stroke-linecap/g, 'strokeLinecap');
    body = body.replace(/stroke-linejoin/g, 'strokeLinejoin');
    body = body.replace(/fill-rule/g, 'fillRule');
    body = body.replace(/clip-rule/g, 'clipRule');

    // Remove comments
    body = body.replace(/<!--[\s\S]*?-->/g, '');
    
    // Remove <style> blocks (we will handle css globally or rely on tailwind)
    body = body.replace(/<style>[\s\S]*?<\/style>/g, '');

    // Links: Replace <a href="#"> or similar with <Link>
    body = body.replace(/<a\b([^>]*)href="([^"]*)"([^>]*)>([\s\S]*?)<\/a>/g, (match, p1, href, p2, text) => {
        let to = '/';
        const t = text.toLowerCase();
        if (t.includes('menu') || t.includes('order')) to = '/menu';
        else if (t.includes('gallery')) to = '/gallery';
        else if (t.includes('about')) to = '/about';
        else if (t.includes('contact')) to = '/contact';
        return `<Link${p1}to="${to}"${p2}>${text}</Link>`;
    });

    // Replace images and make sure they are properly closed
    body = body.replace(/<img\b([^>]*?)>/gi, (match, attrs) => {
        // Strip out existing src and ending slash if present
        let cleanAttrs = attrs.replace(/src="[^"]*"/i, '');
        if (cleanAttrs.endsWith('/')) {
            cleanAttrs = cleanAttrs.slice(0, -1);
        }
        const src = `/img/img${imgCounter}.jpg`;
        imgCounter = imgCounter >= 7 ? 1 : imgCounter + 1;
        return `<img${cleanAttrs} src="${src}" />`;
    });
    
    // Fix inputs
    body = body.replace(/<input\b([^>]*?)>/gi, (match, attrs) => {
        let cleanAttrs = attrs;
        if (cleanAttrs.endsWith('/')) {
            cleanAttrs = cleanAttrs.slice(0, -1);
        }
        return `<input${cleanAttrs} />`;
    });

    // Add facebook details
    if (file === 'Home.html' || file === 'About.html') {
        body = body.replace(/Lorem ipsum dolor sit amet[^<]*/gi, "Experience the magic of authentic biryani, lovingly crafted with the finest handpicked spices. We are special authentic Biryani, serving you from our locations in Phulia and Shantipur.");
    }

    // Add framer motion to buttons
    body = body.replace(/<button /g, '<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} ');
    body = body.replace(/<\/button>/g, '</motion.button>');

    const componentName = file.replace('.html', '');
    const jsx = `
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ${componentName} = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-background min-h-screen text-on-surface"
        >
            ${body}
        </motion.div>
    );
};

export default ${componentName};
`;
    fs.writeFileSync(path.join(destDir, componentName + '.jsx'), jsx);
});
console.log("Conversion complete.");
