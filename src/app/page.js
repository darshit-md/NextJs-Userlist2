"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MoreHorizontal } from "lucide-react";

export default function Home() {
  const users = [
    { name: "Karianne", email: "Julianne.OConner@kory.org", role: "Admin", status: "Pending", age: 41 },
    { name: "Chelsey Di", email: "Lucio_Hettinger123@annie.ca", role: "Editor", status: "Pending", age: 48 },
    { name: "Leopoldo_Corkery", email: "Karley_Dach@jasper.info", role: "Viewer", status: "Suspended", age: 20 },
    { name: "Elwyn.Skiles", email: "Telly.Hoeger@billy.biz", role: "Admin", status: "Active", age: 27 },
    { name: "Maxime_Nienow", email: "Sherwood@rosamond.me", role: "Editor", status: "Pending", age: 34 },
    { name: "Delphine", email: "Chaim_McDermott@dana.io", role: "Viewer", status: "Suspended", age: 41 },
    { name: "Moriah.Stanton", email: "Rey.Padberg@karina.biz", role: "Admin", status: "Active", age: 48 },
    { name: "johan", email: "jhone@gmail.com", role: "Viewer", status: "Active", age: 21 },
  ];

  const page=1
  const totalpages=10

  return (
    <div className="w-screen flex items-center justify-center">
      <div className="p-6 w-full max-w-5xl space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Users</h1>
          <div className="space-x-2">
            <Button variant="outline">Activity Log</Button>
            <Button>New User</Button>
          </div>
        </div>

        <Card>

          <CardHeader>
            <div className="flex  flex-wrap items-center justify-between gap-2 mb-4">
              <CardTitle>User List</CardTitle>
                   <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
              
              <Input placeholder="Search name, username, email" className="max-w-sm" />
              <Select>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="All roles" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All roles</SelectItem>
                  <SelectItem value="admin">Admin</SelectItem>
                  <SelectItem value="editor">Editor</SelectItem>
                  <SelectItem value="viewer">Viewer</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-[150px]">
                  <SelectValue placeholder="All status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All status</SelectItem>
                  <SelectItem value="active">Active</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="suspended">Suspended</SelectItem>
                </SelectContent>
              </Select>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-gray-600">User</TableHead>
                  <TableHead className="text-gray-600">Role</TableHead>
                  <TableHead className="text-gray-600">Status</TableHead>
                  <TableHead className="text-gray-600">Age</TableHead>
                  <TableHead className="text-gray-600 text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.map((user, index) => (
                  <TableRow key={index}>
                    <TableCell className="flex items-center gap-2">
                      <Avatar>
                        <AvatarImage src={`https://i.pravatar.cc/150?img=${index + 1}`} alt={user.name} />
                        <AvatarFallback>{user.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">{user.email}</div>
                      </div>
                    </TableCell>
                    <TableCell>{user.role}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          user.status === "Active"
                            ? "default"
                            : user.status === "Pending"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {user.status}
                      </Badge>
                    </TableCell>
                    <TableCell>{user.age}</TableCell>
                    <TableCell className="flex justify-end gap-2">
                      <Button variant="outline" size="sm">Edit</Button>
                      <Button variant="outline" size="sm">Delete</Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

             <div className="mt-4 flex items-center justify-between text-sm text-gray-700">
          <div>
            Page {page} of {totalpages}
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              className="border-gray-300 text-gray-800 bg-transparent"
              disabled={page === 1}
            >
              Prev
            </Button>
            <Button
              variant="outline"
              size="sm"
              className="border-gray-300 text-gray-800 bg-transparent"
            >
              Next
            </Button>
          </div>
        </div>
          </CardContent>

        </Card>
      </div>
    </div>
  );
}
