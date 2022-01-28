import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Persik from './panels/Persik';
// import Game from './panels/Game';
import Game from './panels/GameTest';

const App = () => {
	const [activePanel, setActivePanel] = useState('maingame');
	const [fetchedUser, setUser] = useState(null);
	const [popout, setPopout] = useState(<ScreenSpinner size='large' />);

	// var attempts = 6, game = true;

	// const genKeyboard = () => {
	// 	for (key of ["йцукенгшщзхъ","фывапролджэ","ячсмитьбю"]){
	// 		let row = document.createElement("div"); row.className = "row-key"
	// 		document.getElementById('keyboard').append(row)
	// 		for (i of key.split("")){
	// 			// if (i === "-")
	// 			// 	row.insertAdjacentHTML('beforeEnd',`<div id="dhjgf432" class="flex-1 m-5 borrad letter button bg-block" aria-label="del">
	// 			// 		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="h-6 w-6 ml-1"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"></path></svg>
	// 			// 		</div>`)
	// 			// else if(i === "+")
	// 			// 	row.insertAdjacentHTML('beforeEnd',`<div id="dhjgf432" class="flex-1 m-5 borrad letter button bg-block" aria-label="ввод">ввод</div>`)

	// 			// else 
	// 			row.insertAdjacentHTML('beforeEnd',`<div id="dhjgf432" class="flex-1 m-5 borrad letter button bg-block" aria-label="${i}">${i}</div>`)
	// 		}
	// 	} 
	// }

	// const startGame = () => {

	// }

	// const start = () => {
	// 	attempts = 6, game = true;
	// 	try{
	// 		let arr = ["#dhjgf432","#gfklj244"] 
	// 		arr.forEach(elem => {document.querySelectorAll(elem).forEach(e => e.remove())})
	// 		// document.querySelectorAll("#dhjgf432");
	// 	} catch(err){console.log(err)}

	// 	document.getElementById("count").innerText = `Попыток: ${attempts}`
	// 	// popup_text("Тебе нужно отгадать слово!", 500, 4000)
	// 	let row = document.createElement("div"); row.className = "row-key"
	// 	document.getElementById('word').append(row)
	// 	for (i of word){
	// 		row.insertAdjacentHTML("afterBegin",`<div id="gfklj244" class="letter borrad m-5 bg-block">&nbsp;</div>`)
	// 	}

	// 	for (key of ["йцукенгшщзхъ","фывапролджэ","ячсмитьбю"]){
	// 		let row = document.createElement("div"); row.className = "row-key"
	// 		document.getElementById('keyboard').append(row)
	// 		for (i of key.split("")){
	// 			// if (i === "-")
	// 			// 	row.insertAdjacentHTML('beforeEnd',`<div id="dhjgf432" class="flex-1 m-5 borrad letter button bg-block" aria-label="del">
	// 			// 		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" class="h-6 w-6 ml-1"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2M3 12l6.414 6.414a2 2 0 001.414.586H19a2 2 0 002-2V7a2 2 0 00-2-2h-8.172a2 2 0 00-1.414.586L3 12z"></path></svg>
	// 			// 		</div>`)
	// 			// else if(i === "+")
	// 			// 	row.insertAdjacentHTML('beforeEnd',`<div id="dhjgf432" class="flex-1 m-5 borrad letter button bg-block" aria-label="ввод">ввод</div>`)

	// 			// else 
	// 			row.insertAdjacentHTML('beforeEnd',`<div id="dhjgf432" class="flex-1 m-5 borrad letter button bg-block" aria-label="${i}">${i}</div>`)
	// 		}
	// 	} 
	// };

	useEffect(() => {
		bridge.subscribe(({ detail: { type, data }}) => {
			if (type === 'VKWebAppUpdateConfig') {
				const schemeAttribute = document.createAttribute('scheme');
				schemeAttribute.value = data.scheme ? data.scheme : 'client_light';
				document.body.attributes.setNamedItem(schemeAttribute);
			}
		});
		async function fetchData() {
			const user = await bridge.send('VKWebAppGetUserInfo');
			setUser(user);
			setPopout(null);
		}
		fetchData();
	}, []);

	const go = e => {
		setActivePanel(e.currentTarget.dataset.to);
	};

	// -----
		// <AdaptivityProvider>
		// 	<AppRoot>
		// 		<View activePanel={activePanel} popout={popout}>
		// 			<Home id='home' fetchedUser={fetchedUser} go={go} />
		// 			<Persik id='persik' go={go} />
		// 		</View>
		// 	</AppRoot>
		// </AdaptivityProvider>
	// -----

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel}>
					<Home id='home' fetchedUser={fetchedUser} go={go} />
					<Game id='maingame' go={go} />
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
