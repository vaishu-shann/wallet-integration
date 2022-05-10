import { notify } from 'react-notify-toast';

export default class UtilityFunctions {

static showToast(message = "", type = 'success', duration=2000, customColor= { background: '#0E1717', text: "#FFFFFF" }){
    notify.show(message, type, duration, customColor);
}
}