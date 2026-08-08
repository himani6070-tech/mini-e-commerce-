import React from "react"; 
export default function ProductCardSkeleton() {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-sm animate-pulse">
      {/* Image Skeleton */}
      <div className="h-64 w-full bg-gray-300"></div>

      <div className="p-4">
        {/* Title Skeleton */}
        <div className="h-5 w-3/4 rounded bg-gray-300"></div>

        {/* Price Skeleton */}
        <div className="mt-3 h-5 w-1/4 rounded bg-gray-300"></div>

        {/* Button Skeleton */}
        <div className="mt-4 h-10 w-full rounded-lg bg-gray-300"></div>
      </div>
    </div>
  );
}