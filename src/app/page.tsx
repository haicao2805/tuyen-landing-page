import Footer from "@/components/footer/Footer";
import HomePage from "@/views/home/HomePage";
import WhoPage from "@/views/who/WhoPage";

export default function Home() {
  return (
    <main className="">
      <HomePage />
      <WhoPage />
      <Footer />
    </main>
  )
}
