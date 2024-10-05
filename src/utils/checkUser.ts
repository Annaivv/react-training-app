import { getUser } from "./getUser";

// export const checkUser = async (
//   callback: (user: any) => Promise<void>
// ): Promise<void> => {
//   const user = await getUser();
//   if (user) {
//     await callback(user);
//   } else {
//     console.log("There is no user");
//   }
// };

export const checkUser = async (): Promise<any> => {
  const user = await getUser();
  if (!user) {
    throw new Error("There is no user");
  }
  return user;
};
