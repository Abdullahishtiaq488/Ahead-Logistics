"use client"; // This makes it a client component

import { useState, useEffect } from "react";
import Loader from '../Loader/Loader'; // Ensure this path is correct

export default function LoaderWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 2 seconds
    }, 1000);

    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  if (loading) {
    return <Loader />; // Show loader during the loading state
  }

  return <>{children}</>; // Show the actual content after loading is finished
}
