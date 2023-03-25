//** get current url and decode it then set it as gpt var, you can use encodeURIComponent(query) to encode
var gptdecoded            = window.location.href 
var gpt                   = decodeURIComponent(gptdecoded)