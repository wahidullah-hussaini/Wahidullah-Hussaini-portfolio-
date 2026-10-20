// ============================================================================
// GALLERY — your personal photographs.
// ----------------------------------------------------------------------------
// 1. Put your photo in public/images/gallery/ (for example gallery-01.jpg).
// 2. Replace the title and alt text below with a real description.
//    `alt` is read aloud by screen readers, so describe what the photo shows.
// To add more photos later, copy one line and change the numbers.
// Until a file exists, the site shows a marked placeholder in its place.
// ============================================================================

export const galleryImages = [
  { id: "gallery-01", file: "gallery-01.jpg", title: "Photo 1", alt: "Photograph 1: replace with a description" },
  { id: "gallery-02", file: "gallery-02.jpg", title: "Photo 2", alt: "Photograph 2: replace with a description" },
  { id: "gallery-03", file: "gallery-03.jpg", title: "Photo 3", alt: "Photograph 3: replace with a description" },
  { id: "gallery-04", file: "gallery-04.jpg", title: "Photo 4", alt: "Photograph 4: replace with a description" },
];

export const galleryPath = (file) => `/images/gallery/${file}`;
