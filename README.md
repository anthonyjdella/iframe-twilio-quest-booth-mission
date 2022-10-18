# TwilioQuest Slideshow Slides Server

This repository accompanies the [twilio-quest-booth-mission extension](https://github.com/anthonyjdella/twilio-quest-booth-mission).

Within [twilio-quest-booth-mission extension](https://github.com/anthonyjdella/twilio-quest-booth-mission), there is a book on the floor near the entrance. When opened, it launches an iFrame which directs to a URL (localhost:3000). To make this work, you need to have this application running on localhost:3000.

For each conference you attend, you can edit this project by changing the name of the conference you're attending. This can be found in `src/App.js`.

---

The extension uses the IFrameOverlay component to display pages on a locally running web server.

This is a small React.js server application bootstrapped with create-react-app.

This server should be run from a terminal while the slideshow extension is being played with the command:

```
npm i
npm run start
```

Any kind of local or remotely hosted server that can be opened by an iFrame could be used instead of this demo application.