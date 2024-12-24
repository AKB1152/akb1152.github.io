let short = false;
let language = "zh"; let language_id=0;
let elem = document.getElementById("hour");

const weekdays = {
	"zh" : ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
	"jp" : ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"],
	"en" : ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], 
	"de" : ["Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag"],
	"tr" : ["Pazar", "Pazartesi", "Salı", 'Çarşamba', 'Perşembe', 'Cuma', 'Cumartesi'],
	"zh_zhou" : ["周日", "周一", "周二", "周三", "周四", "周五", "周六"],
	"en_short": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], 
	"de_short": ["So ", "Mo ", "Di ", "Mi ", "Do ", "Fr ", "Sa "], 
	"jp_short": ["日", "月", "火", "水", "木", "金", "土"],
	"tr_short": ["Pz", "Pt", "Sa", "Ça", "Pe", "Cu", "Ct", "Pz"]
}

const hourgroup = {
	"zh": [
		{
			"name": "半夜",
			"from": 23, 
			  "to":  2
		},
		{
			"name": "凌晨",
			"from":  3, 
			  "to":  4
		},
		{
			"name": "早上",
			"from":  5, 
			  "to":  8
		}, 
		{
			"name": "上午",
			"from":  9, 
			  "to": 11
		},
		{
			"name": "中午",
			"from": 12, 
			  "to": 14
		},
		{
			"name": "下午",
			"from": 15, 
			  "to": 18
		}, 
		{
			"name": "晚上",
			"from": 19, 
			  "to": 22
		}
	], 
	"jp": [
		{
			"name": "<ruby>未明<rt>みめい</rt>の</ruby>",
			"from":  0, 
			  "to":  2
		},
		{
			"name": "<ruby>明<rt>あ</rt>け<rt></rt>方<rt>がた</rt>の</ruby>",
			"from":  3, 
			  "to":  5
		},
		{
			"name": "<ruby>朝<rt>あさ</rt>の</ruby>",
			"from":  6, 
			  "to":  9
		}, 
		{
			"name": "<ruby>昼前<rt>ひるまえ</rt>の</ruby>",
			"from": 10, 
			  "to": 11
		},
		{
			"name": "<ruby>昼頃<rt>ひるごろ</rt>の</ruby>",
			"from": 12, 
			  "to": 14
		},
		{
			"name": "<ruby>昼過<rt>ひるす</rt>ぎの</ruby>",
			"from": 15, 
			  "to": 16
		}, 
		{
			"name": "<ruby>夕方<rt>ゆうがた</rt>の</ruby>",
			"from": 17, 
			  "to": 18
		}, 
		{
			"name": "<ruby>晩<rt></rt>の</ruby>",
			"from": 19, 
			  "to": 21
		}, 
		{
			"name": "<ruby>（真<rt>ま</rt>）<rt></rt>夜中<rt>よなか</rt>の</ruby>",
			"from": 21, 
			  "to": 23
		}
	], 
	"en": [
		{
			"name": "AM",
			"from": 0, 
			  "to": 11
		}, 
		{
			"name": "PM",
			"from": 12, 
			  "to": 23
		}
	], 
	"de": [
		{
			"name": "morgens",
			"from":  3, 
			  "to":  6
		},
		{
			"name": "vormittags",
			"from":  7, 
			  "to": 10
		},
		{
			"name": "mittag",
			"from": 11, 
			  "to": 13
		}, 
		{
			"name": "nachmittags",
			"from": 14, 
			  "to": 16
		},
		{
			"name": "abends",
			"from": 17, 
			  "to": 20
		},
		{
			"name": "nachts",
			"from": 21, 
			  "to": 2
		}, 
	], 
	"tr": [
		{
			"name": "gece",
			"from":  22, 
			  "to":  3
		},
		{
			"name": "erken",
			"from":  4, 
			  "to":  9
		},
		{
			"name": "ög&#x306;len",
			"from": 10, 
			  "to": 13
		}, 
		{
			"name": "ög&#x306;leden sonra",
			"from": 14, 
			  "to": 16
		},
		{
			"name": "ak&#x15f;am",
			"from": 17, 
			  "to": 21
		}
	], 

}


const config = [
	{
		"display": "Chinese",
		"lang": "zh",
		"wk_long": "zh",
		"wk_short": "zh_zhou", 
		"assemble": ["<span id=\"date_content\">", "$YEAR", "年", "$MONTH", "月", "$DAY", "日", " (", "$WKD", ") ", "</span><br><span id=\"hour_content\">", "$HRG", " ", "$HR", "点 ", "$MIN", "分 ", "$SEC", "秒", "</span>"]
	},
	{
		"display": "Japanese",
		"lang": "jp",
		"wk_long": "jp",
		"wk_short": "jp_short",
		"assemble": ["<span id=\"date_content\">", "$YEAR", "年", "$MONTH", "月", "$DAY", "日", " (", "$WKD", ") ", "</span><br><span id=\"hour_content\">", "$HRG", " ", "$HR", "時 ", "$MIN", "分 ", "$SEC", "秒", "</span>"]
	},
	{
		"display": "German",
		"lang": "de",
		"wk_long": "de",
		"wk_short": "de_short", 
		"assemble": ["<span id=\"date_content\">", "$DAY", ".", "$MONTH", ".", "$YEAR", " ", " (", "$WKD", ") ", "</span><br><span id=\"hour_content\">", "$HR", ":", "$MIN", ":", "$SEC", " ", "$HRG", "</span>"]
	},
	{
		"display": "English",
		"lang": "en",
		"wk_long": "en",
		"wk_short": "en_short",
		"assemble": ["<span id=\"date_content\">", "$MONTH", "/", "$DAY", "/", "$YEAR", " ", " (", "$WKD", ") ", "</span><br><span id=\"hour_content\">", "$HR", ":", "$MIN", ":", "$SEC", " ", "$HRG", "</span>"]
	},
	{
		"display": "Turkish",
		"lang": "tr",
		"wk_long": "tr",
		"wk_short": "tr_short",
		"assemble": ["<span id=\"date_content\">", "$DAY", ".", "$MONTH", ".", "$YEAR", " ", " (", "$WKD", ") ", "</span><br><span id=\"hour_content\">", "$HRG", " ", "$HR", ":", "$MIN", ":", "$SEC", "</span>"]
	},
]

change_language = (newlanguage) => {
	language_id = 0; 
	for (var i = 0; i < config.length; i++)
		if (config[i].lang == newlanguage || config[i].display.toLowerCase() == newlanguage.toLowerCase())
			language_id = i; 
		else if (language_id != 0)
			break;
	language = config[language_id].lang;
	if (language == "zh")
		document.body.style.fontFamily = 'Noto Sans SC'; 
	else if (language == "jp")
		document.body.style.fontFamily = 'Noto Sans JP';
	else 
		document.body.style.fontFamily = 'Noto Sans';
		 
}

get_hourgroup = (hour) => {
	var cfg = hourgroup[language];
	for(var i = 0; i < cfg.length; i++)
		if (hour <= cfg[i].to && hour >= cfg[i].from)
			return cfg[i].name;
}

update = () => {
	var date = new Date();
	var year = date.getFullYear(); 
	var month= date.getMonth();
	var day  = date.getDate();
	var weekday = weekdays[config[language_id][short? "wk_short" : "wk_long"]][date.getDay()];
	var hour = date.getHours();
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	

	var assemble = config[language_id]["assemble"];
	var string = "";

	for (var i = 0; i < assemble.length; i++)
		switch (assemble[i]) {
			case "$YEAR":  
				string += year;
				break;
			case "$MONTH":  
				string += month;
				break;
			case "$DAY":  
				string += day;
				break;
			case "$WKD":  
				string += weekday;
				break;
			case "$HRG":  
				string += get_hourgroup(hour);
				break;
			case "$HR":  
				string += hour;
				break;
			case "$MIN":  
				string += minutes;
				break;
			case "$SEC": 
				string += seconds;
				break;
			default:
				string += assemble[i];
				break;
		}
	
	//console.log (string)
	if (elem.innerHTML != string)
		elem.innerHTML = string;
}


toggle_short_long = () => short = !short;

toggle_theme = () => {
	var style = document.getElementById("style");
	if (style.href.endsWith("dark.css"))
		style.href = "./light.css"; 
	else	
		style.href = "./dark.css";
}

filldropdown = () => {
	var container = document.getElementById("dd_container");
	for (var i=0; i < config.length; i++) {
		var span = document.createElement("span")
		span.innerHTML="<span onclick=\"change_language('"+config[i].lang+"')\">"+config[i].display+"</span>";
		container.appendChild(span); 
	}
}