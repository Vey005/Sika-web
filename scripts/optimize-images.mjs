import sharp from "sharp";

const webpTargets = [
  {
    input: "src/assets/images/hero-pos.png",
    output: "src/assets/images/hero-pos.webp",
    width: 1280,
    quality: 76,
  },
  {
    input: "src/assets/images/checkout-screen.png",
    output: "src/assets/images/checkout-screen.webp",
    width: 1280,
    quality: 76,
  },
  {
    input: "src/assets/images/pos-payment.png",
    output: "src/assets/images/pos-payment.webp",
    width: 960,
    quality: 76,
  },
  {
    input: "src/assets/images/cashier-counter.png",
    output: "src/assets/images/cashier-counter.webp",
    width: 1280,
    quality: 76,
  },
  {
    input: "src/assets/images/inventory-dashboard.png",
    output: "src/assets/images/inventory-dashboard.webp",
    width: 960,
    quality: 78,
  },
];

async function optimizeWebp({ input, output, width, quality }) {
  const image = sharp(input);
  const metadata = await image.metadata();
  const targetWidth = metadata.width ? Math.min(metadata.width, width) : width;

  await image
    .resize({ width: targetWidth, withoutEnlargement: true })
    .webp({ effort: 6, quality })
    .toFile(output);
}

await Promise.all(webpTargets.map(optimizeWebp));

await sharp("src/assets/images/logo.png")
  .resize({
    width: 48,
    height: 48,
    fit: "contain",
    background: { r: 255, g: 255, b: 255, alpha: 0 },
  })
  .png({ compressionLevel: 9, palette: true })
  .toFile("public/favicon.png");

console.log("Optimized website images.");
