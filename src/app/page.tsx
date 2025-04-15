"use client";

import axios from "axios";
import { useEffect, useState } from "react";

interface IssueData {
  createdAt: string;
  description: string;
  id: number;
  status: string;
  title: string;
  updatedAt: string;
}

export default function Home() {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = async () => {
    const res = await axios("/api/issues"); // adjust if your route is different
    const data = await res.data;
    // console.log("data", data);
    setIssues(data);
  };

  return (
    <div>
      <h1 className="my-3 text-2xl font-semibold">All Issues</h1>
      {issues.map((issue: IssueData) => (
        <div
          key={issue.id}
          className="border rounded-md p-3 my-3 transition-all duration-300 ease-in-out transform hover:-translate-1 hover:shadow-md hover:shadow-black"
        >
          <h2 className="font-bold">{issue.title}</h2>
          <p>{issue.description}</p>
        </div>
      ))}

      {issues.length === 0 && (
        <div className="text-gray-500">
          <p>No issue added yet!</p>
        </div>
      )}
    </div>
  );
}
