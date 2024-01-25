import Link from "next/link"

function Navbar() {
  return (
    <nav className=" bg-second-color flex justify-between items-center px-10 py-3">
      <Link href='/'>
        <h3 className="hover:text-text-color font-bold text-xl">ToDoTasks</h3>
      </Link>
      <ul>
        <li>
          <Link href='/pages/about' className="font-bold  hover:text-text-color hover:cursor-pointer">About</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar