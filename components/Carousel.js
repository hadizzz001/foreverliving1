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
              src="https://ucarecdn.com/bce697ac-4c08-42bc-ad05-6b5767c87ba2/001.webp"
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
              src="https://ucarecdn.com/e3b041fe-3ba1-45c4-bbf2-d9b67300392e/002.webp"
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
              src="https://ucarecdn.com/1b62cea4-e3d5-4ee0-aa40-921e7078ab43/003.webp"
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

