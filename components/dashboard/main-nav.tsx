"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"

export function MainNav({
    className,
    ...props
}: React.HTMLAttributes<HTMLDivElement>) {
    const params =useParams()
    const pathName = usePathname()
    const routes = [
        {
          href: `/dashboard/${params.storeId}`,
          label: 'Dashboard',
          active: pathName === `/dashboard/${params.storeId}`,
        },
        {
          href: `/dashboard/${params.storeId}/billboards`,
          label: 'Billboards',
          active: pathName.startsWith(`/dashboard/${params.storeId}/billboards`),
        },
        {
          href: `/dashboard/${params.storeId}/categories`,
          label: 'Categories',
          active: pathName.startsWith(`/dashboard/${params.storeId}/categories`) },
        {
          href: `/dashboard/${params.storeId}/sizes`,
          label: 'Sizes',
          active: pathName.startsWith(`/dashboard/${params.storeId}/sizes`),
        },
        {
          href: `/dashboard/${params.storeId}/colors`,
          label: 'Colors',
          active: pathName.startsWith(`/dashboard/${params.storeId}/colors`)},
        {
          href: `/dashboard/${params.storeId}/products`,
          label: 'Products',
          active: pathName .startsWith(`/dashboard/${params.storeId}/products`),
        },
        {
          href: `/dashboard/${params.storeId}/orders`,
          label: 'Orders',
          active: pathName .startsWith(`/dashboard/${params.storeId}/orders`),
        },
        {
          href: `/dashboard/${params.storeId}/settings`,
          label: 'Settings',
          active: pathName .startsWith(`/dashboard/${params.storeId}/settings`),
        },
      ]
    
    return (
        <nav className={cn("flex items-center justify-between space-x-4 lg:space-x-6",className)}>
            {
                routes.map((route)=>{
                    return (
                        <Link
                        key={route.href}
                        href={route.href}
                        className={cn(
                            "text-sm font-medium leading-6 transition-colors text-slate-400 hover:text-primary",
                            route.active && "text-slate-900"
                        )}
                        >
                            {route.label}
                        </Link>
                    )
                })
            }
        </nav>
    )
}