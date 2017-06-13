function Config(){
    
    var files = {
        '/users/*':{},
        '/order/*':{}
    }

    for(var i in files){
        files[i].target ='http://192.168.60.115:8080/';
        files[i].changeOrigin = true;
    }
    return {
        port: 8080,
        disableHostCheck:true,
        historyApiFallback: true,
        hot: true,
        inline: true,
        stats: { colors: true },
        proxy: files
    }
}

module.exports =  Config();