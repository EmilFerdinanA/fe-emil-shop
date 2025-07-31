import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function page() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Role</CardTitle>
        <CardDescription>
          Create a role to assign to your account.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="password">Password</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>

      <CardFooter className="flex justify-end gap-2">
        <Button type="submit">Login</Button>
        <Button variant="outline">Login with Google</Button>
      </CardFooter>
    </Card>
  );
}
