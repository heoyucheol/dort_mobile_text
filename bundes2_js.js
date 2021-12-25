let champs_a_json = [
{name : '맨체스터 시티', Round : 6 , Win :4 , Draw : 0 , Lose:2 , Goal :18 , Loss :10 , Goal_Different :8 , Score :12},

{name : '파리 생제르맹', Round : 6 , Win :3 , Draw : 2 , Lose : 1 , Goal : 13 , Loss : 8 , Goal_Different : 5 , Score :11},

{name : '라이프치히', Round : 6 , Win : 2, Draw : 1 , Lose: 3 , Goal :15 , Loss :14 , Goal_Different :1 , Score :7},

{name : '클뤼프 브뤼허', Round : 6 , Win :1 , Draw : 1 , Lose : 4 , Goal : 6 , Loss :20 , Goal_Different : -14 , Score :4},

];
champs_a_json.sort();

champs_a_json.sort(function(a, b) {
         if(a.Score > b.Score)
         {
           return -1; // 리턴하는 값이 0보다 작은 경우 a가 b보다 앞.
         }
         else if(a.Score < b.Score)
         {
          return 1; // 리턴하는 값이 0보다 크면 b가 a보다 앞으로 옴.
         }
         else {
           if(a.Goal_Different > b.Goal_Different)
           {
             return -1;
           }
           else if(a.Goal_Different < b.Goal_Different)
           {
             return 1;
           }
           else{
             if(a.Goal > b.Goal)
						 {
							 return -1;
						 }
						 else if (a.Goal < b.Goal)
						 {
							 return 1;
						 }
						 else {
						 	{
								return 0;
							}
						 }
           }
         }
});


let champs_b_json = [
{name : '리버풀', Round : 6 , Win :6 , Draw : 0 , Lose:0 , Goal :17 , Loss :6 , Goal_Different :11 , Score :18},

{name : 'AT 마드리드', Round : 6 , Win :2 , Draw : 1 , Lose : 3 , Goal : 7 , Loss : 8 , Goal_Different : -1 , Score :7},

{name : 'FC 포르투', Round : 6 , Win : 1, Draw : 2, Lose: 3 , Goal :4 , Loss :11 , Goal_Different :-7 , Score :5},

{name : 'AC 밀란', Round : 6 , Win :1 , Draw : 1 , Lose : 4 , Goal : 6 , Loss :9 , Goal_Different : -3 , Score :4},

];
champs_b_json.sort();

champs_b_json.sort(function(a, b) {
         if(a.Score > b.Score)
         {
           return -1; // 리턴하는 값이 0보다 작은 경우 a가 b보다 앞.
         }
         else if(a.Score < b.Score)
         {
          return 1; // 리턴하는 값이 0보다 크면 b가 a보다 앞으로 옴.
         }
         else {
           if(a.Goal_Different > b.Goal_Different)
           {
             return -1;
           }
           else if(a.Goal_Different < b.Goal_Different)
           {
             return 1;
           }
           else{
             if(a.Goal > b.Goal)
						 {
							 return -1;
						 }
						 else if (a.Goal < b.Goal)
						 {
							 return 1;
						 }
						 else {
						 	{
								return 0;
							}
						 }
           }
         }
});

let champs_c_json = [
{name : '아약스', Round : 6 , Win :6 , Draw : 0 , Lose:0 , Goal :20 , Loss :5 , Goal_Different :15 , Score :18},

{name : '스포르팅', Round : 6 , Win :3 , Draw : 0 , Lose : 3 , Goal : 14 , Loss : 12 , Goal_Different : 2 , Score :9},

{name : '보루시아 도르트문트', Round : 6 , Win : 3, Draw : 0, Lose: 3 , Goal :10 , Loss :11 , Goal_Different :-1 , Score :9},

{name : 'AC 밀란', Round : 6 , Win :0 , Draw : 0 , Lose : 6 , Goal : 3 , Loss :19 , Goal_Different : -16 , Score :0},

];
champs_c_json.sort();

champs_c_json.sort(function(a, b) {
         if(a.Score > b.Score)
         {
           return -1; // 리턴하는 값이 0보다 작은 경우 a가 b보다 앞.
         }
         else if(a.Score < b.Score)
         {
          return 1; // 리턴하는 값이 0보다 크면 b가 a보다 앞으로 옴.
         }
         else {
           if(a.Goal_Different > b.Goal_Different)
           {
             return -1;
           }
           else if(a.Goal_Different < b.Goal_Different)
           {
             return 1;
           }
           else{
             if(a.Goal > b.Goal)
						 {
							 return -1;
						 }
						 else if (a.Goal < b.Goal)
						 {
							 return 1;
						 }
						 else {
						 	{
								return 0;
							}
						 }
           }
         }
});

let champs_d_json = [
{name : '레알 마드리드', Round : 6 , Win :5 , Draw : 0 , Lose:1 , Goal :14 , Loss :3 , Goal_Different :11 , Score :15},

{name : '인테르', Round : 6 , Win :3 , Draw : 1 , Lose : 2 , Goal : 8 , Loss : 5 , Goal_Different : 3 , Score :10},

{name : 'FC셰리프', Round : 6 , Win : 2, Draw : 1, Lose: 3 , Goal :7 , Loss :11 , Goal_Different :-4 , Score :7},

{name : '샤흐타르', Round : 6 , Win :0 , Draw : 2 , Lose : 4 , Goal : 2 , Loss :12 , Goal_Different : -10 , Score :2},

];
champs_c_json.sort();

champs_c_json.sort(function(a, b) {
         if(a.Score > b.Score)
         {
           return -1; // 리턴하는 값이 0보다 작은 경우 a가 b보다 앞.
         }
         else if(a.Score < b.Score)
         {
          return 1; // 리턴하는 값이 0보다 크면 b가 a보다 앞으로 옴.
         }
         else {
           if(a.Goal_Different > b.Goal_Different)
           {
             return -1;
           }
           else if(a.Goal_Different < b.Goal_Different)
           {
             return 1;
           }
           else{
             if(a.Goal > b.Goal)
						 {
							 return -1;
						 }
						 else if (a.Goal < b.Goal)
						 {
							 return 1;
						 }
						 else {
						 	{
								return 0;
							}
						 }
           }
         }
});




let bundesliga_json = [
	{Name:'바이에른 뮌헨',Round : 15,Win : 12,Draw : 1, Lose : 2, Goal : 47, Loss : 16, Goal_Different : 31, Score : 37},

	{Name:'보루시아 도르트문트',Round : 15,Win : 10,Draw : 1, Lose : 4, Goal : 36, Loss : 23, Goal_Different : 13, Score : 31},

	{Name:'SC 프라이부르크',Round : 15,Win : 7,Draw : 4, Lose : 4, Goal : 26, Loss : 15, Goal_Different: 11, Score : 25},

	{Name:'레버쿠젠',Round : 15,Win : 8,Draw : 3, Lose : 4, Goal : 37, Loss : 24, Goal_Different :13, Score : 27},

	{Name:'우니온 베를린',Round : 15,Win : 6,Draw : 5, Lose : 4, Goal : 22, Loss : 21, Goal_Different :1, Score : 23},

	{Name:'볼프스부르크',Round : 15,Win : 6,Draw : 2, Lose : 7, Goal : 15, Loss : 22, Goal_Different :-7, Score : 20},

	{Name:'라이프치히',Round : 15,Win : 6,Draw : 3, Lose : 6, Goal : 29, Loss : 19, Goal_Different: 10, Score : 21},

	{Name:'마인츠 05',Round : 15,Win : 6,Draw : 3, Lose : 6, Goal : 21, Loss : 16, Goal_Different: 5, Score : 21},

	{Name:'묀헨글라트바흐',Round : 15,Win : 5,Draw : 3, Lose : 7, Goal : 19, Loss : 28, Goal_Different: -9, Score : 18},

	{Name:'호펜하임',Round : 15,Win : 8,Draw : 2, Lose : 5, Goal : 32, Loss : 23, Goal_Different: 9, Score : 26},

	{Name:'아인트라흐트',Round : 15,Win : 5,Draw : 6, Lose : 4, Goal : 23, Loss : 22, Goal_Different: 1, Score : 21},

	{Name:'쾰른',Round : 15,Win : 4,Draw : 7, Lose : 4, Goal : 23, Loss : 25, Goal_Different: -2, Score : 19},

	{Name:'보훔',Round : 15,Win : 6,Draw : 2, Lose : 7, Goal : 16, Loss : 23, Goal_Different: -7, Score : 20},

	{Name:'헤르타 BSC',Round : 15,Win : 5,Draw : 3, Lose : 7, Goal : 17, Loss : 29, Goal_Different: -12, Score : 18},

	{Name:'아우크스부르크',Round : 15,Win : 4,Draw : 4, Lose : 7, Goal : 16, Loss : 25, Goal_Different: -9, Score : 16},

	{Name:'슈투트가르트',Round : 15,Win : 4,Draw : 5, Lose : 6, Goal : 22, Loss : 25, Goal_Different: -3, Score : 17},

	{Name:'빌레펠트',Round : 15,Win : 1,Draw : 7, Lose : 7, Goal : 10, Loss : 22, Goal_Different: -12, Score : 10},

	{Name:'그로이터 퓌르트',Round : 15,Win : 1,Draw : 1, Lose : 13, Goal : 13, Loss : 46, Goal_Different: -33, Score : 4},
];
bundesliga_json.sort();

bundesliga_json.sort(function(a, b) {
         if(a.Score > b.Score)
         {
           return -1; // 리턴하는 값이 0보다 작은 경우 a가 b보다 앞.
         }
         else if(a.Score < b.Score)
         {
          return 1; // 리턴하는 값이 0보다 크면 b가 a보다 앞으로 옴.
         }
         else {
           if(a.Goal_Different > b.Goal_Different)
           {
             return -1;
           }
           else if(a.Goal_Different < b.Goal_Different)
           {
             return 1;
           }
           else{
             if(a.Goal > b.Goal)
						 {
							 return -1;
						 }
						 else if (a.Goal < b.Goal)
						 {
							 return 1;
						 }
						 else {
						 	{
								return 0;
							}
						 }
           }
         }
});






let i =0;
let z= 1;
let x = 0;

// 이하 bundesliga변수에 배열 객체를 통해 배열 공간 추가
function add_row()
{
		let bundesliga = new Array(19);
		let col = 9;

		let myTbody = document.getElementById('add_table');

// 이하 제이슨 bundesliga변수에 bundesliga_json파일을 변수로 담는 반복문

		if(myTbody.rows.length == 0)
		{

		 for(let i=0; i<18; i++)
		 {
				 bundesliga[i] = Object.values(bundesliga_json[i]);
		 }

// 이하 셀 추가 후 내용 삽입
		 for(let i = 0; i < 18; i++)
	 	 {
			  let row = myTbody.insertRow(i);

			  for(let j= 0; j < 9; j++)
				{
					 let cell = row.insertCell(j);
					 if( bundesliga[i][j] == '바이에른 뮌헨')
					 {
							cell.innerHTML = "<img id = 'league_emblem' src = '분데스리가팀 엠블럼/바이에른뮌헨.svg' width = 20px;>" +' '+ bundesliga[i][j];
					 }
					 else if(bundesliga[i][j] == '보루시아 도르트문트')
					 {
							 cell.innerHTML = "<img src = '분데스리가팀 엠블럼/보루시아도르트문트.svg' width = 20px;>" +' '+ bundesliga[i][j];
					 }
					 else if(bundesliga[i][j] == '레버쿠젠')
					 {
								cell.innerHTML = "<img src = '분데스리가팀 엠블럼/레버쿠젠.svg' width = 23px;>" +' '+ bundesliga[i][j];
					 }
					 else if(bundesliga[i][j] == '호펜하임')
					 {
								cell.innerHTML = "<img src = '분데스리가팀 엠블럼/호펜하임.svg' width = 18px;>" +' '+ bundesliga[i][j];
					 }
					 else if(bundesliga[i][j] == 'SC 프라이부르크')
					 {
							 cell.innerHTML = "<img src = '분데스리가팀 엠블럼/프라이부르크.svg' width = 16px;>" +' '+ bundesliga[i][j];
					 }
					 else if(bundesliga[i][j] == '우니온 베를린')
					 {
								cell.innerHTML = "<img src = '분데스리가팀 엠블럼/우니온베를린.svg' width = 25px;>" +' '+ bundesliga[i][j];
					 }
					 else if(bundesliga[i][j] == '라이프치히')
					 {
							 cell.innerHTML = "<img src = '분데스리가팀 엠블럼/라이프치히.svg' width = 33px;>" +' '+ bundesliga[i][j];
					 }
					 else if(bundesliga[i][j] == '마인츠 05')
					 {
								cell.innerHTML = "<img src = '분데스리가팀 엠블럼/마인츠05.svg' width = 20px;>" +' '+ bundesliga[i][j];
					 }
					 else if(bundesliga[i][j] == '아인트라흐트')
					 {
							 cell.innerHTML ="<img src = '분데스리가팀 엠블럼/아인트라흐트.svg' width = 20px;>" +' '+ bundesliga[i][j];
					 }
					 else if(bundesliga[i][j] == '보훔')
					 {
								cell.innerHTML = "<img src = '분데스리가팀 엠블럼/보훔.svg' width = 19px;>" +' '+ bundesliga[i][j];
					 }
					 else if(bundesliga[i][j] == '볼프스부르크')
					 {
							 cell.innerHTML = "<img src = '분데스리가팀 엠블럼/볼프스부르크.svg' width = 20px;>" +' '+ bundesliga[i][j];
					 }
					 else if(bundesliga[i][j] == '쾰른')
					 {
								cell.innerHTML = "<img src = '분데스리가팀 엠블럼/쾰른.svg' width = 20px;>" +' '+ bundesliga[i][j];
					 }
					 else if(bundesliga[i][j] == '묀헨글라트바흐')
					 {
								cell.innerHTML = "<img src = '분데스리가팀 엠블럼/묀헨글라트바흐.svg' width = 16px;>" +' '+ bundesliga[i][j];
					 }
					 else if(bundesliga[i][j] == '헤르타 BSC')
					 {
							 cell.innerHTML = "<img src = '분데스리가팀 엠블럼/헤르타.svg' width = 18px; >" +' '+ bundesliga[i][j];
					 }
					 else if(bundesliga[i][j] == '슈투트가르트')
					 {
								cell.innerHTML = "<img src = '분데스리가팀 엠블럼/슈투트가르트.svg' width = 22px;>" +' '+ bundesliga[i][j];
					 }
					 else if(bundesliga[i][j] == '아우크스부르크')
					 {
								cell.innerHTML = "<img src = '분데스리가팀 엠블럼/아우크스부르크.svg' width = 19px;>" +' '+ bundesliga[i][j];
					 }
					 else if(bundesliga[i][j] == '빌레펠트')
					 {
							 cell.innerHTML = "<img src = '분데스리가팀 엠블럼/빌레펠트.svg' width = 20px;>" +' '+ bundesliga[i][j];
					 }
					 else if(bundesliga[i][j] == '그로이터 퓌르트')
					 {
								cell.innerHTML = "<img src = '분데스리가팀 엠블럼/그로이터퓌르트.svg' width = 18px;>" +' '+ bundesliga[i][j];
					 }
						else{
							cell.innerHTML = bundesliga[i][j];
						}

				}

	 	 }



	document.getElementById('table_container').style.transition = 'opacity 0.2s linear';
		document.getElementById('table_container').style.transitionDelay = '0.1s';
	document.getElementById('table_container').style.opacity = 1;
	document.getElementById('add_table').style.tableLayout = 'fixed';
	document.getElementById('table_container').style.tableLayout = 'fixed';
document.getElementById('table_container').style.borderBottom = '1px grey solid';

	}
}

function add_champs_a_row()
{
		let champs_a = new Array(4);
		let col = 9;

		let myTbody = document.getElementById('champs_add_table_a');

// 이하 제이슨 bundesliga변수에 bundesliga_json파일을 변수로 담는 반복문

		if(myTbody.rows.length == 0)
		{

		 for(let i=0; i<4; i++)
		 {
				 champs_a[i] = Object.values(champs_a_json[i]);
		 }

// 이하 셀 추가 후 내용 삽입
		 for(let i = 0; i < 4; i++)
	 	 {
			  let row = myTbody.insertRow(i);

			  for(let j= 0; j < 9; j++)
				{
					 let cell = row.insertCell(j);
					 cell.innerHTML = champs_a[i][j];
				}
	 	 }
	}
}

function add_champs_b_row()
{
		let champs_b = new Array(4);
		let col = 9;

		let myTbody = document.getElementById('champs_add_table_b');

// 이하 제이슨 bundesliga변수에 bundesliga_json파일을 변수로 담는 반복문

		if(myTbody.rows.length == 0)
		{

		 for(let i=0; i<4; i++)
		 {
				 champs_b[i] = Object.values(champs_b_json[i]);
		 }

// 이하 셀 추가 후 내용 삽입
		 for(let i = 0; i < 4; i++)
	 	 {
			  let row = myTbody.insertRow(i);

			  for(let j= 0; j < 9; j++)
				{
					 let cell = row.insertCell(j);
					 cell.innerHTML = champs_b[i][j];
				}
	 	 }
	}
}

function add_champs_c_row()
{
		let champs_c = new Array(4);
		let col = 9;

		let myTbody = document.getElementById('champs_add_table_c');

// 이하 제이슨 bundesliga변수에 bundesliga_json파일을 변수로 담는 반복문

		if(myTbody.rows.length == 0)
		{

		 for(let i=0; i<4; i++)
		 {
				 champs_c[i] = Object.values(champs_c_json[i]);
		 }

// 이하 셀 추가 후 내용 삽입
		 for(let i = 0; i < 4; i++)
	 	 {
			  let row = myTbody.insertRow(i);

			  for(let j= 0; j < 9; j++)
				{
					 let cell = row.insertCell(j);
					 cell.innerHTML = champs_c[i][j];
				}

	 	 }
	}

}


function add_champs_d_row()
{
		let champs_d = new Array(4);
		let col = 9;

		let myTbody = document.getElementById('champs_add_table_d');

// 이하 제이슨 bundesliga변수에 bundesliga_json파일을 변수로 담는 반복문

		if(myTbody.rows.length == 0)
		{

		 for(let i=0; i<4; i++)
		 {
				 champs_d[i] = Object.values(champs_d_json[i]);
		 }

// 이하 셀 추가 후 내용 삽입
		 for(let i = 0; i < 4; i++)
	 	 {
			  let row = myTbody.insertRow(i);

			  for(let j= 0; j < 9; j++)
				{
					 let cell = row.insertCell(j);
					 cell.innerHTML = champs_d[i][j];
				}

	 	 }
	}

}


function league_click(){
	let b = document.getElementById('table_container');
	let c = document.getElementById('add_table');
	let d = document.getElementById('league');
	b.style.transition = 'opacity 0.1s linear';
	b.style.transitionDelay = '0.1s';
	b.style.opacity = '1';
	c.style.opacity = '1';
	d.style.color = '#fde100';
	}

function league_click_dark(){
  let b = document.getElementById('bg_img');
  let c = document.getElementById('stdm_inside');
  b.style.transition ='filter 0.3s linear';
  b.style.filter = 'grayscale(100%)';
  b.style.filter = 'brightness(0.5)';
  c.style.filter = 'brightness(0.5)';
}

function roll_back(){
  let a = document.getElementById('full_name');
  let b = document.getElementById('line');
  let c = document.getElementById('bg_img');
  let d = document.getElementById('stdm_inside');
	let e = document.getElementById('add_table');
	let f = document.getElementById('table_container');
	let g = document.getElementById('league');
  b.style.animation = 'line_fold 0.2s  forwards';
  c.style.filter = 'brightness(1)';
  d.style.filter = 'brightness(1)';
	e.style.transition = 'opacity 0.05s linear';
	f.style.transition = 'opacity 0.1s linear';
	f.style.opacity = '0';
	g.style.color = 'white';
}

let on_off = 0;


function box_line(){
  let a = document.getElementById('line');
  a.style.animation = 'line 0.2s 1 forwards';
}

function player_click(){
	let playerbox = document.getElementById('line');
	playerbox.style.animation = 'line_player 0.2s 1 forwards';
	let b = document.getElementById('player');
	b.style.color = '#fde100';
}

function player_rollback(){
	let list = document.getElementById('player_flex');
	list.style.transition = 'opacity 0.01s linear';
	list.style.opacity = '0';
	let b = document.getElementById('player');
	b.style.color = 'white';
	list.style.visibility = 'hidden';
}


function player_list(){
	let list = document.getElementById('player_flex');
	list.style.transition = 'opacity 0.2s linear';
	list.style.transitionDelay = '0.15s';
	list.style.opacity = '1';
	list.style.visibility = 'visible';
}

function champs_click(){
	let champs_box = document.getElementById('line_champs');
	let champs_flex = document.getElementById('champs_flex');
	let z = document.getElementById('champs');
	champs_flex.style.transition = 'opacity 0.2s linear';
	champs_flex.style.transitionDelay = '0.15s';
	champs_flex.style.opacity = '1';

	champs_box.style.animation = 'line_champs 0.2s 1 forwards';
	z.style.color = '#fde100';
}
function champs_click_rollback(){
let champs_box = document.getElementById('line_champs');
let champs_flex = document.getElementById('champs_flex');
	champs_box.style.animation = 'line_champs_fold 0.1s 1 forwards';
	champs_flex.style.opacity = '0';
}



// function box_line(){
// let a = document.getElementById('line');
// let b=0;
// if(b == 0);
// {
//   a.style.animation = 'line 0.45s cubic-bezier( 0.02, 0.05, 0.1, 1) forwards';
//   b = 1;
// }
// else if(b==1);
// {
//   a.style.animation = 'line 0.45s cubic-bezier( 0.02, 0.05, 0.1, 1) forwards';
//   b = 1;
// }
