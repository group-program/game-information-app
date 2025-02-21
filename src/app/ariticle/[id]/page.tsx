import { notFound } from "next/navigation";
import React ,{useEffect,useState} from "react";

export default async function Article({ params }: { params:Promise<{ id: string }> }){
    if (!(await params).id){
        return notFound();
    }
    return(<>
    </>)
}