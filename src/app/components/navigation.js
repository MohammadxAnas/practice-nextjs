import Link from "next/link";

export const Navigation = () => {
    return(
        <nav>
        <Link href="/">Home</Link>
        <Link href="/login">Login</Link>
        </nav>
    )
}