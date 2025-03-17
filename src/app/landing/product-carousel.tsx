'use client';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import Image from 'next/image';

const ProductCarousel = () => {
  return (
    <Carousel
      className="w-full max-w-4xl mx-auto mb-12"  // Adjust width and center
      opts={{
        loop: true,
      }}
      plugins={[
        Autoplay({
          delay: 1500,
          stopOnInteraction: true,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {/* carousel 1 Image */}
        <CarouselItem>
          <Link href="/product/milo">
            <div className="relative mx-auto">
              <Image
                src="/carousel 1.png"  // Image from the public folder
                alt="Milo"
                height={400}  // Default height for smaller screens
                width={800}   // Default width for smaller screens
                className="w-full h-auto object-cover"
              />
              {/* <div className="absolute inset-0 flex items-end justify-center p-4">
                <h2 className="bg-gray-900 bg-opacity-50 text-sm sm:text-lg md:text-2xl font-bold text-white">
                  Milo
                </h2>
              </div> */}
            </div>
          </Link>
        </CarouselItem>

        {/* carousel 2 Image */}
        <CarouselItem>
          <Link href="/product/oil">
            <div className="relative mx-auto">
              <Image
                src="/carousel 2.png"  // Image from the public folder
                alt="Oil"
                height={400}  // Default height for smaller screens
                width={800}   // Default width for smaller screens
                className="w-full h-auto object-cover"
              />
              {/* <div className="absolute inset-0 flex items-end justify-center p-4">
                <h2 className="bg-gray-900 bg-opacity-50 text-sm sm:text-lg md:text-2xl font-bold text-white">
                  Oil
                </h2>
              </div> */}
            </div>
          </Link>
        </CarouselItem>

        {/* carousel 3 Image */}
        <CarouselItem>
          <Link href="/product/noodles">
            <div className="relative mx-auto">
              <Image
                src="/carousel 3.png"  // Image from the public folder
                alt="Noodles"
                height={400}  // Default height for smaller screens
                width={800}   // Default width for smaller screens
                className="w-full h-auto object-cover"
              />
              {/* <div className="absolute inset-0 flex items-end justify-center p-4">
                <h2 className="bg-gray-900 bg-opacity-50 text-sm sm:text-lg md:text-2xl font-bold text-white">
                  Noodles
                </h2>
              </div> */}
            </div>
          </Link>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProductCarousel;
