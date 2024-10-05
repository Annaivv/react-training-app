import * as React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { supabase } from "../supabaseClient";
import { Session } from "@supabase/supabase-js";
import Account from "../Pages/Account";

interface IFormInputs {
  email: string;
  password: string;
}

interface AuthrProps {
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Auth = ({ setIsRegistered }: AuthrProps) => {
  const [session, setSession] = React.useState<Session | null>(null);

  React.useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  const { handleSubmit, control } = useForm<IFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);

  async function signInWithEmail(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    const {
      data: { user },
    } = await supabase.auth.getUser();

    let userData = user;

    if (error) {
      console.log(error.message);
      return;
    } else {
      console.log("Data: ", data);
      console.log("User: ", userData);
      return data;
    }
  }

  const onSubmit: SubmitHandler<IFormInputs> = ({ email, password }) => {
    signInWithEmail(email, password);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div>
      {!session ? (
        <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
          <Controller
            name="email"
            control={control}
            rules={{
              required: "This field is required",
              maxLength: 100,
            }}
            render={({ field }) => (
              <TextField {...field} label="Email" autoFocus />
            )}
          />
          <Controller
            name="password"
            control={control}
            rules={{
              required: "This field is required",
            }}
            render={({ field }) => (
              <FormControl {...field} fullWidth variant="outlined">
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            )}
          />
          <Button onClick={() => setIsRegistered(false)}>
            <Link sx={{ textAlign: "center" }}>
              No account yet? Register here
            </Link>
          </Button>

          <Button type="submit" variant="contained" color="primary">
            Sign in
          </Button>
        </form>
      ) : (
        <Account key={session.user.id} session={session} />
      )}
    </div>
  );
};

// import * as React from "react";
// import { supabase } from "../supabaseClient";

// export default function Auth() {
//   const [loading, setLoading] = React.useState(false);
//   const [email, setEmail] = React.useState("");

//   const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
//     event.preventDefault();

//     setLoading(true);
//     const { error } = await supabase.auth.signInWithOtp({ email });

//     if (error) {
//       alert(error.message);
//     } else {
//       alert("Check your email for the login link!");
//     }
//     setLoading(false);
//   };

//   return (
//     <div className="row flex flex-center">
//       <div className="col-6 form-widget">
//         <h1 className="header">Supabase + React</h1>
//         <p className="description">
//           Sign in via magic link with your email below
//         </p>
//         <form className="form-widget" onSubmit={handleLogin}>
//           <div>
//             <input
//               className="inputField"
//               type="email"
//               placeholder="Your email"
//               value={email}
//               required={true}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div>
//             <button className={"button block"} disabled={loading}>
//               {loading ? <span>Loading</span> : <span>Send magic link</span>}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }
