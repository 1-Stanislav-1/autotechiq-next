import { useRouter } from "next/router";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Search from "../components/search";
import styles from "../styles/fixes.module.scss";

export default function Fixes({ fixesArray, pagesTotal }) {

	const {query} = useRouter();

	const [pages, setPages] = useState([1]);

	useEffect(() => {
		const numbersArray = Array.from(Array(pagesTotal + 1).keys()).slice(1);
		setPages(numbersArray);
	}, []);

	function getPreviousPage() {
		if (query.fixes > 1) return Number(query.fixes) - 1;
		else return 1;
	}

	function getNextPage() {
		if (query.fixes < pagesTotal) return Number(query.fixes) + 1;
		else return query.fixes;
	}
	
	return <Layout title={`Fixes (page ${query.fixes} of ${pagesTotal})`}>
		<section className={styles.Fixes}>
			<div className={styles.headerContainer}>
				<h1 className="header">Fixes</h1>
				<Search/>
			</div>
			<ul className={styles.list}>
				{fixesArray.map(fix => 
					<Link href={fix.top_fix_slug_path}>
						<li key={fix._title}>{fix._title}</li>
					</Link>
				)}
			</ul>
			<ul className={styles.navigation}>
				{
					query.fixes == 1 ?

					<li className={`${styles.navigateLeft} ${styles.navigateDisabled}`}>«</li>

					:

					<Link href={`/${getPreviousPage()}`}>
						<li className={styles.navigateLeft}>«</li>
					</Link>
				}
				
				{pages.map((item, i) => 
					<Link href={`/${i + 1}`}>
						<li key={"page" + item} className={`${styles.navigate} ${query.fixes - 1 === i ? styles.currentPage : ""}`}>{item}</li>
					</Link>
				)}

				{	
					query.fixes == pagesTotal ?

					<li className={`${styles.navigateRight} ${styles.navigateDisabled}`}>»</li>

					:

					<Link href={`/${getNextPage()}`}>
						<li className={styles.navigateRight}>»</li>
					</Link>
				}
			</ul>
		</section>
	</Layout>

}

export async function getStaticPaths() {
	const response = await fetch("https://dev.autotechiq.com/api-test-task/PSS3TYRM4U4QR3WSLX4T5DRZ83DAOXY2/fixes");
	const fixes = await response.json();
	const pagesTotal = Math.ceil((fixes.length + 1) / 25);
	let counter = 1;
	let resultsArray = [];
	(function generator() {
		if (counter > pagesTotal) return;
		resultsArray.push({params: { fixes: String(counter) }});
		counter++;
		generator();
	})();
  return {
    paths: [...resultsArray],
    fallback: false
  }
}

export async function getStaticProps(context) {

	const response = await fetch("https://dev.autotechiq.com/api-test-task/PSS3TYRM4U4QR3WSLX4T5DRZ83DAOXY2/fixes");
	const fixes = await response.json();
	const currentPage = context.params.fixes;
	const pagesTotal = Math.ceil((fixes.length + 1) / 25);
	const fixesSlice = fixes.slice(currentPage * 25 - 25, currentPage * 25);
	const fixesArray = fixesSlice.map(item => {return {_title: item._title, top_fix_slug_path: item.top_fix_slug_path}});
	return {
		props: { fixesArray, pagesTotal }
	}

}