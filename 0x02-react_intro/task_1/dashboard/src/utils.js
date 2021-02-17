export default function getFullYear() {
    return new Date().getFullYear();
}

export function getFooterCopy(isIndex) {
    let mssg = ''
    if (isIndex) {
        mssg = "Holberton School";
    } else {
        mssg = "Holberton School main dashboard"
    }
    return mssg;
}