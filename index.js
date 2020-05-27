const Discord = require('discord.js');
const bot = new Discord.Client();


const token = 'ilustração do token'; //O discord não permite a divulgação dele.
var dado,freq=0,i=0;

bot.login(token)

    bot.on('message', msg => {


        if(msg.content === 'd4' || msg.content === 'D4' || msg.content === '2D4' || msg.content === '2d4'|| msg.content === '1d4'|| msg.content === '1D4' || msg.content ==='3d4' || msg.content === '3D4' || msg.content ==='4d4' || msg.content === '4D4'){
            msg.reply('tirou: ');
                if(msg.member.voice.channel && !msg.author.bot){
                    msg.member.voice.channel.join().then(connection => {
                    connection.play('resource/diceroll.mp3', { volume: 0.5 });
                    });}                        
            if(msg.content ==='d4' || msg.content === 'D4' || msg.content === '1D4'|| msg.content === '1d4'){freq=1;}
            if(msg.content ==='2d4' || msg.content === '2D4' ){freq=2;}
            if(msg.content ==='3d4' || msg.content === '3D4' ){freq=3;}
            if(msg.content ==='4d4' || msg.content === '4D4' ){freq=4;}
                for(i=0;i<freq;i++){
                    dado=Math.floor(Math.random() * 4+1);
                    
                    if(dado == '4'){msg.channel.send("",{files: ["./resource/dado4d.jpg"]});}
                    if(dado == '3'){msg.channel.send("",{files: ["./resource/dado3d.jpg"]});}
                    if(dado == '2'){msg.channel.send("",{files: ["./resource/dado2d.jpg"]});}
                    if(dado == '1'){msg.channel.send("",{files: ["./resource/dado1d.jpg"]});}
    }
    
    freq=0;
}

    else if(msg.content === 'd6' || msg.content === 'D6' || msg.content === '2D6' || msg.content === '2d6'|| msg.content === '1d6'|| msg.content === '1D6' || msg.content ==='3d6' || msg.content === '3D6' || msg.content ==='4d6' || msg.content === '4D6'){
        msg.reply('tirou: ');
        if(msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
            connection.play('resource/diceroll.mp3', { volume: 0.5 });
            });}  
        if(msg.content ==='d6' || msg.content === 'D6' || msg.content === '1D6'|| msg.content === '1d6'){freq=1;}
        if(msg.content ==='2d6' || msg.content === '2D6' ){freq=2;}
        if(msg.content ==='3d6' || msg.content === '3D6' ){freq=3;}
        if(msg.content ==='4d6' || msg.content === '4D6' ){freq=4;}
            for(i=0;i<freq;i++){
                dado=Math.floor(Math.random() * 6+1); 
                if(dado == '6'){msg.channel.send("",{files: ["./resource/dado6d.jpg"]});}
                if(dado == '5'){msg.channel.send("",{files: ["./resource/dado5d.jpg"]});}
                if(dado == '4'){msg.channel.send("",{files: ["./resource/dado4d.jpg"]});}
                if(dado == '3'){msg.channel.send("",{files: ["./resource/dado3d.jpg"]});}
                if(dado == '2'){msg.channel.send("",{files: ["./resource/dado2d.jpg"]});}
                if(dado == '1'){msg.channel.send("",{files: ["./resource/dado1d.jpg"]});}

    }
    freq=0;
}
    
    else if(msg.content === 'd8' || msg.content === 'D8' || msg.content === '2D8' || msg.content === '2d8'|| msg.content === '1d8'|| msg.content === '1D8' || msg.content ==='3d8' || msg.content === '3D8' || msg.content ==='4d8' || msg.content === '4D8'){
        msg.reply('tirou: ');
        if(msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
            connection.play('resource/diceroll.mp3', { volume: 0.5 });
            });}  
        if(msg.content ==='d8' || msg.content === 'D8' || msg.content === '1D8'|| msg.content === '1d8'){freq=1;}
        if(msg.content ==='2d8' || msg.content === '2D8' ){freq=2;}
        if(msg.content ==='3d8' || msg.content === '3D8' ){freq=3;}
        if(msg.content ==='4d8' || msg.content === '4D8' ){freq=4;}
            for(i=0;i<freq;i++){
                 dado=Math.floor(Math.random() * 8+1);
                if(dado == '8'){msg.channel.send("",{files: ["./resource/dado8d.jpg"]});}
                if(dado == '7'){msg.channel.send("",{files: ["./resource/dado7d.jpg"]});}
                if(dado == '6'){msg.channel.send("",{files: ["./resource/dado6d.jpg"]});}
                if(dado == '5'){msg.channel.send("",{files: ["./resource/dado5d.jpg"]});}
                if(dado == '4'){msg.channel.send("",{files: ["./resource/dado4d.jpg"]});}
                if(dado == '3'){msg.channel.send("",{files: ["./resource/dado3d.jpg"]});}
                if(dado == '2'){msg.channel.send("",{files: ["./resource/dado2d.jpg"]});}
                if(dado == '1'){msg.channel.send("",{files: ["./resource/dado1d.jpg"]});}
    }
    freq=0;
}
    else if(msg.content === 'd10' || msg.content === 'D10' || msg.content === '2D10' || msg.content === '2d10'|| msg.content === '1d10'|| msg.content === '1D10' || msg.content ==='3d10' || msg.content === '3D10' || msg.content ==='4d10' || msg.content === '4D10'){
        msg.reply('tirou: ');
        if(msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
            connection.play('resource/diceroll.mp3', { volume: 0.5 });
            });}  
        if(msg.content ==='d10' || msg.content === 'D10' || msg.content === '1D10'|| msg.content === '1d10'){freq=1;}
        if(msg.content ==='2d10' || msg.content === '2D10' ){freq=2;}
        if(msg.content ==='3d10' || msg.content === '3D10' ){freq=3;}
        if(msg.content ==='4d10' || msg.content === '4D10' ){freq=4;}
            for(i=0;i<freq;i++){
                dado=Math.floor(Math.random() * 10+1);
                if(dado == '10'){msg.channel.send("",{files: ["./resource/dado0d.jpg"]});}
                if(dado == '9'){msg.channel.send("",{files: ["./resource/dado9d.jpg"]});}
                if(dado == '8'){msg.channel.send("",{files: ["./resource/dado8d.jpg"]});}
                if(dado == '7'){msg.channel.send("",{files: ["./resource/dado7d.jpg"]});}
                if(dado == '6'){msg.channel.send("",{files: ["./resource/dado6d.jpg"]});}
                if(dado == '5'){msg.channel.send("",{files: ["./resource/dado5d.jpg"]});}
                if(dado == '4'){msg.channel.send("",{files: ["./resource/dado4d.jpg"]});}
                if(dado == '3'){msg.channel.send("",{files: ["./resource/dado3d.jpg"]});}
                if(dado == '2'){msg.channel.send("",{files: ["./resource/dado2d.jpg"]});}
                if(dado == '1'){msg.channel.send("",{files: ["./resource/dado1d.jpg"]});}
    }
    freq=0;
}

    else if(msg.content ===  'd12' || msg.content === 'D12' || msg.content === '2D12' || msg.content === '2d12'|| msg.content === '1d12'|| msg.content === '1D12' || msg.content ==='3d12' || msg.content === '3D12' || msg.content ==='4d12' || msg.content === '4D12'){
        msg.reply('tirou: ');
        if(msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
            connection.play('resource/diceroll.mp3', { volume: 0.5 });
            });}  
        if(msg.content ==='d12' || msg.content === 'D12' || msg.content === '1D12'|| msg.content === '1d12'){freq=1;}
        if(msg.content ==='2d12' || msg.content === '2D12' ){freq=2;}
        if(msg.content ==='3d12' || msg.content === '3D12' ){freq=3;}
        if(msg.content ==='4d12' || msg.content === '4D12' ){freq=4;}
            for(i=0;i<freq;i++){
                dado=Math.floor(Math.random() * 12+1);
                if(dado == '12'){msg.channel.send("",{files: ["./resource/dado12d.jpg"]});}
                if(dado == '11'){msg.channel.send("",{files: ["./resource/dado11d.jpg"]});}
                if(dado == '10'){msg.channel.send("",{files: ["./resource/dado10d.jpg"]});}
                if(dado == '9'){msg.channel.send("",{files: ["./resource/dado9d.jpg"]});}
                if(dado == '8'){msg.channel.send("",{files: ["./resource/dado8d.jpg"]});}
                if(dado == '7'){msg.channel.send("",{files: ["./resource/dado7d.jpg"]});}
                if(dado == '6'){msg.channel.send("",{files: ["./resource/dado6d.jpg"]});}
                if(dado == '5'){msg.channel.send("",{files: ["./resource/dado5d.jpg"]});}
                if(dado == '4'){msg.channel.send("",{files: ["./resource/dado4d.jpg"]});}
                if(dado == '3'){msg.channel.send("",{files: ["./resource/dado3d.jpg"]});}
                if(dado == '2'){msg.channel.send("",{files: ["./resource/dado2d.jpg"]});}
                if(dado == '1'){msg.channel.send("",{files: ["./resource/dado1d.jpg"]});} 
    }
    freq=0;         
}

    else if(msg.content === 'd20' || msg.content === 'D20' || msg.content === '2D20' || msg.content === '2d20'|| msg.content === '1d20'|| msg.content === '1D20' || msg.content ==='3d20' || msg.content === '3D20' || msg.content ==='4d20' || msg.content === '4D20'){
        msg.reply('tirou: ');
        if(msg.member.voice.channel && !msg.author.bot){
            msg.member.voice.channel.join().then(connection => {
            connection.play('resource/diceroll.mp3', { volume: 0.5 });
            });}  
        if(msg.content ==='d20' || msg.content === 'D20' || msg.content === '1D20'|| msg.content === '1d20'){freq=1;}
        if(msg.content ==='2d20' || msg.content === '2D20' ){freq=2;}
        if(msg.content ==='3d20' || msg.content === '3D20' ){freq=3;}
        if(msg.content ==='4d20' || msg.content === '4D20' ){freq=4;}
             for(i=0;i<freq;i++){
                dado=Math.floor(Math.random() * 20+1);
                if(dado == '20'){msg.channel.send("",{files: ["./resource/dado20d.jpg"]});}
                if(dado == '19'){msg.channel.send("",{files: ["./resource/dado19d.jpg"]});}
                if(dado == '18'){msg.channel.send("",{files: ["./resource/dado18d.jpg"]});}
                if(dado == '17'){msg.channel.send("",{files: ["./resource/dado17d.jpg"]});}
                if(dado == '16'){msg.channel.send("",{files: ["./resource/dado16d.jpg"]});}
                if(dado == '15'){msg.channel.send("",{files: ["./resource/dado15d.jpg"]});}
                if(dado == '14'){msg.channel.send("",{files: ["./resource/dado14d.jpg"]});}
                if(dado == '13'){msg.channel.send("",{files: ["./resource/dado13d.jpg"]});}
                if(dado == '12'){msg.channel.send("",{files: ["./resource/dado12d.jpg"]});}
                if(dado == '11'){msg.channel.send("",{files: ["./resource/dado11d.jpg"]});}
                if(dado == '10'){msg.channel.send("",{files: ["./resource/dado10d.jpg"]});}
                if(dado == '9'){msg.channel.send("",{files: ["./resource/dado9d.jpg"]});}
                if(dado == '8'){msg.channel.send("",{files: ["./resource/dado8d.jpg"]});}
                if(dado == '7'){msg.channel.send("",{files: ["./resource/dado7d.jpg"]});}
                if(dado == '6'){msg.channel.send("",{files: ["./resource/dado6d.jpg"]});}
                if(dado == '5'){msg.channel.send("",{files: ["./resource/dado5d.jpg"]});}
                if(dado == '4'){msg.channel.send("",{files: ["./resource/dado4d.jpg"]});}
                if(dado == '3'){msg.channel.send("",{files: ["./resource/dado3d.jpg"]});}
                if(dado == '2'){msg.channel.send("",{files: ["./resource/dado2d.jpg"]});}
                if(dado == '1'){msg.channel.send("",{files: ["./resource/dado1d.jpg"]});}   
    }
    freq=0;
}
})
