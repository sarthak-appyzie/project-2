import { db } from "@/db";

interface SnippetEditPageProps{
    params: Promise<{
        id: string;
    }>;
}

export default async function SnippetEditPage(props:SnippetEditPageProps){
    const {id} = await props.params;
    const snippet = await db.snippet.findFirst(
        {
            where: {id: parseInt(id)}
        }
    );
    if(!snippet){
        return <div>
        <h1 className="text-5xl bold">
            Sorry, but we couldn't find the particular snippet
        </h1>
    </div>
    };
    return <div>We got this snippet {snippet.title} </div>
}