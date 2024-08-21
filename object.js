var user = {
    firstname:"Vinay",
    courseList:[],
    buyCourse: function buyCourse(courseName){
        this.courseList.push(courseName);
    },
    getCourse: function buyCourse(courseName){
      return  this.courseList.length;
    }

}

user.buyCourse('React');
user.buyCourse('React');
user.buyCourse('React');
console.log(user.getCourse());

