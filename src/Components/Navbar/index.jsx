import { NavLink } from "react-router-dom"

const Navbar = () => {

    const activeStyle = 'underline underline-offset-4'

    
  return (
    <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
        <ul className="flex items-center gap-3">
            <li className="font-semibold text-lg">
                <NavLink
                to={'/'}
                >
                    Shopi
                </NavLink>
            </li>
            <li>
                <NavLink
                to={'/'}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : undefined
                  }
                >
                    All
                </NavLink>
            </li>
            <li>
                <NavLink
                to={'/clothes'}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : undefined
                  }
                >
                    Clothes
                </NavLink>
            </li>
            <li>
                <NavLink
                to={'/electronics'}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : undefined
                }
                >
                    Electronics
                </NavLink>
            </li>
            <li>
                <NavLink
                to={'/furnitures'}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : undefined
                }
                >
                    Furnitures
                </NavLink>
            </li>
            <li>
                <NavLink
                to={'/toys'}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : undefined
                }
                >
                    Toys
                </NavLink>
            </li>
            <li>
                <NavLink
                to={'/others'}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : undefined
                }
                >
                    Others
                </NavLink>
            </li>
        </ul>

        <ul className="flex items-center gap-3">
            <li className='text-black/60'>
                rogger@gmail.com
            </li>
            <li>
                <NavLink
                to={'/my-orders'}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : undefined
                }
                >
                    MyOrders
                </NavLink>
            </li>
            <li>
                <NavLink
                to={'/my-account'}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : undefined
                }
                >
                    MyAccount
                </NavLink>
            </li>
            <li>
                <NavLink
                to={'/signIn'}
                    className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : undefined
                }
                >
                    SigIn
                </NavLink>
            </li>
            <li>
                <NavLink
                to={'/notFound'}
                    className={({ isActive,        isPending }) =>
                    isPending ? "pending" : isActive ? activeStyle : undefined
                }
                >
                    NotFound
                </NavLink>
            </li>
            <li>
                🛒 0
            </li>
        </ul>
    </nav>

    
  )
}

export default Navbar
