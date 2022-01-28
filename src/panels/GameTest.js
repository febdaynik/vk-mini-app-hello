import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, CellButton } from '@vkontakte/vkui';

import './game.css';
let word = "", attempts = 6, game = true;
const popup_text = (text, start, end) => {
	// document.querySelector(".popup_block").insertAdjacentHTML('afterBegin',`<div class="popup ">${text}</div>`)
	var p = document.createElement("div"); p.className = "popup disableblc"; p.innerText = text
	document.querySelector(".popup_block").append(p)
	setTimeout(()=>{p.classList.toggle("disableblc")},start)
	setTimeout(()=>{p.classList.toggle("disableblc")},end-start)
	setTimeout(()=>{p.remove()},end)
};

const new_word = () =>{
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://botpoliteh.ru/static_dir/newFile.txt', false);
	xhr.send();

	let arr_word = xhr.responseText.split("\r\n")
	let rnd = Math.floor(Math.random()*arr_word.length)
	return word = arr_word[rnd]
};

// new_word()

// popup_text("Угадаешь? Значит красавчик", 3000, 6000)
// setTimeout(function(){popup_text("Как дела?", 1000, 6000)},7000)
const start = () => {
	attempts = 6, game = true;
	try{
		let arr = ["#dhjgf432","#gfklj244"] 
		arr.forEach(elem => {document.querySelectorAll(elem).forEach(e => e.remove())})
		// document.querySelectorAll("#dhjgf432");
	} catch(err){console.log(err)}

	document.getElementById("count").innerText = `Попыток: ${attempts}`
	// popup_text("Тебе нужно отгадать слово!", 500, 4000)
	let row = document.createElement("div"); row.className = "row-key"
	document.getElementById('word').append(row)
	for (var i of word){
		row.insertAdjacentHTML("afterBegin",`<div id="gfklj244" class="letter borrad m-5 bg-block">&nbsp;</div>`)
	}

	for (var key of ["йцукенгшщзхъ","фывапролджэ","ячсмитьбю"]){
		let row = document.createElement("div"); row.className = "row-key"
		document.getElementById('keyboard').append(row)
		for (var i of key.split("")){
			row.insertAdjacentHTML('beforeEnd',`<div id="dhjgf432" class="flex-1 m-5 borrad letter button bg-block" aria-label="${i}">${i}</div>`)
		}
	} 
};  

new_word()
// start()

document.addEventListener("click", function(event){
	if (event.target.id == "dhjgf432"){
		// if (!game || attempts == 0) return popup_text("Игра окончена!\nБыло загадано новое слово", 500, 6000)
		
		const ans = this_ok(event.target)

		if (!ans) {
			event.target.classList.toggle("disable")
			document.getElementById("count").innerText = `Попыток: ${--attempts}`
			// return
		}
		else event.target.classList.toggle("okey")
		const over = game_over()
		if (!over) {
			new_word()
			return start()
			// return popup_text("Игра окончена!\nСейчас будет загадано новое слово", 500, 6000)
		}
	}
});


function this_ok(key){
	const arr_w = word.split("") 
	if (arr_w.includes(key.innerText.toLowerCase())){
		var pos = 0
		for (var i of arr_w){
			if (i === key.innerText.toLowerCase()){
				document.querySelectorAll("#gfklj244")[pos].innerText = key.innerText;
			}
			pos++
		}
		return true
	}
	return false
}
function game_over(){
	let a = ''; document.querySelectorAll("#gfklj244").forEach((e) => {a+=e.innerText})
	if (a.toLowerCase() == word) return( game = false, popup_text("Вы отгадали слово!\nБыло загадано новое слово", 500, 6000))
	if (attempts == 0) return( game = false, popup_text("Вы не угадали слово!\nБыло загадано новое слово", 500, 6000))
	return game = true
}

class Game extends React.Component {
	state = {
		reload: false
	}

	render(id, go){
		return(
			<Panel id={id}>
				<PanelHeader className="myClass">Отгадай слово</PanelHeader>
				<div className="popup_block"></div>
				<Div id="count"></Div>
				<div id="game">
					<div id="word" className="column-"></div>
				</div>

				<main className="page flex-1">
					<div id="keyboard" aria-label={setTimeout(() => start(), 25)}></div>
				</main>

			</Panel>
		);

	}
}


Game.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Game;
