import { Schema, model } from 'mongoose';
import validator from 'validator';
import {
  TStudent,
  TLocalGuardian,
  TUserName,
  TGuardian,
  StudentModel,
  StudentMethods,
} from './student.interface';
import bcrypt from 'bcrypt';
import config from '../..';

const userNameSchema = new Schema<TUserName>({
  firstName: {
    type: String,
    required: [true, 'First name is required'],
    trim: true,
    maxlength: [20, 'First Name can not have allowed more than 20 characters'],
    // validate: {
    //   validator: function (value : string){
    //     const firstNameStr = value.charAt(0).toUpperCase() + value.slice(1);
    //     return firstNameStr === value;
    //   },
    //   message: '{VALUE} is not in capitalized format'
    // }
  },
  middleName: {
    type: String,
    trim: true,
    maxlength: 20,
  },
  lastName: {
    type: String,
    required: [true, 'Last name is required'],
    // validate: {
    //   validator: (value : string) => validator.isAlpha(value),
    //   message: '{VALUE} is not valid',
    // },
    trim: true,
    maxlength: 20,
  },
});

const guardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: [true, 'Father name is required'],
    trim: true,
    maxlength: 20,
  },
  fatherOccupation: {
    type: String,
    required: [true, 'Father occupation is required'],
  },
  fatherContactNo: {
    type: String,
    required: [true, 'Contact no is required'],
  },
  motherName: {
    type: String,
    required: [true, 'Mother name is required'],
    maxlength: 20,
    trim: true,
  },
  motherOccupation: {
    type: String,
    required: [true, 'Mother occupation is required'],
  },
  motherContactNo: {
    type: String,
    required: [true, 'Contact no is required'],
  },
});

const localGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    require: [true, 'Name is required'],
    maxlength: 20,
  },
  occupation: {
    type: String,
    require: [true, 'Occupation no is required'],
  },
  contactNo: {
    type: String,
    require: [true, 'Contact no is required'],
  },
  address: {
    type: String,
    require: [true, 'Address is required'],
  },
});

// const studentSchema = new Schema<TStudent, StudentModel, StudentMethods>({
const studentSchema = new Schema<TStudent, StudentModel>({
  id: {
    type: String,
    required: [true, 'Password is required'],
    maxlength: [20, 'Password can not be more than 20 characters'],
    unique: true,
  },
  password: { type: String, required: true },
  name: {
    type: userNameSchema,
    required: [true, 'Name is required'],
  },
  gender: {
    type: String,
    enum: {
      values: ['male', 'female', 'other'],
      message: '{VALUE} is not valid',
    },
    required: [true, 'Name is required'],
  },
  dateOfBirth: { type: String },
  email: {
    type: String,
    unique: true,
    required: [true, 'Email is required'],
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: '{VALUE} is not valid email',
    },
  },
  contactNumber: {
    type: String,
    required: [true, 'Contact no is required'],
  },
  emergencyContactNo: {
    type: String,
    required: [true, 'Emergency contact no is required'],
  },
  bloodGroup: {
    type: String,
    enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
  },
  presentAddress: {
    type: String,
    required: [true, 'Present address is required'],
  },
  permanentAddress: {
    type: String,
    required: [true, 'Permanent address is required'],
  },
  guardian: {
    type: guardianSchema,
    required: [true, 'Guardian is required'],
  },
  localGuardian: {
    type: localGuardianSchema,
    required: [true, 'Local Guardian is required'],
  },
  profileImg: {
    type: String,
  },
  isActive: {
    type: String,
    enum: ['active', 'blocked'],
    default: 'active',
  },
  isDeleted: {
    type: Boolean,
    default: false,
  }
},{
  toJSON:{
    virtuals:true
  }
});

//virtual
studentSchema.virtual('fullName').get(function() {
  return (
    `${this.name.firstName} ${this.name.middleName}`
  );
});

//pre save middleware/hook : will work on create() save()
studentSchema.pre('save', async function (next) {
  // console.log(this,'pre hook : we will save the data');
  // eslint-disable-next-line @typescript-eslint/no-this-alias
  const user = this; //document
  //hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_round),
  );
  next();
});

//post save middleware/hook
studentSchema.post('save', function (doc, next) {
  doc.password = '';
  // console.log(this, 'post hook : we save our data');

  next();
});

//query middleware
studentSchema.pre('find', function (next) {
  this.find({
    isDeleted: { $ne: true }
  });
  next();
})

studentSchema.pre('findOne', function (next) {
  this.find({
    isDeleted: { $ne: true }
  });
  next();
})

studentSchema.pre('aggregate', function (next) {
  this.pipeline().unshift({ $match: { isDeleted: { $ne: true } } })
  next();
})

//creating a custom static method
studentSchema.statics.isUserExists = async function (id: string) {
  const existingUser = await Student.findOne({ id });
  return existingUser;
};

//creating a custom instance method

// studentSchema.methods.isUserExists = async function (id: string) {
//   const existingUser = Student.findOne({ id: id });
//   return existingUser;
// };

export const Student = model<TStudent, StudentModel>('Student', studentSchema);
