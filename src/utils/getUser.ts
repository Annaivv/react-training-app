import { supabase } from "../supabaseClient";

export const getUser = async () => {
  try {
    const result = await supabase.auth.getSession();

    if (result.data.session) {
      const user = result.data.session.user;
      return user;
    } else {
      console.log("No active session found.");
      return null;
    }
  } catch (error) {
    console.error("An unexpected error occurred:", error);
    return null;
  }
};
