import Image from "next/image";
import Link from "next/link";
import { fetchDashboard } from "@/lib/apis";
import { IconSkeleton } from "@/components/IconSkeleton";


export default async function Dashboard(){
    const user = await fetchDashboard();
    
}