import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SectionDivider from './components/SectionDivider';
import Footer from './components/Footer';
import VideoGrid from './components/VideoGrid';

function App() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <Hero />
      <SectionDivider text="currently ..." />
      <main className="flex-grow bg-white">
        <VideoGrid />
      </main>
      <Footer />
    </div>
  );
}

export default App;
