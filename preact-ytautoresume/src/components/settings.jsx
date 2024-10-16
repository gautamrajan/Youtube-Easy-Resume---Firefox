import { h, Component } from 'preact';
import Snackbar from 'preact-material-components/Snackbar';
import 'preact-material-components/Snackbar/style.css';
import './styles/settings.css';
import Home from './home';
import { secondsToMinutes, minutesToSeconds } from './utilities';
import Switch from 'preact-material-components/Switch';
import 'preact-material-components/Switch/style.css';

const DEBUG = false;

export default class SettingsPage extends Component {
    constructor() {
        super();
        this.state = {
            dataReady: false,
            goBack: false,
            settingsChanged: false,
            settings: {},
            newSettings: {},
            savedSnackbar: false,
            paused: false
        }
    }

    settingsChangedHandler = (e, setting, minutes) => {
        console.log("At settingsChangedHandler: " + setting);
        var modifiedSettings = { ...this.state.newSettings };
        if (minutes) {
            DEBUG && console.log("minutes case, setting name: " + setting);
            DEBUG && console.log("minutes case, value: " + e.target.value);
            modifiedSettings[setting] = minutesToSeconds(e.target.value);
        } else {
            DEBUG && console.log(setting + ": " + e.target.value);
            modifiedSettings[setting] = e.target.value;
        }

        this.setState({ newSettings: modifiedSettings }, () => {
            this.settingsChangedChecker();
        })
    }

    settingsChangedChecker = () => {
        var noSettingsChanged = true;
        for (let key of Object.keys(this.state.settings)) {
            if (this.state.settings[key] !== this.state.newSettings[key]) {
                noSettingsChanged = false;
                this.setState({
                    settingsChanged: true
                }, () => { return; })
            }
        }
        if (noSettingsChanged && this.state.settingsChanged) {
            this.setState({
                settingsChanged: false,
            })
        }
    }

    saveSettings = async () => {
        try {
            await browser.storage.local.set({ settings: this.state.newSettings });
            console.log("SETTINGS CHANGED IN STORAGE");
            this.setState({
                settings: this.state.newSettings,
                settingsChanged: false,
            }, () => {
                this.bar.MDComponent.show({
                    message: "Settings saved successfully"
                })
            });
        } catch (error) {
            console.error("Error saving settings:", error);
        }
    }

    async componentDidMount() {
        try {
            const data = await browser.storage.local.get("settings");
            if (data.settings != undefined) {
                this.setState({ settings: data.settings, newSettings: data.settings, dataReady: true, paused: data.settings.pauseResume });
            } else {
                const defaultSettings = {
                    pauseResume: false,
                    minWatchTime: 60,
                    minVideoLength: 480,
                    markPlayedTime: 60,
                    deleteAfter: 30
                };
                await browser.storage.local.set({ settings: defaultSettings });
                this.setState({ settings: defaultSettings, newSettings: defaultSettings, dataReady: true });
            }
        } catch (error) {
            console.error("Error loading settings:", error);
        }
    }

    goBack = () => {
        this.setState({
            goBack: true
        })
    }

    handlePause = (event) => {
        let newSettings = { ...this.state.newSettings };
        newSettings.pauseResume = !newSettings.pauseResume;
        this.setState({ newSettings: newSettings, paused: !this.state.paused }, this.settingsChangedChecker);
    }

    render() {
        let goBack = this.state.goBack;
        let dataReady = this.state.dataReady;
        var initMVL = this.state.newSettings.minVideoLength;
        var initMWT = this.state.newSettings.minWatchTime;
        var initMPT = this.state.newSettings.markPlayedTime;
        var initDeleteAfter = this.state.newSettings.deleteAfter;
        let settingsChanged = this.state.settingsChanged;
        let paused = this.state.paused;

        if (goBack) {
            return (
                <Home />
            )
        }
        if (dataReady) {
            console.log("DATA READY: " + dataReady);
            return (
                <div className="SettingsContainer">
                    <div className="header-bar">
                        <h1>Settings</h1>
                        <div className='button-wrapper'>
                            <button id="backButton" className='top-bar-button' onClick={this.goBack}>
                                <i class="fa fa-chevron-left"></i>
                            </button>
                        </div>
                    </div>
                    <div id="MainPanel">
                        <form className="SettingsPanel">
                            <div className="Setting AutoResume">
                                <label htmlFor="AutoResumeToggle" className="SettingLabel">Auto Resume</label>
                                <div className={`AR SwitchContainer ${paused ? "Off" : "On"}`}>
                                    <label for="AutoResumeToggle">
                                        <span className={`SwitchLabel ${paused ? "Off" : "On"}`} id="AutoRedSwitchLabel">{paused ? "OFF" : "ON"}</span>
                                    </label>
                                    <Switch name="AutoResumeToggle" checked={!paused} onChange={this.handlePause} />
                                    <style jsx>{`
                                        .SwitchLabel{
                                            font-weight:600;
                                            font-size:15px;
                                        }
                                        .SwitchLabel.On{
                                            color:red;
                                            padding-right:4px;
                                        }
                                        .SwitchLabel.Off{
                                            color:white;
                                            opacity: 0.4;
                                        }    
                                        .SwitchContainer.On{
                                            margin-left:6px;
                                        }
                                        .SwitchContainer{
                                            margin-right:4px;
                                            margin-bottom:2px;
                                            margin-left:5px;
                                            margin-top:10px;
                                            display:flex;
                                            flex-direction: row;
                                            color:white;
                                            justify-content:flex-end;
                                            align-items:center;
                                            padding-bottom:2px;
                                        }
                                        .SwitchContainer label{
                                            display:flex;
                                            flex-direction:column;
                                            line-height:95%;
                                            margin-right:5px;
                                        }
                                    `}</style>
                                </div>
                            </div>
                            <div className="Setting MinVideoLength">
                                <label for="MinVideoLengthInput" className="SettingLabel">Only resume videos longer than: </label>
                                <div className="MinVideoLength InputContainer">
                                    <input type="number" className="NumInput" name="MinVideoLengthInput" id="MinVideoLengthInput"
                                        value={secondsToMinutes(initMVL)}
                                        onInput={(event) => { this.settingsChangedHandler(event, "minVideoLength", true) }} /> minute(s)
                                </div>
                            </div>
                            <div className="Setting MinWatchTime">
                                <label for="MinWatchTimeInput" className="SettingLabel">Only resume videos I watch for at least: </label>
                                <div className="MinWatchTime InputContainer">
                                    <input type="number" className="NumInput" name="MinWatchTimeInput" id="MinWatchTimeInput"
                                        value={secondsToMinutes(initMWT)}
                                        onInput={(event) => { this.settingsChangedHandler(event, "minWatchTime", true) }} /> minute(s)
                                </div>
                            </div>
                            <div className="Setting ConsiderComplete">
                                <label for="ConsiderCompleteInput" className="SettingLabel">Mark as video as played: </label>
                                <div className="ConsiderComplete InputContainer">
                                    <input type="number" className="NumInput" name="ConsiderCompleteInput" id="ConsiderCompleteInput"
                                        value={secondsToMinutes(initMPT)}
                                        onInput={(event) => { this.settingsChangedHandler(event, "markPlayedTime", true) }} />
                                    minute(s) away from the end.
                                </div>
                            </div>
                            <div className="Setting DeleteAfter">
                                <label for="DeleteAfterInput" className="SettingLabel">Automatically remove videos after: </label>
                                <div className="DeleteAfter InputContainer">
                                    <input type="number" className="NumInput" name="DeleteAfterInput" id="DeleteAfter"
                                        value={initDeleteAfter}
                                        onInput={(event) => { this.settingsChangedHandler(event, "deleteAfter", false) }} /> day(s)
                                </div>
                            </div>
                            <div className="MadeBy Message">
                                Made with ❤️ at
                                <a href="https://www.youtube.com/c/AnnenbergMedia" target="_blank">Annenberg Media</a>
                                <style jsx>{`
                                    .Message {
                                        color: white;
:8px;
                                        font-size: 15px;
                                        display: inline-block;
                                        flex-direction:row;
                                        justify-content:flex-start;
                                    }                              
                                    a:link{
                                        margin-left: 5px;
                                        color:#a10000;
                                        font-weight: bold;
                                        text-decoration: none;
                                    }  
                                    a:visited{
                                        margin-left: 5px;
                                        color:#a10000;
                                        font-weight: bold;
                                        text-decoration: none;
                                    }
                                    a:hover{
                                        color: red;
                                        font-weight: bold;
                                    }
                                    a:active{
                                        color: #990000;
                                    }
                                `}
                                </style>
                            </div>
                        </form>
                        {settingsChanged ? <button type="button" id="SaveButton" onClick={() => this.saveSettings()}>Save Settings</button>
                            : null}
                        <Snackbar ref={bar => { this.bar = bar; }} />
                    </div>
                </div>
            )
        }
        else {
            return (null);
        }
    }
}
