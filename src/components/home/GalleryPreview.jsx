
import { LuArrowUpRight } from "react-icons/lu";

import Container from "../common/Container";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";
import SmartImage from "../common/SmartImage";
import Reveal from "../animation/Reveal";

import img1 from "../common/images/img1.jpg";
import img2 from "../common/images/img2.jpg";
import img3 from "../common/images/img3.jpg";
import img4 from "../common/images/img4.jpg";

const galleryPreviewImages = [
  {
    id: "img1",
    src: img1,
    file: "img1.jpg",
    alt: "Gallery photograph one",
    title: "Photo 1",
  },
  {
    id: "img2",
    src: img2,
    file: "img2.jpg",
    alt: "Gallery photograph two",
    title: "Photo 2",
  },
  {
    id: "img3",
    src: img3,
    file: "img3.jpg",
    alt: "Gallery photograph three",
    title: "Photo 3",
  },
  {
    id: "img4",
    src: img4,
    file: "img4.jpg",
    alt: "Gallery photograph four",
    title: "Photo 4",
  },
];

export default function GalleryPreview() {
  return (
    <section
      aria-labelledby="gallery-title"
      className="border-t border-line bg-surface/40 py-24 sm:py-32"
    >
      <Container>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <Reveal>
            <SectionHeading
              id="gallery-title"
              number="06"
              label="Gallery"
              title="A visual journal."
            />
          </Reveal>

          <Reveal delay={0.1}>
            <Button
              to="/gallery"
              variant="ghost"
              icon={LuArrowUpRight}
            >
              Open the gallery
            </Button>
          </Reveal>
        </div>

        <ul className="mt-14 grid grid-cols-2 gap-3 sm:gap-5 md:grid-cols-4">
          {galleryPreviewImages.map((image, index) => (
            <li
              key={image.id}
              className={
                index % 2 === 1 ? "md:translate-y-8" : ""
              }
            >
              <Reveal delay={0.08 * index}>
                <figure className="group">
                  <SmartImage
                    src={image.src}
                    alt={image.alt}
                    fileLabel={image.file}
                    className={`rounded-lg ${
                      index % 2 === 0
                        ? "aspect-[3/4]"
                        : "aspect-square"
                    }`}
                    imgClassName="transition duration-700 group-hover:scale-105"
                  />

                  <figcaption className="mt-3 font-mono text-xs uppercase tracking-widest text-muted">
                    {image.title}
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
