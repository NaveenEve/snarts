//load express function
const exp=require("express");
const app=exp();
//path
const path=require("path");
app.use(exp.static(path.join(__dirname,'./dist/app')))

//assign port number

app.listen(process.env.PORT || 5000 ,()=>{
    console.log("server started")
})
//create express object

//import mongo client
const mc=require("mongodb").MongoClient;
var dbo;

const dbUrl="mongodb+srv://snarts:snarts@cluster0-nnb2v.mongodb.net/test?retryWrites=true&w=majority";

//connect to database using dbUrl
mc.connect(dbUrl,{useNewUrlParser:true,useUnifiedTopology:true},(error,client)=>{
    if(error)
    {
        console.log("error in db connection");
    }
    else
    {
        //get database object from client
        dbo=client.db("studentscollection");
        console.log("connected to db");
    }
})

app.use(exp.json())

//generating id with generate id button
app.post('/generateid',(request,response)=>{
    dbo.collection("studentids").find({year:request.body.year,branch:request.body.branch}).toArray((error,success)=>{
        if(error){
            console.log("error")
        }
        else if(success.length==0){
            
    dbo.collection("studentids").insertOne(request.body,(error,res)=>{
        if(error){
            console.log("errror")
        }
        else{
            response.send({message:"res"})
        }
    })
        }
        else{
            response.send({message:"alreadyexists"})
        }
    })



})

//uploading form and generating unique ids


app.post('/post',(request,response)=>{
   
   
 dbo.collection("studentids").find({year:request.body.yearofjoin,branch:request.body.department}).toArray((error,success)=>{
    console.log(success);
  
    let result=success[0]
    if(error){
         console.log("error in finding",error)
     }
     else if(result.length==0)
     {
        response.send({message:"generateid first"})
        console.log("error")
     }
     else{
        console.log("success dataa",result)
        year=JSON.stringify(result.year);
        console.log("year",result.year)
        yearcode=year.split("")
        //console.log(year);
        console.log(result.branchname)
        branch=result.branch;
        //console.log(branchname);
        ye=yearcode[2]+yearcode[3];
        
        id=(ye+branch+result.branchcode)
        console.log("id is",id);
        let ct=++result.count;
         if(result.count<=9){
            request.body.studentid=id+"00"+ct;
            request.body.password=id+"00"+ct
            console.log(request.body.studentid);
            console.log(request.body.password);
         }
         else if(result.count<=99)
         {
            request.body.studentid=id+"0"+ct ;
            request.body.password=id+"0"+ct
            console.log(request.body.studentid);
            console.log(request.body.password);
         }
         else{
            request.body.studentid=id+ct
            request.body.password=id+ct
            console.log(request.body.studentid);
            console.log(request.body.password);
            
            
         }
         dbo.collection("studentrecords").insertOne(request.body,(error,success)=>{
             console.log(request.body);
             //nodemailer
var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'naveeneve1@gmail.com  ',
      pass: 'saisree12'
    }
  });
  
  var mailOptions = {
    from: 'naveeneve1@gmail.com ',
    to: request.body.email,
    subject: 'Your Student id and password',
    text: `hello ${request.body.firstname + request.body.lastname} Your id and password are :${request.body.studentid}`,
    attachments: [{   // stream as an attachment
        filename: 'sn-arts-kakinada-fv1i0n3ns9-250.jpg',
       path: './sn-arts-kakinada-fv1i0n3ns9-250.jpg',
    
    }]
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
            if(error){
                console.log("error in insert",error)
            }
            else{
                dbo.collection("studentids").updateOne({year:request.body.yearofjoin,branch:request.body.department},
                    {$set:{count:ct}},(error,suc)=>{
                        if(error){
                            console.log("error in update",error);
                            
                        }
                        else{
                            response.send({message:"updated",fr:success.firstname})
                        }
                    })
               
            }
        }) 
     }
 })


   
})

//gettingform data to front page

app.get('/read/:department',(request,response)=>{
    console.log(request.params)
    dbo.collection("studentrecords").find({department:request.params.department}).toArray((error,success)=>{
        if(error){
            console.log("error")
        }
        else{
            response.send({message:success})
        }
    })
})

//dropdown in branch

app.post('/year',(request,response)=>{
  
    dbo.collection("studentrecords").find({yearofjoin:(+request.body.year),department:request.body.department}).toArray((error,dataArray)=>{
        if(error){
            console.log("error")
        }
        
        else{
            response.send({message:dataArray})
            console.log("success",dataArray)
        }
    })
})

app.put('/update',(request,response)=>{
    dbo.collection("studentrecords").updateOne({studentid:request.body.studentid},{$set:{
        firstname:request.body.firstname,
        lastname:request.body.lastname,
        gender:request.body.gender,
        phonenumber:request.body.phonenumber,
        email:request.body.email,
        department:request.body.department,
        postaladdress:request.body.postaladdress,
        yearofjoin:request.body.yearofjoin,
        ssc:request.body.ssc,
        inter:request.body.inter,

    }},(error,success)=>{
        if(error){
            console.log("error")
        }
        else{
            response.send({message:"updated"})
        }
    })
})

//deleteing handler


app.delete('/delete',(request,response)=>{
    dbo.collection("studentrecords").deleteOne(request.body.studentid,(error,success)=>{
        if(error){
            console.log("error")
        }
        else{
            response.send({message:"success"})
        }
    })
})


//student checking 
app.post('/studentlogin',(request,response)=>{
    dbo.collection("studentrecords").findOne({studentid:request.body.username,password:request.body.password},(error,success)=>{
        if(error){
            console.log("error")
        }
        else if(success==null){
            response.send({message:"nouserfound"})
        }
        else{
            response.send({message:"success",fr:success.firstname,success})
        }
    })
})

//excel upload

//import require modules
const multer = require('multer');
const xlsxtojson=require("xlsx-to-json-lc");
const xlstojson=require("xls-to-json-lc");


//multers disk storage settings
var storage = multer.diskStorage({   
destination: function (req, file, cb) {   cb(null, './uploads/')    },  
filename: function (req, file, cb) {        var datetimestamp = Date.now();     
cb(null, `${new Date().getTime()}_${file.originalname}`)    } });


// upload middleware
const upload = multer({ storage: storage});
// convert excel to json route
  app.post('/upload',upload.single('file'),(req,res)=>{ 
    if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1]
   === 'xlsx'){
    exceltojson=xlsxtojson;
    }
     else
      {
    exceltojson=xlstojson;
    }
    try {
    exceltojson({
    input: req.file.path, //the same path where we uploaded our file
    output: null, //since we don't need output.json
    lowerCaseHeaders:true
    }, function(err,result){
    if(err) {
    return res.json({error_code:1,err_desc:err, data: null});
    }
    dbo.collection("attendance").insertMany(result,(err,data) => {
    console.log(data);
    res.json({error_code:0,err_desc:null, data:
   data["ops"],"message":"Attendance Sheet uploaded successfully"});
    });
   
    });
    } catch (e){
    res.json({error_code:1,err_desc:"Corupted excel file"});
    }
    });

    //reading attendance admin
    app.get('/attendanceread',(request,response)=>{
        dbo.collection("attendance").find().toArray((error,dataArray)=>{
            if(error){
                console.log("error")
            }
            else{
                response.send({message:dataArray})
            }
        })
    })
    
    //student reading attendance
    app.post('/studentattendance',(request,response)=>{
        dbo.collection("attendance").findOne({studentid:request.body.studentid},(error,success)=>{
            if(error){
                console.log("error")
            }
            else{
                response.send({message:success})
            }
        })
    })

    //marks uploading to database



    //multers disk storage settings
var storage1 = multer.diskStorage({   
    destination: function (req, file, cb) {   cb(null, './uploads/')    },  
    filename: function (req, file, cb) {        var datetimestamp = Date.now();     
    cb(null, `${new Date().getTime()}_${file.originalname}`)    } });
    
    
    // upload middleware
    const upload1 = multer({ storage: storage1});

    // convert excel to json route
    app.post('/uploadmarks',upload1.single('marks'),(req,res)=>{ 
        if(req.file.originalname.split('.')[req.file.originalname.split('.').length-1]
       === 'xlsx'){
        exceltojson=xlsxtojson;
        }
         else
          {
        exceltojson=xlstojson;
        }
        try {
        exceltojson({
        input: req.file.path, //the same path where we uploaded our file
        output: null, //since we don't need output.json
        lowerCaseHeaders:true
        }, function(err,result){
        if(err) {
        return res.json({error_code:1,err_desc:err, data: null});
        }
        dbo.collection("marks").insertMany(result,(err,data) => {
        console.log(data);
        res.json({error_code:0,err_desc:null, data:
       data["ops"],"message":"Marks Sheet uploaded successfully"});
        });
       
        });
        } catch (e){
        res.json({error_code:1,err_desc:"Corupted excel file"});
        }
        });

        //reading marks 

        app.get('/readingmarks',(request,response)=>{
            dbo.collection("marks").find().toArray((error,dataArray)=>{
                if(error){
                    console.log("error")
                }
                else{
                    console.log(dataArray)
                    response.send({message:dataArray})
                }
            })
        })

        app.post('/studentmarks',(request,response)=>{
        
            dbo.collection("marks").findOne({studentid:request.body.studentid},(error,success)=>{
                if(error){
                    console.log("error")
                }
                else{
                    response.send({message:success})
                 
                }
            })
        })


        //pdf file downloader

const FileSaver = require('file-saver');


//ids handler
app.get('/ids',(request,response)=>{
    dbo.collection("studentids").find().toArray((error,dataArray)=>{
        if(error){
            console.log("error")
        }
        else{
            response.send({message:dataArray})
        }
    })
})

app.put('/updatinglog',(request,response)=>{
    console.log(request.body)
    dbo.collection("studentrecords").findOne({email:request.body},(error,success)=>{
        if(error){
            console.log("error")
        }
        else{
            response.send({message:success})
            console.log("finded")
        }
    })
})