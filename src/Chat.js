import React from 'react';
//import { chatConfig, chatWindow, KoreWidgetSDK, widgetsConfig } from 'kore-web-sdk';
import { chatConfig, chatWindow } from 'kore-web-sdk';

class Chat extends React.Component {
    constructor(props){
        super(props);
        let botOptions=chatConfig.botOptions;
        botOptions.JWTUrl = "https://demo.kore.net/users/sts";
        botOptions.userIdentity = 'jaganmohan';// Provide users email id here
        botOptions.botInfo = { name: "Test8901", "_id": "st-f589f5b4-707b-5129-ace7-7d7c67a0b1d4" }; // bot name is case sensitive
        botOptions.clientId = "cs-50f6f236-cd53-5ee2-a6d0-c8041e3fa7da";
        botOptions.clientSecret = "oltYDFHDpNr5b2tRqyT2IU13z3xT5vZKlt+cAAN2taA=";



        //configure widgetsConfig
        /*let botOptionsWiz=widgetsConfig.botOptions;
        botOptionsWiz.JWTUrl = "https://demo.kore.net/users/sts";
        botOptionsWiz.userIdentity = 'jaganmohan';// Provide users email id here
        botOptionsWiz.botInfo = { name: "Test8901", "_id": "st-f589f5b4-707b-5129-ace7-7d7c67a0b1d4" }; // bot name is case sensitive
        botOptionsWiz.clientId = "cs-50f6f236-cd53-5ee2-a6d0-c8041e3fa7da";
        botOptionsWiz.clientSecret = "oltYDFHDpNr5b2tRqyT2IU13z3xT5vZKlt+cAAN2taA=";*/
        //let wSdk = new KoreWidgetSDK(widgetsConfig);
        //chatConfig.widgetSDKInstace=wSdk;

       
        const chatWindowInstance = new chatWindow(chatConfig);
        chatWindowInstance.templateManager.installTemplate(new customTemplateComponent());
        //chatWindowInstance.installPlugin(new AgentDesktopPlugin());
        //OPTION #1 with own JWT Service
        /*chatWindowInstance.on("jwtSuccess", (res,event) => {
           wSdk.setJWT(res.jwt);
            wSdk.show(widgetsConfig);
        });*/
        chatWindowInstance.show(chatConfig);
        

    }

    render () {
        return(
            <div>AAA</div>
        )
    }

}

class customTemplateComponent{
    renderMessage(msgData){
        if(msgData?.message[0]?.component?.payload?.template_type==='custom_stock_template'){
            return '<h2>My Template HTML</h2>';      
        }else{
            return false;
        }
    } 
  }

export default Chat;