import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

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
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
