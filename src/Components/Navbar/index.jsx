import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"
import { ShoppingBagIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const context = useContext(ShoppingCartContext);
    const activeStyle = 'underline underline-offset-4'

    
  return (
    <nav className="bg-slate-200 flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
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
                onClick={()=> context.setSearchByCategory()}
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
                onClick={()=> context.setSearchByCategory("clothes")}
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
                onClick={()=> context.setSearchByCategory("electronics")}
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
                onClick={()=> context.setSearchByCategory("furnitures")}
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
                onClick={()=> context.setSearchByCategory("toys")}
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
                onClick={()=> context.setSearchByCategory("others")}
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
            <li className="flex items-center gap-1">
                <ShoppingBagIcon className="size-6 text-blue-950"/> 
                <div className="text-sm font-semibold">{context.cartProducts.length}</div>
            </li>
        </ul>
    </nav>

    
  )
}

export default Navbar
