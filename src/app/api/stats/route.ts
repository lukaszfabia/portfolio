import { NextResponse } from "next/server";

interface Tech {
    name: string;
    color: string;
}

interface Language {
    size: number;
    node: Tech;
}

interface Repository {
    name: string;
    languages: {
        edges: Language[];
    };
}

export interface LangProps {
    name: string,
    color: string,
    size: number,
}


interface LangDetails {
    color: string,
    size: number,
}

function preprocess(nodes: Repository[]): LangProps[] {
    const map = new Map<string, LangDetails>();

    nodes.forEach((v) => {
        v.languages.edges.forEach((l) => {
            const { name, color } = l.node;
            if (!map.has(name)) {
                map.set(name, { color, size: l.size });
            } else {
                const curr = map.get(name)!;
                map.set(name, { color, size: curr.size + l.size });
            }
        });
    });


    const sorted = Array.from(map.entries())
        .sort((a, b) => b[1].size - a[1].size)
        .slice(0, 4);

    const lst = sorted.map((v) => {
        const prop: LangProps = {
            name: v[0],
            color: v[1].color,
            size: v[1].size
        }

        return prop
    })

    return lst
}

export async function GET() {
    const query = process.env.QUERY;

    const res = await fetch("https://api.github.com/graphql", {
        method: "POST",
        headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
    });

    const json = await res.json();
    const data = json as { data: { user: { repositories: { nodes: Repository[] } } } };
    const proccessed = preprocess(data.data.user.repositories.nodes)

    return NextResponse.json(proccessed);
}