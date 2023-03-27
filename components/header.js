import { useState } from "react";
import { menuItems } from "../source/data";

export default function Header() {

	const [options] = useState({...menuItems});

	function showFirstSelect() {
		const selects = document.querySelector(".Header-topMenuSelect1");
		selects.classList.remove("hidden");
	}

	function hideFirstSelect() {
		const selects = document.querySelector(".Header-topMenuSelect1");
		selects.classList.add("hidden");
	}

	function showSecondSelect() {
		const selects = document.querySelector(".Header-topMenuSelect2");
		selects.classList.remove("hidden");
	}

	function hideSecondSelect() {
		const selects = document.querySelector(".Header-topMenuSelect2");
		selects.classList.add("hidden");
	}

	function menuClick() {
		const menu = document.querySelector(".Menu");
		menu.classList.toggle("menuHidden");
	}

	return <header className="Header">
		<div className="Header-mainContainer">
			<div className="Header-logo"></div>
			<ul className="Header-topMenuList">
				<li className="Header-topMenuItem" onMouseEnter={showFirstSelect} onMouseLeave={hideFirstSelect}>
					<p>Why AutoTechIQ</p>
					<svg className="Header-listIcon" viewBox="0 0 448 512">
						<path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
					</svg>
				</li>
				<li className="Header-topMenuItem">Fixes</li>
				<li className="Header-topMenuItem">Shops Near You</li>
				<li className="Header-topMenuItem" onMouseEnter={showSecondSelect} onMouseLeave={hideSecondSelect}>
					<p>Vehicle Symptoms</p>
					<svg className="Header-listIcon" viewBox="0 0 448 512">
						<path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
					</svg>
				</li>
				<ul className="Header-topMenuSelect1 hidden" onMouseEnter={showFirstSelect} onMouseLeave={hideFirstSelect}>
					{options.select1.map(item => <li key={item} className="Header-topMenuOptionsType1">{item}</li>)}
				</ul>
				<ul className="Header-topMenuSelect2 hidden" onMouseEnter={showSecondSelect} onMouseLeave={hideSecondSelect}>
					{options.select2.map(array => {
						return array.map((item, i) => {
							if (i === 0) return <li key={item} className="Header-topMenuOptionsType1">{item}</li>
							else return <li key={item} className="Header-topMenuOptionsType2">{item}</li>
						});
						
					})}
				</ul>
			</ul>
			<div className="Header-phone">
				<svg className="Header-phoneIcon">
					<path d="M11.2063 12.425L12.6063 11.025C12.7948 10.8388 13.0334 10.7113 13.293 10.6581C13.5526 10.6048 13.8221 10.6281 14.0688 10.725L15.775 11.4063C16.0243 11.5075 16.238 11.6801 16.3893 11.9026C16.5405 12.125 16.6226 12.3873 16.625 12.6563V15.7813C16.6236 15.9643 16.5851 16.1451 16.5119 16.3128C16.4388 16.4805 16.3324 16.6317 16.1993 16.7573C16.0661 16.8828 15.909 16.9801 15.7373 17.0433C15.5655 17.1065 15.3828 17.1343 15.2 17.125C3.24377 16.3813 0.831273 6.25628 0.375023 2.38128C0.353843 2.19099 0.373194 1.99837 0.431803 1.81609C0.490411 1.63382 0.586949 1.46602 0.715065 1.32374C0.84318 1.18145 0.999971 1.0679 1.17512 0.990565C1.35027 0.913227 1.53981 0.873851 1.73127 0.875026H4.75002C5.0194 0.875823 5.28239 0.957193 5.50514 1.10867C5.7279 1.26015 5.90025 1.4748 6.00002 1.72503L6.68127 3.43128C6.78143 3.67694 6.80698 3.94668 6.75474 4.20678C6.7025 4.46689 6.57477 4.70584 6.38752 4.89378L4.98752 6.29378C4.98752 6.29378 5.79377 11.75 11.2063 12.425Z" fill="#2D3274" />
				</svg>
				<span className="Header-phoneNumber">(866)678-8505</span>
			</div>
			<svg className="Header-leftMenuIcon" onClick={menuClick}>
				<path d="M26.7333 14.6667H5.26667C4.56711 14.6667 4 15.2338 4 15.9333V16.0667C4 16.7662 4.56711 17.3333 5.26667 17.3333H26.7333C27.4329 17.3333 28 16.7662 28 16.0667V15.9333C28 15.2338 27.4329 14.6667 26.7333 14.6667Z" fill="#2D3274" />
				<path d="M26.7333 21.3333H5.26667C4.56711 21.3333 4 21.9005 4 22.6V22.7333C4 23.4329 4.56711 24 5.26667 24H26.7333C27.4329 24 28 23.4329 28 22.7333V22.6C28 21.9005 27.4329 21.3333 26.7333 21.3333Z" fill="#2D3274" />
				<path d="M26.7333 8H5.26667C4.56711 8 4 8.56711 4 9.26667V9.4C4 10.0996 4.56711 10.6667 5.26667 10.6667H26.7333C27.4329 10.6667 28 10.0996 28 9.4V9.26667C28 8.56711 27.4329 8 26.7333 8Z" fill="#2D3274" />
			</svg>
		</div>
	</header>

}