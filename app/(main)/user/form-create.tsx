"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus } from "lucide-react";
import { useState } from "react";

export function DialogDemo() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={() => setOpen((prev) => !prev)}>
      <form className="ml-auto">
        <DialogTrigger asChild>
          <Button variant="outline">
            {" "}
            Create <Plus />
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Create User</DialogTitle>
            <DialogDescription>
              Create user here. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="flex gap-2">
              <div className="grid gap-3">
                <Label htmlFor="username-1">Username</Label>
                <Input
                  id="username-1"
                  name="username"
                  placeholder="Emil_f.a11"
                />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="name-1">Email</Label>
                <Input
                  id="name-1"
                  name="name"
                  placeholder="example@yourmail.com"
                />
              </div>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Password</Label>
              <Input id="name-1" name="name" placeholder="P@ssword" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name-1">Role</Label>
              <Input id="name-1" name="name" placeholder="manager" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
