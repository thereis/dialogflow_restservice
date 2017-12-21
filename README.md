This is a boilerplate that I've made for **Dialogflow API v2**.

### Instalation
Its easy to use and setup. You can clone/fork the repository and run
```$
npm install
```

### Developer mode
To start the application in dev mode, run:
```$
npm run dev
```

### Adding a new action
To add a new action, you need to edit the `App/Controllers/Dialogflow/index.js`
The method `actionList()` returns a object literal. You can add your custom action inside this object. You can follow the examples already added inside this file. It has supports for Messenger custom payload.

### Enabling and configuring the webhook fulfillment
To enable the webhook trigger:
- Open Dialogflow website.
- Select your agent.
- Click in "Fulfillment" menu tab.
- In URL field, you need to specify where is hosted your project. For localhost purposes, you can use [ngrok](https://ngrok.com/download)
- If you're using ngrok, just run `ngrok http 3000` and copy the **https** url.
- The boilerplate will create a **/actions/** endpoint of **POST type**.
- Copy the **ngrok https url** and add the **/actions/** endpoint, it will look like:
```
https://customNgrokUrl/actions/
```
- Save it and go to your **Intents**.
- Select a whatever intent.
- In the end of the page, in the **Fulfillment** label, select the **Use webhook** option.
- Save it and test.

#### Facebook support
This webservice, has support for facebook card types. You can use custom cards and payloads by reading the Facebook developers page.

To enable the Messenger support, you need to enable the integration and the support in your intent.

### Async support
It has async support, you need to do by your own.

### Credits
Feel free to contribute with this boilerplate repository.

- Created by: Lucas Dias
- Contact: thereis@live.com