import { db } from "@/db";
import Link from "next/link";

export default async function Home() {
  const snippets = await db.snippet.findMany();
  const renderedSnippets = snippets.map((snippet) => {
    return <Link className="flex justify-between items-center p-2 border rounded" href={`/snippets/${snippet.id}`} key={snippet.id}>
      <div>{snippet.title}</div>
      <div>View</div>
    </Link>
  })
  return (
    <div>
      <div className="mb-20"><h1 className="font-bold text-xl">Home!</h1></div>
      <div className="flex mb-2 justify-between items-center">
        <h1 className="text-xl font-bold">Snippets</h1>
        <Link href={"/snippets/new"} className="border p-2 rounded">Create New</Link>
      </div>
      <div className = "flex flex-col gap-2 m-1"> {renderedSnippets} </div>
    </div>
  );
}
