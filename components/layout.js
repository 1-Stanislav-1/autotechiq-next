import Head from "next/head";
import Header from "./header";
import Menu from "./menu";
import Footer from "./footer";

export default function Layout({ children, title }) {

	return <>
		<Head>
			<meta keywords="autotechiq"></meta>
			<title>{title}</title>
		</Head>
		<Header/>
		<Menu/>
		<main>
			{children}
		</main>
        <Footer/>
	</>

}