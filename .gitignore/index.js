const Discord = require("discord.js");
const client = new Discord.Client();
const Wiki = require("wikijs");

var prefix = ".";
var moment = require("moment");
var mention = "<@127202201532628992>";

client.on("ready", () => {
var memberCount = client.users.size;
var servercount = client.guilds.size;
	var servers = client.guilds.array().map(g => g.name).join(',');
	console.log("--------------------------------------");
console.log('[!]Connexion en cours... \n[!]Veuillez patienter! \n[!]Meg finit son thé :p \n[!]Les préfixes actuelle:  ' + prefix + "\n[!]Mentions = " + mention + "\n[!]Nombre de membres: " + memberCount + "\n[!]Nombre de serveurs: " + servercount);
});


client.on('message', message => {
	if (message.content === ("Bonjour Meg")){
	message.reply('Bonjour');

} else if (message.content === ("Merci Meg")){
	message.reply('De rien.');
	
} else if (message.content === ("Merci, Meg")){
	message.reply('De rien.');	
	
} else if (message.content === ("Merci Meg !")){
	message.reply('De rien.');
	
} else if (message.content === ("Merci, Meg !")){
	message.reply('De rien.');

} else if (message.content === ("Merci Meg.")){
	message.reply('De rien.');
	
} else if (message.content === ("Merci, Meg.")){
	message.reply('De rien.');	
	
}

else if (message.content.startsWith("!wiki")){
            if(!message.content.substr(5)) {
                console.log(Date.now(), "DANGER", "Vous devez fournir un terme de recherche.");
                message.reply("Vous devez fournir un terme de recherche.");
                return;
            }
            var wiki = new Wiki.default();
            wiki.search(message.content.substr(5)).then(function(data) {
                if(data.results.length==0) {
                    console.log(Date.now(), "DANGER","Wikipedia ne trouve pas ce que vous avez demandé : " + message.content.substr(5));
                    message.reply(" Je ne peux pas trouver ce que vous voulez dans Wikipedia :(");
                    return;
                }
                wiki.page(data.results[0]).then(function(page) {
                    page.summary().then(function(summary) {
                        if(summary.indexOf(" may refer to:") > -1 || summary.indexOf(" may stand for:") > -1) {
                            var options = summary.split("\n").slice(1);
                            var info = "Selectionnez une option parmis celle-ci :";
                            for(var i=0; i<options.length; i++) {
                                info += "\n\t" + i + ") " + options[i];
                            }
                            message.reply(info);
                            selectMenu(message.channel, message.author.id, function(i) {
                                commands.wiki.process(Client, message, options[i].substring(0, options[i].indexOf(",")));
                            }, options.length-1);
                        } else {
                            var sumText = summary.split("\n");
                            var count = 0;
                            var continuation = function() {
                                var paragraph = sumText.shift();
                                if(paragraph && count<3) {
                                    count++;
                                    message.reply(message.channel, paragraph, continuation);
                                }
                            };
                            message.reply("**Trouvé " + page.raw.fullurl + "**", continuation);
                        }
                    });
                });
            }, function(err) {
                console.log(Date.now(), "ERREUR","Impossible de se connecter à Wikipédia");
                message.reply("Uhhh...Something went wrong :(");
            });
        
}

if(message.content.startsWith("!info")) {
    var memberavatar = message.author.avatarURL
    var membername = message.author.username
       var mentionned = message.mentions.users.first();
      var getvalueof;
      if(mentionned){
          var getvalueof = mentionned;
      } else {
          var getvalueof = message.author;
      }

      if(getvalueof.bot == true){
          var checkbot = "L'utilisateur est un bot";
      } else {
          var checkbot = "L'utilisateur n'est pas un bot";
      }
      if(getvalueof.presence.status == 'online'){
        var status = "En ligne"; 
      }else {
        var status = "Hors ligne";
      }

    message.channel.sendMessage({
        embed: {
          type: 'rich',
          description: '',
          fields: [{
            name: 'Pseudo',
            value: getvalueof.username,
            inline: true
          }, {
            name: 'User id',
            value: getvalueof.id,
            inline: true
          },{
            name: 'Discriminateur',
            value: getvalueof.discriminator,
            inline: true
},{
            name: 'Status',
            value: status,
            inline: true
},{
            name: 'Bot',
            value: checkbot,
            inline: true
}],
        image: {
      url: getvalueof.avatarURL
        },
          color: 0xE46525,
          footer: {
            text: '',
            proxy_icon_url: ' '
          },

          author: {
            name: membername,
            icon_url: memberavatar,
            proxy_icon_url: ' '
         }
        }
}).catch(console.error);
        }


	
else {
	var memberavatar = message.author.avatarURL
    var membername = message.author.username	
	var missive = message.content.substr(8)
}

	if(message.content.startsWith('!missive')){
	  
	message.delete(message.author);

	message.guild.channels.find('name', 'missives').send({
		embed: {
			type: 'rich',
			description: '',
			fields: [{
				name: '.',
				value: missive,
				inline: true,
				inline: true
}],

          color: 0xE46525,
          footer: {
            text: '',
            proxy_icon_url: ' '
          },

          author: {
            name: membername,
            icon_url: memberavatar,
            proxy_icon_url: ' '
         }
		}
 });
	
 }




 else {
	var memberavatar = message.author.avatarURL
    var membername = message.author.username	
	var commande = message.content.substr(10)
}

	if(message.content.startsWith('!commande')){
	  
	message.delete(message.author);

	message.guild.channels.find('name', 'commandes').send({
		embed: {
			type: 'rich',
			description: '',
			fields: [{
				name: '.',
				value: commande,
				inline: true,
				inline: true
}],

          color: 0xE46525,
          footer: {
            text: '',
            proxy_icon_url: ' '
          },

          author: {
            name: membername,
            icon_url: memberavatar,
            proxy_icon_url: ' '
         }
		}
 });
	
 }

  else {
	var memberavatar = message.author.avatarURL
    var membername = message.author.username	
	var chasseur = message.content.substr(10)
}

	if(message.content.startsWith('!chasseur')){
	  
	message.delete(message.author);

	message.guild.channels.find('name', 'message').send({
		embed: {
			type: 'rich',
			description: '',
			fields: [{
				name: '.',
				value: chasseur,
				inline: true,
				inline: true
}],

          color: 0xE46525,
          footer: {
            text: '',
            proxy_icon_url: ' '
          },

          author: {
            name: membername,
            icon_url: memberavatar,
            proxy_icon_url: ' '
         }
		}
 });
	
 }
 
else if(message.content.startsWith('!again')){
	message.delete(message.author);
	var again = message.content.substr(8);
	message.channel.sendMessage(again);
  
}

else if (message.content.startsWith("!klir")) {
      let modRole = message.guild.roles.find("name", "clear");
            if(!message.guild.roles.exists("name", "clear")) {
        return  message.channel.send("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Le rôle nécessaire n'existe pas ! :no_entry_sign: ",
          footer: {
            text: "Message par Meg."
          }
        }}).catch(console.error);
      } 
      if(!message.member.roles.has(modRole.id)) {
        return   message.channel.send("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :no_entry_sign: Vous n'avez pas la permissions d'utiliser cette commande ! :no_entry_sign: ",
          footer: {
            text: "Message par Meg."
          }
        }}).catch(console.error);
      }
    var args = message.content.substr(7);
      if(args.length === 0){
        message.channel.send("", {embed: {
          title: "Erreur:",
          color: 0xff0000,
          description: " :x: Vous n'avez pas précisser le nombre :x: ",
          footer: {
            text: "Message par Meg."
          }
        }});
      }
      else {
        var msg;
        if(args.length === 1){
        msg = 2;
      } else {
        msg = parseInt(args[1]);
      }
      message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
      message.channel.send("", {embed: {
        title: "Success!",
        color: 0x06DF00,
        description: "Messages Suprimé!",
        footer: {
          text: "Message par Meg."
        }
      }});
      }
}
		
});

client.on('error', (err) => {
  console.log(err);
});

client.login(process.env.TOKEN)
