"use client"
import { useState } from "react"
import Test from "../test/page";

export default function CachePage(){

  const [isMounted, setIsMounted] = useState(false);

  return (
    <>
      <button onClick={() => setIsMounted((prev) => !prev)}>
        Toggle
      </button>
      {isMounted && <Test/>}
    </>
  )
}