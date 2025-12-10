import Layout from "~/layout";
import { useEffect, useState, type JSX } from "react";
import '~/css/home.css'

interface Collection { name: string, symbol: string[], focus: string, description: string, category: string}

export default function Home() {
    return (
        <Layout>
            <article className="hero">
            <h2><span className='ital'>Where Vibrant Ideas</span><span className='strong'>Meet informed execution</span></h2>
            <h3>sites and services crafted with
              <span className='ital'>Creative</span> 
              <span className="strong">Clarity</span>
            </h3>
            <a className="btn" href="#services">see more</a>
            </article>

            <img src={`/images/iris-logo.png`} alt="OuiRise Initiative Logo"/>

            <div id="services" className="hidden">.</div>

            <article className="services">
              <h2 className="strong">what oui do</h2>
              <ServicesList />
            </article>
        </Layout>
    )
}

export interface iService {
  id: string;
  title: string;
  description: string;
  pricing?: string;
  tier?: "Basic" | "Standard" | "Premium";
  aiIntegration?: string;
}

function ServicesList() {
  const [services, setServices] = useState<iService[]>([]);

  useEffect(() => {
    fetch("/data/services.json")
      .then(res => res.json())
      .then((data: iService[]) => setServices(data))
      .catch(console.error);
  }, []);

  return (
    <table>
      <tbody>
        { services && services.map((s: iService) => <ServiceCard 
            title={s.title}
            description={s.description}
            pricing={s.pricing}
            aiIntegration={s.aiIntegration}
            id={s.id}
            key={s.id}
        />)}
        </tbody>
    </table>
  );
}


function ServiceCard({ 
  title, 
  description, 
  pricing, 
  aiIntegration, 
  id
}: iService) {
  return (
    <tr className="card">
        <td>{title}</td>
    </tr>
  );
}