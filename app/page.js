import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/Features";


export default function Home() {
  return (
    <div className=" container  mx-auto">
      <Hero />
      <h2 className=" text-center my-5 mx-auto font-bold lg:text-5xl text-3xl text-violet-500">Features</h2>
      <About />
    </div>
  )
}