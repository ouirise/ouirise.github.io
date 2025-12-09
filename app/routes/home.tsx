import Layout from "~/layout";
import { featuredCollections } from "~/data"
import type { JSX } from "react";
import '~/css/home.css'

interface Collection { name: string, symbol: string[], focus: string, description: string, category: string}

export default function Home() {

    return (
        <Layout>
            <article className="hero">
            <section>
            <h2 className="ital"><span className="em">OUIRISE.</span>Collective of creatives, developers, entreprenuers</h2>
            <h3 className="strong">bold with precision <span className="em">& INITIATIVE</span></h3>
            <a className="btn" href="#services">si more</a>

            </section>
            </article>

            <div id="services">.</div>
            <h2  className="strong center">what oui do</h2>
            <p></p>

            <article className="collections">
                {featuredCollections.slice(0, 2).map((collection: Collection): JSX.Element => (
                    <CollectionCard key={collection.name} name={collection.name} symbol={collection.symbol} category={collection.category} focus={collection.focus} description={collection.description} />
                ))}
                
            </article>
            <article className="collections">
            {featuredCollections.slice(2, 4).map((collection: Collection): JSX.Element => (
                    <CollectionCard key={collection.name} name={collection.name} symbol={collection.symbol} category={collection.category} focus={collection.focus} description={collection.description} />
                ))}
            </article>
        </Layout>
    )
}

function CollectionCard({ name, symbol, category, focus, description}: Collection) {
    return (
        <div className="card collection" key={name}>
                        {/* <img src={`/images/${category}.jpg`} alt={name} /> */}
                        <h4 className="em">{name.toUpperCase()}</h4>
                        <p>{focus} {category}</p>
                        <p>{description}</p>

                        {symbol.map(s => <a href="/about" className="right">{s}</a>)}
                        <a className="btn">View Collection</a>
                    </div>
    )
}