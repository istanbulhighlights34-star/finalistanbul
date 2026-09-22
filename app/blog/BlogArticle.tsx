import Link from "next/link";
import type { Article } from "./articles";
import styles from "./blog.module.css";
import Brand from "../_components/Brand";

export default function BlogArticle({article}:{article:Article}){
 const url=`https://finalsatlas.com/blog/${article.slug}`;
 const jsonLd={"@context":"https://schema.org","@type":"Article",headline:article.title,description:article.dek,mainEntityOfPage:url,url,author:{"@type":"Organization",name:"Finals Atlas"},publisher:{"@type":"Organization",name:"Finals Atlas"},inLanguage:"en"};
 return <main className={styles.shell}>
  <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(jsonLd)}} />
  <header className={styles.header}><Brand className={styles.brand} /><nav className={styles.nav}><Link href="/finals">Finals</Link><Link href="/cities/istanbul">Istanbul</Link><Link href="/cities/madrid">Madrid</Link><Link href="/cities/frankfurt">Frankfurt</Link></nav><div className="blog-header-actions"><Link className="blog-header-journal" href="/blog">Journal</Link><Link className={styles.cta} href="/finals">2027 Calendar</Link></div></header>
  <section className={styles.articleHero}><p className={styles.kicker}>JOURNAL / {article.city.toUpperCase()} · {article.read}</p><h1>{article.title}</h1><p className={styles.dek}>{article.dek}</p></section>
  <article className={styles.article}><p className={styles.intro}>{article.intro}</p>{article.sections.map(s=><section className={styles.section} key={s.heading}><h2>{s.heading}</h2><div className={styles.copy}>{s.paragraphs.map(p=><p key={p}>{p}</p>)}</div></section>)}<aside className={styles.related}><p className={styles.kicker}>KEEP PLANNING</p><h2>Related Finals Atlas guides</h2><div className={styles.relatedGrid}>{article.links.map(l=><Link href={l.href} key={l.href}>{l.label} →</Link>)}</div></aside></article>
  <footer className={styles.footer}><Brand className={styles.brand} /><p>Independent editorial travel guide. Event-specific operations can change; verify final instructions with organizers and local transport authorities.</p><p>© 2026 Finals Atlas</p></footer>
 </main>
}
