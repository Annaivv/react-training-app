import { getUser } from "./getUser";

export const checkUser = async (
  callback: (user: any) => Promise<void>
): Promise<void> => {
  const user = await getUser();
  if (user) {
    await callback(user);
  } else {
    console.log("There is no user");
  }
};
