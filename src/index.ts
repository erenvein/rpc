import rpc from 'discord-rpc';
import config from './config.json'

const client = new rpc.Client({ transport: 'ipc' })

client.login({ clientId: config.clientID, clientSecret: config.clientSecret })


client.on('ready', () =>{
    try {
    client.setActivity({
        largeImageText: config.assets.large.text,
        largeImageKey: config.assets.large.image,
        smallImageText: config.assets.small.text,
        smallImageKey: config.assets.small.image,
        startTimestamp: Date.now(),
        state: config.state,
        details: config.details,
        
        buttons: [
            {
                label: config.buttons[1].label,
                url: config.buttons[1].url,
            },
            {
                label: config.buttons[2].label,
                url: config.buttons[2].url
            }
        ]
    })
    console.log('Ready!')
} catch(e) {
    console.log('The config file is invalid or there is a error!\n'+e)
}

})