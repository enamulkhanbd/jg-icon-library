const fs = require('fs');
const path = require('path');

const ICONS_DIR = path.join(__dirname, 'Icons');
const ICONS_JSON_PATH = path.join(__dirname, 'Icons.json');

const WEIGHT_SUFFIXES = ['-thin', '-light', '-bold', '-fill', '-duotone'];

/** PascalCase (e.g. IconAddressBook) -> kebab-case (e.g. address-book) */
function pascalToKebab(str) {
  if (!str.startsWith('Icon')) return null;
  const pascal = str.slice(4);
  return pascal.replace(/([A-Z])/g, (m, c) => '-' + c.toLowerCase()).slice(1);
}

/** kebab-case -> PascalCase (e.g. address-book -> AddressBook) */
function kebabToPascal(kebab) {
  return kebab
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
    .join('');
}

/** kebab-case -> Title (e.g. address-book -> Address Book) */
function kebabToTitle(kebab) {
  return kebab
    .split('-')
    .map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLowerCase())
    .join(' ');
}

/** Title -> multiple tags (e.g. "Attach File" -> "attach | file | attach file") */
function titleToMultiTag(title) {
  const words = title.split(/\s+/).map((w) => w.toLowerCase()).filter(Boolean);
  const full = title.toLowerCase();
  if (words.length <= 1) return full;
  return words.join(' | ') + ' | ' + full;
}

/** Get unique base icon names from Icons folder (strip weight suffix) */
function getFolderBaseNames() {
  const files = fs.readdirSync(ICONS_DIR).filter((f) => f.endsWith('.svg'));
  const bases = new Set();
  for (const f of files) {
    let base = f.replace(/\.svg$/, '');
    for (const w of WEIGHT_SUFFIXES) {
      if (base.endsWith(w)) {
        base = base.slice(0, -w.length);
        break;
      }
    }
    bases.add(base);
  }
  return bases;
}

function main() {
  const folderBases = getFolderBaseNames();
  const folderKebabSet = new Set([...folderBases].sort());

  const jsonRaw = fs.readFileSync(ICONS_JSON_PATH, 'utf8');
  const entries = JSON.parse(jsonRaw);
  if (!Array.isArray(entries)) throw new Error('Icons.json must be an array');

  const byKebab = new Map();
  for (const entry of entries) {
    const kebab = pascalToKebab(entry.name);
    if (kebab) byKebab.set(kebab, { name: entry.name, title: entry.title, tag: entry.tag });
  }

  const result = [];
  for (const kebab of folderKebabSet) {
    const existing = byKebab.get(kebab);
    const name = 'Icon' + kebabToPascal(kebab);
    const title = kebabToTitle(kebab);
    const tag = titleToMultiTag(existing ? existing.title : title);
    if (existing) {
      result.push({ name: existing.name, title: existing.title, tag });
    } else {
      result.push({ name, title, tag });
    }
  }

  result.sort((a, b) => a.name.localeCompare(b.name));

  fs.writeFileSync(ICONS_JSON_PATH, JSON.stringify(result, null, 2) + '\n', 'utf8');
  console.log('Icons.json updated:', result.length, 'entries (folder base icons:', folderKebabSet.size, ')');
}

main();
