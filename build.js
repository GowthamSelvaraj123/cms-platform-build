const fs = require('fs');
const path = require('path');

const pages = [
  'Home', 'About Us', 'Services', 'Service Details', 'Products', 'Product Details', 
  'Portfolio', 'Portfolio Details', 'Blog', 'Blog Details', 'News', 'News Details', 
  'Events', 'Event Details', 'Gallery', 'Videos', 'Testimonials', 'Team', 
  'Team Member Details', 'Careers', 'Job Details', 'FAQ', 'Contact Us', 'Enquiry', 
  'Pricing', 'Pricing Details', 'Partners', 'Clients', 'Case Studies', 
  'Case Study Details', 'Downloads', 'Resources', 'Landing Page', 'Thank You', 
  'Coming Soon', 'Maintenance', 'Search', 'Sitemap', 'Privacy Policy', 
  'Terms & Conditions', 'Cookie Policy', 'Disclaimer', 'Refund Policy', 'Shipping Policy'
];

// Existing pages that we shouldn't overwrite or generate dummy content for 
// (unless they are incomplete like about.html which we WILL overwrite for a full structure)
const existingPages = ['index.html', 'login.html', 'signup.html', 'resetpassword.html', 'forgotpassword.html'];

const templatePath = path.join(__dirname, 'template.html');
let template = '';

try {
  template = fs.readFileSync(templatePath, 'utf-8');
} catch (error) {
  console.error("Error reading template.html", error);
  process.exit(1);
}

// Convert "About Us" to "about-us.html"
function toFilename(title) {
  if (title === 'Home') return 'index.html'; // Special case, but we will skip it
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.html';
}

console.log("Generating CMS Pages...");

let count = 0;
pages.forEach(pageTitle => {
  const filename = toFilename(pageTitle);

  // Skip files we explicitly want to preserve
  if (existingPages.includes(filename) && filename === 'index.html') {
      console.log(`Skipping existing core page: ${filename}`);
      return;
  }

  const fileContent = template.replace(/{{TITLE}}/g, pageTitle);
  const filePath = path.join(__dirname, filename);
  
  fs.writeFileSync(filePath, fileContent, 'utf-8');
  console.log(`Created: ${filename}`);
  count++;
});

console.log(`\nSuccessfully built ${count} pages!`);
