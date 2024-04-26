"use client"
import React from 'react';
import { useRouter } from "next/navigation";

export function Pagination({ currentPage, totalPages }: any) {
    const router = useRouter();
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="mt-4 flex justify-center">
                <ul className="flex gap-3 my-auto">
                    <li className={`pagination-item ${currentPage === 1 ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <button className="nline-block px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none disabled:cursor-not-allowed" disabled={currentPage === 1} onClick={() => router.push(`?page=${currentPage - 1}`)}>Previous</button>
                    </li>
                    {pageNumbers.map((number) => (
                        <li key={number} className={` ${currentPage === number ? 'active' : ''}`}>
                            <button className="border border-2 p-1 disabled:cursor-not-allowed" onClick={() => router.push(`?page=${number}`)}>{number}</button>
                        </li>
                    ))}
                    <li className={`pagination-item ${currentPage === totalPages ? 'opacity-50 cursor-not-allowed' : ''}`}>
                        <button className="nline-block px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none disabled:cursor-not-allowed" disabled={currentPage === totalPages} onClick={() => router.push(`?page=${currentPage + 1}`)}>Next</button>
                    </li>
                </ul>
        </div>
    );
};

export default Pagination;
