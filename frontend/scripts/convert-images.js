const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Directories
const sourceDir = path.join(__dirname, '../src/assets/projects');
const targetDir = path.join(__dirname, '../src/assets/projects-optimized');

// Statistics
let stats = {
  totalFiles: 0,
  converted: 0,
  failed: 0,
  originalSize: 0,
  optimizedSize: 0
};

/**
 * Recursively get all image files from a directory
 */
function getImageFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      getImageFiles(filePath, fileList);
    } else if (/\.(png|jpg|jpeg)$/i.test(file)) {
      fileList.push(filePath);
    }
  });

  return fileList;
}

/**
 * Convert a single image to WebP
 */
async function convertImage(sourcePath) {
  try {
    // Get relative path and create target path
    const relativePath = path.relative(sourceDir, sourcePath);
    const targetPath = path.join(targetDir, relativePath).replace(/\.(png|jpg|jpeg)$/i, '.webp');
    
    // Create target directory if it doesn't exist
    const targetDirPath = path.dirname(targetPath);
    if (!fs.existsSync(targetDirPath)) {
      fs.mkdirSync(targetDirPath, { recursive: true });
    }

    // Get original file size
    const originalSize = fs.statSync(sourcePath).size;
    
    // Convert to WebP with quality 85
    await sharp(sourcePath)
      .webp({ quality: 85 })
      .toFile(targetPath);

    // Get optimized file size
    const optimizedSize = fs.statSync(targetPath).size;
    
    // Update statistics
    stats.originalSize += originalSize;
    stats.optimizedSize += optimizedSize;
    stats.converted++;

    const reduction = ((1 - optimizedSize / originalSize) * 100).toFixed(1);
    console.log(`✓ ${path.basename(sourcePath)} → ${path.basename(targetPath)} (${reduction}% smaller)`);
    
    return true;
  } catch (error) {
    stats.failed++;
    console.error(`✗ Failed to convert ${path.basename(sourcePath)}:`, error.message);
    return false;
  }
}

/**
 * Main conversion function
 */
async function convertAllImages() {
  console.log('🚀 Starting image conversion to WebP...\n');

  // Create target directory
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  // Get all image files
  const imageFiles = getImageFiles(sourceDir);
  stats.totalFiles = imageFiles.length;

  console.log(`Found ${stats.totalFiles} images to convert\n`);

  // Convert all images
  for (const imagePath of imageFiles) {
    await convertImage(imagePath);
  }

  // Print summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 Conversion Summary');
  console.log('='.repeat(60));
  console.log(`Total files:        ${stats.totalFiles}`);
  console.log(`Converted:          ${stats.converted}`);
  console.log(`Failed:             ${stats.failed}`);
  console.log(`Original size:      ${(stats.originalSize / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Optimized size:     ${(stats.optimizedSize / 1024 / 1024).toFixed(2)} MB`);
  
  const totalReduction = ((1 - stats.optimizedSize / stats.originalSize) * 100).toFixed(1);
  console.log(`Total reduction:    ${totalReduction}%`);
  console.log(`Space saved:        ${((stats.originalSize - stats.optimizedSize) / 1024 / 1024).toFixed(2)} MB`);
  console.log('='.repeat(60));
  console.log('\n✨ Conversion complete!');
}

// Run the conversion
convertAllImages().catch(console.error);
