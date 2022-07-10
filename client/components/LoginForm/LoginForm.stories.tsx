import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Flex, Stack } from "@chakra-ui/react";

import { LoginForm } from "./index";

export default {
  title: "components/LoginForm",
  component: LoginForm,
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <Flex
    flexDirection="column"
    width="100wh"
    height="100vh"
    backgroundColor="gray.200"
    justifyContent="center"
    alignItems="center"
  >
    <Stack flexDir="column" mb="2" justifyContent="center" alignItems="center">
      <LoginForm />
    </Stack>
  </Flex>
);

export const Standard = Template.bind({});
