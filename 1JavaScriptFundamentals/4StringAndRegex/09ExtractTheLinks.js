function extractTheLinks(input) {

    let regex = /www\.[a-zA-Z0-9\-]+(\.[a-z]+)+/g;
    let t = input.join(' ');

    let nums = t.match(regex);

    if(nums!==null){
        console.log(nums.join('\n'));}
    else {console.log("")}
}

extractTheLinks(['Join WebStars now for free, at www.web-stars.com',
'You can also support our partners:', 'Internet - www.internet.com', 'WebSpiders - www.webspiders101.com',
'Sentinel - www.sentinel.-ko ']);