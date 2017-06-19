 courseNotification: function(courses){
        var ref = firebase.database().ref();
        for(var j=0; j < courses.length;j++){
            var  course = ref.child('courses/'+courses[j]);
            course.orderByChild('time').on('value',function(data){
            var key =  Object.keys(data.val());
            for(var i =0; i < key.length; i++)
                console.log(data.val()[key[i]]['message']);
            })
        }         
    },

    sendMailToRegisteredUsersInCourse:function(){
        //get the user uid and check user databse to fetch their email id and store it in a array and pass it to  nodemailer
        this.userUid = [];
        var ref = firebase.database().ref();
        var userRef = ref.child('enrolled/courses');
        userRef.orderByChild('courseid').equalTo('111').on('value',function(data){
            console.log(data.val());
        })
    },

    //=>checked
    // registerUserInCourse:function(){
    //     var ref = firebase.database().ref("/enrolled");
    //     var currentUserUid = (firebase.auth().currentUser.uid).toString();
    //     ref.child(currentUserUid+'/courses').push().set({
    //         courseid:'111'
    //     })
    // },

    //=>checked
    //     addCourse:function(addCourseId){
    //     var ref = firebase.database().ref();
    //     var allCourse = ref.child('allcourse/');
    //     allCourse.child('222').update({
    //         description: 'this is c++',
    //         fees: '5001',
    //         name: 'C++',
    //         trainer: 'Nikesh',
    //         syllabus: 'everything',
    //         //faq: " "
    //         active:'true'
    //     });
    // },

    //=>checked
    // callback: function(data){
    //     console.log(data);
    // },

    userEnrolledCourse: function(){
        var _this =this;
        var currentUserUid = (firebase.auth().currentUser.uid).toString();
        var ref = firebase.database().ref();
        var userRef = ref.child('enrolled/'+currentUserUid+'/courses/');
        _this.userEnrolledCourse = [];
        userRef.on('value',function(data){
            var keys = Object.keys(data.val());
            keys.map(function(val){
                _this.userEnrolledCourse.push(data.val()[val]['courseid']);
            })
            // _this.callback(userEnrolledCourse);
            console.log(_this.userEnrolledCourse);
         });
    },
    
//     noOfUserinCourse: function(){



//         console.log('hell');
//         var _this = this;
//         var ref = firebase.database().ref();
//         var userRef = ref.child('enrolled');
//         userRef.on('value',function(data){
//           var keys = Object.keys(data.val());
//           console.log(keys);
//           var count =0;
//           for(var i=0;i<keys.length;i++){
//             var coursesEnrolled = data.val()[keys[i]]['course'];
//             var courses = coursesEnrolled.split(';');
//             for(var j=0;j<=courses.length;j++)
//             {   
//                 if(courses[j]=='course1')
//                 {
//                     console.log(1,"this is the uid of user:" + keys[i],"j:"+j,"i:"+i);
//                     count++;
//                 }
//             }
//             console.log(courses);
//           }
//            console.log(count);
//          });
// },

    //  faq:function(){
    //      console.log('QnA');
    //     var ref = firebase.database().ref();
    //     var Qref = ref.child('questions');
    //     Qref.on('value',function(data){
    //         var data = data.val();
    //         var questions = data.question;
    //         var answer = questions.answer;
    //         console.log(questions,answer);
    //     })
    //  },


displayAllCourse:function(){
        var ref = firebase.database().ref();
        var allCourse = ref.child('allcourse/');
        allCourse.on('value',function(data){
            var key = Object.keys(data.val());
            for(var i=0; i < key.length; i++){
                console.log(data.val()[key[i]]['fees']);
            }
        })
    },

    modifyCourse:function(modifyCourseId){
        var ref = firebase.database().ref();
        var allCourse = ref.child('allcourse/'+ modifyCourseId);
        allCourse.update({
            fees: 5001,
            description: 'Algo/Data Structure time'            
        });
    },

    deleteCourse:function(deleteCourseId){
        var ref = firebase.database().ref();
        var allCourse = ref.child('allcourse/'+deleteCourseId );
        allCourse.remove();
    },

    addCourse:function(addCourseId){
        var ref = firebase.database().ref();
        var allCourse = ref.child('allcourse/');
        var newcourse = allCourse.push().setValue(id3);
        newcourse.update({
            description: "Algo time",
            fees: 1001,
            name: "Data Structure",
            trainer: "Himanshu"
        });
    },
