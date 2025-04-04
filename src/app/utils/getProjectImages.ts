// utils/getProjectImages.ts
import fs from "fs";
import path from "path";

export function getAllProjectImages(): string[] {
  const rootPath = path.join(process.cwd(), "public/images/Project Screenshots");
  const imageExtensions = [".jpg", ".jpeg", ".png", ".webp"];
  let images: string[] = [];

  const walk = (dir: string) => {
    fs.readdirSync(dir).forEach((file) => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walk(fullPath);
      } else if (imageExtensions.includes(path.extname(file).toLowerCase())) {
        // Format it for public access: remove 'public' from the path
        const publicPath = fullPath.split("public")[1].replace(/\\/g, "/");
        images.push(publicPath);
      }
    });
  };

  walk(rootPath);
  return images;
}
