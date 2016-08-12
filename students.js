function Student (first,last, courses = []) {
  this.first = first;
  this.last = last;
  this.courses = courses;
}

Student.prototype.courseLoad = function () {
  let allCourses = {};
  this.courses.forEach( (course) => {
    allCourses[course.department] = course.credits;
  });
  return allCourses;
};

Student.prototype.enroll = function(course) {
  if (this.courses.indexOf(course) ===  -1) {
    this.courses.push(course);
    course.addStudent(this);
  }
};


function Course (name,department,credits,students=[]) {
  this.name = name;
  this.department = department;
  this.credits = credits;
  this.students = students;
}

Course.prototype.addStudent = function (student) {
  if (this.students.indexOf(student)  === -1) {
    this.students.push(student);
  }
};

j = new Student("J", "Jo")
me = new Student("Me","You")

js = new Course("Javascript", "CS", "4")
j.enroll(js)
me.enroll(js)

console.log(js.students)
console.log(j.courseLoad())
