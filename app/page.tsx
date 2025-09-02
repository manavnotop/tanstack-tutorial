"use client"

import { getUsers } from "@/server/users";
import { useQuery } from "@tanstack/react-query";

interface User {
  id: number,
  name: string
}

export default function Home() {

  const query = useQuery({ queryKey: ['todos'], queryFn: getUsers})
  
  return (
    <div className="flex items-center justify-center flex-col h-screen">
      {query.data?.map((user: User) => (
        <div key={user.id}> {user.name} </div>
      ))}
    </div>
  );
}
