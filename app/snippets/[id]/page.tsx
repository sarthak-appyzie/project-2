import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetShowPageProps {
  params: Promise<{
    id: string;
  }>;
}


export default async function SnippetShowPage(props:SnippetShowPageProps){
    // await new Promise ((r) => setTimeout(r,5000));
    // console.log(props);

    const {id}= await props.params;
    const snippet = await db.snippet.findFirst({
        where: {id: parseInt(id)},
    });
    if(!snippet){
        return notFound();
    };
    return <div>{snippet.title}</div>
}