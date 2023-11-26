import { Schema, model } from 'mongoose';
import {
  Student,
  LocalGuardian,
  UserName,
  Guardian,
} from './student.interface';

const userNameSchema = new Schema<UserName>({
  firstName: {
    type: String,
    required: [true,'First name is required'],
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
    required: [true,'Last name is required'],
  },
});

const guardianSchema = new Schema<Guardian>({
  fatherName: {
    type: String,
    required: [true,'Father name is required'],
  },
  fatherOccupation: {
    type: String,
    required: [true,'Father occupation is required'],
  },
  fatherContactNo: {
    type: String,
    required: [true,'Contact no is required'],
  },
  motherName: {
    type: String,
    required: [true,'Mother name is required'],
  },
  motherOccupation: {
    type: String,
    required: [true,'Mother occupation is required'],
  },
  motherContactNo: {
    type: String,
    required: [true,'Contact no is required'],
  },
});

const localGuardianSchema = new Schema<LocalGuardian>({
  name: {
    type: String,
    require: [true,'Name is required'],
  },
  occupation: {
    type: String,
    require: [true,'Occupation no is required'],
  },
  contactNo: {
    type: String,
    require: [true,'Contact no is required'],
  },
  address: {
    type: String,
    require: [true,'Address is required'],
  },
});

const studentSchema = new Schema<Student>({
  id: { type: String , required: true, unique: true},
  name: {
    type: userNameSchema,
    required: [true,'Name is required'],
  },
  gender: {
    type: String,
    enum: {
      values:  ['male', 'female'],
      message: "{VALUE} is not valid",
    },
    required:  [true,'Name is required'],
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    unique: true,
    required:  [true,'Email is required'],
  },
  contactNumber: {
    type: String,
    required:  [true,'Contact no is required'],
  },
  emergencyContactNo: {
    type: String,
    required:  [true,'Emergency contact no is required'],
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: {
    type: String,
    required:  [true,'Present address is required'],
  },
  permanentAddress: {
    type: String,
    required:  [true,'Permanent address is required'],
  },
  guardian: {
    type: guardianSchema,
    required:  [true,'Guardian is required'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required:  [true,'Local Guardian is required'],
  },
  profileImg: {
    type: String,
  },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  }
});

export const StudentModel = model<Student>('Student', studentSchema);
