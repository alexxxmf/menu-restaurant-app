import { FormEventHandler, useState } from "react";
import {
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Link,
  FormControl,
  FormHelperText,
  InputRightElement,
  FormErrorMessage,
} from "@chakra-ui/react";
import { FormikValues, useFormik } from "formik";
import { FaUserAlt, FaLock } from "react-icons/fa";
import * as Yup from "yup";

interface FormValues {
  email: string;
  password: string;
}

interface Props {
  onSubmitHandler: (values: FormValues) => void;
}

const loginValidationSchema = Yup.object().shape({
  email: Yup.string().email().required("Required"),
  password: Yup.string().min(16, "Too Short!").required("Required"),
});

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);

const initialValues = {
  email: "",
  password: "",
};

export const LoginForm = ({ onSubmitHandler }: Props) => {
  const [showPassword, setShowPassword] = useState(false);

  console.log("onSubmitHandler", onSubmitHandler);

  const formik = useFormik({
    initialValues,
    onSubmit: (values: FormValues) => {
      values.email;
      alert(JSON.stringify(values, null, 2));
    },
    validationSchema: loginValidationSchema,
  });

  const { submitForm, handleChange, values, errors, resetForm, isSubmitting } =
    formik;

  const handleShowClick = () => setShowPassword(!showPassword);

  return (
    <Box minW={{ base: "90%", md: "468px" }} rounded="md">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmitHandler(values);
          resetForm();
        }}
      >
        <Stack
          spacing={4}
          p="1rem"
          backgroundColor="whiteAlpha.900"
          boxShadow="md"
        >
          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <CFaUserAlt color="gray.300" />
              </InputLeftElement>
              <Input
                type="email"
                name="email"
                placeholder="email address"
                value={values.email}
                onChange={handleChange}
              />
            </InputGroup>
            <FormErrorMessage>{errors.email}</FormErrorMessage>
          </FormControl>

          <FormControl>
            <InputGroup>
              <InputLeftElement pointerEvents="none" color="gray.300">
                <CFaLock color="gray.300" />
              </InputLeftElement>
              <Input
                name="password"
                onChange={handleChange}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={values.password}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleShowClick}>
                  {showPassword ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage>{errors.email}</FormErrorMessage>
            <FormHelperText textAlign="right">
              <Link>forgot password?</Link>
            </FormHelperText>
          </FormControl>

          <Button
            borderRadius="md"
            type="submit"
            variant="solid"
            colorScheme="teal"
            width="full"
            disabled={isSubmitting}
          >
            Login
          </Button>
        </Stack>
      </form>
    </Box>
  );
};
