const Discord = require("discord.js");
const client = new Discord.Client();
 
client.on("ready", () => {
  console.log("I am ready!");
});

//Dictionnary containing the SSR Weapons
var SSR_weps = {}
SSR_weps["Dainsleif"] = "Altaïr"
SSR_weps["Lohengrin"] = "Percival"
SSR_weps["Claíomh Solais"] = "Charlotta"
SSR_weps["Nagelring"] = "Izmir"
SSR_weps["Ascalon"] = "Siegfried"
SSR_weps["Greatsword Andalius"] = "Aletheia"
SSR_weps["Yyrkoon"] = "Yuisis"
SSR_weps["Caladbolg"] = "Jeanne D'Arc (Light)"
SSR_weps["Ethereal Lasher"] = "Ferry (SSR)"
SSR_weps["Hauteclaire"] = "Albert"
SSR_weps["Hrotti"] = "Seruel"
SSR_weps["Disparia"] = "Jeanne D'Arc (Dark)"
SSR_weps["Gram"] = "Beatrix"
SSR_weps["Lyst Sin"] = "Vira"
SSR_weps["Mistilteinn"] = "Vaseraga"
SSR_weps["Hoarfrost Blade Persius"] = "Lancelot"
SSR_weps["Phantom Thief Blade"] = "Chat Noir"
SSR_weps["Arsene"] = "Catherine"
SSR_weps["Heaven's Cloud"] = "Petra"
SSR_weps["Thunder Dirk Jove"] = "Agielba"
SSR_weps["Twin Helix"] = "Rosamia (SSR)"
SSR_weps["Azoth"] = "Vania"
SSR_weps["Bloody Scar"] = "Veight"
SSR_weps["Brionac"] = "Zeta (Fire)"
SSR_weps["Luin"] = "Heles"
SSR_weps["Pilum"] = "Nezahualpilli"
SSR_weps["Gae Derg"] = "Razia"
SSR_weps["Gargantua"]= "Arulumaya"
SSR_weps["Turpin Spear"]= "Carmelina"
SSR_weps["Skyrend Spear"]= "Forte"
SSR_weps["Sunspot Spear"]= "Zeta (Dark)"
SSR_weps["Scarlet Crest Axe"]= "Yuel"
SSR_weps["Way Flyer"]= "Aoidos"
SSR_weps["Blossom Axe"]= "Vane (SSR)"
SSR_weps["Mettle"]= "Nemone"
SSR_weps["Split End"]= "Melissabelle"
SSR_weps["Windflash"]= "Gawain"
SSR_weps["Ukonvasara"]= "Lady Grey"
SSR_weps["Soul Eater"]= "Hallessena"
SSR_weps["Vassago"]= "Melleau"
SSR_weps["Forbidden Inferno"]= "Anthuria"
SSR_weps["Illusion Scepter"]= "Magisa"
SSR_weps["Starblaze Rings"]= "Zahlhamelina"
SSR_weps["Ice Crystal Staff"]= "Lily"
SSR_weps["Montague's Oath"]= "Romeo"
SSR_weps["Ouroboros"]= "Cagliostro"
SSR_weps["Thyrsus"]= "De La Fille (Earth)"
SSR_weps["Kerykeion"]= "De La Fille (Light)"
SSR_weps["Wing of the Pure"]= "Korwa"
SSR_weps["Capulet's Oath"]= "Juliet"
SSR_weps["Sealed Claustrum"]= "Sarunan"
SSR_weps["Gridarvor"]= "Marquiares"
SSR_weps["Kalaurops"]= "Sarunan (Dark)"
SSR_weps["Meteora"]= "Yngwie"
SSR_weps["Vlisragna"]= "Silva"
SSR_weps["Stratomizer"]= "Eustace"
SSR_weps["Far Away"]= "Lennah"
SSR_weps["Blushing Blossom Pin"]= "Societte (Fire)"
SSR_weps["Brahma Gauntlet"]= "Ghandagoza"
SSR_weps["Magma Gauntlet"]= "Aliza"
SSR_weps["Metal Hand"]= "Lady Katapillar and Vira"
SSR_weps["Scarlet Vane"]= "Societte (Water)"
SSR_weps["Ancient Bandages"]= "Ayer"
SSR_weps["Coco n Mimi"]= "Cerberus"
SSR_weps["Roseate Aetherial Bow"]= "Metera (Fire)"
SSR_weps["Aetherial Bow"]= "Metera (Wind)"
SSR_weps["Heroic Bow"]= "Feena"
SSR_weps["Mobius Strip"]= "Clarisse"
SSR_weps["Melodic Sphere"]= "Lilele"
SSR_weps["Ocean Harp"]= "Sophia"
SSR_weps["Sandcastle Song-Lume"]= "Sara"
SSR_weps["Cords of Heaven Lillah"]= "Arriet"
SSR_weps["Venustas"]= "Narmaya"
SSR_weps["Dragon Slayer"]= "Amira"
SSR_weps["Fudo-Kuniyuki"]= "Yodarha"
SSR_weps["Fusion Mobius"]= "Clarisse (Light)"
SSR_weps["Deirdre's Claws"] = "Scathacha"
SSR_weps["Symbol of Justice"] = "Baotorda (SSR)"
SSR_weps["Bella Aeterna"] = "Yggdrasil"
SSR_weps["Draco Claw"] = "Grea (SSR)"
SSR_weps["Daemon's Spine"] = "Anne"
SSR_weps["Gothic Cutlery"] = "Dorothy and Claudia"
SSR_weps["Heiliges Schwert"] = "Lancelot (Wind)"
SSR_weps["Wurtzite Scythe"] = "Vaseraga (Earth)"
SSR_weps["Gandiva"] = "Ilsa"
SSR_weps["Tanzanite Blade"] = "Therese (SSR)"
SSR_weps["Arachne"] = "Freezie";
SSR_weps["Black Ouroboros"] = "Cagliostro (Dark)"
SSR_weps["Claidheamh Soluis"] = "Charlotta (Light)"
SSR_weps["Cythara Anglica"] = "Selfira"
SSR_weps["Feendrache Pendant"] = "Lancelot and Vane"
SSR_weps["Full Metal Recoil"] = "Silva (Light)";
SSR_weps["Gigante Slicer"] = "Nicholas";
SSR_weps["Gottfried"] = "Aglovale";
SSR_weps["Izayoi"] = "Yuel (Water)"
SSR_weps["Levin Shooter"] = "Levin Sisters"
SSR_weps["Master Key"] = "Wulf and Renie";
SSR_weps["Railgun"] = "Robomi";
SSR_weps["Returner Staff"] = "Yurius";
SSR_weps["Ruler of Fate"] = "Zooey";
SSR_weps["Ruling Pen"] = "Lunalu (SSR)";
SSR_weps["Shadow Viperlance"] = "Azazel";
SSR_weps["Taisai Spirit Bow"] = "Pholia";
SSR_weps["Tiamat Bolt Prime"] = "Tiamat";
SSR_weps["Two-by-Four"] = "Tsubasa";
SSR_weps["White Hawk"] = "Cucouroux (SSR)";
SSR_weps["Wyrmtiger Claw"] = "Soriz";
SSR_weps["Gandring"] = "Tanya (SSR)";
SSR_weps["Galactic Impact"] = "Sen (SSR)";
SSR_weps["Neko Punch Pro"] = "Dante and Freiheit";
SSR_weps["Deirdre's Symbol"] = "Heles (Wind)";



 
SSR_summs = []
SSR_summs.push("Athena")
SSR_summs.push("Prometheus")
SSR_summs.push("Satyr")
SSR_summs.push("Sethlans")
SSR_summs.push("Sylph, Flutterspirit of Purity");
SSR_summs.push("Twin Elements")
SSR_summs.push("Zaoshen");
SSR_summs.push("Bonito");
SSR_summs.push("Ca Ong")
SSR_summs.push("Grani")
SSR_summs.push("Macula Marius")
SSR_summs.push("Neptune")
SSR_summs.push("Oceanus")
SSR_summs.push("Poseidon, the Tide Father");
SSR_summs.push("Snow White");
SSR_summs.push("Ankusha");
SSR_summs.push("Baal")
SSR_summs.push("Cybele")
SSR_summs.push("Gilgamesh")
SSR_summs.push("Gorilla");
SSR_summs.push("Marduk, Battlefield Reaper");
SSR_summs.push("Medusa")
SSR_summs.push("Tezcatlipoca")
SSR_summs.push("Anat, for Love and War");
SSR_summs.push("Freyr");
SSR_summs.push("Garuda")
SSR_summs.push("Garula, Shining Hawk");
SSR_summs.push("Hamsa");
SSR_summs.push("Morrigna")
SSR_summs.push("Nezha")
SSR_summs.push("Quetzalcoatl")
SSR_summs.push("Rose Queen")
SSR_summs.push("Setekh")
SSR_summs.push("Siren")
SSR_summs.push("Adramelech");
SSR_summs.push("Aphrodite");
SSR_summs.push("Apollo")
SSR_summs.push("Hector")
SSR_summs.push("Magus, Triad of Wisdom");
SSR_summs.push("Odin")
SSR_summs.push("Thor")
SSR_summs.push("Vortex Dragon")
SSR_summs.push("Anubis")
SSR_summs.push("Cerberus, Hellhound Trifecta");
SSR_summs.push("Dark Angel Olivia")
SSR_summs.push("Lich")
SSR_summs.push("Nacht");
SSR_summs.push("Satan")
SSR_summs.push("Tsukuyomi");
SSR_summs.push("Typhon")





SSR_summs.push("Agni")
SSR_summs.push("Michael");
SSR_summs.push("Shiva")
SSR_summs.push("Europa");
SSR_summs.push("Gabriel");
SSR_summs.push("Kaguya")
SSR_summs.push("Varuna")
SSR_summs.push("Godsworn Alexiel")
SSR_summs.push("Titan")
SSR_summs.push("Uriel");
SSR_summs.push("Grimnir")
SSR_summs.push("Raphael");
SSR_summs.push("Zephyrus")
SSR_summs.push("Grand Order")
SSR_summs.push("Halluel and Malluel");
SSR_summs.push("Lucifer")
SSR_summs.push("Zeus")
SSR_summs.push("Bahamut")
SSR_summs.push("Hades")



//LEGFEST LIMITED, COMMENT IF NO LEGFEST

var legfest_SSR_weps= {}
legfest_SSR_weps["Canisius"] = "Vajra"
legfest_SSR_weps["AK-4A"] = "Eugen"
legfest_SSR_weps["Gambanteinn"] = "Io (Grand)"
legfest_SSR_weps["Murgleis"] = "Katalina (Grand)"
legfest_SSR_weps["Reunion"] = "Lecia"
legfest_SSR_weps["Benedia"] = "Rackam (Grand)"
legfest_SSR_weps["Love Eternal"] = "Rosetta (Grand)"
legfest_SSR_weps["Dormius"] = "Andira"
legfest_SSR_weps["Gallinarius"] = "Mahira";
legfest_SSR_weps["Ichigo Hitofuri"] = "Cain (Grand)";
legfest_SSR_weps["Ramulus"] = "Anila"
legfest_SSR_weps["Unheil"] = "Ferry (Grand)";


 var flashfest_SSR_weps = {}
flashfest_SSR_weps["Blutgang"] = "Black Knight"
flashfest_SSR_weps["Eden"] = "Lucio"
flashfest_SSR_weps["Parazonium"] = "Orchid"
flashfest_SSR_weps["Ixaba"] = "Sturm"
flashfest_SSR_weps["Blue Sphere"] = "Drang"
flashfest_SSR_weps["Cute Ribbon"] = "Zooey (Summer)"
flashfest_SSR_weps["Certificus"] = "Vira (Grand)"
flashfest_SSR_weps["Fallen Sword"] = "Olivia"
flashfest_SSR_weps["Galilei's Insight"] = "Europa"
flashfest_SSR_weps["Mirror Blade Shard"] = "Alexiel"

const prefix = "%";
client.on("message", (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    if (message.content.indexOf("lewd") !== -1) {
        message.channel.send("Watch it!", {files: ["https://tenkarchive.files.wordpress.com/2017/08/tumblr_oulmnwyz6r1wq4i18o1_400.png?w=1140"]});
    }
    if (message.content.indexOf("sealtime") !== -1) {
        var d = new Date();
        var h = d.getHours();
        h += 9;
        var m = d.getMinutes();
        if (m < 10) {
            m = "0" + m;
        }
        //ST is 10am and 9pm
        var stmsg = "";
        if(h === 10 || h === 21) {
            stmsg = "It is currently strike time!";
        }
        else if(h < 10 || h >= 22) {
            stmsg = "The next strike time is at 10:00 seal time.";
        }
        else {
            stmsg = "The next strike time is at 21:00 seal time.";
        }
        message.channel.send("Seal time is currently: " + h % 24 + ":" + m + ". " + stmsg);
    }
    if (message.content.indexOf("spark") !== -1) {
        var specialpool = legfest_SSR_weps;
        if(message.content.indexOf("flashfest") !== -1) {
            specialpool = flashfest_SSR_weps;
        }
        var rares = 0;
        var srs = 0;
        var ssrs = 0;
        var ssrobtained = [];
        var premsize = Object.keys(SSR_weps).length;
        var specialsize = Object.keys(specialpool).length;
        var summsize = SSR_summs.length;

        for(var i = 0; i < 300; i++) {
            var roll = Math.random();
            if(roll > 0.21) {
                rares++;
            }
            else if(roll > 0.06) {
                srs++;
            }
            else {
                ssrs++;
                var poolsize = premsize + specialsize + summsize;
                roll = Math.random();
                roll = Math.floor(roll * poolsize);
                if(roll < premsize) {
                    var weapon = Object.keys(SSR_weps)[roll];
                    var chara = SSR_weps[weapon];
                    ssrobtained.push("<SSR> " + weapon + " - You recruited " + chara);
                }
                else if(roll < premsize + specialsize) {
                    var weapon = Object.keys(specialpool)[roll - premsize];
                    var chara = specialpool[weapon];
                    ssrobtained.push("<SSR> " + weapon + " - You recruited " + chara);
                } 
                else {
                    var summ = SSR_summs[roll - premsize - specialsize];
                    ssrobtained.push("<SSR Summon> " + summ);
                }
            }
        }
        var msg = "";
        for(var i = 0; i < ssrobtained.length; i++) {
            msg += ssrobtained[i] + "\n";
        }
        const embed = {
            "title": "Your Spark",
            "description": "[Visualize your spark here](https://www.youtube.com/watch?v=dQw4w9WgXcQ)",
            "color": 16776960,
            "footer": {
              "icon_url": "https://img.fireden.net/vg/image/1520/15/1520159789584.png", 
              "text": "Sponsored by KMR"
            },
            "thumbnail": {
              "url": "https://thehill.com/sites/default/files/styles/thumb_small_article/public/moneybudget1_getty.jpg?itok=5CQEQ5qr"
            },
            "author": {
              "name": "Scathacha",
              "icon_url": "https://gbf.wiki/images/2/2b/Stamp157.png"
            },
            "fields": [
              {
                "name": "Rares: ",
                "value": rares
              },
              {
                "name": "Super Rares: ",
                "value": srs
              },
              {
                "name": "Super Super Rares: ",
                "value": ssrs
              },
              {
                "name": "Your SSRS:",
                "value": msg
              }
            ]
          };
          message.channel.send("Humph. Here's your spark.", { embed });
    }
  });
   
client.login(process.env.BOT_TOKEN);
