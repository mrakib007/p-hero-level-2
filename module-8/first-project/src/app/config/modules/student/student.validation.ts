import Joi from 'joi';

 //creating a schema validation using joi
 const userNameValidationSchema = Joi.object({
    firstName: Joi.string()
      .required()
      .max(20)
      .pattern(/^[A-Z][a-z]*$/, { name: 'capitalized' })
      .message('First name should start with a capital letter'),

    middleName: Joi.string().max(20),

    lastName: Joi.string()
      .required()
      .max(20)
      .pattern(/^[A-Za-z]+$/)
      .message('Last name should contain only alphabetic characters'),
  });

  const guardianValidationSchema = Joi.object({
    fatherName: Joi.string().required().max(20),
    fatherOccupation: Joi.string().required(),
    fatherContactNo: Joi.string().required(),
    motherName: Joi.string().required().max(20),
    motherOccupation: Joi.string().required(),
    motherContactNo: Joi.string().required(),
  });

  const localGuardianValidationSchema = Joi.object({
    name: Joi.string().required().max(20),
    occupation: Joi.string().required(),
    contactNo: Joi.string().required(),
    address: Joi.string().required(),
  });

  const studentValidationSchema = Joi.object({
    id: Joi.string().required(),
    name: userNameValidationSchema.required(),
    gender: Joi.string().valid('male', 'female', 'other').required(),
    dateOfBirth: Joi.string(),
    email: Joi.string().email().required(),
    contactNumber: Joi.string().required(),
    emergencyContactNo: Joi.string().required(),
    bloodGroup: Joi.string().valid(
      'A+',
      'A-',
      'B+',
      'B-',
      'AB+',
      'AB-',
      'O+',
      'O-'
    ),
    presentAddress: Joi.string().required(),
    permanentAddress: Joi.string().required(),
    guardian: guardianValidationSchema.required(),
    localGuardian: localGuardianValidationSchema.required(),
    profileImg: Joi.string(),
    isActive: Joi.string().valid('active', 'blocked').default('active'),
  });

export default studentValidationSchema;