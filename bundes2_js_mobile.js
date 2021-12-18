var bundesliga_json = [
	{Name:'바이에른 뮌헨',Round : 15,Win : 12,Draw : 1, Lose : 2, Goal : 47, Loss : 16, Goal_Different : 31, Score : 37},

	{Name:'도르트문트',Round : 15,Win : 10,Draw : 1, Lose : 4, Goal : 36, Loss : 23, Goal_Different : 13, Score : 31},

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


var row = new Array(19);

for(var i = 0; i < row; i++)
{
	row[i] = new Array(9);
}




var i =0;
var z= 1;
var x = 0;

function add_row()
{
		var bundesliga = new Array(19);
		var col = 9;

		var myTbody = document.getElementById('add_table');


		console.log(myTbody.rows.length);
		if(myTbody.rows.length == 0)
		{
			var row_add = myTbody.insertRow(myTbody.rows.length);
		for(var i=0; i<row; i++)
		{
				      bundesliga[i] = new Array(9);
		}

		 for(var i=0; i<18; i++)
		 {
				 bundesliga[i] = Object.values(bundesliga_json[i]);
		 }

		 for(var i = 0; i < 18; i++)
	 	 {
			  var row = myTbody.insertRow(i);

			  for(var j= 0; j < 9; j++)
				{
					 var cell = row.insertCell(j);
					 cell.innerHTML = bundesliga[i][j];
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


function league_click(){
  var a = document.getElementById('full_name');
	var b = document.getElementById('table_container');
		var c = document.getElementById('add_table');
		var d = document.getElementById('league');
  a.style.transition = 'opacity 0.1s linear';
  a.style.opacity = '0';
	b.style.transition = 'opacity 0.1s linear';
		b.style.transitionDelay = '0.1s';
	b.style.opacity = '1';
	c.style.opacity = '1';
	d.style.color = '#fde100';


	}

function league_click_dark(){
  var b = document.getElementById('bg_img');
  var c = document.getElementById('stdm_inside');
  b.style.transition ='filter 0.3s linear';
  b.style.filter = 'grayscale(100%)';
  b.style.filter = 'brightness(0.5)';
  c.style.filter = 'brightness(0.5)';
}

function roll_back(){
  var a = document.getElementById('full_name');
  var b = document.getElementById('line');
  var c = document.getElementById('bg_img');
  var d = document.getElementById('stdm_inside');
	var e = document.getElementById('add_table');
	var f = document.getElementById('table_container');
	var g = document.getElementById('league');


  a.style.transition = 'opacity 0.2s linear';
  a.style.opacity = '1';
  b.style.animation = 'line_fold 0.2s  forwards';
  c.style.filter = 'brightness(1)';
  d.style.filter = 'brightness(1)';
	e.style.transition = 'opacity 0.05s linear';
	f.style.transition = 'opacity 0.1s linear';
		f.style.opacity = '0';
	g.style.color = 'white';
}

var on_off = 0;


function box_line(){
  var a = document.getElementById('line');
  a.style.animation = 'line 0.2s 1 forwards';
}

function player_click(){
	var playerbox = document.getElementById('line');
	playerbox.style.animation = 'line_player 0.2s 1 forwards';
	var a = document.getElementById('full_name');
	a.style.opacity = '0';
	var b = document.getElementById('player');
	b.style.color = '#fde100';
}

function player_rollback(){
	var list = document.getElementById('player_flex');
	list.style.transition = 'opacity 0.01s linear';
	list.style.opacity = '0';
	var b = document.getElementById('player');
	b.style.color = 'white';
	list.style.visibility = 'hidden';
}


function player_list(){
	var list = document.getElementById('player_flex');
		list.style.transition = 'opacity 0.2s linear';
			list.style.transitionDelay = '0.15s';
	list.style.opacity = '1';
		list.style.visibility = 'visible';
}

// function box_line(){
// var a = document.getElementById('line');
// var b=0;
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
