import { z } from 'zod';

const demoZodSchema = z.object({
  title: z.string({ message: 'title must be needed!' }),
  description: z.string({ message: 'description must be needed!' }),
  password: z.string({ message: 'password must be needed!' }),
  sliceTitle: z.string().optional(),
});

export default demoZodSchema;
