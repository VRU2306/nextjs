import type { Metadata } from "next";
export const metadata: Metadata = {
    title: "Create Blog",
    description: "This is Sign up page",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div>
            {children}
        </div>
    );
}