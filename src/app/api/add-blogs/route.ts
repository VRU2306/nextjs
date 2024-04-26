import { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
    if (req.method === 'POST') {
        const reqBody = await req.json();
        console.log(reqBody,9)
        const { title, description, date, content, imageUrl } = reqBody
        try {
            const blogsDir = path.join(process.cwd(), 'src/app/blogs');
            if (!fs.existsSync(blogsDir)) {
                fs.mkdirSync(blogsDir);
            }

            const files = fs.readdirSync(blogsDir);
            const nextPostNumber = files.length + 1;
            const fileName = `post${nextPostNumber}.md`;
            const filePath = path.join(blogsDir, fileName);
            const blogContent = `---
title: ${title}
description: ${content?.slice(0, 30)}
date: ${date}
id: ${nextPostNumber}
image: ${imageUrl}
---
# ${title}
${content}`;
            await fs.promises.writeFile(filePath, blogContent);
            console.log('Markdown file created:', filePath);
            return NextResponse.json({
                message: "Blog Saved Successfully",
                success: true,
            });
        } catch (error) {
            console.error('Error creating markdown file:', error);
            return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
        }
    } else {
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
