var gpt                   = "<data:post.url/>"
var prefixdlblogger       = gpt.lastIndexOf(".html");                               //** keep last number of leter that start with .html
var firstprefixdlblogger  = gpt.lastIndexOf("/");                                   //** keep last number of leter that start with /
var id                    = gpt.substring(firstprefixdlblogger, prefixdlblogger);   //** use firstprefixdlblogger, prefixdlblogger info that geted form prevues vars to set where to start and stop keeping text