"use client";


import React from 'react';
import Button from '../components/common/button';
import { useRouter } from 'next/navigation';

export default function TalentVideoFooter() {
  const router = useRouter();

  return (
    <div className="relative w-full my-20 max-w-7xl mx-auto h-[400px] overflow-hidden rounded-xl shadow-2xl mt-12">
      {/* Background Video with Absolute Position */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero-story.mp4" type="video/mp4" />
      </video>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black/40 flex flex-center items-center justify-center text-center p-6">
        <div className="max-w-2xl mx-auto ">
          <h2 className="text-white text-3xl font-bold mb-4">
            Create Your Future with Spreadnext
          </h2>
         
          <Button onClick={() => router.push("/contact-us")} className=" !inline">
            Start Building Now
          </Button>
        </div>
      </div>
    </div>
  );
}