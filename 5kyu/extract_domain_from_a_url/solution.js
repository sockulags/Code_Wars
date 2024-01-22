function domainName(url){
    return url.replace(/[./]/g, ' ').split(' ').filter(entry => entry.length > 1).find(obj=> !obj.startsWith("http") && !obj.startsWith("www"));
    }