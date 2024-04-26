"use client"
import { useRouter } from 'next/navigation'
export default function NotFound() {
    const router = useRouter()
    return (
        <div className='flex justify-center items-center min-h-[50svh]'>
            <div>
                <h2 className='text-2xl'>Not Found</h2>
                <p className='mb-3'>Could not find requested resource</p>
                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none "  onClick={() => router.push('/')}>Return to HomePage</button>
            </div>
        </div>

    )
}