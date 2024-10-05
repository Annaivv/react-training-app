import * as React from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { supabase } from "../supabaseClient";
import {
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { AuthFormInputs } from "../interfaces/authInterfaces";

interface RegisterProps {
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Register = ({ setIsRegistered }: RegisterProps) => {
  const { handleSubmit, control } = useForm<AuthFormInputs>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = React.useState(false);

  const signUp = async (email: string, password: string) => {
    try {
      let { data, error } = await supabase.auth.signUp({ email, password });
      if (error) {
        throw new Error(error.message);
      } else {
        setIsRegistered(true);
        console.log("Successfully registered user!!");
        return data;
      }
    } catch (error) {
      const errorMessage = (error as Error).message;
      if (!errorMessage.includes("Email rate limit exceeded")) {
        console.log(errorMessage);
      } else {
        console.log("Limit exceeded message");
      }

      return null;
    }
  };

  const onSubmit: SubmitHandler<AuthFormInputs> = ({ email, password }) => {
    signUp(email, password);
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
        <Controller
          name="email"
          control={control}
          rules={{ required: "This field is required", maxLength: 100 }}
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
        <Button type="submit" variant="contained" color="primary">
          Register
        </Button>
      </form>
    </div>
  );
};
