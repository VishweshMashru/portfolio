'use client';

import { motion } from "framer-motion"; // Using framer-motion for animation
import { useEffect, useState } from "react";
import Navbar from "./navbar";
import HomePage from "./homepage";

export default function Home() {
  return(
    <div>
      <Navbar/>
      <HomePage/>
    </div>
  )
}
