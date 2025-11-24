
import  Hero  from './components/Hero';
import  HowItWorks  from './components/HowItWorks';



export default function Home() {

  return (
    <div className="min-h-screen flex flex-col bg-dark-950">
      <main className="flex-grow">
      <Hero/>
      <HowItWorks/>   
      </main>
    </div>
  );
}

