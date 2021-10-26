import Link from 'next/link';

const Nav = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
            </ul>
            <hr />
        </div>
    )
}

export default Nav
