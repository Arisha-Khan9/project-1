import Link from "next/link";
export default function Navbar() {
    return(
        <div className="text-2xl text-blue-800 p-3 font-bold text-center">
            <Link href= "/">Home page</Link>
            <br />
            <Link href= "/about">About page</Link>
            <br />
            <Link href= "/contact">Contact page</Link>
            <br />
            <Link href= "/data">Data page</Link>
            <br />
            <Link href= "/data/programming">Programming page</Link>
            <br />
            <Link href= "/jobs">Jobs page</Link>
        </div>
    )
}