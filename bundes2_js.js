let champs_a_json = [
{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/맨시티.svg' style =' width : 18px;'>", name : '맨체스터 시티', Round : 6 , Win :4 , Draw : 0 , Lose:2 , Goal :18 , Loss :10 , Goal_Different :8 , Score :12},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/파리생제르맹.svg' style =' width : 18px;'>", name : '파리 생제르맹', Round : 6 , Win :3 , Draw : 2 , Lose : 1 , Goal : 13 , Loss : 8 , Goal_Different : 5 , Score :11},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/라이프치히.svg' style =' width : 30px;'>", name : '라이프치히', Round : 6 , Win : 2, Draw : 1 , Lose: 3 , Goal :15 , Loss :14 , Goal_Different :1 , Score :7},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/클리프브뤼허.svg' style =' width : 18px;'>", name : '클뤼프 브뤼허', Round : 6 , Win :1 , Draw : 1 , Lose : 4 , Goal : 6 , Loss :20 , Goal_Different : -14 , Score :4},

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
{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/리버풀.svg' style =' width : 18px;'>", name : '리버풀', Round : 6 , Win :6 , Draw : 0 , Lose:0 , Goal :17 , Loss :6 , Goal_Different :11 , Score :18},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/at마드리드.svg' style =' width : 17px;'>", name : 'AT 마드리드', Round : 6 , Win :2 , Draw : 1 , Lose : 3 , Goal : 7 , Loss : 8 , Goal_Different : -1 , Score :7},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/포르투.svg' style =' width : 20px;'>", name : 'FC 포르투', Round : 6 , Win : 1, Draw : 2, Lose: 3 , Goal :4 , Loss :11 , Goal_Different :-7 , Score :5},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/밀란.svg' style =' width : 15px;'>", name : 'AC 밀란', Round : 6 , Win :1 , Draw : 1 , Lose : 4 , Goal : 6 , Loss :9 , Goal_Different : -3 , Score :4},

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
{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/아약스.svg' style =' width : 20px;'>", name : '아약스', Round : 6 , Win :6 , Draw : 0 , Lose:0 , Goal :20 , Loss :5 , Goal_Different :15 , Score :18},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/스포르팅.svg' style =' width : 18px;'>", name : '스포르팅', Round : 6 , Win :3 , Draw : 0 , Lose : 3 , Goal : 14 , Loss : 12 , Goal_Different : 2 , Score :9},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/보루시아도르트문트.svg' style =' width : 18px;'>", name : '보루시아 도르트문트', Round : 6 , Win : 3, Draw : 0, Lose: 3 , Goal :10 , Loss :11 , Goal_Different :-1 , Score :9},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/베식타슈.svg' style =' width : 20px;'>", name : '베식타시', Round : 6 , Win :0 , Draw : 0 , Lose : 6 , Goal : 3 , Loss :19 , Goal_Different : -16 , Score :0},

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
{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/레알마드리드.svg' style =' width : 18px;'>", name : '레알 마드리드', Round : 6 , Win :5 , Draw : 0 , Lose:1 , Goal :14 , Loss :3 , Goal_Different :11 , Score :15},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/인테르.svg' style =' width : 19px;'>", name : '인테르', Round : 6 , Win :3 , Draw : 1 , Lose : 2 , Goal : 8 , Loss : 5 , Goal_Different : 3 , Score :10},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/셰리프.svg' style =' width : 20px;'>", name : 'FC셰리프', Round : 6 , Win : 2, Draw : 1, Lose: 3 , Goal :7 , Loss :11 , Goal_Different :-4 , Score :7},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/샤흐타르.svg' style =' width : 12px;'>", name : '샤흐타르', Round : 6 , Win :0 , Draw : 2 , Lose : 4 , Goal : 2 , Loss :12 , Goal_Different : -10 , Score :2},

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

let champs_e_json = [
{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/바이에른뮌헨.svg' style =' width : 19px;'>", name : '바이에른 뮌헨', Round : 6 , Win :6 , Draw : 0 , Lose:0 , Goal :22 , Loss :3 , Goal_Different :19 , Score :18},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/벤피카.svg' style =' width : 21px;'>", name : '벤피카', Round : 6 , Win :2 , Draw : 2 , Lose : 2 , Goal : 7 , Loss : 9 , Goal_Different : -2 , Score :8},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/바르셀로나.svg' style =' width : 20px;'>", name : '바르셀로나', Round : 6 , Win : 2, Draw : 1, Lose: 3 , Goal :2 , Loss :9 , Goal_Different :-7 , Score :7},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/디나모키예프.svg' style =' width : 16px;'>", name : '디나모 키예프', Round : 6 , Win :0 , Draw : 1 , Lose : 5 , Goal : 1 , Loss :11 , Goal_Different : -10 , Score :1},

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

let champs_f_json = [
{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/맨유.svg' style =' width : 18px;'>", name : '맨체스터 유나이티드', Round : 6 , Win :3 , Draw : 2 , Lose:1 , Goal :11 , Loss :8 , Goal_Different :3 , Score :11},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/비야레알.svg' style =' width : 19px;'>", name : '비야 레알', Round : 6 , Win :3 , Draw : 1 , Lose : 2 , Goal : 12 , Loss : 9 , Goal_Different : 3 , Score :10},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/아탈란타.svg' style =' width : 17px;'>", name : '아탈란타', Round : 6 , Win : 1, Draw : 3, Lose: 2 , Goal :12 , Loss :13 , Goal_Different :-1 , Score :6},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/영보이스.svg' style =' width : 18px;'>", name : '영 보이스', Round : 6 , Win :1 , Draw : 2 , Lose : 3 , Goal : 7 , Loss :12 , Goal_Different : -5 , Score :5},

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

let champs_g_json = [
{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/릴.svg' style =' width : 19px;'>", name : 'LOSC 릴', Round : 6 , Win :3 , Draw : 2 , Lose:1 , Goal :7 , Loss :4 , Goal_Different :3 , Score : 11},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/잘츠부르크.svg' style =' width : 20px;'>", name : 'RB 잘츠부르크', Round : 6 , Win :3 , Draw : 1 , Lose : 2 , Goal : 8 , Loss : 6 , Goal_Different : 2 , Score :10},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/세비야.svg' style =' width : 17px;'>", name : '세비야', Round : 6 , Win : 1, Draw : 3, Lose: 2 , Goal :5 , Loss :5 , Goal_Different :0 , Score :6},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/볼프스부르크.svg' style =' width : 20px;'>", name : '볼프스부르크', Round : 6 , Win :1 , Draw : 2 , Lose : 3 , Goal : 5 , Loss :10, Goal_Different : -5 , Score :5},

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

let champs_h_json = [
{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/유벤투스.svg' style =' width : 12px;'>", name : '유벤투스', Round : 6 , Win :5 , Draw : 0 , Lose:1 , Goal :10 , Loss :6 , Goal_Different :4 , Score :15},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/첼시.svg' style =' width : 20px;'>", name : '첼시', Round : 6 , Win :4 , Draw : 1 , Lose : 1 , Goal : 13 , Loss : 4 , Goal_Different : 9 , Score :13},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/제니트.svg' style =' width : 20px;'>", name : '제니트', Round : 6 , Win : 1, Draw : 2, Lose: 3 , Goal :10 , Loss :10 , Goal_Different :0 , Score :5},

{Logo : "<img id = 'bundes_emblem' src = '챔스조별리그팀 엠블럼/말뫼.svg' style =' width : 18px;'>", name : '말뫼', Round : 6 , Win :0 , Draw : 1 , Lose : 5 , Goal : 1 , Loss :14 , Goal_Different : -13 , Score :1},

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
	{Logo : "<img id = 'bundes_emblem' src = '분데스리가팀 엠블럼/바이에른뮌헨.svg' style =' width : 20px;'>", Name:'바이에른 뮌헨',Round : 17,Win : 14,Draw : 1, Lose : 2, Goal : 56, Loss : 16, Goal_Different : 40, Score : 43},

	{logo : "<img src = '분데스리가팀 엠블럼/보루시아도르트문트.svg'  style =' width : 20px;'>", Name:'보루시아 도르트문트',Round : 17,Win : 11,Draw : 1, Lose : 5, Goal : 41, Loss : 26, Goal_Different : 15, Score : 34},

	{logo : "<img src = '분데스리가팀 엠블럼/프라이부르크.svg'  style =' width : 16px;'>", Name:'SC 프라이부르크',Round : 17,Win : 8,Draw : 5, Lose : 4, Goal : 28, Loss : 16, Goal_Different: 12, Score : 29},

	{logo : "<img src = '분데스리가팀 엠블럼/레버쿠젠.svg'  style =' width : 23px;'>", Name:'레버쿠젠',Round : 17,Win : 8,Draw : 4, Lose : 5, Goal : 40, Loss : 28, Goal_Different :12, Score : 28},

	{logo : "<img src = '분데스리가팀 엠블럼/우니온베를린.svg'  style =' width : 25px;'>", Name:'우니온 베를린',Round : 17,Win : 7,Draw : 6, Lose : 4, Goal : 23, Loss : 21, Goal_Different :2, Score : 27},

	{logo : "<img src = '분데스리가팀 엠블럼/볼프스부르크.svg'  style =' width : 23px;'>", Name:'볼프스부르크',Round : 17, Win : 6, Draw : 2, Lose : 9, Goal : 17, Loss : 29, Goal_Different :-12, Score : 20},

	{logo : "<img src = '분데스리가팀 엠블럼/라이프치히.svg'  style =' width : 33px;'>", Name:'라이프치히',Round : 17,Win : 6,Draw : 4, Lose : 7, Goal : 30, Loss : 22, Goal_Different: 8, Score : 22},

	{logo : "<img src = '분데스리가팀 엠블럼/마인츠05.svg'  style =' width : 20px;'>", Name:'마인츠 05',Round : 17,Win : 7,Draw : 3, Lose : 7, Goal : 25, Loss : 17, Goal_Different: 8, Score : 24},

	{logo : "<img src = '분데스리가팀 엠블럼/묀헨글라트바흐.svg'  style =' width : 17px;'>", Name:'묀헨글라트바흐',Round : 17,Win : 5,Draw : 4, Lose : 8, Goal : 22, Loss : 32, Goal_Different: -10, Score : 19},

	{logo : "<img src = '분데스리가팀 엠블럼/호펜하임.svg'  style =' width : 17px;'>", Name:'호펜하임',Round : 17,Win : 8,Draw : 4, Lose : 5, Goal : 35, Loss : 26, Goal_Different: 9, Score : 28},

	{logo : "<img src = '분데스리가팀 엠블럼/아인트라흐트.svg'  style =' width : 20px;'>", Name:'아인트라흐트',Round : 17,Win : 7,Draw : 6, Lose : 4, Goal : 27, Loss : 24, Goal_Different: 3, Score : 27},

	{logo : "<img src = '분데스리가팀 엠블럼/쾰른.svg'  style =' width : 20px;'>", Name:'쾰른',Round : 17,Win : 6,Draw : 7, Lose : 4, Goal : 27, Loss : 27, Goal_Different: 0, Score : 25},

	{logo : "<img src = '분데스리가팀 엠블럼/보훔.svg'  style =' width : 20px;'>", Name:'보훔',Round : 17,Win : 6,Draw : 2, Lose : 9, Goal : 16, Loss : 26, Goal_Different: -10, Score : 20},

	{logo : "<img src = '분데스리가팀 엠블럼/헤르타.svg'  style =' width : 20px;'>", Name:'헤르타 BSC',Round : 17,Win :6 ,Draw : 3, Lose : 8, Goal : 20, Loss : 35, Goal_Different: -15, Score : 21},

	{logo : "<img src = '분데스리가팀 엠블럼/아우크스부르크.svg'  style =' width : 15px;'>", Name:'아우크스부르크',Round : 17,Win : 4,Draw : 6, Lose : 7, Goal : 17, Loss : 26, Goal_Different: -9, Score : 18},

	{logo : "<img src = '분데스리가팀 엠블럼/슈투트가르트.svg'  style =' width : 18px;'>", Name:'슈투트가르트',Round : 17,Win : 4,Draw : 5, Lose : 8, Goal : 22, Loss : 31, Goal_Different: -9, Score : 17},

	{logo : "<img src = '분데스리가팀 엠블럼/빌레펠트.svg'  style =' width : 23px;'>", Name:'빌레펠트',Round : 17,Win : 3,Draw : 7, Lose : 7, Goal : 14, Loss : 22, Goal_Different: -8, Score : 16},

	{logo : "<img src = '분데스리가팀 엠블럼/그로이터퓌르트.svg'  style =' width : 17px;'>", Name:'그로이터 퓌르트',Round : 17,Win : 1,Draw : 2, Lose : 14, Goal : 13, Loss : 49, Goal_Different: -36, Score : 5},
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
		let col = 10;

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

			  for(let j= 0; j < 10; j++)
				{
					 let cell = row.insertCell(j);
							cell.innerHTML = bundesliga[i][j];
              if(i < 4 && j == 0)
              {
                cell.style.borderLeft = '2px solid #4285f4';

              }
              else if(i == 4 && j == 0)
              {
                cell.style.borderLeft = '2px solid #fa7b17';
              }
              else if(i==5 && j == 0)
              {
                cell.style.borderLeft = '2px solid  #34a853';
              }

              if(i <= 18 && j <= 10)
              {
                cell.style.height = '0px';
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

			  for(let j= 0; j < 10; j++)
				{
					 let cell = row.insertCell(j);
					 cell.innerHTML = champs_a[i][j];
           if(i < 2 && j == 0)
           {
             cell.style.borderLeft = '2px solid #4285f4';
           }
           else if(i == 2 && j == 0)
           {
             cell.style.borderLeft = '2px solid #fa7b17';
           }

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

			  for(let j= 0; j < 10; j++)
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

			  for(let j= 0; j < 10; j++)
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

			  for(let j= 0; j < 10; j++)
				{
					 let cell = row.insertCell(j);
					 cell.innerHTML = champs_d[i][j];
				}

	 	 }
	}

}

function add_champs_e_row()
{
		let champs_e = new Array(4);
		let col = 9;

		let myTbody = document.getElementById('champs_add_table_e');

// 이하 제이슨 bundesliga변수에 bundesliga_json파일을 변수로 담는 반복문

		if(myTbody.rows.length == 0)
		{

		 for(let i=0; i<4; i++)
		 {
				 champs_e[i] = Object.values(champs_e_json[i]);
		 }

// 이하 셀 추가 후 내용 삽입
		 for(let i = 0; i < 4; i++)
	 	 {
			  let row = myTbody.insertRow(i);

			  for(let j= 0; j < 10; j++)
				{
					 let cell = row.insertCell(j);
					 cell.innerHTML = champs_e[i][j];
				}

	 	 }
	}

}

function add_champs_f_row()
{
		let champs_f = new Array(4);
		let col = 9;

		let myTbody = document.getElementById('champs_add_table_f');

// 이하 제이슨 bundesliga변수에 bundesliga_json파일을 변수로 담는 반복문

		if(myTbody.rows.length == 0)
		{

		 for(let i=0; i<4; i++)
		 {
				 champs_f[i] = Object.values(champs_f_json[i]);
		 }

// 이하 셀 추가 후 내용 삽입
		 for(let i = 0; i < 4; i++)
	 	 {
			  let row = myTbody.insertRow(i);

			  for(let j= 0; j < 10; j++)
				{
					 let cell = row.insertCell(j);
					 cell.innerHTML = champs_f[i][j];
				}

	 	 }
	}

}

function add_champs_g_row()
{
		let champs_g = new Array(4);
		let col = 9;

		let myTbody = document.getElementById('champs_add_table_g');

// 이하 제이슨 bundesliga변수에 bundesliga_json파일을 변수로 담는 반복문

		if(myTbody.rows.length == 0)
		{

		 for(let i=0; i<4; i++)
		 {
				 champs_g[i] = Object.values(champs_g_json[i]);
		 }

// 이하 셀 추가 후 내용 삽입
		 for(let i = 0; i < 4; i++)
	 	 {
			  let row = myTbody.insertRow(i);

			  for(let j= 0; j < 10; j++)
				{
					 let cell = row.insertCell(j);
					 cell.innerHTML = champs_g[i][j];
				}

	 	 }
	}

}

function add_champs_h_row()
{
		let champs_h = new Array(4);
		let col = 9;

		let myTbody = document.getElementById('champs_add_table_h');

// 이하 제이슨 bundesliga변수에 bundesliga_json파일을 변수로 담는 반복문

		if(myTbody.rows.length == 0)
		{

		 for(let i=0; i<4; i++)
		 {
				 champs_h[i] = Object.values(champs_h_json[i]);
		 }

// 이하 셀 추가 후 내용 삽입
		 for(let i = 0; i < 4; i++)
	 	 {
			  let row = myTbody.insertRow(i);

			  for(let j= 0; j < 10; j++)
				{
					 let cell = row.insertCell(j);
					 cell.innerHTML = champs_h[i][j];
				}

	 	 }
	}

}



function league_click(){
	let b = document.getElementById('table_container');
	let c = document.getElementById('add_table');
	let d = document.getElementById('league');
	b.style.transition = 'opacity 0.3s linear';
  c.style.transition = 'opacity 0.3s linear';
  c.style.transitionDelay = '0.2s';
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
  a.style.animation = 'line 0.4s 1 forwards';
}

function player_click(){
	let playerbox = document.getElementById('line');
	playerbox.style.animation = 'line_player 0.4s 1 forwards';
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

function champs_info(){
	let champs_flex = document.getElementById('champs_flex');
  champs_flex.style.transition = 'opacity 0.4s linear';
  champs_flex.style.transitionDelay = '0.15s';
  champs_flex.style.opacity = '1';
  champs_flex.style.visibility = 'visible';
}

function champs_click(){
  let champs_box = document.getElementById('line');
  let z = document.getElementById('champs');
  champs_box.style.animation = 'line_champs 0.4s 1 forwards';
  z.style.color = '#fde100';
}

function champs_click_rollback(){
  let champs_flex = document.getElementById('champs_flex');
	champs_flex.style.transition = 'opacity 0.01s linear';
champs_flex.style.opacity = '0';
	let b = document.getElementById('champs');
	b.style.color = 'white';
	champs_flex.style.visibility = 'hidden';
}

function champs_click_dark(){
  let b = document.getElementById('bg_img');
  let c = document.getElementById('stdm_inside');
  b.style.transition ='filter 0.3s linear';
  b.style.filter = 'grayscale(100%)';
  b.style.filter = 'brightness(0.5)';
  c.style.filter = 'brightness(0.5)';

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
