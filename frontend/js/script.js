// /*
// ==========================================================
// MindAnchor - Voice Wellness Companion
// script.js
// ==========================================================
// */

// class VoiceUIController {

//     constructor() {

//         this.orb = document.getElementById("orb");
//         this.status = document.getElementById("status");
//         this.subtitle = document.getElementById("subtitle");
//         this.micButton = document.getElementById("micButton");

//         this.isListening = false;

//         this.initialize();
//     }

//     initialize() {

//         this.micButton.addEventListener(
//             "click",
//             () => this.toggleListening()
//         );
//     }

//     //------------------------------------------------------
//     // Utility
//     //------------------------------------------------------

//     clearStates() {

//         this.orb.classList.remove(
//             "state-idle",
//             "state-listening",
//             "state-speaking",
//             "state-processing"
//         );
//     }

//     //------------------------------------------------------
//     // UI States
//     //------------------------------------------------------

//     setIdle() {

//         this.clearStates();

//         this.orb.classList.add("state-idle");

//         this.status.textContent = "Idle";

//         this.updateText(
//             "Take a deep breath. I'm listening whenever you're ready."
//         );
//     }

//     setListening() {

//         this.clearStates();

//         this.orb.classList.add("state-listening");

//         this.status.textContent = "Listening...";

//         this.updateText(
//             "I'm listening..."
//         );
//     }

//     setProcessing() {

//         this.clearStates();

//         this.orb.classList.add("state-processing");

//         this.status.textContent = "Thinking...";

//         this.updateText(
//             "Let me think for a moment..."
//         );
//     }

//     setSpeaking() {

//         this.clearStates();

//         this.orb.classList.add("state-speaking");

//         this.status.textContent = "Speaking...";

//         this.updateText(
//             "Here's my response..."
//         );
//     }

//     //------------------------------------------------------
//     // Subtitle
//     //------------------------------------------------------

//     updateText(message) {

//         this.subtitle.style.opacity = 0;

//         setTimeout(() => {

//             this.subtitle.textContent = message;

//             this.subtitle.style.opacity = 1;

//         }, 200);
//     }

//     //------------------------------------------------------
//     // Demo
//     //------------------------------------------------------

//     toggleListening() {

//         if (!this.isListening) {

//             this.isListening = true;

//             this.setListening();

//             /*
//              * Demo sequence
//              *
//              * Listening
//              * ↓
//              * Processing
//              * ↓
//              * Speaking
//              * ↓
//              * Idle
//              */

//             setTimeout(() => {

//                 this.setProcessing();

//             }, 3000);

//             setTimeout(() => {

//                 this.setSpeaking();

//             }, 5000);

//             setTimeout(() => {

//                 this.isListening = false;

//                 this.setIdle();

//             }, 9000);

//         } else {

//             this.isListening = false;

//             this.setIdle();
//         }

//     }

// }

// //----------------------------------------------------------
// // Initialize UI
// //----------------------------------------------------------

// const voiceUI = new VoiceUIController();

// voiceUI.setIdle();

/*
=========================================================
MindAnchor
script.js

Phase 1 : Connection Layer (Part 1)

Responsibilities
----------------
1. Application Configuration
2. UI Controller
3. UI State Management

(No LiveKit logic in this file section)
=========================================================
*/


//=========================================================
// Configuration
//=========================================================

const CONFIG = {

    TOKEN_SERVER_URL: "http://127.0.0.1:8000",

    DEFAULT_ROOM: "mindanchor",

    IDENTITY_PREFIX: "guest"

};


//=========================================================
// UI States
//=========================================================

const UI_STATE = Object.freeze({

    DISCONNECTED: "Disconnected",

    CONNECTING: "Connecting...",

    CONNECTED: "Connected",

    LISTENING: "Listening...",

    THINKING: "Thinking...",

    SPEAKING: "Speaking..."

});


//=========================================================
// Voice UI Controller
//=========================================================

class VoiceUIController {

    constructor() {

        //--------------------------------------------------
        // DOM Elements
        //--------------------------------------------------

        this.orb = document.getElementById("orb");

        this.status = document.getElementById("status");

        this.subtitle = document.getElementById("subtitle");

        this.micButton = document.getElementById("micButton");

    }


    //--------------------------------------------------
    // Internal Helpers
    //--------------------------------------------------

    clearOrbStates() {

        this.orb.classList.remove(

            "state-idle",

            "state-listening",

            "state-processing",

            "state-speaking"

        );

    }


    setOrbState(cssClass) {

        this.clearOrbStates();

        this.orb.classList.add(cssClass);

    }


    //--------------------------------------------------
    // UI Updates
    //--------------------------------------------------

    updateStatus(status) {

        this.status.textContent = status;

    }


    updateSubtitle(message) {

        this.subtitle.style.opacity = 0;

        setTimeout(() => {

            this.subtitle.textContent = message;

            this.subtitle.style.opacity = 1;

        }, 200);

    }


    //--------------------------------------------------
    // Public UI States
    //--------------------------------------------------

    setDisconnected() {

        this.setOrbState("state-idle");

        this.updateStatus(UI_STATE.DISCONNECTED);

        this.updateSubtitle(

            "Press the microphone to connect."

        );

    }


    setConnecting() {

        this.setOrbState("state-processing");

        this.updateStatus(UI_STATE.CONNECTING);

        this.updateSubtitle(

            "Connecting to your wellness session..."

        );

    }


    setConnected() {

        this.setOrbState("state-idle");

        this.updateStatus(UI_STATE.CONNECTED);

        this.updateSubtitle(

            "Connected successfully. Tap the microphone whenever you're ready."

        );

    }


    setListening() {

        this.setOrbState("state-listening");

        this.updateStatus(UI_STATE.LISTENING);

        this.updateSubtitle(

            "I'm listening..."

        );

    }


    setThinking() {

        this.setOrbState("state-processing");

        this.updateStatus(UI_STATE.THINKING);

        this.updateSubtitle(

            "Thinking..."

        );

    }


    setSpeaking() {

        this.setOrbState("state-speaking");

        this.updateStatus(UI_STATE.SPEAKING);

        this.updateSubtitle(

            "Speaking..."

        );

    }


    //--------------------------------------------------
    // Button Helpers
    //--------------------------------------------------

    onMicButtonClick(callback) {

        this.micButton.addEventListener(

            "click",

            callback

        );

    }

}

//=========================================================
// LiveKit Manager
//=========================================================

class LiveKitManager {

    constructor(uiController) {

        this.ui = uiController;

        this.room = null;

        this.connected = false;

        this.identity = null;

    }

    //-----------------------------------------------------
    // Generate Participant Identity
    //-----------------------------------------------------

    generateIdentity() {

        return (
            CONFIG.IDENTITY_PREFIX +
            "-" +
            crypto.randomUUID().substring(0, 8)
        );

    }

    //-----------------------------------------------------
    // Fetch LiveKit Token
    //-----------------------------------------------------

    async fetchToken() {

        this.identity = this.generateIdentity();

        const endpoint =
            `${CONFIG.TOKEN_SERVER_URL}/token?identity=${this.identity}&room=${CONFIG.DEFAULT_ROOM}`;

        console.log("Fetching token...");

        const response = await fetch(endpoint);

        if (!response.ok) {

            throw new Error("Unable to fetch LiveKit token.");

        }

        return await response.json();

    }

    //-----------------------------------------------------
    // Connect to LiveKit Room
    //-----------------------------------------------------

    async connect() {

        if (this.connected) {

            console.log("Already connected.");

            return;

        }

        try {

            this.ui.setConnecting();

            const tokenResponse =
                await this.fetchToken();

            console.log(tokenResponse);

            this.room = new LivekitClient.Room();

            this.registerEvents();

            console.log("Connecting to room...");

            await this.room.connect(

                tokenResponse.url,

                tokenResponse.token

            );
            await this.room.startAudio();

            await this.room.localParticipant.setMicrophoneEnabled(true);

            console.log("Microphone enabled.");

        }

        catch (error) {

            console.error(error);

            this.connected = false;

            this.ui.setDisconnected();

            this.ui.updateSubtitle(

                "Unable to connect. Please try again."

            );

        }

    }

    //-----------------------------------------------------
    // Disconnect
    //-----------------------------------------------------

    async disconnect() {

        if (!this.room) {

            return;

        }

        console.log("Disconnecting...");

        await this.room.disconnect();

    }

    //-----------------------------------------------------
    // Register Room Events
    //-----------------------------------------------------

    registerEvents() {

        //-------------------------------------------------
        // Connected
        //-------------------------------------------------

        this.room.on(

            LivekitClient.RoomEvent.Connected,

            () => {

                console.log("Connected!");

                this.connected = true;

                this.ui.setConnected();

            }

        );


        //-------------------------------------------------
        // Disconnected
        //-------------------------------------------------

        this.room.on(

            LivekitClient.RoomEvent.Disconnected,

            () => {

                console.log("Disconnected.");

                this.connected = false;

                this.ui.setDisconnected();

            }

        );


        //-------------------------------------------------
        // Reconnecting
        //-------------------------------------------------

        this.room.on(

            LivekitClient.RoomEvent.Reconnecting,

            () => {

                console.log("Reconnecting...");

                this.ui.updateStatus(

                    "Reconnecting..."

                );

            }

        );


        //-------------------------------------------------
        // Reconnected
        //-------------------------------------------------

        this.room.on(

            LivekitClient.RoomEvent.Reconnected,

            () => {

                console.log("Reconnected.");

                this.connected = true;

                this.ui.setConnected();

            }

        );


        //-------------------------------------------------
        // Participant Joined
        //-------------------------------------------------

        this.room.on(

            LivekitClient.RoomEvent.ParticipantConnected,

            participant => {

                console.log(

                    "Participant joined:",

                    participant.identity

                );

    }

);


        //-------------------------------------------------
        // Participant Left
        //-------------------------------------------------

        this.room.on(

            LivekitClient.RoomEvent.ParticipantDisconnected,

            participant => {

                console.log(

                    "Participant left:",

                    participant.identity

                );

            }

        );
        //-------------------------------------------------
        // Remote Audio Track
        //-------------------------------------------------

        this.room.on(

            LivekitClient.RoomEvent.TrackSubscribed,

            (track, publication, participant) => {

                console.log(
                    "Subscribed to",
                    participant.identity,
                    publication.kind
                );

                if (track.kind === "audio") {

                    console.log("Playing remote audio...");

                    track.attach();

                }

            }

        );

    }

}

//=========================================================
// Bootstrap
//=========================================================

document.addEventListener("DOMContentLoaded", () => {

    console.log("======================================");
    console.log("MindAnchor");
    console.log("Voice Wellness Companion");
    console.log("Initializing...");
    console.log("======================================");


    //-----------------------------------------------------
    // Create UI Controller
    //-----------------------------------------------------

    const ui = new VoiceUIController();


    //-----------------------------------------------------
    // Create LiveKit Manager
    //-----------------------------------------------------

    const livekit = new LiveKitManager(ui);


    //-----------------------------------------------------
    // Initial UI State
    //-----------------------------------------------------

    ui.setDisconnected();


    //-----------------------------------------------------
    // Microphone Button
    //-----------------------------------------------------

    ui.onMicButtonClick(async () => {

        try {

            //-------------------------------------------------
            // Connect
            //-------------------------------------------------

            if (!livekit.connected) {

                console.log("Attempting connection...");

                await livekit.connect();

            }

            //-------------------------------------------------
            // Disconnect
            //-------------------------------------------------

            else {

                console.log("Disconnecting...");

                await livekit.disconnect();

            }

        }

        catch (error) {

            console.error(error);

            ui.setDisconnected();

            ui.updateSubtitle(
                "Something went wrong. Please try again."
            );

        }

    });


    //-----------------------------------------------------
    // Expose for Debugging
    //-----------------------------------------------------

    window.ui = ui;
    window.livekit = livekit;


    console.log("Application initialized.");

});
