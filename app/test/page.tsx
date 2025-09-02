"use client"

import { useQuery } from "@tanstack/react-query";

interface PostBody { 
  userId: number,
  id: number,
  title: string,
  body: string
}

async function getPosts(): Promise<PostBody []>{
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  return response.json()
}

export default function Test(){

  const query = useQuery({ queryKey: ['posts'], queryFn: getPosts, staleTime: 10000})

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      {query.data?.map((post) => (
        <div className="p-5 m-5" key={post.id}> {post.body} </div>
      ))}
    </div>
  )
}