import { JSX } from "react";

// src/components/UserList.tsx
export interface User {
    id: number;
    name: string;
    email: string;
  }
  
  interface UserListProps {
    users: User[];
  }
  
  export default function UserList({ users }: UserListProps): JSX.Element {
    return (
      <div className="border rounded-lg p-4">
        <h3 className="text-lg font-semibold mb-2">User List</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id} className="border-b py-2">
              <span className="font-medium">{user.name}</span> - {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  