//** Load all js event files  
fs.readdir(CUsersibtisamAppDataRoamingnpmnode_modulesbio-tolerancebackups-botevents, (_err, files) = {
    files.forEach((file) = {
        if (!file.endsWith(.js)) return;
        const event = require(`.events${file}`);
        let eventName = file.split(.)[0];
        console.log(`👌 Event loaded ${eventName}`);
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`.events${file}`)];
    });
});
