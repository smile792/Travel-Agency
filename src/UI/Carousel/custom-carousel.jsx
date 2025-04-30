import { Carousel } from "@mantine/carousel";
import { Image } from "@mantine/core";

export const CustomCarousel = ({ images }) => {
  const slides = images.map((url) => (
    <Carousel.Slide key={url}>
      <Image src={url} />
    </Carousel.Slide>
  ));
  return (
    <Carousel withIndicators height={200} loop>
      {slides}
    </Carousel>
  );
};
