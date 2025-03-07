
import { Outlet } from "react-router-dom"


function App() {


  return (
    
     <div className=" bg-background h-screen w-screen">
      
      {/* <nav className=" animate__animated animate__slideInDown  z-20 bg-background fixed flex justify-between items-center w-full max-w-[1468px] py-5 border-b-[0px] border-accent \ ">
        <Link className=" ml-5" to="/react-vite-supreme" >
          <img src={viteLogo} className="logo " alt="Vite logo" />
        </Link>
        <nav className=" text-accent-foreground flex gap-10 uppercase items-center">
        <NavLink
        to="/react-vite-supreme/page1"
        text="HOME"
        />

        <NavLink
        to="/react-vite-supreme/page2"
        text="ABOUT US"
        />

        <NavLink
        to="/react-vite-supreme/page4"
        text="Codlit"
        />

        <NavLink
        to="/react-vite-supreme/contact"
        text="Contact Us"
        />


        <div className=" bg-primary p-3 rounded-full hover:cursor-pointer">
          <SearchIcon className=" text-accent w-5 h-5 "/>
        </div>
        
        </nav>
       
      </nav> */}
 

      

      <Outlet />
     
    </div>
  )
}



export default App
