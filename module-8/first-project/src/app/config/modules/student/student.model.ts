import {Schema,model,connect} from 'mongoose';
import { Student, LocalGuardian } from './student.interface';

const studntSchema = new Schema<Student>({
    id: {type: String},
    name: {
        firstName:{
            type: String,
            required:true,
        },
        middleName:{
            type: String,
        },
        lastName: {
            type: String,
            required: true,
        }
    },
    gender: ["male","female"],
    dateOfBirth: {type: String},
    email:{
        type: String,
        required: true,
    },
    contactNumber: {
        type: String,
        required: true,
    },
    emergencyContactNo: {
        type: String,
        required: true,
    },
    bloodGroup: ['A+' , 'A-' , 'B+' , 'B-' , 'AB+' , 'AB-' , 'O+' , 'O-'],
    presentAddress:{
        type: String,
        required: true
    },
    permanentAddress: {
        type: String,
        required: true
    },
    guardian: {
        fatherName:{
            type: String,
            required: true,
        },
        fatherOccupation:{
            type: String,
            required: true,
        },
        fatherContactNo:{
            type: String,
            required: true,
        },
        motherName:{
            type: String,
            required: true,
        },
        motherOccupation:{
            type: String,
            required: true,
        },
        motherContactNo:{
            type: String,
            required: true,
        }
    },
    localGuardian: {
        name: {
            type: String,
            require: true,
        },
        occupation: {
            type: String,
            require: true,
        },
        contactNo: {
            type: String,
            require: true,
        },
        address:{
            type: String,
            require: true,
        }
    },
    profileImg: {
        type: String,
    },
    isActive: ['active','blocked'],
});