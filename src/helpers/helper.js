class Helper{
    static removeMarkers = (text) => {
        const div = document.createElement('div');
        div.innerHTML = text;
        return div.innerText;
    }
}

export default Helper;