"use client"

interface AuthHeaderProps {
label: string

}
export const AuthHeader = ({label}: AuthHeaderProps) => {

    return (
        <h3 className="text-2xl text-center font-bold text-white">{label}</h3>
    )
}