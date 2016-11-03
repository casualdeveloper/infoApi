module.exports = {
    getInfo: function(req,res){
        var ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress || req.socket.remoteAddress ||req.connection.socket.remoteAddress;
        var language = req.headers['accept-language'].split(',')[0];
        var osRaw = req.headers['user-agent'].split(" ");
        var os = osRaw[1].substring(1,osRaw[1].length)+" "+osRaw[2]+" "+osRaw[3].substring(0,osRaw[3].length-1); 
        return res.send({
            ipaddress:ip,
            language:language,
            os:os
        });
    }
}