export default async function StoreLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <>
    <div>
        Store Layout
    </div>
    {children} </>;
}