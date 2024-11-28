import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

interface IUserFormInput {
    email: string;
    password: string;
}

interface IUserFormProps {
    linkText: string;
    onSubmitForm: (data: IUserFormInput) => void;
}

const UserForm = ({ linkText, onSubmitForm }: IUserFormProps) => {
    const { control, handleSubmit } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (
        event: React.MouseEvent<HTMLButtonElement>
    ) => {
        event.preventDefault();
    };

    const onSubmit: SubmitHandler<IUserFormInput> = (data) => {
        console.log(data);
        onSubmitForm(data);
    };

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 24,
                borderRadius: 8,
                backgroundColor: 'beige',
                width: '40%',
                margin: '0 auto',
                marginTop: '24px',
                minWidth: '400px',
            }}
        >
            <Controller
                name="email"
                control={control}
                rules={{ required: true, pattern: /^\S+@\S+$/i }}
                render={({ field }) => (
                    <TextField
                        {...field}
                        id="outlined-error-helper-text"
                        label="Email"
                        fullWidth
                    />
                )}
            />
            <Controller
                name="password"
                control={control}
                rules={{
                    required: true,
                    minLength: {
                        value: 8,
                        message: 'Minimum length is 8',
                    },
                }}
                render={({ field }) => (
                    <FormControl
                        {...field}
                        sx={{ m: 2 }}
                        variant="outlined"
                        fullWidth
                    >
                        <InputLabel htmlFor="outlined-adornment-password">
                            Password
                        </InputLabel>
                        <OutlinedInput
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton
                                        aria-label={
                                            showPassword
                                                ? 'hide the password'
                                                : 'display the password'
                                        }
                                        onClick={handleClickShowPassword}
                                        onMouseDown={handleMouseDownPassword}
                                        onMouseUp={handleMouseUpPassword}
                                        edge="end"
                                    >
                                        {showPassword ? (
                                            <VisibilityOff />
                                        ) : (
                                            <Visibility />
                                        )}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                )}
            />
            <Link
                component="button"
                variant="body2"
                onClick={() => {
                    console.info("I'm a button.");
                }}
            >
                {linkText}
            </Link>
            <Button
                variant="contained"
                type="submit"
                sx={{ marginTop: 3, width: '40%' }}
            >
                Submit
            </Button>
        </form>
    );
};

export default UserForm;
