"use client";

import { Button, TextArea, TextField } from "@radix-ui/themes";

const NewIssuePage = () => {
  return (
    <div className="pl-5 max-w-xl space-y-3">
      <TextField.Root size="2" placeholder="Title" />

      <TextArea placeholder="Description" />

      <Button>Submit new issue</Button>
    </div>
  );
};

export default NewIssuePage;
