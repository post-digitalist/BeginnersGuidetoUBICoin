import fs from "fs";
import path from "path";
import matter from "gray-matter";
import remark from "remark";
import html from "remark-html";

const contentDirectory = path.join(process.cwd(), "content");

export function getSortedContentData() {
  // Get file names under /content
  const fileNames = fs.readdirSync(contentDirectory);
  const allContentData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get the name
    const name = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      name,
      ...matterResult.data,
    };
  });
  // Sort content by date
  return allContentData.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllContentIds() {
  const fileNames = fs.readdirSync(contentDirectory);
  return fileNames.map((fileName) => {
    // Read markdown file as string
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    return {
      params: {
        id: matterResult.data.id,
      },
    };
  });
}

const getFileNamesAndIds = () => {
  const fileNames = fs.readdirSync(contentDirectory);

  return fileNames.map((fileName) => {
    const fullPath = path.join(contentDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    return {
      fileName,
      id: matterResult.data.id,
    };
  });
};
export async function getContentData(id) {
  const { fileName } = getFileNamesAndIds().find((f) => f.id == id);

  const fullPath = path.join(contentDirectory, fileName);
  const fileContents = fs.readFileSync(fullPath, "utf8");

  // Use gray-matter to parse the post metadata section
  const matterResult = matter(fileContents);

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  // Combine the data with the id and contentHtml
  return {
    name: fileName.replace(".md", ""),
    contentHtml,
    ...matterResult.data,
  };
}

export async function getFirstSlide() {
  const slide = getSortedContentData()[0];

  if (slide) {
    return slide;
  }
}

function getSlideIdx(id, allIds) {
  const idx = allIds.findIndex((c) => c.params.id === id);
  return idx;
}

export async function getNextSlide(id) {
  const allIds = [{ params: { id: "" } }, ...getAllContentIds()];

  const idx = getSlideIdx(id, allIds);

  const nextIdx = idx === allIds.length - 1 ? idx : idx + 1;

  return allIds[nextIdx];
}

export async function getPrevSlide(id) {
  const allIds = [{ params: { id: "" } }, ...getAllContentIds()];

  const idx = getSlideIdx(id, allIds);

  const prevIdx = idx === 0 ? idx : idx - 1;

  console.log(allIds);

  return allIds[prevIdx];
}
