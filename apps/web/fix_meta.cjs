const fs = require('fs');
const { execSync } = require('child_process');

const files = execSync('find src/app -name "page.tsx"').toString().split('\n').filter(Boolean);

for (const file of files) {
  if (file.includes('[slug]')) continue; // Skip industries/[slug]/page.tsx since we already fixed it
  
  let content = fs.readFileSync(file, 'utf8');
  
  // Find title
  let titleMatch = content.match(/title:\s*'([^']+)'/);
  let title = titleMatch ? titleMatch[1] : 'TechnoKraft Consultancy Services';
  
  // Find description
  let descMatch = content.match(/description:\s*'([^']+)'/);
  let description = descMatch ? descMatch[1] : 'TechnoKraft Consultancy Services engineers telecommunications infrastructure...';
  
  // Find the entire `export function meta` block
  const startIdx = content.indexOf('export function meta');
  if (startIdx !== -1) {
    let endIdx = content.indexOf('}', startIdx);
    // it might be nested, so we find the matching closing brace
    let openBraces = 0;
    for (let i = startIdx; i < content.length; i++) {
      if (content[i] === '{') openBraces++;
      if (content[i] === '}') {
        openBraces--;
        if (openBraces === 0) {
          endIdx = i;
          break;
        }
      }
    }
    
    const metaBlock = content.slice(startIdx, endIdx + 1);
    
    let metadataExport = `export const metadata = {
  title: '${title}',
  description: '${description}',
};`;

    content = content.replace(metaBlock, metadataExport);
  }
  
  // Clean up unused imports
  content = content.replace(/import type \{ Route \} from '\.\/\+types\/[^']+';\n?/g, '');
  content = content.replace(/import \{[^}]*(seo|absoluteUrl|siteOriginFrom)[^}]*\} from '@\/lib\/seo';\n?/g, '');
  
  fs.writeFileSync(file, content);
}
