import Demo from './demo.model';

export const getService = async () => {
  const result = await Demo.find();
  return result;
};
