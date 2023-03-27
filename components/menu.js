import { useState } from "react";
import Search from "./search";
import { menuItems } from "../source/data";

export default function Menu() {

	const [options] = useState({...menuItems});

	function menuCloseClick() {
		const menu = document.querySelector(".Menu");
		menu.classList.toggle("menuHidden");
	}

	function showOptions1() {
		const icon = document.querySelector(".Menu-optionsIcon");
		const list = document.querySelector(".Menu-newItem1");
		icon.classList.toggle("listArrowRotate");
		list.classList.toggle("hidden");
	}

	function showOptions2() {
		const icons = document.querySelectorAll(".Menu-optionsIcon");
		const list = document.querySelector(".Menu-newItem2");
		icons[1].classList.toggle("listArrowRotate");
		list.classList.toggle("hidden");
	}

	function showSuboptions(event) {
		const lists = document.querySelectorAll(".Menu-optionsType2");
		const container = document.querySelector(".Menu-newItem2");
		const sublist = document.querySelectorAll(".Menu-sublist");
		lists.forEach((item, i) => {
			if (item === event.target || item === event.target.parentElement) {
				const icon = container.querySelectorAll(".Menu-optionsIcon");
				icon[i].classList.toggle("listArrowRotate");
				sublist[i].classList.toggle("hidden");
			}
		});
	}

	return <aside className="Menu menuHidden">

		<div className="Menu-headerContainer">
			<h5>Menu</h5>
			<svg className="Menu-closeIcon" onClick={menuCloseClick}>
				<path d="M0 0 L16 16 M16 0 L0 16" stroke="#2d3274" strokeWidth="2" />
			</svg>
		</div>

		<div className="Menu-contentContainer">

			<Search/>

			<ul className="Menu-list">

				<li className="Menu-item" onClick={showOptions1}>
					<p>Why AutoTechIQ</p>
					<svg viewBox="0 0 448 512" className="Menu-optionsIcon">
						<path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
					</svg>
				</li>

				<li className="Menu-newItem1 hidden">
					<ul>{options.select1.map(item => <li key={item + 1} className="Menu-optionsType1">{item}</li>)}</ul>
				</li>

				<li className="Menu-simpleItem">Fixes</li>

				<li className="Menu-simpleItem">Shops Near You</li>

				<li className="Menu-item" onClick={showOptions2}>
					<p>Vehicle Symptoms</p>
					<svg viewBox="0 0 448 512" className="Menu-optionsIcon">
						<path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
					</svg>
				</li>
				
				<li className="Menu-newItem2 hidden">
					<ul>
						{
							options.select2.map(array => {
								return array.map((item, i, arr) => {
									if (i === 0 && arr.length > 1) return <li key={item + 1} className="Menu-optionsType2">
										<p onClick={showSuboptions}>{item}</p>
										<svg viewBox="0 0 448 512" className="Menu-optionsIcon" onClick={showSuboptions}>
											<path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" />
										</svg>
										<ul className="Menu-sublist hidden">
											{arr.map((element, i) => {
												if (i) return <li key={element + 1} className="Menu-suboptions">{element}</li>
											})}
										</ul>
									</li>
									else if (i === 0 && arr.length === 1) return <li key={item + 1} className="Menu-optionsType3">{item}</li>
								})
							})
						}
					</ul>
				</li>
			</ul>
		</div>
	</aside>

}