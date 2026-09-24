const fs = require('fs');
const { execSync } = require('child_process');

const files = execSync('find src/app -name "page.tsx"').toString().split('\n').filter(Boolean);

for (const file of files) {
  if (file.includes('[slug]')) continue;
  
  let content = fs.readFileSync(file, 'utf8');
  
  // My previous script left stuff like:
  // export const metadata = {
  //   title: '...',
  //   description: '...',
  // };: Route.MetaArgs) {
  //   const origin = ...
  //   ...
  // }
  
  // I will use regex to find `};: Route.MetaArgs) {` and remove everything until the final `}` before the next `export default function`
  
  const match = content.match(/\};\s*:\s*Route\.MetaArgs\)\s*\{[\s\S]*?(?=export default function)/);
  if (match) {
    content = content.replace(match[0], '');
    fs.writeFileSync(file, content);
  }
}
