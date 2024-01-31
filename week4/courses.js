// courses.js

//Activity 1

const aCourse = {
  code: "CSE121b",
  name: "Javascript Language",
  sections: [
    {
      sectionNum: 1,
      roomNum: "STC 353",
      enrolled: 26,
      days: "TTh",
      instructor: "Bro T",
    },
    {
      sectionNum: 2,
      roomNum: "STC 347",
      enrolled: 28,
      days: "TTh",
      instructor: "Sis A",
    },
  ],
  enrollStudent: function (sectionNum) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled++;
      renderSections(this.sections);
    }
  },
  dropStudent: function (sectionNum) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (sectionIndex >= 0) {
      this.sections[sectionIndex].enrolled--;
      renderSections(this.sections);
    }
  },

  student: function (sectionNum, option) {
    const sectionIndex = this.sections.findIndex(
      (section) => section.sectionNum == sectionNum
    );
    if (option == "enrollement") {
      this.sections[sectionIndex].enrolled++;
    } else if (option == "drop") {
      this.sections[sectionIndex].enrolled--;
    }
    renderSections(this.sections);
  },
};

function setHTML(course) {
  document.getElementById("courseName").innerHTML = course.name;
  document.getElementById("courseCode").innerHTML = course.code;
}

setHTML(aCourse);

function renderSections(sec) {
  document.getElementById("sections").innerHTML = sec
    .map(
      (section) =>
        `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
    )
    .join("");
}

renderSections(aCourse.sections);

document.getElementById("enrollStudent").addEventListener("click", function () {
  const section = document.getElementById("sectionNumber").value;
  console.log(section);
  //aCourse.enrollStudent(section);
  aCourse.student(section, "enrollement");
});

document.getElementById("dropStudent").addEventListener("click", function () {
  const section = document.getElementById("sectionNumber").value;
  //aCourse.dropStudent(section);
  aCourse.student(section, "drop");
});
