import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudentIntoDB = async (studentData : TStudent) => {
  // const result = await StudentModel.create(student); //built in static method

const student = new Student(studentData);
const result = await student.save(); //built in instance method
  return result;
};
const getAllStudentsFromDb = async () => {
  const result = await Student.find();
  return result;
};

const getSingleStudentFromDb = async (id: string) => {
  const result = await Student.findOne({ id });
  return result;
};

export const StudentServices = {
  createStudentIntoDB,
  getAllStudentsFromDb,
  getSingleStudentFromDb,
};
