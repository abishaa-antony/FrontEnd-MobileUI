var express 				= require('express'),
	app 					= express(),
	partials 				= require('express-partials'),
	bodyParser 				= require("body-parser"),
	mongoose 				= require("mongoose"),
	expressSanitizer 		= require("express-sanitizer"),
	passport 				= require("passport"),
	LocalStrategy 			= require("passport-local"),
    passportLocalMongoose 	= require("passport-local-mongoose"),
	session                 = require("express-session"),
	methodOverride			= require("method-override"),
	User 					= require("./models/User"),
	Note 					= require("./models/Note"),
	UploadedVideo 			= require("./models/UploadedVideo"),
	Course 					= require("./models/Course"),
	flash			 		= require("connect-flash"),
	multer 					= require('multer');

mongoose.connect('mongodb+srv://akshit:bhatia@cluster0.lw0cv.mongodb.net/elearn?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true});

app.use(require("express-session")({
	secret : "Akshit Bhatia",
	resave : false,
	saveUninitialized: false
}));

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use(partials());
app.use(methodOverride("_method"));
app.use(expressSanitizer());
app.set("view engine", "ejs");
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req, res, next){
	res.locals.currentUser = req.user;
	res.locals.error = req.flash("error");
	res.locals.success = req.flash("success");
	next();
});

/* ===================================
	AUTHENTICATION ROUTES START
====================================*/

// app.get("/:role/register", (req,res)=>{
// 	var role = req.params.role;
// 	console.log(role);
// 	res.render("register", {role: role});
// })

app.post("/:role/register",(req,res)=>{
	var role = req.params.role;
	User.find({ $and:[{role : 'institute-admin'},{role: role}], institute : req.body.institute }, function(err, searchuser){
		if(err){
			console.log(err);
		} else {
			if(searchuser.length==0){
				User.register(new User({
					rollno: req.body.rollno,
					department: req.body.department,
					username: req.body.username,
					name: req.body.name,
					role: role,
					course: req.body.course,
					institute: req.body.institute,
				}), req.body.password,(err,user)=>{
				if(err){
					console.log(err);
					res.json({err:err.message,success:false,user:undefined});
				}
				passport.authenticate("local")(req,res,()=>{
					res.json({
						success:true,
						user:req.user,
						msg: `You signed up successfully with username ${req.user.username}`
					});
				});
				});
			} else {
				res.json({msg:"Can't Make account for more than 1 insitute-admins of an institute",success:false,user:undefined});		
			}
		}
	})
})

// app.get("/login", (req,res)=>{
// 	res.render("loginPage");
// })

app.post("/login",passport.authenticate("local",{
	failureRedirect:"/login"
}),(req,res)=>{
	res.json({
	  success:true,
	  msg:`You logged in successfully with username ${req.user.username}`,
	  user:req.user
	});
});

// app.get("/loggedin", (req,res)=>{
// 	if(req.user){
// 		res.send("<button href='/logout'>Hello</button>")
// 	} else{
// 		res.send("<a href='/login'>What?</a>")	
// 	}
// })

app.get("/logout",(req,res)=>{
	console.log("log out user",req.user);
	req.logout();
	res.json({success:true,msg:"You log out successfully!!!",user:undefined});
});

/* ===================================
	AUTHENTICATION ROUTES ENDS
====================================*/


/* ===================================
	CHECK USERS
====================================*/
app.get("/userssss", (req,res)=>{
	User.find({}).then(data=>{
		res.send(data)
	}).catch(err=>{
		console.log(err)
	})
});

app.get("/search-users/:userhandle", (req,res)=>{
	var userhandle = req.params.userhandle;
	User.find({username: userhandle}, function(err, searchuser){
		if(err){
			console.log(err);
		} else {			
			res.send(searchuser);
		}
	});
})


/* ===================================
	INSTITUTE ROUTES STARTS
====================================*/

app.get("/institute-admin-dashboard/:institute/dept", (req,res) =>{
	var institute = req.params.institute;
	User.find({institute : institute, role : "dept-admin"}, function(err, departments){
		if(err){
			console.log(err);
		} else {
			res.send(departments);
		}
	});
});

/* ===================================
	INSTITUTE ROUTES ENDS
====================================*/


/* ===================================
	DEPARTMENT ROUTES STARTS
====================================*/

app.get("/dept-admin-dashboard/:institute/:dept/all", (req,res) =>{
	var institute = req.params.institute;
	var dept = req.params.dept;
	User.find({institute : institute, $or:[ {role : "institute-student"}, {role:"institute-teacher"}], department: dept}, function(err, nonAdmin){
		if(err){
			console.log(err);
		} else {			
			res.send(nonAdmin);
		}
	});
});

app.get("/dept-admin-dashboard/:institute/:dept/teachers", (req,res) =>{
	var institute = req.params.institute;
	var dept = req.params.dept;
	User.find({institute : institute, role:"institute-teacher", department: dept}, function(err, teachers){
		if(err){
			console.log(err);
		} else {			
			res.send(teachers);
		}
	});
});

app.get("/dept-admin-dashboard/:institute/:dept/students", (req,res) =>{
	var institute = req.params.institute;
	var dept = req.params.dept;
	User.find({institute : institute, role : "institute-student", department: dept}, function(err, students){
		if(err){
			console.log(err);
		} else {			
			res.send(students);
		}
	});
});

/* ===================================
	DEPARTMENT ROUTES ENDS
====================================*/


/* ===================================
	COURSE ROUTES STARTS
====================================*/

app.get("/dept-admin-dashboard/:institute/:dept/addcourse", (req,res) =>{
	var dept = req.params.dept;
	var institute = req.params.institute;
	res.render("addcourse", {institute, dept});
});

app.get("/dept-admin-dashboard/:institute/:dept/courses", (req,res)=>{
	var dept = req.params.dept;
	var institute = req.params.institute;
	Course.find({ institute: institute, department: dept}).then(data=>{
		res.send(data);
	}).catch(err=>{
		console.log(err)
	})
});

app.post("/dept-admin-dashboard/:institute/:dept/addcourse", (req,res) =>{
	var course = req.body.course;
	var dept = req.params.dept;
	var institute = req.params.institute;
	var addedBy = req.body.addedBy;
	console.log("here");
	Course.create(new Course({ course: course, department : dept, institute: institute, addedBy:addedBy}),(err,course)=>{
		if(err){
			console.log(err);
		}
		else{
			res.json({
				success:true,
				course: course,
				msg: `You added course successfully with username ${dept}`
			});
		}
	})
});

/* ===================================
	COURSE ROUTES ENDS
====================================*/


/* ===================================
	STUDENT ROUTES STARTS
====================================*/

app.get("/:institute/:dept/:course", (req,res) =>{
	var institute = req.params.institute;
	var dept = req.params.dept;
	var course = req.params.course;
	User.find({institute : institute, role : "institute-student", department: dept, course: course}, function(err, students){
		if(err){
			console.log(err);
		} else {			
			res.send(students);
		}
	});
});

/* ===================================
	STUDENT ROUTES ENDS
====================================*/


/* ===================================
	NOTES ROUTES STARTS
====================================*/

app.get("/:institute/:dept/:course/notes", (req,res) => {
	var institute = req.params.institute;
	var dept = req.params.dept;
	var course = req.params.course;
	Note.find({ institute : institute, department : dept, course: course}, function(err, notes){
		if(err){
			console.log(err);
		} else {
			res.send(notes);
		}
	});
})

app.get("/:institute/:dept/:course/notes/new", (req,res) => {
	var institute = req.params.institute;
	var dept = req.params.dept;
	var course = req.params.course;
	res.render("addnotes", {institute : institute, department : dept, course: course});
})

app.post("/:institute/:dept/:course/notes/new", (req,res) => {
	var institute = req.params.institute;
	var dept = req.params.dept;
	var course = req.params.course;
	Note.create(new Note({
		topicname: req.body.topicname,
		owner: req.body.owner,
		desc: req.body.desc,
		institute: institute,
		department: dept,
		course: course,
		noteUrl: req.body.noteUrl
	}),(err,note)=>{
		if(err){
			console.log(err);
		}
		else{
			res.json({
				success:true,
				note: note,
				msg: `You added note successfully with username`
			});
		}
	})
});

/* ===================================
	NOTES ROUTES ENDS
====================================*/


/* ===================================
	UPLOADED VIDEOS ROUTES STARTS
====================================*/


app.get("/:institute/:dept/:course/videos", (req,res) => {
	var institute = req.params.institute;
	var dept = req.params.dept;
	var course = req.params.course;
	UploadedVideo.find({ institute : institute, department : dept, course: course}, function(err, videos){
		if(err){
			console.log(err);
		} else {
			res.send(videos);
		}
	});
})

app.get("/:institute/:dept/:course/videos/new", (req,res) => {
	var institute = req.params.institute;
	var dept = req.params.dept;
	var course = req.params.course;
	res.render("addvideos", {institute : institute, department : dept, course: course});
})

app.post("/:institute/:dept/:course/videos/new", (req,res) => {
	var institute = req.params.institute;
	var dept = req.params.dept;
	var course = req.params.course;
	UploadedVideo.create(new UploadedVideo({
		topicname: req.body.topicname,
		owner: req.body.owner,
		desc: req.body.desc,
		institute: institute,
		department: dept,
		course: course,
		videoUrl: req.body.videoUrl
	}),(err,note)=>{
		if(err){
			console.log(err);
		}
		else{
			res.json({
				success:true,
				video: video,
				msg: `You added video successfully with username`
			});
		}
	})
});

/* ===================================
	UPLOAD VIDEOS ROUTES ENDS
x====================================*/


app.get("/live/:uniqueid", (req,res)=>{
	res.send("<h1>Here, a unique live session will appear</h1>");
})

app.get("/livetest/:uniqueid", (req,res)=>{
	res.send("<h1>Here, a unique live test will appear</h1>");
})

app.get("*", function(req,res){
	res.send("invalid page");
});

app.listen(process.env.PORT || 5000, process.env.IP, function(){
	console.log("app running");
});