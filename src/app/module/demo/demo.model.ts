import bcrypt from 'bcryptjs';
import mongoose, { Schema } from 'mongoose';
import { TDEMO, TDEMOMODEL } from './demo.interface';

const demoSchema: Schema<TDEMO> = new mongoose.Schema(
  {
    title: String,
    description: String,
    password: String,
  },
  { timestamps: true }
);
// pre hook middleware:
demoSchema.pre<TDEMO>('save', async function (next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

//password bcrypt compare checkup:
demoSchema.methods.matchPassword = async function (
  enteredPassword: string
): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password);
};

// methods of instance:
demoSchema.methods.combine = function (): string {
  return `${this.title}: ${this.description}`;
};

// statics method:
demoSchema.statics.findByTitle = async function (title: string): Promise<TDEMO | null> {
  return this.find({ title });
};

//virtual property:
demoSchema.virtual('sliceTitle').get(function () {
  return this.title.slice(0, 15);
});

const Demo = mongoose.model<TDEMO, TDEMOMODEL>('Demo', demoSchema);
export default Demo;
