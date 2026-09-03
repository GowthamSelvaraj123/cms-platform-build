const fs = require('fs');
const path = require('path');

const uiFiles = [
  'AnnouncementBar',
  'Breadcrumbs',
  'Button',
  'Card',
  'ComparisonTable',
  'ContactForm',
  'CookieConsent',
  'CustomHTML',
  'DownloadList',
  'Dummy',
  'FormBuilder',
  'ImageGallery',
  'LightboxGallery',
  'LogoMarquee',
  'Map',
  'ModalPopup',
  'Newsletter',
  'PDFViewer',
  'Pagination',
  'PricingTable',
  'ReviewBadges',
  'SearchFilterBar',
  'Section',
  'SocialLinks',
  'StatisticsCounters'
];

const sectionFiles = [
  'AboutIntro',
  'BeforeAfterSlider',
  'Benefits',
  'BentoGrid',
  'BlogGrid',
  'CTABanner',
  'CardCarousel',
  'CaseStudyGrid',
  'CenteredBanner',
  'Certifications',
  'ClientLogos',
  'ContactInformation',
  'EventsGrid',
  'FAQAccordion',
  'FeaturesGrid',
  'Footer',
  'FooterCTA',
  'FullWidthBanner',
  'Grid3Column',
  'Grid4Column',
  'Header',
  'HeroSection',
  'HeroSlider',
  'Industries',
  'MasonryGrid',
  'NarrowCenteredColumn',
  'NewsGrid',
  'PageHeader',
  'PartnersLogos',
  'PortfolioGrid',
  'Process',
  'ProductsGrid',
  'RelatedContent',
  'RichText',
  'ServiceFeature',
  'ServicesGrid',
  'SidebarLeft3070',
  'SidebarRight7030',
  'Split5050',
  'TabsSection',
  'TeamGrid',
  'TeamProfile',
  'Technologies',
  'TestimonialCarousel',
  'Testimonials',
  'Timeline',
  'VideoSection'
];

const srcDir = path.join(__dirname, 'src');
const componentsDir = path.join(srcDir, 'components');
const uiDir = path.join(componentsDir, 'ui');
const sectionsDir = path.join(componentsDir, 'sections');

// Create directories
if (!fs.existsSync(uiDir)) fs.mkdirSync(uiDir, { recursive: true });
if (!fs.existsSync(sectionsDir)) fs.mkdirSync(sectionsDir, { recursive: true });

function walkSync(dir, callback) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filepath = path.join(dir, file);
    const stat = fs.statSync(filepath);
    if (stat.isDirectory()) {
      walkSync(filepath, callback);
    } else {
      callback(filepath);
    }
  }
}

// 1. Update imports in all .ts and .tsx files
console.log('Updating imports...');
walkSync(srcDir, (filepath) => {
  if (filepath.endsWith('.ts') || filepath.endsWith('.tsx')) {
    let content = fs.readFileSync(filepath, 'utf8');
    let changed = false;

    // Match @/components/something (we need to be careful with quotes)
    // RegExp: /@\/components\/([A-Za-z0-9_]+)/g
    const newContent = content.replace(/@\/components\/([A-Za-z0-9_]+)/g, (match, componentName) => {
      if (uiFiles.includes(componentName)) {
        changed = true;
        return `@/components/ui/${componentName}`;
      } else if (sectionFiles.includes(componentName)) {
        changed = true;
        return `@/components/sections/${componentName}`;
      }
      return match;
    });

    if (changed) {
      fs.writeFileSync(filepath, newContent, 'utf8');
      console.log(`Updated imports in: ${filepath}`);
    }
  }
});

// 2. Move files
console.log('\nMoving components...');
const allComponentFiles = fs.readdirSync(componentsDir);
for (const file of allComponentFiles) {
  if (!file.endsWith('.tsx') && !file.endsWith('.ts')) continue;
  
  const componentName = file.replace(/\.tsx?$/, '');
  const oldPath = path.join(componentsDir, file);
  
  if (uiFiles.includes(componentName)) {
    const newPath = path.join(uiDir, file);
    fs.renameSync(oldPath, newPath);
    console.log(`Moved ${file} to ui/`);
  } else if (sectionFiles.includes(componentName)) {
    const newPath = path.join(sectionsDir, file);
    fs.renameSync(oldPath, newPath);
    console.log(`Moved ${file} to sections/`);
  }
}

console.log('Done!');
