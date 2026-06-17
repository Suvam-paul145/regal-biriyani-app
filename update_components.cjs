const fs = require('fs');
const path = require('path');

const destDir = './src/pages';
const files = fs.readdirSync(destDir);

files.forEach(file => {
    if (!file.endsWith('.jsx')) return;
    let content = fs.readFileSync(path.join(destDir, file), 'utf8');

    // Make sure Link is imported
    if (!content.includes('import { Link }')) {
        content = content.replace("import { motion } from 'framer-motion';", "import { motion } from 'framer-motion';\nimport { Link } from 'react-router-dom';");
    }

    // Replace <a> tags with <Link> based on text content roughly, or just replace all <a>
    content = content.replace(/<a([^>]*)href="[^"]*"([^>]*)>([\s\S]*?)<\/a>/g, (match, p1, p2, text) => {
        let to = '/';
        const t = text.toLowerCase();
        if (t.includes('menu')) to = '/menu';
        else if (t.includes('gallery')) to = '/gallery';
        else if (t.includes('about')) to = '/about';
        else if (t.includes('contact')) to = '/contact';
        else if (t.includes('order')) to = '/menu';
        return `<Link${p1}to="${to}"${p2}>${text}</Link>`;
    });

    // Replace images
    let imgCounter = 1;
    content = content.replace(/<img([^>]*)src="[^"]*"([^>]*)>/gi, (match, p1, p2) => {
        const src = `/img/img${imgCounter}.jpg`;
        imgCounter = imgCounter >= 7 ? 1 : imgCounter + 1;
        return `<img${p1}src="${src}"${p2} className="object-cover w-full h-full rounded-lg shadow-md" />`;
    });

    // Replace any empty hrefs remaining in case regex missed
    content = content.replace(/href="#"/g, 'to="/"');

    // Add facebook details if it's the home page
    if (file === 'Home.jsx' || file === 'About.jsx') {
        content = content.replace(/Lorem ipsum dolor sit amet[^<]*/gi, "Experience the magic of authentic biryani, lovingly crafted with the finest handpicked spices. We are special authentic Biryani, serving you from our locations in Phulia and Shantipur.");
    }
    
    // Replace <button> tags that might have class="..."> to whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
    content = content.replace(/<button /g, '<motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} ');
    content = content.replace(/<\/button>/g, '</motion.button>');

    fs.writeFileSync(path.join(destDir, file), content);
});

console.log("Components updated.");
