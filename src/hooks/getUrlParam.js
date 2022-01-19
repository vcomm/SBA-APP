
export default function getUrlParam(paramName){
    const parameters = new URLSearchParams(window.location.search);
    return parameters.get(paramName);
}