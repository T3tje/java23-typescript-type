
import Blog from "./Blog.tsx"
import './App.css'

function App() {


    type Grade = number | "A" | "B" | "C" | "D" | "E" | "F" | undefined
    type NewArrayGrade = number | "A" | "B" | "C" | "D" | "E" | "F" | "*"
    type Student = {
        name: string,
        lastname: string,
        age: number,
        grades: Grade[]
    }

    type StudentList = Student[];
    const writeStudent = (student: Student): void => {
        const newArray: NewArrayGrade[] = [];

        student.grades.forEach(grade => {
            if (grade === undefined) {
                newArray.push("*");
            } else {
                newArray.push(grade);
            }
        });

        console.log(student.name, " ", student.lastname, " (", student.age,")");
        console.log("==============================");
        console.log("Grades: ", newArray.join(","));
        console.log("  ")
    };

    const student1:Student = {
        name: "Hans",
        lastname: "Meier",
        age: 15,
        grades: [1,2,3,4,5,"A", undefined]
    }

    const student2:Student = {
        name: "Annelise",
        lastname: "Müller",
        age: 144,
        grades: [1,2,3,4,5,"A", undefined]
    }

    writeStudent(student1)

    const studentList1:StudentList = []

    studentList1.push(student1, student2)

    const listAllStudents = (studentList:StudentList):void => {
        studentList.map(student => writeStudent(student))
    }

    listAllStudents(studentList1)

  return (
    <>
      <Blog/>
    </>
  )
}

export default App
