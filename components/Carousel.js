"use client"

import React from 'react';
import Image from 'next/image';
import { Carousel } from 'react-bootstrap';

const MyComponent = () => {
  return (
    <div className="syw-container">
      <Carousel indicators={false} controls={false}>
        <Carousel.Item>
          <div className="image-container">
            <Image
              className="wallet-image"
              src="https://ucarecdn.com/10a96377-7b32-4401-adbc-606e5c7b87b5/004.webp"
              alt="background"
              width={3000}
              height={1200}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <Image
              className="wallet-image"
              src="https://ucarecdn.com/d1ca448f-350b-4ec7-9dee-4efc97c1934f/002.webp"
              alt="background"
              width={3000}
              height={1200}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <Image
              className="wallet-image"
              src="https://ucarecdn.com/aba35681-d60a-4225-9c41-9d3d8ab8bc30/001.webp"
              alt="background"
              width={3000}
              height={1200}
            />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="image-container">
            <Image
              className="wallet-image"
              src="https://ucarecdn.com/d8dc3246-3477-4bf3-a794-5fdad6c366f4/003.webp"
              alt="background"
              width={3000}
              height={1200}
            />
          </div>
        </Carousel.Item>
      </Carousel>
 

    </div>
  );
};

export default MyComponent;

