const fs = require('fs');
const { execSync } = require('child_process');

const files = execSync('find src/app -name "page.tsx"').toString().split('\n').filter(Boolean);

for (const file of files) {
  let content = fs.readFileSync(file, 'utf8');
  
  if (content.match(/description: '[^']+',?\nexport default function/)) {
    content = content.replace(/,\nexport default function/g, '};\n\nexport default function');
    content = content.replace(/description: '([^']+)'\nexport default function/g, "description: '$1'\n};\n\nexport default function");
    fs.writeFileSync(file, content);
  }
}
