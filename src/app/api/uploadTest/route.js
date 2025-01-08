

import { NextResponse } from 'next/server';
import fs from "node:fs/promises";

export async function POST(request) {
    try {
        const formRequestData = await request.formData()
        const image = formRequestData.get('file')

        if(image){
            const arrayBuffer = await image.arrayBuffer();
            const buffer = new Uint8Array(arrayBuffer);
            await fs.writeFile(`./public/upload/${image?.name}`, buffer);
        }

        return NextResponse.json(
            {
                success:true,
                message:"done"
            },
            {
                status:200
            }
        )
    } catch (error) {
        return NextResponse.json(
            {
                success:false,
                message:error
            },
            {
                status:401
            }
        )
    }
  

  }
  