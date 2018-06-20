const fs = require("fs");
fs.open("hello.text", "w",0o666,(err,fd) => {
    if(!err){
        console.log("open方法成功了");
        fs.write(fd,"下雨了",0,'utf8',(err,written,string)=>{
            if(!err){
                console.log("write方法成功了");
            }else{
                console.log(err);
            }
            fs.close(fd, err=>{
                if(!err){
                    console.log("close方法成功了");
                }else{
                    console.log(err);
                }
            })
        })
    }else{
        console.log(err);
    }
})