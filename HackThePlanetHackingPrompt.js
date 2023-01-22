const terms = [ "Splice", "TrapDoor", "Refresh Rate", "System Shot", "System Shock", "Virtual Machine", "Dual-Connection", "Worm", "Thermal", "Slush Files", "Crackbox", "Trusted Network", "SmokeScreen", "Encryption", "Motherboard", "KillSwitch", "Backdoor", "Antivirus", "Data Transfer", "Megabyte", "Cerberus", "Glitch", "Program Manaul", "Crash", "Codebook", "Crosswire", "PDF Bomb", "ZipBomb", "Virus", "I.C.E.", "Hook Protocol", "NestDump", "Reboot", "Spoof", "Termite", "Trojan", "Rabbit", "Blackwall", "Jump the Network", "Phreak", "Dial-In", "Viper", "Connection Port", "Overload"]

const random1 = Math.floor(Math.random() * terms.length);
const random2 = Math.floor(Math.random() * terms.length);
const random3 = Math.floor(Math.random() * terms.length);

const prompt = terms[random1] + " - " + terms[random2] + " - " + terms[random3];

let results_html = `<h2>[Hacking Prompt]</h2><br>`

results_html = results_html + `[ ` + prompt  + ` ]`


ChatMessage.create({
user: game.user._id,
speaker: ChatMessage.getSpeaker({token: actor}),
content: results_html 
});