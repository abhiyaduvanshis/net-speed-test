
import { NextResponse } from "next/server";
import { Result } from "postcss";
export async function POST(req) {
    try {
        const chunks = [];
        for await (const chunk of req.body) {
            chunks.push(chunk);
        }
        const rawBody = Buffer.concat(chunks);

        return NextResponse.json({
            status:true,
            message:"done"
        })
    } catch (error) {
        return NextResponse.json({
            status:true,
            message:error
        })
    }

}