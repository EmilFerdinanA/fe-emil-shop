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
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

export default function page() {
  const tags = Array.from({ length: 50 }).map(
    (_, i, a) => `v1.2.0-beta.${a.length - i}`
  );

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

          <Card className="mt-6 w-1/2">
            <CardContent className="flex justify-around">
              <div>
                <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
                <Input
                  // value={query}
                  placeholder="Filter names..."
                  // onChange={(event) => setQuery(event.target.value)}
                  className="max-w-sm"
                />
                <ScrollArea className="h-72 w-full rounded-md border">
                  <div className="p-4">
                    {tags.map((tag) => (
                      <React.Fragment key={tag}>
                        <div className="text-sm">{tag}</div>
                        <Separator className="my-2" />
                      </React.Fragment>
                    ))}
                  </div>
                </ScrollArea>
              </div>

              <div>
                <h4 className="mb-4 text-sm leading-none font-medium">Tags</h4>
                <ScrollArea className="h-72 w-48 rounded-md border">
                  <div className="p-4">
                    {["emil"].map((tag) => (
                      <React.Fragment key={tag}>
                        <div className="text-sm">{tag}</div>
                        <Separator className="my-2" />
                      </React.Fragment>
                    ))}
                  </div>
                </ScrollArea>
              </div>
            </CardContent>
          </Card>
        </form>
      </CardContent>

      <CardFooter className="flex justify-end gap-2">
        <Button type="submit">Login</Button>
        <Button variant="outline">Login with Google</Button>
      </CardFooter>
    </Card>
  );
}
