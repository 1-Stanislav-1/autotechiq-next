import Layout from "../../components/layout";

export default function Fix({ fix }) {
	return <Layout title={`AutoTechIQ - ${fix._title}`}>
		<ul>
			{fix.fixCauseTitles.map(item => <li>{item}</li>)}
		</ul>
	</Layout>
}

export async function getStaticPaths() {
	const response = await fetch("https://dev.autotechiq.com/api-test-task/PSS3TYRM4U4QR3WSLX4T5DRZ83DAOXY2/fixes");
	const fixes = await response.json();
	let counter = 0;
	let resultsArray = [];
	(function generator() {
		if (counter >= fixes.length) return;
		resultsArray.push({ params: { fix: fixes[counter].top_fix_slug_path.replace("/fixes/", "") } });
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
	const currentPage = context.params.fix;
	const fix = fixes.find(fix => fix.top_fix_slug_path === "/fixes/" + currentPage);
	return {
		props: { fix }
	}

}