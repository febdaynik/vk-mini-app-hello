import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, CellButton } from '@vkontakte/vkui';

import './game.css';

// let attempts = 6;
// let word = "", attempts = 6, game = true;
// let words = []

// document.addEventListener("click", function(event){
// 	console.log(this.state.attempts)
// 	if (event.target.id == "dhjgf432"){
		
// 		const ans = this_ok(event.target)

// 		if (!ans) {
// 			event.target.classList.toggle("disable")
// 			document.getElementById("count").innerText = `Попыток: ${--attempts}`
// 			// return
// 		}
// 		else event.target.classList.toggle("okey")
// 		const over = game_over()
// 		if (!over) {
// 			new_word()
// 			return start()
// 		}
// 	}
// });


function GenWord({word}){
	const _keyboard_ = word.split("").map((key) => 
		<div id="gfklj244" key={key} className="letter borrad m-5 bg-block">&nbsp;</div>
	);

	return <div className="row-key">{_keyboard_}</div>
}

function GenKeyboard({keys, clk}) {
	let rnd = Math.floor(Math.random()*1234353)
	const _keyboard_ = keys.split("").map((key) =>
		<div id="dhjgf432" className="flex-1 m-5 borrad letter button bg-block" key={key} aria-label="{key}" onClick={clk}>{key}</div>
	);

	return <div className="row-key">{_keyboard_}</div>

}

const new_word = () =>{
	return ["парень", "школа", "армия", "любовь"]

	// var xhr = new XMLHttpRequest();
	// xhr.open('GET', 'https://botpoliteh.ru/static_dir/newFile.txt', false);
	// xhr.send();
	// return xhr.responseText.split("\r\n")
};

const generateWord = () => {
	let words = ["парень", "школа", "армия", "любовь"]
	let rnd = Math.floor(Math.random()*words.length)
	return words[rnd]
}

const Attempt = ({atmp}) =>{

	return (
		<div>
			<Div id="count">Попыток: {atmp}</Div>
			<Button onClick={() => setAtmp(atmp - 1)}>Click</Button>
		</div>
	);
}

const Game = ({id, go}) => {
    const [atmp, setAtmp] = useState(0);

    useEffect(() => {
        setTimeout(() => setAtmp(v => v + 1), 800);
    }, [atmp]);

    return(
		<Panel id={id}>
			<PanelHeader className="myClass">Отгадай слово</PanelHeader>
			<Attempt atmp = {atmp}/>
			<div id="game">
				<Div id="word" className="column-">
					<GenWord word={generateWord()}/>
				</Div>
			</div>
		</Panel>
	);

};


// class Game extends React.Component {
// 	constructor(props) {
// 		super(props);
// 		this.state = {
// 			game: true,
// 			words: new_word(),
// 			word: "",
// 		};
// 	}

// 	generateWord = () => {
// 		let rnd = Math.floor(Math.random()*this.state.words.length)
// 		this.state.word = this.state.words[rnd]
// 		return this.state.word
// 	}

// 	eventKeyboard = (event) => {
// 		if (event.target.id == "dhjgf432"){
		
// 			const ans = this.this_ok(event.target)

// 			if (!ans){
// 				event.target.classList.toggle("disable")
// 				console.log(attempts)
// 				document.querySelector("#count").innerText == `Попыток:${--attempts}`
// 			}
// 			else event.target.classList.toggle("okey")
// 			const over = this.game_over()
// 			if (!over) {
// 				this.setState({game: false})
// 			}
// 		}
// 	}

// 	// Правильная буква?
// 	this_ok = (key) => {
// 		const arr_w = this.state.word.split("") 
// 		if (arr_w.includes(key.innerText.toLowerCase())){
// 			var pos = 0
// 			for (var i of arr_w){
// 				if (i === key.innerText.toLowerCase()){
// 					document.querySelectorAll("#gfklj244")[pos].innerText = key.innerText;
// 				}
// 				pos++
// 			}
// 			return true
// 		}
// 		return false
// 	}

// 	// Игра закончена? 
// 	game_over = () => {
// 		let a = ''; document.querySelectorAll("#gfklj244").forEach((e) => {a+=e.innerText})
// 		if (a.toLowerCase() == this.state.word) return( this.state.game = false)
// 		if (attempts == 0) return( this.state.game = false)
// 		return this.state.game = true
// 	}

// 	render(id, go){
// 		return(
// 			<Panel id={id}>
// 				<PanelHeader className="myClass">Отгадай слово</PanelHeader>
// 				<Attempt />
// 				<div id="game">
// 					<Div id="word" className="column-">
// 						<GenWord word={this.generateWord()}/>
// 						<span>{this.state.word}</span>
// 					</Div>
// 				</div>
// 				<div className="page flex-1">
// 					<Div id="keyboard">
// 						<GenKeyboard keys={"йцукенгшщзхъ"} clk={this.eventKeyboard}/>
// 						<GenKeyboard keys={"фывапролджэ"} clk={this.eventKeyboard}/>
// 						<GenKeyboard keys={"ячсмитьбю"} clk={this.eventKeyboard}/>
// 					</Div>
// 				</div>
// 			</Panel>
// 		);
// 	}

// }


// const Game = ({ id, go }) => (

// 	<Panel id={id}>
// 		<PanelHeader className="myClass">Отгадай слово</PanelHeader>
// 		<Attempt/>
// 	</Panel>
// );
// const Game = ({ id, go }) => (

// 	<Panel id={id}>
// 		<PanelHeader className="myClass">Отгадай слово</PanelHeader>
// 		<Attempt/>
// 		<div id="game">
// 			<Div id="word" className="column-">
// 				<GenWord />
// 			</Div>
// 		</div>
// 		<div className="page flex-1">
// 			<Div id="keyboard">
// 				<GenKeyboard keys={"йцукенгшщзхъ"}/>
// 				<GenKeyboard keys={"фывапролджэ"}/>
// 				<GenKeyboard keys={"ячсмитьбю"}/>
// 			</Div>
// 		</div>
		
// 	</Panel>
// );

Game.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Game;
